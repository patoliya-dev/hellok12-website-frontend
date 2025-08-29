/* eslint-disable @typescript-eslint/no-explicit-any */
// Core entity types with proper relationships
export type Teacher = {
  id: string
  name: string
  title: string
  location: string
  schoolSlug: string
  schoolName: string
  schoolLogo: string
  rating: number
  reviewCount: number
  hourlyRate: number
  languages: string[]
  experience: number
  studentCount: number
  isVerified: boolean
  isOnline: boolean
  teachingStyle: string
  availability: string[]
  specialties: string[]
  profileImage: string
  isFavorited: boolean
  bio: string
  certificates?: any[]
  ageGroups?: string[]
  teachingExperience?: any[]
  specializations?: string[]
}

export type Class = {
  id: string
  teacherId: string // Added foreign key to link with teacher
  title: string
  description: string
  type: "1-on-1" | "Group"
  duration: number // in minutes
  price: number // in USD
  maxStudents?: number
  enrolledStudents?: number
  location?: string
  schedule: {
    flexible?: boolean
    days?: string[]
    time?: string
  }
  nextSession?: string
}

export type Review = {
  id: string
  teacherId: string // Added foreign key to link with teacher
  classId: string // Added foreign key to link with class
  studentName: string
  className: string;
  classType: string;
  studentAvatar: string
  rating: number
  date: string
  comment: string
  verified: boolean
  helpfulCount: number
}

export type TeacherWithClasses = Teacher & {
  classes: Class[]
}

export type TeacherWithReviews = Teacher & {
  reviews: Review[]
}

export type ClassWithTeacher = Class & {
  teacher: Teacher
}

export type ClassWithReviews = Class & {
  reviews: Review[]
}
