"use client";

import React, { useState } from "react";
import Icon from "@/app/components/ui/Icon";
import Button from "@/app/components/ui/Button";
import Select from "@/app/components/ui/Select";
import CourseCard, { CourseItem } from "./CourseCard";

export interface CoursesTabProps {
  courses?: CourseItem[];
}

const CoursesTab: React.FC<CoursesTabProps> = ({ courses = [] }) => {
  // Sorting & Filtering
  const [sortBy, setSortBy] = useState<string>("price-low");
  const [filterType, setFilterType] = useState<string>("all");

  const sortOptions = [
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "popularity", label: "Most Popular" },
  ];

  const typeOptions = [
    { value: "all", label: "All Courses" },
    { value: "1-on-1", label: "1-on-1 Courses" },
    { value: "group", label: "Group Courses" },
  ];

  const filteredAndSortedCourses = () => {
    let filtered = [...(courses ?? [])];

    // Filter by type
    if (filterType !== "all") {
      filtered = filtered.filter((c) => c?.lessonType === filterType);
    }

    // Sorting
    return filtered.sort((a, b) => {
      if (!a || !b) return 0;

      switch (sortBy) {
        case "price-low":
          return (a.price ?? 0) - (b.price ?? 0);

        case "price-high":
          return (b.price ?? 0) - (a.price ?? 0);

        case "popularity":
          return (b.enrolledCount ?? 0) - (a.enrolledCount ?? 0);

        default:
          return 0;
      }
    });
  };

  const processedCourses = filteredAndSortedCourses();

  return (
    <div className="space-y-6">
      {/* Filter & Sort Controls */}
      <div className="flex flex-col sm:flex-row gap-4 p-4 bg-muted/30 rounded-lg">
        <div className="flex-1">
          <Select
            label="Filter by Type"
            options={typeOptions}
            value={filterType}
            onChange={(value) => setFilterType(value as string)}
            className="w-full"
          />
        </div>

        <div className="flex-1">
          <Select
            label="Sort by"
            options={sortOptions}
            value={sortBy}
            onChange={(value) => setSortBy(value as string)}
            className="w-full"
          />
        </div>
      </div>

      {/* Summary */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            Available Courses ({processedCourses?.length})
          </h3>
          <p className="text-sm text-muted-foreground">
            Choose from 1-on-1 or group learning options
          </p>
        </div>
      </div>

      {/* Courses Grid */}
      {processedCourses?.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {processedCourses.map((course) => (
            <CourseCard
              key={course._id}
              courseItem={{
                ...course,
                id: course._id?.toString() ?? course.id.toString(),
              }}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="BookOpen" size={24} className="text-muted-foreground" />
          </div>

          <h3 className="text-lg font-medium text-foreground mb-2">
            No Classes Found
          </h3>

          <p className="text-muted-foreground mb-4">
            No courses match your current filter criteria.
          </p>

          <Button
            variant="outline"
            onClick={() => {
              setFilterType("all");
              setSortBy("price-low");
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default CoursesTab;
