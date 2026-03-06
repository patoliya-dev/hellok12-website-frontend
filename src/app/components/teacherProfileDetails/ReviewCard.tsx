"use client";

import React from "react";
import Image from "@/app/components/ui/AppImage";
import Icon from "@/app/components/ui/Icon";

export interface ReviewAuthor {
  name?: string;
  profileImage?: string;
}

export interface ReviewLesson {
  name?: string;
}

export interface TeacherReview {
  _id?: string;
  rating: number;
  comment?: string;
  createdAt: string;
  author?: ReviewAuthor;
  lesson?: ReviewLesson;
}

interface ReviewCardProps {
  review: TeacherReview;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();

    const diffInDays = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (diffInDays === 0) return "Today";
    if (diffInDays === 1) return "1 day ago";
    if (diffInDays < 7) return `${diffInDays} days ago`;
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
    if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} months ago`;

    return `${Math.floor(diffInDays / 365)} years ago`;
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-muted">
            <Image
              src={review?.author?.profileImage || ""}
              alt={`${review?.author?.name || "Student"} avatar`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h4 className="font-medium text-foreground">
                {review?.author?.name || "Anonymous"}
              </h4>
            </div>

            <div className="flex items-center gap-2 mt-1 flex-col">
              {/* Rating Stars */}
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={14}
                    className={
                      i < review.rating
                        ? "text-secondary fill-current"
                        : "text-muted-foreground"
                    }
                  />
                ))}
              </div>

              <span className="text-sm text-muted-foreground">
                {getTimeAgo(review?.createdAt)}
              </span>
            </div>
          </div>

          {/* Comment */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-3">
            {review?.comment}
          </p>

          {/* Lesson Info */}
          {review?.lesson?.name && (
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Icon name="BookOpen" size={12} />
              <span>Lesson: {review.lesson.name}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
