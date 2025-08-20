import React from 'react';

const TeacherCardSkeleton = ({ viewMode = 'grid' }) => {
  if (viewMode === 'list') {
    return (
      <div className="bg-card border border-border rounded-educational p-6 animate-pulse">
        <div className="flex items-start space-x-4">
          {/* Profile Image Skeleton */}
          <div className="flex-shrink-0">
            <div className="w-20 h-20 bg-muted rounded-full"></div>
          </div>

          {/* Content Skeleton */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div className="flex-1 space-y-3">
                {/* Name and Title */}
                <div className="space-y-2">
                  <div className="h-5 bg-muted rounded w-32"></div>
                  <div className="h-4 bg-muted rounded w-48"></div>
                </div>

                {/* Rating and Stats */}
                <div className="flex items-center space-x-4">
                  <div className="h-4 bg-muted rounded w-20"></div>
                  <div className="h-4 bg-muted rounded w-16"></div>
                  <div className="h-4 bg-muted rounded w-16"></div>
                </div>

                {/* Languages */}
                <div className="flex space-x-2">
                  <div className="h-6 bg-muted rounded w-16"></div>
                  <div className="h-6 bg-muted rounded w-20"></div>
                  <div className="h-6 bg-muted rounded w-14"></div>
                </div>
              </div>

              {/* Price and Actions */}
              <div className="flex flex-col items-end space-y-3 ml-4">
                <div className="text-right space-y-1">
                  <div className="h-6 bg-muted rounded w-16"></div>
                  <div className="h-3 bg-muted rounded w-12"></div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-muted rounded"></div>
                  <div className="h-8 bg-muted rounded w-20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-educational animate-pulse">
      <div className="p-6">
        {/* Profile Image Skeleton */}
        <div className="relative mx-auto w-24 h-24 bg-muted rounded-full mb-4"></div>

        {/* Content Skeleton */}
        <div className="space-y-4">
          {/* Name and Title */}
          <div className="text-center space-y-2">
            <div className="h-5 bg-muted rounded w-32 mx-auto"></div>
            <div className="h-4 bg-muted rounded w-40 mx-auto"></div>
          </div>

          {/* Rating */}
          <div className="flex items-center justify-center">
            <div className="h-4 bg-muted rounded w-24"></div>
          </div>

          {/* Languages */}
          <div className="flex justify-center space-x-2">
            <div className="h-6 bg-muted rounded w-16"></div>
            <div className="h-6 bg-muted rounded w-20"></div>
            <div className="h-6 bg-muted rounded w-14"></div>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center space-x-4">
            <div className="h-4 bg-muted rounded w-12"></div>
            <div className="h-4 bg-muted rounded w-8"></div>
          </div>

          {/* Price */}
          <div className="text-center space-y-1">
            <div className="h-6 bg-muted rounded w-16 mx-auto"></div>
            <div className="h-3 bg-muted rounded w-12 mx-auto"></div>
          </div>

          {/* Action Button */}
          <div className="h-10 bg-muted rounded w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default TeacherCardSkeleton;