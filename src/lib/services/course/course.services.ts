/* eslint-disable @typescript-eslint/no-explicit-any */
import { errorToast } from "../../utils/utils";
import api from "../../utils/axiosInstance";

export const getCourseDetails = async (id: string) => {
  try {
    const response = await api.get(`/courses/${id}/details`);
    return response.data;
  } catch (error: any) {
    errorToast(error.response?.data || error.message);
    throw error;
  }
};

export const getFeedbacks = async (id: string, filters: any) => {
  try {
    const response = await api.get(
      `/courses/${id}/feedbacks?${new URLSearchParams(filters)}`
    );
    return response.data;
  } catch (error: any) {
    errorToast(error.response?.data || error.message);
    throw error;
  }
};
