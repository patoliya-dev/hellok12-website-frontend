/* eslint-disable @typescript-eslint/no-explicit-any */
// api.ts
import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { getAccessToken, setAccessToken, clearAuthStorage } from "./storage";

// Base URL from env
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://dev-api.hellok12.com/api/v1";

/**
 * List of endpoints to exclude from triggering token refresh logic.
 * Add any other auth-related endpoints here to prevent refresh in those calls.
 */
const EXCLUDED_URLS_FOR_REFRESH = ["/auth/login", "/auth/refresh-token"];

/**
 * Extended axios request config with custom properties
 */
interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
  skipRefresh?: boolean;
}

/**
 * Interface for queued promise resolvers/rejecters
 */
interface QueueItem {
  resolve: (token: string) => void;
  reject: (error: any) => void;
}

/**
 * Interface for refresh token API response
 */
interface RefreshTokenResponse {
  accessToken: string;
}

/**
 * Axios instance for API calls with token refresh handling.
 */
const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // for httpOnly cookie refresh token
  headers: { "Content-Type": "application/json" },
});

/**
 * Attach access token to request headers
 */
api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

/**
 * Queue for pending requests while refreshing token
 */
let isRefreshing = false;
let failedQueue: QueueItem[] = [];

const processQueue = (error: any = null, token: string | null = null): void => {
  failedQueue.forEach((prom) => {
    if (error) prom.reject(error);
    else prom.resolve(token!);
  });
  failedQueue = [];
};

/**
 * Response interceptor: handle 401 errors and attempt token refresh
 */
api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as CustomAxiosRequestConfig;

    if (!originalRequest) return Promise.reject(error);

    // Check for skipRefresh flag in request config
    if (originalRequest.skipRefresh) {
      return Promise.reject(error);
    }

    // Exclude requests to certain URLs (like login, refresh) from refresh logic
    if (
      EXCLUDED_URLS_FOR_REFRESH.some((url) =>
        originalRequest.url?.includes(url)
      )
    ) {
      return Promise.reject(error);
    }

    // Handle 401 Unauthorized for retry logic and refresh flow
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        // Queue requests while refresh is in progress
        return new Promise<string>((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return api(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const refreshResponse = await axios.post<RefreshTokenResponse>(
          `${API_BASE_URL}/auth/refresh-token`,
          {},
          { withCredentials: true }
        );
        const newToken = refreshResponse.data?.accessToken;
        if (!newToken) {
          throw new Error("No access token in refresh response");
        }
        setAccessToken(newToken);
        api.defaults.headers.Authorization = `Bearer ${newToken}`;
        processQueue(null, newToken);
        return api(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        clearAuthStorage();
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default api;
