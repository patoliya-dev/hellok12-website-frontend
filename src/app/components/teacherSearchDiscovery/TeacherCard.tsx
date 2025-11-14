"use client";
import React, { useState, MouseEvent } from "react";
import Link from "next/link";
import AppImage from "@/app/components/ui/AppImage";
import Icon from "@/app/components/ui/Icon";
import { State } from "country-state-city";
import { getLanguageName } from "@/lib/utils/utils";

export type LocationShape = {
  country?: string;
  state?: string;
  city?: string;
};

export type Teacher = {
  _id?: string;
  name?: string;
  profileImage?: string;
  isOnline?: boolean;
  isFavorited?: boolean;
  isVerified?: boolean;
  reviewsCount?: number;
  averageRating?: number;
  profile?: {
    teachingLanguages?: string[];
    location?: LocationShape;
    teachingSpecialties?: string;
    yearsOfExperience?: number | null;
  };
  school?: {
    name?: string;
  } | null;
  studentsTaught?: number | null;
};

type Props = {
  teacher: Teacher;
};

const TeacherCard: React.FC<Props> = ({ teacher }) => {
  const [isFavorited, setIsFavorited] = useState<boolean>(
    teacher?.isFavorited ?? false
  );

  const handleFavoriteToggle = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorited((s) => !s);
    // TODO: call API to persist favorite change
  };

  const renderRating = (rating = 0) => {
    return (
      <div className="flex items-center space-x-1">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Icon
              key={i}
              name="Star"
              size={14}
              className={
                i < Math.floor(rating)
                  ? "text-secondary fill-current"
                  : "text-gray-300"
              }
            />
          ))}
        </div>
        <span className="text-sm font-medium text-foreground">
          {(Math.floor(rating * 10) / 10).toFixed(1)}
        </span>
        <span className="text-sm text-muted-foreground">
          ({teacher?.reviewsCount ?? 0})
        </span>
      </div>
    );
  };

  const getFullLocationName = (location?: LocationShape) => {
    if (!location) return "";
    const { country, state, city } = location;
    const stateName = state
      ? State.getStateByCodeAndCountry(state, country as string)?.name
      : "";
    const cityName = city || "";
    return [cityName, stateName].filter(Boolean).join(", ");
  };

  const renderLanguages = (languages?: string[]) => {
    const displayLanguages = languages?.slice(0, 3) ?? [];
    const remainingCount = Math.max(0, (languages?.length ?? 0) - 3);

    return (
      <div className="flex flex-wrap gap-1">
        {displayLanguages.map((lang, index) => (
          <span
            key={index}
            className="inline-block bg-[#f59e0b]/10 text-[#f59e0b] px-2 py-1 rounded text-xs font-medium"
          >
            {getLanguageName(lang) || lang}
          </span>
        ))}
        {remainingCount > 0 && (
          <span className="inline-block bg-muted text-muted-foreground px-2 py-1 rounded-educational text-xs">
            +{remainingCount} more
          </span>
        )}
      </div>
    );
  };

  return (
    <Link
      href={`/teacher-profile-detail/${teacher?._id}`}
      className="block bg-card border border-border rounded-lg hover:shadow-educational-lg transition-educational group hover-lift"
    >
      <div className="relative">
        <div className="relative p-6 pb-4">
          <div className="relative mx-auto w-24 h-24">
            <AppImage
              src={teacher?.profileImage ?? "/assets/images/no_image.png"}
              alt={teacher?.name ?? "Teacher Profile Image"}
              className="w-full h-full rounded-full object-cover"
            />
            {teacher?.isOnline && (
              <div className="absolute bottom-1 right-1 w-4 h-4 bg-accent border-2 border-white rounded-full" />
            )}
          </div>

          <button
            onClick={handleFavoriteToggle}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/90 text-muted-foreground hover:text-secondary hover:bg-white transition-educational"
            aria-label={
              isFavorited ? "Remove from favorites" : "Add to favorites"
            }
          >
            <Icon
              name="Heart"
              size={16}
              className={isFavorited ? "fill-current text-secondary" : ""}
            />
          </button>
        </div>

        <div className="px-6 pb-6">
          <div className="text-center mb-4">
            <div className="flex items-center justify-center space-x-1 mb-1">
              <h3 className="text-lg font-heading font-semibold text-foreground group-hover:text-primary transition-educational">
                {teacher?.name}
              </h3>
              {teacher?.isVerified && (
                <Icon name="BadgeCheck" size={16} className="text-secondary" />
              )}
            </div>

            <div className="mb-4 flex justify-center">
              {renderLanguages(teacher?.profile?.teachingLanguages)}
            </div>

            {teacher?.profile?.location?.country && (
              <p className="text-muted-foreground text-sm mb-2 flex items-center justify-center font-semibold">
                <Icon name="MapPin" className="mr-1 flex-none" size={16} />
                <span className="truncate max-w-full">
                  {getFullLocationName(teacher?.profile?.location)}
                </span>
              </p>
            )}

            <p className="text-muted-foreground text-sm">
              {teacher?.profile?.teachingSpecialties}
            </p>
          </div>

          <div className="flex items-center justify-center mb-3">
            {renderRating(teacher?.averageRating ?? 0)}
          </div>

          <div className="flex items-center justify-center mb-4">
            {teacher?.school ? (
              <>
                <Icon
                  name="School"
                  size={20}
                  className="text-muted-foreground"
                />
                <span className="ml-2 text-sm text-muted-foreground">
                  {teacher?.school?.name}
                </span>
              </>
            ) : (
              <>
                <Icon
                  name="UserRound"
                  size={20}
                  className="text-muted-foreground"
                />
                <span className="ml-2 text-sm text-muted-foreground">
                  Independent Teacher
                </span>
              </>
            )}
          </div>

          <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center space-x-1">
              <Icon name="Users" size={14} />
              <span>{teacher?.studentsTaught ?? 0}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Clock" size={14} />
              <span>{teacher?.profile?.yearsOfExperience ?? 0}y</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TeacherCard;
