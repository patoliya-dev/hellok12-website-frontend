"use client"

import type React from "react"
import { useState } from "react"
import Icon from "../ui/Icon"
import AppImage from "../ui/AppImage"

interface Testimonial {
  id: number
  type: "parent" | "teacher"
  name: string
  role: string
  location: string
  avatar: string
  content: string
  rating: number
  language: string
  experience?: string
}

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      type: "parent",
      name: "Sarah Johnson",
      role: "Mother of 2",
      location: "California, USA",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      content: `HelloK12 has been a game-changer for our family. My 8-year-old daughter Emma is now confidently speaking Spanish with her grandmother. The teachers are patient, engaging, and make learning feel like play time.`,
      rating: 5,
      language: "Spanish",
    },
    {
      id: 2,
      type: "teacher",
      name: "Maria Rodriguez",
      role: "Spanish Teacher",
      location: "Madrid, Spain",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      content: `Teaching through HelloK12 allows me to connect with children worldwide. The platform's interactive tools make it easy to create engaging lessons that keep kids excited about learning Spanish.`,
      rating: 5,
      language: "Spanish",
      experience: "5 years",
    },
    {
      id: 3,
      type: "parent",
      name: "David Chen",
      role: "Father of 1",
      location: "Toronto, Canada",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: `My son Alex started learning Mandarin here 6 months ago. The progress tracking feature helps me see exactly how he's improving. The cultural elements in lessons are fantastic!`,
      rating: 5,
      language: "Mandarin",
    },
    {
      id: 4,
      type: "teacher",
      name: "Yuki Tanaka",
      role: "Japanese Teacher",
      location: "Tokyo, Japan",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: `HelloK12's curriculum structure makes teaching Japanese to young learners incredibly effective. The gamification elements keep students motivated and coming back for more.`,
      rating: 5,
      language: "Japanese",
      experience: "8 years",
    },
    {
      id: 5,
      type: "parent",
      name: "Emily Thompson",
      role: "Mother of 3",
      location: "London, UK",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      content: `All three of my children are learning different languages on HelloK12. The flexibility to schedule lessons around our busy family life is incredible. Highly recommended!`,
      rating: 5,
      language: "French & German",
    },
  ]

  const nextTestimonial = (): void => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = (): void => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number): void => {
    setCurrentTestimonial(index)
  }

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-muted to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            What Families & Teachers Say
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Join thousands of happy families and certified teachers who trust HelloK12 for language learning success.
          </p>
        </div>

        <div className="lg:hidden">
          <div className="relative bg-card rounded-3xl p-8 shadow-educational-lg">
            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-background rounded-full shadow-educational flex items-center justify-center text-text-secondary hover:text-foreground transition-educational"
            >
              <Icon name="ChevronLeft" size={20} />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-background rounded-full shadow-educational flex items-center justify-center text-text-secondary hover:text-foreground transition-educational"
            >
              <Icon name="ChevronRight" size={20} />
            </button>

            {/* Testimonial Content */}
            <div className="px-8">
              <div className="flex items-center mb-6">
                <AppImage
                  src={testimonials[currentTestimonial]?.avatar}
                  alt={testimonials[currentTestimonial]?.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-heading font-semibold text-foreground">
                    {testimonials[currentTestimonial]?.name}
                  </h4>
                  <p className="text-text-secondary text-sm">
                    {testimonials[currentTestimonial]?.role} • {testimonials[currentTestimonial]?.location}
                  </p>
                  <div className="flex items-center mt-1">
                    {[...Array(testimonials[currentTestimonial]?.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={14} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              <blockquote className="text-text-secondary leading-relaxed mb-4">
                "{testimonials[currentTestimonial]?.content}"
              </blockquote>

              <div className="flex items-center justify-between">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    testimonials[currentTestimonial]?.type === "parent"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {testimonials[currentTestimonial]?.type === "parent" ? "Parent" : "Teacher"}
                </span>
                <span className="text-sm text-text-secondary">
                  Learning: {testimonials[currentTestimonial]?.language}
                </span>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-educational ${
                    index === currentTestimonial ? "bg-primary" : "bg-border"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-3xl p-8 shadow-educational hover:shadow-educational-lg transition-educational hover-lift"
            >
              <div className="flex items-center mb-6">
                <AppImage
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-heading font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-text-secondary text-sm">
                    {testimonial.role} • {testimonial.location}
                  </p>
                  <div className="flex items-center mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={14} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              <blockquote className="text-text-secondary leading-relaxed mb-6">"{testimonial.content}"</blockquote>

              <div className="flex items-center justify-between">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    testimonial.type === "parent" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"
                  }`}
                >
                  {testimonial.type === "parent" ? "Parent" : "Teacher"}
                </span>
                <span className="text-sm text-text-secondary">{testimonial.language}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-2">10K+</div>
            <div className="text-text-secondary">Happy Students</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-heading font-bold text-secondary mb-2">500+</div>
            <div className="text-text-secondary">Certified Teachers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-heading font-bold text-accent mb-2">200+</div>
            <div className="text-text-secondary">Languages</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-heading font-bold text-warning mb-2">98%</div>
            <div className="text-text-secondary">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
