"use client";

import React from 'react';
import Icon from '../ui/Icon';
import Image from '../ui/AppImage';
import Button from '../ui/Button';

// TypeScript types for props
interface Instructor {
  name: string;
  title: string;
  avatar: string;
  verified: boolean;
}

interface Course {
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  instructor: Instructor;
  category: string;
  level: string;
  rating: number;
  reviewCount: number;
  enrolledStudents: number;
  duration: string;
  totalLessons: number;
  price: number;
  originalPrice?: number;
  hasTrialLesson?: boolean;
}

interface CourseHeroProps {
  course: Course | null;
  onEnroll: () => void;
  onTrial: () => void;
}

const CourseHero: React.FC<CourseHeroProps> = ({ course, onEnroll, onTrial }) => {
  if (!course) return null;

  return (
    <section className="border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Course Info */}
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {course.title}
            </h1>

            <p className="text-lg text-muted-foreground mb-6">
              {course.description}
            </p>

            {/* Course Stats */}
            <div className="flex flex-wrap items-center gap-6 mb-6">
              <div className="flex items-center space-x-2">
                <Icon name="Star" size={20} className="text-warning text-secondary fill-current" />
                <span className="font-semibold text-foreground">{course.rating}</span>
                <span className="text-muted-foreground">({course.reviewCount} reviews)</span>
              </div>

              <div className="flex items-center space-x-2">
                <Icon name="Users" size={20} className="text-primary" />
                <span className="text-muted-foreground">{course.enrolledStudents.toLocaleString()} students</span>
              </div>

              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={20} className="text-secondary" />
                <span className="text-muted-foreground">{course.duration}</span>
              </div>

              <div className="flex items-center space-x-2">
                <Icon name="BookOpen" size={20} className="text-accent" />
                <span className="text-muted-foreground">{course.totalLessons} lessons</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={onEnroll}
                className="flex-1 sm:flex-none"
              >
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Enroll Now - ${course.price}
              </Button>

              {course.hasTrialLesson && (
                <Button
                  variant="outline"
                  size="lg"
                  onClick={onTrial}
                  className="flex-1 sm:flex-none"
                >
                  <Icon name="Play" size={20} className="mr-2" />
                  Try Free Lesson
                </Button>
              )}
            </div>

          </div>

          {/* Course Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <Image
                src={course.image}
                alt={course.title}
                className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-medium"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHero;
