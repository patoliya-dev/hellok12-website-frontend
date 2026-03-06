/* eslint-disable @typescript-eslint/no-explicit-any */
import { mockTeachers, mockClasses, mockReviews } from "@/lib/mock-data";
import type {
  Teacher,
  Class,
  Review,
  TeacherWithClasses,
  TeacherWithReviews,
  ClassWithTeacher,
  ClassWithReviews,
} from "@/lib/types";
import api from "../utils/axiosInstance";
import { buildQueryParams, errorToast } from "../utils/utils";

// Teacher-related queries
export function getTeacherById(id: string): Teacher | undefined {
  return mockTeachers.find((teacher) => teacher.id === id);
}

// Class-related queries
export function getClassById(id: string): Class | undefined {
  return mockClasses.find((cls) => cls.id === id);
}

// Combined queries
export async function getAllTeachers(filters: any, pagination: any) {
  try {
    const queryString = buildQueryParams(filters, pagination);
    const response = await api.get(`/find-teacher?${queryString}`);
    return response.data; // { success, data, count, nextOffset }
  } catch (error: any) {
    errorToast(error.response?.data || error.message);
    throw error;
  }
}

export async function fetchTeacherSchools() {
  try {
    const response = await api.get("/find-teacher/schools");
    return response.data;
  } catch (error: any) {
    errorToast(error.response?.data || error.message);
    throw error;
  }
}

export const fetchDetails = async (teacherId: string) => {
  try {
    const response = await api.get(`/find-teacher/${teacherId}`);
    return response.data;
  } catch (error: any) {
    errorToast(error.response?.data || error.message);
    throw error;
  }
};

export function parseAvailabilityValue(
  availability?: string,
): { startDate: Date; endDate: Date } | null {
  if (!availability) return null;

  const parts = availability.split(",");
  if (parts.length === 1) {
    return {
      startDate: new Date(parts[0]),
      endDate: new Date(parts[0]),
    };
  }

  if (parts.length === 2) {
    return {
      startDate: new Date(parts[0]),
      endDate: new Date(parts[1]),
    };
  }

  return null;
}
