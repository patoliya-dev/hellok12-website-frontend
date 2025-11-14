"use client";
import React from "react";

const TeacherCardSkeleton: React.FC = () => {
  return (
    <div className="bg-card border border-border rounded-educational animate-pulse">
      <div className="p-6">
        <div className="relative mx-auto w-24 h-24 bg-muted rounded-full mb-4" />

        <div className="space-y-4">
          <div className="text-center space-y-2">
            <div className="h-5 bg-muted rounded w-32 mx-auto" />
            <div className="h-4 bg-muted rounded w-40 mx-auto" />
          </div>

          <div className="flex items-center justify-center">
            <div className="h-4 bg-muted rounded w-24" />
          </div>

          <div className="flex justify-center space-x-2">
            <div className="h-6 bg-muted rounded w-16" />
            <div className="h-6 bg-muted rounded w-20" />
            <div className="h-6 bg-muted rounded w-14" />
          </div>

          <div className="flex items-center justify-center space-x-4">
            <div className="h-4 bg-muted rounded w-12" />
            <div className="h-4 bg-muted rounded w-8" />
          </div>

          <div className="text-center space-y-1">
            <div className="h-6 bg-muted rounded w-16 mx-auto" />
            <div className="h-3 bg-muted rounded w-12 mx-auto" />
          </div>

          <div className="h-10 bg-muted rounded w-full" />
        </div>
      </div>
    </div>
  );
};

export default TeacherCardSkeleton;
