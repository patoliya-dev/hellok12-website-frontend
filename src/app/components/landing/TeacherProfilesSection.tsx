"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Icon from "../ui/Icon"
import AppImage from "../ui/AppImage"
import Button from "../ui/Button"

interface Teacher {
  id: number
  name: string
  languages: string[]
  specialization: string
  experience: string
  rating: number
  reviews: number
  location: string
  avatar: string
  hourlyRate: string
  availability: "Available" | "Busy"
  bio: string
  certifications: string[]
  teachingStyle: string
}

const TeacherProfilesSection: React.FC = () => {
  const router = useRouter()
  const [currentSlide, setCurrentSlide] = useState<number>(0)

  const teachers: Teacher[] = [
    {
      id: 1,
      name: "Maria Rodriguez",
      languages: ["Spanish", "English"],
      specialization: "Children's Spanish",
      experience: "5 years",
      rating: 4.9,
      reviews: 127,
      location: "Madrid, Spain",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      hourlyRate: "$25",
      availability: "Available",
      bio: "Native Spanish speaker with a passion for teaching children. Specializes in interactive games and cultural immersion.",
      certifications: ["DELE Certified", "Child Psychology"],
      teachingStyle: "Interactive & Fun",
    },
    {
      id: 2,
      name: "Yuki Tanaka",
      languages: ["Japanese", "English"],
      specialization: "Japanese for Beginners",
      experience: "8 years",
      rating: 4.8,
      reviews: 203,
      location: "Tokyo, Japan",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      hourlyRate: "$30",
      availability: "Available",
      bio: "Experienced Japanese teacher who makes learning Hiragana and Katakana fun through storytelling and visual aids.",
      certifications: ["JLPT N1", "Teaching License"],
      teachingStyle: "Visual & Story-based",
    },
    {
      id: 3,
      name: "Pierre Dubois",
      languages: ["French", "English"],
      specialization: "French Culture & Language",
      experience: "6 years",
      rating: 4.9,
      reviews: 156,
      location: "Paris, France",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      hourlyRate: "$28",
      availability: "Available",
      bio: "Parisian native who brings French culture to life through cooking, art, and music in language lessons.",
      certifications: ["DALF C2", "Cultural Studies"],
      teachingStyle: "Cultural Immersion",
    },
    {
      id: 4,
      name: "Li Wei",
      languages: ["Mandarin", "English"],
      specialization: "Mandarin for Kids",
      experience: "7 years",
      rating: 4.7,
      reviews: 189,
      location: "Beijing, China",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      hourlyRate: "$26",
      availability: "Busy",
      bio: "Patient Mandarin teacher who uses traditional Chinese stories and calligraphy to engage young learners.",
      certifications: ["HSK Level 6", "Montessori Training"],
      teachingStyle: "Traditional & Patient",
    },
    {
      id: 5,
      name: "Anna Schmidt",
      languages: ["German", "English"],
      specialization: "German Grammar & Conversation",
      experience: "4 years",
      rating: 4.8,
      reviews: 98,
      location: "Berlin, Germany",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
      hourlyRate: "$24",
      availability: "Available",
      bio: "Young and energetic German teacher who makes grammar fun through games and real-life conversations.",
      certifications: ["Goethe Institute", "TESOL"],
      teachingStyle: "Energetic & Practical",
    },
  ]

  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(teachers.length / 3))
  }

  const prevSlide = (): void => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(teachers.length / 3)) % Math.ceil(teachers.length / 3))
  }

  const handleViewProfile = (teacherId: number): void => {
    router.push(`/teacher-profile-detail/${teacherId}`)
  }

  const handleViewAllTeachers = (): void => {
    router.push("/teacher-search-discovery")
  }

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Meet Our Amazing Teachers
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed mb-8">
            Connect with certified native speakers who specialize in teaching children. Each teacher brings unique
            cultural insights and proven teaching methods.
          </p>
          <Button variant="outline" onClick={handleViewAllTeachers} iconName="Search" iconPosition="left">
            Browse All Teachers
          </Button>
        </div>

        <div className="lg:hidden">
          <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
            {teachers.map((teacher) => (
              <div
                key={teacher.id}
                className="flex-shrink-0 w-80 bg-card rounded-3xl p-6 shadow-educational hover:shadow-educational-lg transition-educational"
              >
                {/* Teacher Header */}
                <div className="flex items-center mb-4">
                  <AppImage
                    src={teacher.avatar}
                    alt={teacher.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-foreground text-lg">{teacher.name}</h3>
                    <p className="text-text-secondary text-sm">{teacher.location}</p>
                    <div className="flex items-center mt-1">
                      <Icon name="Star" size={14} className="text-yellow-400 fill-current mr-1" />
                      <span className="text-sm font-medium">{teacher.rating}</span>
                      <span className="text-text-secondary text-sm ml-1">({teacher.reviews})</span>
                    </div>
                  </div>
                  <div
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      teacher.availability === "Available"
                        ? "bg-green-100 text-green-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {teacher.availability}
                  </div>
                </div>

                {/* Languages */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {teacher.languages.map((lang, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bio */}
                <p className="text-text-secondary text-sm leading-relaxed mb-4">{teacher.bio}</p>

                {/* Details */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm">
                    <Icon name="Clock" size={16} className="text-text-secondary mr-2" />
                    <span className="text-text-secondary">{teacher.experience} experience</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Icon name="DollarSign" size={16} className="text-text-secondary mr-2" />
                    <span className="text-text-secondary">{teacher.hourlyRate}/hour</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Icon name="Award" size={16} className="text-text-secondary mr-2" />
                    <span className="text-text-secondary">{teacher.teachingStyle}</span>
                  </div>
                </div>

                {/* Action Button */}
                <Button
                  variant="default"
                  fullWidth
                  onClick={() => handleViewProfile(teacher.id)}
                  iconName="User"
                  iconPosition="left"
                >
                  View Profile
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-background rounded-full shadow-educational flex items-center justify-center text-text-secondary hover:text-foreground transition-educational"
            >
              <Icon name="ChevronLeft" size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-background rounded-full shadow-educational flex items-center justify-center text-text-secondary hover:text-foreground transition-educational"
            >
              <Icon name="ChevronRight" size={24} />
            </button>

            {/* Teachers Grid */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(teachers.length / 3) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-3 gap-8">
                      {teachers.slice(slideIndex * 3, (slideIndex + 1) * 3).map((teacher) => (
                        <div
                          key={teacher.id}
                          className="bg-card rounded-3xl p-8 shadow-educational hover:shadow-educational-lg transition-educational hover-lift"
                        >
                          {/* Teacher Header */}
                          <div className="text-center mb-6">
                            <AppImage
                              src={teacher.avatar}
                              alt={teacher.name}
                              className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                            />
                            <h3 className="font-heading font-semibold text-foreground text-xl mb-1">{teacher.name}</h3>
                            <p className="text-text-secondary text-sm mb-2">{teacher.location}</p>
                            <div className="flex items-center justify-center mb-2">
                              <Icon name="Star" size={16} className="text-yellow-400 fill-current mr-1" />
                              <span className="font-medium">{teacher.rating}</span>
                              <span className="text-text-secondary ml-1">({teacher.reviews})</span>
                            </div>
                            <div
                              className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                                teacher.availability === "Available"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-orange-100 text-orange-700"
                              }`}
                            >
                              {teacher.availability}
                            </div>
                          </div>

                          {/* Languages */}
                          <div className="mb-4">
                            <div className="flex flex-wrap gap-2 justify-center">
                              {teacher.languages.map((lang, index) => (
                                <span
                                  key={index}
                                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                                >
                                  {lang}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Bio */}
                          <p className="text-text-secondary text-sm leading-relaxed mb-6 text-center">{teacher.bio}</p>

                          {/* Details */}
                          <div className="space-y-3 mb-6">
                            <div className="flex items-center justify-center text-sm">
                              <Icon name="Clock" size={16} className="text-text-secondary mr-2" />
                              <span className="text-text-secondary">{teacher.experience} experience</span>
                            </div>
                            <div className="flex items-center justify-center text-sm">
                              <Icon name="DollarSign" size={16} className="text-text-secondary mr-2" />
                              <span className="text-text-secondary">{teacher.hourlyRate}/hour</span>
                            </div>
                          </div>

                          {/* Action Button */}
                          <Button
                            variant="default"
                            fullWidth
                            onClick={() => handleViewProfile(teacher.id)}
                            iconName="User"
                            iconPosition="left"
                          >
                            View Profile
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(teachers.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-educational ${
                    index === currentSlide ? "bg-primary" : "bg-border"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeacherProfilesSection
