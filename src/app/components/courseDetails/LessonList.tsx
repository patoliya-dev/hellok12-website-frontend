"use client";

import React, { useState } from "react";
import Icon from "@/app/components/ui/Icon";

export interface LessonSchedule {
  duration: string;
}

export interface LessonItem {
  _id: string;
  title: string;
  type?: string;
  description?: string;
  schedule: LessonSchedule;
  isTrialAvailable?: boolean;
}

interface LessonListProps {
  lessons?: LessonItem[];
  selectedLesson?: LessonItem | null;
}

const LessonList: React.FC<LessonListProps> = ({
  lessons = [],
  selectedLesson,
}) => {
  const [expandedLessons, setExpandedLessons] = useState<Set<string>>(
    new Set()
  );

  const toggleLessonExpansion = (lessonId: string) => {
    const newExpanded = new Set(expandedLessons);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    newExpanded.has(lessonId)
      ? newExpanded.delete(lessonId)
      : newExpanded.add(lessonId);

    setExpandedLessons(newExpanded);
  };

  const getLessonIcon = (type?: string): string => {
    switch (type) {
      case "video":
        return "Play";
      case "interactive":
        return "MousePointer";
      case "quiz":
        return "HelpCircle";
      case "assignment":
        return "FileText";
      default:
        return "BookOpen";
    }
  };

  if (!lessons?.length) return null;

  const totalMinutes = lessons.reduce(
    (total, lesson) => total + parseInt(lesson.schedule.duration || "0"),
    0
  );

  return (
    <section className="bg-card rounded-lg border border-border p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-foreground">Lessons</h2>
        <span className="text-sm text-muted-foreground">
          {lessons.length} lessons • {totalMinutes} minutes total
        </span>
      </div>

      {/* Lessons */}
      <div className="space-y-3">
        {lessons.map((lesson, index) => {
          const isExpanded = expandedLessons.has(lesson._id);
          const isSelected = selectedLesson?._id === lesson._id;

          return (
            <div
              key={lesson._id}
              className={`border border-border rounded-lg overflow-hidden transition-all duration-200 
                ${isSelected ? "ring-2 ring-primary" : ""}
              `}
            >
              {/* Lesson Header */}
              <div
                className="p-4 cursor-pointer hover:bg-muted/50 transition-colors"
                onClick={() => toggleLessonExpansion(lesson._id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 flex-1">
                    {/* Lesson Number */}
                    <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full text-primary text-sm font-medium">
                      {index + 1}
                    </div>

                    <div className="flex items-center space-x-3 flex-1">
                      <Icon
                        name={getLessonIcon(lesson.type)}
                        size={16}
                        className="text-muted-foreground flex-shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <h3 className="font-medium text-foreground truncate">
                          {lesson.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {lesson.schedule.duration} minutes
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Trial Tag */}
                  {lesson.isTrialAvailable && (
                    <div>
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-[#0ea5e9]/5 text-[#0ea5e9]">
                        <Icon name="Gift" size={12} />
                        Trial Lesson
                      </span>
                    </div>
                  )}

                  {/* Chevron */}
                  <div className="flex items-center space-x-2">
                    <Icon
                      name={isExpanded ? "ChevronUp" : "ChevronDown"}
                      size={16}
                      className="text-muted-foreground"
                    />
                  </div>
                </div>
              </div>

              {/* Lesson Details */}
              {isExpanded && (
                <div className="border-t border-border p-4 bg-muted/20">
                  {lesson.description && (
                    <p className="text-muted-foreground mb-4">
                      {lesson.description}
                    </p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LessonList;
