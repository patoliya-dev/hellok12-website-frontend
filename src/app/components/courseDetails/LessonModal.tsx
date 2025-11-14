"use client";

import React, { useEffect, useState } from "react";
import Button from "@/app/components/ui/Button";
import Select from "@/app/components/ui/Select";
import Icon from "@/app/components/ui/Icon";

export interface LessonItem {
  _id: string;
  title: string;
  duration?: string;
  schedule?: { duration: string };
  teacherId?: string;
  isTrialAvailable?: boolean;
}

export interface TeacherItem {
  _id: string;
  name: string;
}

interface LessonModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTrial: () => void;
  lessons: LessonItem[];
  teachers: TeacherItem[];
}

const LessonModal: React.FC<LessonModalProps> = ({
  isOpen,
  onClose,
  onTrial,
  lessons,
  teachers,
}) => {
  const [filteredLessons, setFilteredLessons] = useState<LessonItem[]>([]);
  const [selectedLesson, setSelectedLesson] = useState<LessonItem | null>(null);
  const [filterType, setFilterType] = useState<string>("all");

  // Load trial-available lessons initially
  useEffect(() => {
    const trials = lessons.filter((l) => l.isTrialAvailable);
    setFilteredLessons(trials);
    setSelectedLesson(trials[0] || null);
  }, [lessons]);

  // Filter by teacher id
  const handleFilterChange = (value: string) => {
    setFilterType(value);

    if (value === "all" || !value) {
      const trials = lessons.filter((l) => l.isTrialAvailable);
      setFilteredLessons(trials);
      return;
    }

    const filtered = lessons.filter(
      (l) => l.teacherId === value && l.isTrialAvailable
    );

    setFilteredLessons(filtered);
    setSelectedLesson(filtered[0] || null);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
      <div className="bg-card rounded-lg shadow-large max-w-2xl w-full mx-4 max-h-[90vh] overflow-scroll">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-semibold text-card-foreground">
            Trial Lessons
          </h2>

          <div className="flex items-center gap-3">
            <Select
              placeholder="Select Teacher"
              options={[
                { value: "all", label: "All Teachers" },
                ...teachers.map((t) => ({
                  value: t._id,
                  label: t.name,
                })),
              ]}
              value={filterType}
              onChange={(val: string) => handleFilterChange(val)}
              className="min-w-[150px]"
            />

            <Button
              variant="ghost"
              size="sm"
              iconName="X"
              iconSize={20}
              onClick={onClose}
            />
          </div>
        </div>

        {/* Lessons List */}
        <div className="p-6 space-y-6">
          {filteredLessons.length === 0 && (
            <p className="text-sm text-muted-foreground">
              No trial lessons available for this teacher.
            </p>
          )}

          {filteredLessons.map((lesson, index) => {
            const isActive = selectedLesson?._id === lesson._id;

            return (
              <div
                key={lesson._id}
                className={`border border-border rounded-lg transition-all duration-200 cursor-pointer relative ${
                  isActive ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setSelectedLesson(lesson)}
              >
                {isActive && (
                  <div className="absolute top-2 right-2 bg-blue-500 rounded-full p-1">
                    <Icon name="Check" size={14} className="text-white" />
                  </div>
                )}

                <div className="p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-foreground truncate">
                        {lesson.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {lesson.duration || lesson.schedule?.duration || "—"}{" "}
                        mins
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-border bg-muted/30">
          <Button
            variant="outline"
            onClick={() => {
              setFilterType("all");
              onClose();
            }}
          >
            Cancel
          </Button>

          <Button type="button" onClick={onTrial} disabled={!selectedLesson}>
            Enroll Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LessonModal;
