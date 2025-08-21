"use client";

import React, { useState, useEffect } from "react";
import Icon from "../ui/Icon";
import Button from "../ui/Button";

// Define Testimonial type
interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  rating: number;
  text: string;
  language: string;
  avatar: string;
  bgColor: string;
  textColor: string;
}

const TestimonialSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Manager",
      location: "New York, USA",
      rating: 5,
      text: "LinguaConnect transformed my Spanish learning journey. The teachers are incredibly patient and skilled, and the platform makes scheduling sessions effortless. I went from beginner to conversational in just 6 months!",
      language: "Spanish",
      avatar: "S",
      bgColor: "bg-primary/10",
      textColor: "text-primary",
    },
    {
      id: 2,
      name: "Ahmed Al-Rashid",
      role: "Software Engineer",
      location: "Dubai, UAE",
      rating: 5,
      text: "As someone with a busy schedule, I love how flexible LinguaConnect is. My French teacher adapts to my timezone and learning pace. The progress tracking helps me stay motivated. Absolutely recommended!",
      language: "French",
      avatar: "A",
      bgColor: "bg-secondary/10",
      textColor: "text-secondary",
    },
    {
      id: 3,
      name: "Maria Santos",
      role: "Teacher",
      location: "São Paulo, Brazil",
      rating: 5,
      text: "Teaching on LinguaConnect has been amazing. The platform provides all the tools I need to deliver quality lessons, and the student matching system ensures I work with motivated learners who value education.",
      language: "Portuguese",
      avatar: "M",
      bgColor: "bg-accent/10",
      textColor: "text-accent",
    },
    {
      id: 4,
      name: "Li Wei",
      role: "Business Owner",
      location: "Shanghai, China",
      rating: 5,
      text: "Learning English for business with LinguaConnect was exactly what I needed. My teacher understood my goals and created customized lessons. Now I confidently handle international meetings.",
      language: "English",
      avatar: "L",
      bgColor: "bg-purple/10",
      textColor: "text-purple",
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="pb-20 lg:pb-28 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
            <Icon name="MessageSquare" size={32} className="text-secondary" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            What Our Community Says
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {"Real stories from learners and teachers who have found success through LinguaConnect. Their journeys inspire us to continue improving every day."}
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="bg-card rounded-3xl shadow-elevated border border-border overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 p-8 lg:p-12">
                  <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                      {/* Testimonial Content */}
                      <div className="lg:col-span-2">
                        <div className="mb-6">
                          <div className="flex items-center space-x-1 mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Icon key={i} name="Star" size={20} className="text-secondary fill-current" />
                            ))}
                          </div>
                          <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed">
                            {testimonial.text}
                          </blockquote>
                        </div>

                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center`}>
                            <span className={`text-lg font-semibold ${testimonial.textColor}`}>
                              {testimonial.avatar}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                            <p className="text-muted-foreground">{testimonial.role}</p>
                            <p className="text-sm text-muted-foreground flex items-center">
                              <Icon name="MapPin" size={14} className="mr-1" />
                              {testimonial.location}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Language Badge & Visual */}
                      <div className="lg:col-span-1">
                        <div className="rounded-2xl p-8 text-center border border-border/50">
                          <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft border border-border">
                            <Icon name="Languages" size={24} className="text-primary" />
                          </div>
                          <h5 className="font-semibold text-foreground mb-2">Learning</h5>
                          <div className={`inline-flex items-center px-3 py-1 rounded-full ${testimonial.bgColor} ${testimonial.textColor} text-sm font-medium`}>
                            {testimonial.language}
                          </div>
                          <div className="mt-4 pt-4 border-t border-border">
                            <div className="text-sm text-muted-foreground">Journey Progress</div>
                            <div className="flex items-center justify-center mt-2">
                              <div className="w-full bg-muted rounded-full h-2 max-w-20">
                                <div
                                  className="bg-primary h-2 rounded-full transition-all duration-300"
                                  style={{ width: "85%" }}
                                ></div>
                              </div>
                              <span className="ml-2 text-sm font-medium text-primary">85%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <Button variant="outline" size="icon" onClick={handlePrevious} className="rounded-full">
              <Icon name="ChevronLeft" size={20} />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideChange(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                />
              ))}
            </div>

            <Button variant="outline" size="icon" onClick={handleNext} className="rounded-full">
              <Icon name="ChevronRight" size={20} />
            </Button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "Shield",
              title: "Verified Reviews",
              description: "All testimonials from verified platform users",
              color: "text-accent",
            },
            {
              icon: "Users",
              title: "25,000+ Happy Learners",
              description: "Join thousands of successful language learners",
              color: "text-primary",
            },
            {
              icon: "Award",
              title: "4.9/5 Average Rating",
              description: "Consistently high ratings across all reviews",
              color: "text-secondary",
            },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div
                className={`w-12 h-12 mx-auto mb-4 ${item.color.replace("text-", "bg-")}/10 rounded-xl flex items-center justify-center`}
              >
                <Icon name={item.icon} size={24} className={item.color} />
              </div>
              <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
