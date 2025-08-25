"use client";

import React from "react";
import Image from "../../components/ui/AppImage";
import Icon from "../../components/ui/Icon";
import Button from "../../components/ui/Button";

// TypeScript types
interface Teacher {
  id: string;
  name: string;
  profileImage: string;
  languages: string[];
  rating: number;
  reviewCount: number;
  isOnline: boolean;
  isVerified: boolean;
  nextAvailable?: string;
  experience: number;
  studentsCount: number;
  classesCount: number;
}

interface TeacherHeroProps {
  teacher: Teacher;
  onViewAllClasses: () => void;
  onQuickContact: () => void;
}

const TeacherHero: React.FC<TeacherHeroProps> = ({ teacher, onViewAllClasses, onQuickContact }) => {
  const getAvailabilityStatus = () => {
    if (teacher?.isOnline) {
      return { text: "Available Now", color: "text-success", bgColor: "bg-success/10" };
    } else if (teacher?.nextAvailable) {
      return { text: `Next available: ${teacher.nextAvailable}`, color: "text-warning", bgColor: "bg-warning/10" };
    }
    return { text: "Offline", color: "text-text-secondary", bgColor: "bg-muted" };
  };

  const availability = getAvailabilityStatus();

  return (
    <div className="bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6 lg:py-8">
        <div className="flex flex-col lg:flex-row lg:items-start gap-6">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-primary/20">
                <Image
                  src={teacher.profileImage}
                  alt={`${teacher.name} profile picture`}
                  className="w-full h-full object-cover"
                />
              </div>
              {teacher.isVerified && (
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-success rounded-full flex items-center justify-center border-2 border-card">
                  <Icon name="CheckCircle" size={16} color="white" />
                </div>
              )}
            </div>
          </div>

          {/* Teacher Info */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-4">
              <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">{teacher.name}</h1>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-3">
                {teacher.languages.map((language, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
                  >
                    {language}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4 mb-3">
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={16}
                        className={i < Math.floor(teacher.rating) ? "text-warning fill-current text-secondary" : "text-border text-secondary"}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-foreground">{teacher.rating}</span>
                  <span className="text-sm text-text-secondary">({teacher.reviewCount} reviews)</span>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${availability.bgColor}`}>
                  <div
                    className={`w-2 h-2 rounded-full ${teacher.isOnline ? "bg-success" : "bg-text-secondary"}`}
                  />
                  <span className={`text-sm font-medium ${availability.color}`}>{availability.text}</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6 lg:max-w-md">
              <div className="text-center">
                <div className="text-lg font-bold text-foreground">{teacher.experience}</div>
                <div className="text-xs text-text-secondary">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-foreground">{teacher.studentsCount}</div>
                <div className="text-xs text-text-secondary">Students Taught</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-foreground">{teacher.classesCount}</div>
                <div className="text-xs text-text-secondary">Classes Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherHero;
