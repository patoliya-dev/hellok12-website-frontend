import { mockTeachers, mockClasses, mockReviews } from "@/lib/mock-data"
import type {
  Teacher,
  Class,
  Review,
  TeacherWithClasses,
  TeacherWithReviews,
  ClassWithTeacher,
  ClassWithReviews,
} from "@/lib/types"

// Teacher-related queries
export function getTeacherById(id: string): Teacher | undefined {
  return mockTeachers.find((teacher) => teacher.id === id)
}

export function getTeacherWithClasses(teacherId: string): TeacherWithClasses | undefined {
  const teacher = getTeacherById(teacherId)
  if (!teacher) return undefined

  const classes = mockClasses.filter((cls) => cls.teacherId === teacherId)
  return { ...teacher, classes }
}

export function getTeacherWithReviews(teacherId: string): TeacherWithReviews | undefined {
  const teacher = getTeacherById(teacherId)
  if (!teacher) return undefined

  const reviews = mockReviews.filter((review) => review.teacherId === teacherId)
  return { ...teacher, reviews }
}

// Class-related queries
export function getClassById(id: string): Class | undefined {
  return mockClasses.find((cls) => cls.id === id)
}

export function getClassWithTeacher(classId: string): ClassWithTeacher | undefined {
  const classData = getClassById(classId)
  if (!classData) return undefined

  const teacher = getTeacherById(classData.teacherId)
  if (!teacher) return undefined

  return { ...classData, teacher }
}

export function getClassWithReviews(classId: string): ClassWithReviews | undefined {
  const classData = getClassById(classId)
  if (!classData) return undefined

  const reviews = mockReviews.filter((review) => review.classId === classId)
  return { ...classData, reviews }
}

// Review-related queries
export function getReviewsByTeacher(teacherId: string): Review[] {
  return mockReviews.filter((review) => review.teacherId === teacherId)
}

export function getReviewsByClass(classId: string): Review[] {
  return mockReviews.filter((review) => review.classId === classId)
}

// Combined queries
export function getAllTeachers(): Teacher[] {
  return mockTeachers
}

export function getAllClasses(): Class[] {
  return mockClasses
}

export function getAllReviews(): Review[] {
  return mockReviews
}

export function calculateTeacherRating(teacherId: string): number {
  const reviews = getReviewsByTeacher(teacherId)
  if (reviews.length === 0) return 0

  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0)
  return Math.round((totalRating / reviews.length) * 10) / 10 // Round to 1 decimal
}
