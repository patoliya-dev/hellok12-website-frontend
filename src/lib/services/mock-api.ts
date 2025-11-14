import {
  getAllClasses,
  getAllReviews,
  getTeacherWithClasses,
  getTeacherWithReviews,
  getClassWithTeacher,
  getClassWithReviews,
} from "./teacher-service";

// Simulate API delay
const delay = (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms));

export const mockApi = {
  // // Teachers
  // async getTeachers() {
  //   await delay()
  //   return getAllTeachers()
  // },

  async getTeacherById(id: string) {
    await delay();
    return getTeacherWithClasses(id);
  },

  async getTeacherReviews(teacherId: string) {
    await delay();
    return getTeacherWithReviews(teacherId);
  },

  // Classes
  async getClasses() {
    await delay();
    return getAllClasses();
  },

  async getClassById(id: string) {
    await delay();
    return getClassWithTeacher(id);
  },

  async getClassReviews(classId: string) {
    await delay();
    return getClassWithReviews(classId);
  },

  // Reviews
  async getReviews() {
    await delay();
    return getAllReviews();
  },
};
