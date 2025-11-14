"use client";

import React, { useState } from "react";
import Image from "@/app/components/ui/AppImage";
import Icon from "@/app/components/ui/Icon";
import MediaModal from "@/app/components/teachingHighlightsManagement/MediaModal";
import { getLanguageName } from "@/lib/utils/utils";

export interface TeacherMediaItem {
  url: string;
  name?: string;
  mime: string;
  createdAt?: string;
}

export interface TeacherHeroProps {
  teacher: {
    name?: string;
    profileImage?: string;
    isVerified?: boolean;
    isOnline?: boolean;
    nextAvailable?: string;
    averageRating?: number;
    reviewsCount?: number;
    studentsTaught?: number;
    availableCoursesCount?: number;
    intro?: TeacherMediaItem;
    profile?: {
      teachingLanguages?: string[];
      yearsOfExperience?: number;
    };
  };
}

const TeacherHero: React.FC<TeacherHeroProps> = ({ teacher }) => {
  const [modalItem, setModalItem] = useState<TeacherMediaItem | null>(null);

  const getFileIcon = (mime: string) => {
    return mime.startsWith("video") ? "Video" : "Image";
  };

  const handleItemClick = (item: TeacherMediaItem) => {
    if (!item) return;
    setModalItem({
      ...item,
      name: item?.name?.substring(item.name.indexOf("_") + 1) || item.name,
    });
  };

  const handleModalClose = () => setModalItem(null);

  const renderRating = () => {
    const rating = teacher?.averageRating ?? 0;

    return (
      <div className="flex items-center justify-center lg:justify-start gap-1">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Icon
              key={i}
              name="Star"
              size={16}
              className={
                i < Math.floor(rating)
                  ? "text-secondary fill-current"
                  : "text-muted-foreground"
              }
            />
          ))}
        </div>

        <span className="text-sm font-medium text-foreground">
          {(Math.floor(rating * 10) / 10).toFixed(1)}
        </span>

        <span className="text-sm text-muted-foreground">
          ({teacher?.reviewsCount ?? 0} reviews)
        </span>
      </div>
    );
  };

  return (
    <div className="bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6 lg:py-8">
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          {/* LEFT SECTION */}
          <div className="flex flex-col lg:flex-row lg:items-start gap-6 flex-1">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-primary/20">
                  <Image
                    src={teacher?.profileImage || "/assets/images/no_image.png"}
                    alt={teacher?.name || "Teacher Image"}
                    className="w-full h-full object-cover"
                  />
                </div>

                {teacher?.isVerified && (
                  <div className="absolute -bottom-1 right-3 w-8 h-8 bg-accent rounded-full flex items-center justify-center border-2 border-card">
                    <Icon name="CheckCircle" size={16} color="white" />
                  </div>
                )}
              </div>
            </div>

            {/* Teacher Info */}
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-4">
                <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                  {teacher?.name}
                </h1>

                {/* Teaching Languages */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-3">
                  {teacher?.profile?.teachingLanguages?.map((lang, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#2563eb]/10 text-[#2563eb] text-sm font-medium rounded-full"
                    >
                      {getLanguageName(lang) || lang}
                    </span>
                  ))}
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center lg:justify-start mb-3">
                  {renderRating()}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6 lg:max-w-md">
                <div className="text-center">
                  <div className="text-lg font-bold text-foreground">
                    {teacher?.profile?.yearsOfExperience ?? 0}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Years Experience
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-lg font-bold text-foreground">
                    {teacher?.studentsTaught ?? 0}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Students Taught
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-lg font-bold text-foreground">
                    {teacher?.availableCoursesCount ?? 0}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Courses Available
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION — Intro Video/Image */}
          <div className="flex justify-center lg:justify-end lg:flex-1">
            {teacher?.intro && (
              <div
                className="relative aspect-video max-w-lg w-full bg-muted cursor-pointer"
                onClick={() => handleItemClick(teacher.intro!)}
              >
                {teacher?.intro?.mime.startsWith("video") ? (
                  <>
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                      <Icon
                        name="Play"
                        size={24}
                        className="text-primary ml-1"
                      />
                    </div>

                    <video
                      src={teacher?.intro?.url}
                      className="absolute inset-0 w-full h-full object-cover"
                      muted
                    />
                  </>
                ) : (
                  <Image
                    src={teacher?.intro?.url}
                    alt={teacher?.intro?.name || "Media"}
                    className="w-full h-full object-cover"
                  />
                )}

                {/* MIME Label */}
                <div className="absolute top-2 right-2">
                  <div
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      teacher.intro.mime.startsWith("video")
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    <Icon
                      name={getFileIcon(teacher.intro.mime)}
                      size={12}
                      className="inline mr-1"
                    />
                    {teacher.intro.mime.split("/")[0].toUpperCase()}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalItem && (
        <MediaModal
          item={modalItem}
          onClose={handleModalClose}
          onDelete={handleModalClose}
          onReplace={handleModalClose}
        />
      )}
    </div>
  );
};

export default TeacherHero;
