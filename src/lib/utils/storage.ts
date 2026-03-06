// small helper to centralize localStorage usage
const ACCESS_TOKEN_KEY = "accessToken";
const CURRENT_USER_KEY = "currentUser";

// token helpers
export const setAccessToken = (token: string) => {
  if (token) localStorage.setItem(ACCESS_TOKEN_KEY, token);
  else localStorage.removeItem(ACCESS_TOKEN_KEY);
};

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN_KEY);

export const clearAuthStorage = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(CURRENT_USER_KEY);
};
