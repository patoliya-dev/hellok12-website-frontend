/* eslint-disable @typescript-eslint/no-explicit-any */
import ISO6391 from "iso-639-1";
import { toast } from "react-toastify";

export const buildQueryParams = (
  filters: any,
  pagination: { limit: string; offset: string }
) => {
  const params = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (value === "" || value === undefined || value === null) return;

    // Handle arrays (like price)
    if (Array.isArray(value)) {
      params.append(key, JSON.stringify(value));
    } else {
      params.append(key, value as string);
    }
  });

  // Pagination
  params.append("limit", pagination.limit);
  params.append("offset", pagination.offset);

  return params.toString();
};

export const getLanguageName = (code: string) => {
  return ISO6391.getName(code);
};

export const languageOptions = ISO6391.getAllCodes().map((code) => ({
  value: code,
  label: ISO6391.getName(code),
}));

export const successToast = (message: string) => {
  toast.success(message, {
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

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
    (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (diffInDays === 0) return "Today";
  if (diffInDays === 1) return "1 day ago";
  if (diffInDays < 7) return `${diffInDays} days ago`;
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
  if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} months ago`;
  return `${Math.floor(diffInDays / 365)} years ago`;
};
