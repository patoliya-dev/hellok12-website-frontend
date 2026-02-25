/* eslint-disable @typescript-eslint/no-explicit-any */
import ISO6391 from "iso-639-1";
import { toast } from "react-toastify";

export const buildQueryParams = (
  filters: any,
  pagination: { limit: string | number; offset: string | number },
) => {
  const params = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (value === "" || value === undefined || value === null) return;

    if (Array.isArray(value)) {
      if (value.length === 0) return;
      params.append(key, JSON.stringify(value));
    } else if (typeof value === "boolean") {
      params.append(key, String(value));
    } else {
      params.append(key, value as string);
    }
  });

  // Pagination
  params.append("limit", String(pagination.limit));
  params.append("offset", String(pagination.offset));

  return params.toString();
};

export const getLanguageName = (code: string) => {
  return ISO6391.getName(code);
};

export const languageOptions = ISO6391.getAllCodes().map((code) => ({
  value: code,
  label: ISO6391.getName(code),
}));

export const errorToast = (message = "Something went wrong") => {
  toast.error(message, {
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const getTimeAgo = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInDays = Math.floor(
    (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24),
  );

  if (diffInDays === 0) return "Today";
  if (diffInDays === 1) return "1 day ago";
  if (diffInDays < 7) return `${diffInDays} days ago`;
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
  if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} months ago`;
  return `${Math.floor(diffInDays / 365)} years ago`;
};
