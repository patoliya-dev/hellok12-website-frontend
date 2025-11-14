"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Icon from "@/app/components/ui/Icon";
import Button from "@/app/components/ui/Button";

export interface CourseItem {
  id: string;
  _id?: string;
  title?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  lessonType?: "1-on-1" | "group";
  location?: string;
  enrolledCount?: number;
  studentCapacity?: number;
  price: number;
  mode?: "online" | "in-person";
  isTrialAvailable?: boolean;
  type?: string;
}

interface CourseCardProps {
  courseItem: CourseItem;
  authUserRole?: string; // optional, since Redux was removed
}

const CourseCard: React.FC<CourseCardProps> = ({ courseItem }) => {
  const router = useRouter();

  const handleBookNow = () => {
    router.push(`/course-detail/${courseItem.id}`);
  };

  const getTypeIcon = () =>
    courseItem?.lessonType === "1-on-1" ? "User" : "Users";

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-interactive transition-smooth flex flex-col justify-between">
      <div>
        {/* Title + Description */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {courseItem?.title}
            </h3>

            <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
              {courseItem?.description}
            </p>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Icon name="Clock" size={16} />
            <span>
              {courseItem?.startDate?.slice(0, 10)}
              {courseItem?.endDate && ` - ${courseItem?.endDate?.slice(0, 10)}`}
            </span>
          </div>

          {courseItem?.lessonType === "group" && courseItem?.location && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Icon name="MapPin" size={16} />
              <span>{courseItem.location}</span>
            </div>
          )}

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Icon name="Users" size={16} />
            <span>
              {courseItem?.lessonType === "1-on-1"
                ? "Individual session"
                : `${courseItem?.enrolledCount}/${courseItem?.studentCapacity} students enrolled`}
            </span>
          </div>
        </div>
      </div>

      {/* Footer: price + actions */}
      <div className="mt-10">
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-foreground">
              ${courseItem?.price}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {courseItem.lessonType === "group" &&
            courseItem.enrolledCount &&
            courseItem.studentCapacity &&
            courseItem.enrolledCount >= courseItem.studentCapacity ? (
              <Button variant="secondary" disabled className="bg-foreground">
                Class Full
              </Button>
            ) : (
              <Button
                variant="default"
                iconName="Calendar"
                iconPosition="left"
                onClick={handleBookNow}
              >
                Book Now
              </Button>
            )}
          </div>
        </div>

        {/* Tags */}
        <div className="mt-6 flex gap-3 flex-wrap">
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-[#2563eb]/5 text-[#2563eb]">
            <Icon name={getTypeIcon()} size={12} />
            {courseItem.lessonType &&
              courseItem.lessonType.charAt(0).toUpperCase() +
                courseItem.lessonType.slice(1)}
          </span>

          {courseItem.mode === "online" && (
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-[#10b981]/10 text-[#10b981]">
              <Icon name="Video" size={12} />
              Online
            </span>
          )}

          {courseItem.mode === "in-person" && (
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-[#10b981]/10 text-[#10b981]">
              <Icon name="MapPin" size={12} />
              In-Person
            </span>
          )}

          {courseItem?.isTrialAvailable && (
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-[#0ea5e9]/10 text-[#0ea5e9]">
              <Icon name="Gift" size={12} />
              Trial Lesson
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
