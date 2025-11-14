"use client";

import React, { useEffect, useState } from "react";
import Icon from "@/app/components/ui/Icon";
import Image from "@/app/components/ui/AppImage";
import Button from "@/app/components/ui/Button";
import Loader from "@/app/components/ui/Loader";
import { getFeedbacks } from "@/lib/services/course/course.services";
import { errorToast, getTimeAgo } from "@/lib/utils/utils";

export interface ReviewAuthor {
  name?: string;
  profileImage?: { url: string };
}

export interface ReviewItem {
  _id: string;
  rating: number;
  comment: string;
  createdAt: string;
  progress?: string;
  author?: ReviewAuthor;
}

export interface ReviewsResponse {
  reviews: ReviewItem[];
  averageRating: number;
  reviewsCount: number;
  distribution: Record<number, number>;
}

interface ReviewsSectionProps {
  id: string;
}

const ReviewsSection: React.FC<ReviewsSectionProps> = ({ id }) => {
  const [reviewsData, setReviewsData] = useState<ReviewsResponse | null>(null);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [sortBy, setSortBy] = useState<"recent" | "highest">("recent");
  const [isLoading, setIsLoading] = useState(true);

  // Fetch reviews on load + when filters change
  useEffect(() => {
    const fetchFeedbacksData = async () => {
      setIsLoading(true);

      try {
        const filters: { sortBy: string; limit?: number } = {
          sortBy,
          limit: showAllReviews ? undefined : 3,
        };

        const response = await getFeedbacks(id, filters);
        const data = response.data;

        if (data?.reviews?.length > 0) {
          setReviewsData(data);
        } else {
          setReviewsData(null);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        errorToast(error?.response?.data?.message || error.message);
        setReviewsData(null);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) fetchFeedbacksData();
  }, [id, showAllReviews, sortBy]);

  // Initial loading state
  if (isLoading && !reviewsData) {
    return (
      <section className="bg-card rounded-lg border border-border p-6">
        <Loader />
      </section>
    );
  }

  // No reviews
  if (!reviewsData || reviewsData.reviews.length === 0) return null;

  const { reviews, averageRating, reviewsCount, distribution } = reviewsData;

  const renderStars = (ratingValue: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        size={16}
        className={
          i < Math.floor(ratingValue)
            ? "text-secondary fill-current"
            : "text-muted-foreground"
        }
      />
    ));

  return (
    <section className="bg-card rounded-lg border border-border p-6 relative">
      <h2 className="text-2xl font-semibold text-foreground mb-6">
        Student Reviews
      </h2>

      {/* Rating Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Overall Rating */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
            <span className="text-4xl font-bold text-foreground">
              {Math.round(averageRating * 10) / 10}
            </span>
            <div className="flex space-x-1">{renderStars(averageRating)}</div>
          </div>
          <p className="text-muted-foreground">
            Based on {reviewsCount.toLocaleString()} reviews
          </p>
        </div>

        {/* Rating Breakdown */}
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((star) => {
            const starCount = distribution[star] ?? 0;
            const percentage =
              reviewsCount > 0 ? (starCount / reviewsCount) * 100 : 0;
            return (
              <div key={star} className="flex items-center space-x-3">
                <div className="flex items-center w-12 space-x-1">
                  <span className="text-sm text-muted-foreground">{star}</span>
                  <Icon
                    name="Star"
                    size={12}
                    className="text-secondary fill-current"
                  />
                </div>

                <div className="flex-1 bg-muted rounded-full h-2">
                  <div
                    className="bg-secondary rounded-full h-2 transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                  />
                </div>

                <span className="text-sm text-muted-foreground w-12 text-right">
                  {starCount}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sorting */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-muted-foreground">Sort by:</span>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as "recent" | "highest")}
            className="text-sm border border-border rounded px-2 py-1 bg-background"
            disabled={isLoading}
          >
            <option value="recent">Most Recent</option>
            <option value="highest">Highest Rating</option>
          </select>
        </div>
      </div>

      {/* Reviews */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div
            key={review._id}
            className="border-b border-border pb-6 last:border-none"
          >
            <div className="flex items-start space-x-4">
              <Image
                src={
                  review.author?.profileImage?.url ||
                  "/assets/images/no_image.png"
                }
                alt={review.author?.name || "User"}
                className="w-12 h-12 rounded-full object-cover flex-shrink-0"
              />

              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <h4 className="font-medium text-foreground">
                      {review.author?.name || "Anonymous"}
                    </h4>

                    {review.progress && (
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                        {review.progress}
                      </span>
                    )}
                  </div>

                  <span className="text-sm text-muted-foreground">
                    {getTimeAgo(review.createdAt)}
                  </span>
                </div>

                <div className="flex items-center space-x-1 mb-3">
                  {renderStars(review.rating)}
                  <span className="text-sm text-muted-foreground ml-2">
                    ({review.rating}/5)
                  </span>
                </div>

                <p className="text-muted-foreground">{review.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More / Less */}
      {reviewsCount > 3 && (
        <div className="text-center mt-6">
          <Button
            variant="outline"
            onClick={() => setShowAllReviews(!showAllReviews)}
            disabled={isLoading}
          >
            {showAllReviews ? (
              <>
                <Icon name="ChevronUp" size={16} className="mr-2" />
                Show Less Reviews
              </>
            ) : (
              <>
                <Icon name="ChevronDown" size={16} className="mr-2" />
                Show All {reviewsCount} Reviews
              </>
            )}
          </Button>
        </div>
      )}
    </section>
  );
};

export default ReviewsSection;
