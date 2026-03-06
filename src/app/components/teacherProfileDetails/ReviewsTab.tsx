"use client";

import React, { useState } from "react";
import Icon from "@/app/components/ui/Icon";
import Button from "@/app/components/ui/Button";
import Select from "@/app/components/ui/Select";
import ReviewCard, { TeacherReview } from "./ReviewCard";

export interface ReviewsTabProps {
  reviews?: TeacherReview[];
  overallRating?: number;
  ratingDistribution?: Record<string, number>;
}

const ReviewsTab: React.FC<ReviewsTabProps> = ({
  reviews = [],
}) => {
  const [sortBy, setSortBy] = useState<string>("newest");
  const [filterRating, setFilterRating] = useState<string>("all");

  const sortOptions = [
    { value: "newest", label: "Newest First" },
    { value: "oldest", label: "Oldest First" },
    { value: "highest", label: "Highest Rating" },
    { value: "lowest", label: "Lowest Rating" },
  ];

  const ratingOptions = [
    { value: "all", label: "All Ratings" },
    { value: "5", label: "5 Stars" },
    { value: "4", label: "4 Stars" },
    { value: "3", label: "3 Stars" },
    { value: "2", label: "2 Stars" },
    { value: "1", label: "1 Star" },
  ];

  const filteredAndSortedReviews = () => {
    let filtered = [...reviews];

    // Filter by rating
    if (filterRating !== "all") {
      filtered = filtered.filter(
        (review) => review.rating === parseInt(filterRating, 10)
      );
    }

    // Sort reviews
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );

        case "oldest":
          return (
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          );

        case "highest":
          return b.rating - a.rating;

        case "lowest":
          return a.rating - b.rating;

        default:
          return 0;
      }
    });
  };

  const processedReviews = filteredAndSortedReviews();

  return (
    <div className="space-y-6">
      {/* Filter & Sort Block */}
      <div className="flex flex-col sm:flex-row gap-4 p-4 bg-muted/30 rounded-lg">
        <div className="flex-1">
          <Select
            label="Filter by Rating"
            options={ratingOptions}
            value={filterRating}
            onChange={(val) => setFilterRating(val as string)}
            className="w-full"
          />
        </div>

        <div className="flex-1">
          <Select
            label="Sort by"
            options={sortOptions}
            value={sortBy}
            onChange={(val) => setSortBy(val as string)}
            className="w-full"
          />
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">
          Student Reviews ({processedReviews.length})
        </h3>
      </div>

      {/* Reviews List */}
      {processedReviews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {processedReviews.map((review) => (
            <ReviewCard key={review._id || review.createdAt} review={review} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Star" size={24} className="text-muted-foreground" />
          </div>

          <h3 className="text-lg font-medium text-foreground mb-2">
            No Reviews Found
          </h3>

          <p className="text-muted-foreground mb-4">
            No reviews match your current filter criteria.
          </p>

          <Button
            variant="outline"
            onClick={() => {
              setFilterRating("all");
              setSortBy("newest");
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default ReviewsTab;
