"use client";

import React from "react";
import Icon from "@/app/components/ui/Icon";
import Button from "@/app/components/ui/Button";

export interface Lesson {
  schedule: { duration: string };
}

export interface Course {
  price: number;
  originalPrice?: number;
  lessons?: Lesson[];
  isTrialAvailable?: boolean;
}

export interface EnrollmentSectionProps {
  course: Course | null;
  onEnroll: () => void;
  onTrial: () => void;
}

const EnrollmentSection: React.FC<EnrollmentSectionProps> = ({
  course,
  onEnroll,
  onTrial,
}) => {
  if (!course) return null;

  const totalMinutes =
    course.lessons?.reduce(
      (total, lesson) => total + parseInt(lesson?.schedule?.duration || "0"),
      0
    ) ?? 0;

  return (
    <div className="bg-card rounded-lg border border-border shadow-soft overflow-hidden">
      {/* HEADER — Price */}
      <div className="p-6 border-b border-border">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <span className="text-3xl font-bold text-foreground">
              ${course.price}
            </span>

            {course.originalPrice && course.originalPrice > course.price && (
              <span className="text-lg text-muted-foreground line-through">
                ${course.originalPrice}
              </span>
            )}
          </div>

          {course.originalPrice && course.originalPrice > course.price && (
            <div className="bg-success/10 text-success px-3 py-1 rounded-full text-sm font-medium inline-block">
              Save ${course.originalPrice - course.price}
            </div>
          )}
        </div>
      </div>

      {/* COURSE HIGHLIGHTS */}
      <div className="p-6 space-y-4">
        <h3 className="font-semibold text-foreground">This course includes:</h3>

        <div className="space-y-3">
          {/* Lessons Count */}
          <div className="flex items-center space-x-3">
            <Icon name="BookOpen" size={16} className="text-primary" />
            <span className="text-sm text-muted-foreground">
              {course.lessons?.length ?? 0} comprehensive lessons
            </span>
          </div>

          {/* Total Duration */}
          <div className="flex items-center space-x-3">
            <Icon name="Clock" size={16} className="text-purple-700" />
            <span className="text-sm text-muted-foreground">
              {totalMinutes} minutes of content
            </span>
          </div>

          {/* Device Access */}
          <div className="flex items-center space-x-3">
            <Icon name="Smartphone" size={16} className="text-accent" />
            <span className="text-sm text-muted-foreground">
              Mobile and desktop access
            </span>
          </div>

          {/* Certificate */}
          <div className="flex items-center space-x-3">
            <Icon name="Award" size={16} className="text-secondary" />
            <span className="text-sm text-muted-foreground">
              Certificate of completion
            </span>
          </div>

          {/* Teacher Support */}
          <div className="flex items-center space-x-3">
            <Icon name="MessageCircle" size={16} className="text-primary" />
            <span className="text-sm text-muted-foreground">
              Direct instructor support
            </span>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="space-y-3 pt-4">
          <Button size="lg" onClick={onEnroll} className="w-full">
            <Icon name="ShoppingCart" size={16} className="mr-2" />
            Enroll Now
          </Button>

          {course.isTrialAvailable && (
            <Button
              size="lg"
              variant="outline"
              onClick={onTrial}
              className="w-full"
            >
              <Icon name="Play" size={16} className="mr-2" />
              Start Free Trial
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnrollmentSection;
