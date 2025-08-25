import type { Review } from "../types"

export const mockReviews: Review[] = [
  {
    id: "review-001",
    teacherId: "teacher-003", // Review for Sarah Martinez
    classId: "class-001", // Review for Conversational English Mastery
    studentName: "Michael Chen",
    studentAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    date: "2025-01-02",
    comment:
      "Sarah is an exceptional teacher! Her conversational English classes have dramatically improved my confidence.",
    verified: true,
    helpfulCount: 12,
    className: "Pronunciation Bootcamp",
    classType: "Group",
  },
  {
    id: "review-002",
    teacherId: "teacher-001", // Review for María García
    classId: "class-003", // Review for Spanish for Beginners Group
    studentName: "Emma Rodriguez",
    studentAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    date: "2024-12-28",
    comment: "The Spanish beginners group is fantastic! María makes learning fun and interactive.",
    verified: true,
    helpfulCount: 8,
    className: "Pronunciation Bootcamp",
    classType: "Group",
  },
  {
    id: "review-003",
    teacherId: "teacher-003", // Review for Sarah Martinez
    classId: "class-002", // Review for Business English Essentials
    studentName: "David Kim",
    studentAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 4,
    date: "2024-12-25",
    comment: "Great business English sessions. Practical examples and improved presentation skills.",
    verified: true,
    helpfulCount: 6,
    className: "Pronunciation Bootcamp",
    classType: "Group",
  },
  {
    id: "review-004",
    teacherId: "teacher-002", // Review for Pierre Dubois
    classId: "class-004", // Review for French Conversation Circle
    studentName: "Lisa Thompson",
    studentAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    date: "2024-12-20",
    comment: "The French conversation circle is exactly what I needed! My speaking confidence has grown tremendously.",
    verified: true,
    helpfulCount: 9,
    className: "Pronunciation Bootcamp",
    classType: "Group",
  },
  {
    id: "review-005",
    teacherId: "teacher-003", // Review for Sarah Martinez
    classId: "class-005", // Review for Academic Writing Workshop
    studentName: "James Wilson",
    studentAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    date: "2024-12-15",
    comment:
      "Sarah's academic writing workshop was a game-changer for my thesis. Detailed feedback and improvement guidance.",
    verified: true,
    helpfulCount: 15,
    className: "Pronunciation Bootcamp",
    classType: "Group",
  },
  {
    id: "review-006",
    teacherId: "teacher-003", // Review for Sarah Martinez
    classId: "class-005", // Review for Academic Writing Workshop
    studentName: "Maria Gonzalez",
    studentAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    rating: 4,
    date: "2024-12-10",
    comment: "The pronunciation bootcamp was intensive but very effective. Sarah has a great ear for pronunciation issues and provides specific techniques to improve. Wish it was longer!",
    className: "Pronunciation Bootcamp",
    classType: "Group",
    verified: true,
    helpfulCount: 7
  }
]
