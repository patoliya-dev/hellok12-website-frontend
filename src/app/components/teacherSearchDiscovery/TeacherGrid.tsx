"use client";
import React from "react";
import TeacherCard, { Teacher } from "./TeacherCard";
import TeacherCardSkeleton from "./TeacherCardSkeleton";

type Props = {
  teachers?: Teacher[] | null;
  loading?: boolean;
  hasMore?: boolean;
  onLoadMore?: () => void;
};

const TeacherGrid: React.FC<Props> = ({
  teachers,
  loading = false,
  hasMore = false,
  onLoadMore,
}) => {
  const renderSkeletons = () => {
    return Array.from({ length: 8 }, (_, index) => (
      <TeacherCardSkeleton key={`skeleton-${index}`} />
    ));
  };

  const isEmpty = !teachers || teachers.length === 0;

  // Show skeletons on initial load
  if (loading && isEmpty) {
    return (
      <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"}>
        {renderSkeletons()}
      </div>
    );
  }

  // Show empty state only when not loading and no results
  if (!loading && isEmpty) {
    return (
      <div className="text-center py-12">
        <div className="w-24 h-24 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
          <svg
            className="w-12 h-12 text-muted-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
          No teachers found
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Try adjusting your search criteria or filters to find more teachers
          that match your needs.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"}>
        {teachers?.map((teacher) => (
          <TeacherCard key={teacher?._id} teacher={teacher} />
        ))}
      </div>

      {loading && Array.isArray(teachers) && teachers.length > 0 && (
        <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"}>
          {renderSkeletons()}
        </div>
      )}

      {hasMore && !loading && (
        <div className="text-center pt-8">
          <button
            onClick={onLoadMore}
            className="inline-flex rounded-lg items-center space-x-2 px-6 py-3 bg-primary text-white rounded-educational hover:bg-primary/90 transition-educational cursor-pointer"
          >
            <span>Load More Teachers</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      )}

      {!hasMore && Array.isArray(teachers) && teachers.length > 0 && (
        <div className="text-center pt-8 pb-4">
          <p className="text-muted-foreground">{`You've seen all ${teachers.length} teachers matching your criteria`}</p>
        </div>
      )}
    </div>
  );
};

export default TeacherGrid;
