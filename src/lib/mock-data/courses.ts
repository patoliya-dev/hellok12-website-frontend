import type { Class } from "../types"

export const mockClasses: Class[] = [
  {
    id: "class-001",
    teacherId: "teacher-003", // Sarah Martinez teaches this class
    title: "Conversational English Mastery",
    description:
      "Improve your speaking confidence through engaging conversations about daily topics, current events, and personal interests.",
    type: "1-on-1",
    duration: 60,
    price: 45,
    schedule: { flexible: true },
  },
  {
    id: "class-002",
    teacherId: "teacher-003", // Sarah Martinez teaches this class
    title: "Business English Essentials",
    description: "Master professional communication skills including presentations, meetings, emails, and networking.",
    type: "1-on-1",
    duration: 90,
    price: 65,
    schedule: { flexible: true },
  },
  {
    id: "class-003",
    teacherId: "teacher-001", // María García teaches this class
    title: "Spanish for Beginners Group",
    description:
      "Start your Spanish journey with basic vocabulary, grammar, and pronunciation in a supportive group environment.",
    type: "Group",
    duration: 75,
    price: 25,
    maxStudents: 8,
    enrolledStudents: 6,
    location: "Downtown Learning Center, Room 204",
    schedule: { days: ["Monday", "Wednesday", "Friday"], time: "6:00 PM - 7:15 PM" },
    nextSession: "Monday, January 8th at 6:00 PM",
  },
  {
    id: "class-004",
    teacherId: "teacher-002", // Pierre Dubois teaches this class
    title: "French Conversation Circle",
    description: "Practice French speaking skills in a relaxed group setting with fellow learners. All levels welcome.",
    type: "Group",
    duration: 60,
    price: 20,
    maxStudents: 10,
    enrolledStudents: 8,
    location: "Language Lab, Building A",
    schedule: { days: ["Tuesday", "Thursday"], time: "7:00 PM - 8:00 PM" },
    nextSession: "Tuesday, January 9th at 7:00 PM",
  },
  {
    id: "class-005",
    teacherId: "teacher-003", // Sarah Martinez teaches this class
    title: "Academic Writing Workshop",
    description:
      "Develop strong academic writing skills for essays, research papers, and thesis work. Includes feedback and revision techniques.",
    type: "1-on-1",
    duration: 120,
    price: 80,
    schedule: { flexible: true },
  },
]
