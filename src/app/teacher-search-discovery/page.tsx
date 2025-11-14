/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Funnel } from "lucide-react";
import SearchBar from "@/app/components/ui/SearchBar";
import TeacherGrid from "@/app/components/teacherSearchDiscovery/TeacherGrid";
import Button from "@/app/components/ui/Button";
import TeacherFilters from "@/app/components/teacherSearchDiscovery/TeacherFilter";
import { getAllTeachers } from "@/lib/services/teacher-service";
import type { Teacher } from "@/app/components/teacherSearchDiscovery/TeacherCard";
import PageTitle from "../components/PageTitle";
import PublicNavigation from "../components/ui/PublicNavigation";

export interface FilterState {
  school: string;
  languages: string;
  experience: string;
  availability: string;
  ageRange: string;
  rating: string;
  priceRange: string;
  onlineStatus: string;
  lessonType: string;
}

const itemsPerPage = 8;

export default function FindTeacherPage() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [filters, setFilters] = useState<any>({
    school: "",
    languages: "",
    experience: "",
    availability: "",
    ageRange: "",
    rating: "",
    price: [],
    onlineStatus: "",
    lessonType: "",
    name: "",
  });
  const [quickFilters, setQuickFilters] = useState<any>({
    mode: [],
    lessonType: [],
    isTrialAvailable: false,
  });

  const handleQuickFilterToggle = (filterType: string, value?: string) => {
    setQuickFilters((prev: any) => {
      if (filterType === "isTrialAvailable") {
        return { ...prev, isTrialAvailable: !prev.isTrialAvailable };
      }
      const currentValues: string[] = prev[filterType] ?? [];
      const newValues = currentValues.includes(value!)
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value!];
      return { ...prev, [filterType]: newValues };
    });
  };

  const isFilterActive = (filterType: string, value?: string) => {
    if (filterType === "isTrialAvailable") {
      return quickFilters.isTrialAvailable;
    }
    return quickFilters[filterType]?.includes(value);
  };

  const loadTeachers = useCallback(
    async (loadMore = false) => {
      try {
        const currentOffset = loadMore ? offset : 0;
        setLoading(true);
        const response = await getAllTeachers(
          {
            ...filters,
            name: searchQuery,
            ...quickFilters,
          },
          {
            limit: itemsPerPage,
            offset: currentOffset,
          }
        );

        const newTeachers: Teacher[] = response?.data || [];
        setTeachers(
          loadMore ? (prev) => [...(prev || []), ...newTeachers] : newTeachers // ✅ Handle null
        );
        setOffset(currentOffset + newTeachers.length);
        setHasMore(newTeachers.length === itemsPerPage);
      } catch (err) {
        console.error("Failed to load teachers:", err);
        setTeachers([]);
      } finally {
        setLoading(false);
      }
    },
    [filters, searchQuery, quickFilters, offset]
  );

  useEffect(() => {
    setTeachers([]);
    setOffset(0);
    setHasMore(false);
    loadTeachers(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, searchQuery, quickFilters]);

  return (
    <div className="min-h-screen bg-background">
      {/* Page title */}
      <PageTitle title={"Find Your Perfect Teacher"} />

      <PublicNavigation />

      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              Find Your Perfect Language Teacher
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect with qualified instructors from around the world.
            </p>
          </div>
        </div>

        <div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex-1">
            <SearchBar onSearch={(q) => setSearchQuery(q)} />
          </div>
          <div className="ml-6 h-12">
            <Button
              className="bg-muted-600 hover:bg-muted-700 h-full p-4 border border-muted-100 cursor-pointer"
              onClick={() => setShowFilters((prev) => !prev)}
            >
              <Funnel size={50} className="h-6 w-5 text-primary" />
            </Button>
          </div>
        </div>

        {showFilters && (
          <div className="">
            <TeacherFilters
              filters={filters}
              onFiltersChange={(value: any) => setFilters(value)}
            />
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 my-8">
          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              onClick={() => handleQuickFilterToggle("mode", "online")}
              className={`cursor-pointer transition-colors ${
                isFilterActive("mode", "online")
                  ? "bg-primary text-white border-blue-200 hover:bg-blue-500"
                  : "hover:bg-primary border-muted-1 bg-transparent"
              }`}
            >
              Online
            </Button>

            <Button
              variant="outline"
              onClick={() => handleQuickFilterToggle("mode", "in-person")}
              className={`cursor-pointer transition-colors ${
                isFilterActive("mode", "in-person")
                  ? "bg-primary text-white border-blue-200 hover:bg-blue-500"
                  : "hover:bg-primary border-muted-1 bg-transparent"
              }`}
            >
              In-Person
            </Button>

            <Button
              variant="outline"
              onClick={() => handleQuickFilterToggle("lessonType", "group")}
              className={`cursor-pointer transition-colors ${
                isFilterActive("lessonType", "group")
                  ? "bg-primary text-white border-blue-200 hover:bg-blue-500"
                  : "hover:bg-primary border-muted-1 bg-transparent"
              }`}
            >
              Group
            </Button>

            <Button
              variant="outline"
              onClick={() => handleQuickFilterToggle("lessonType", "1-on-1")}
              className={`cursor-pointer transition-colors ${
                isFilterActive("lessonType", "1-on-1")
                  ? "bg-primary text-white border-blue-200 hover:bg-blue-500"
                  : "hover:bg-primary border-muted-1 bg-transparent"
              }`}
            >
              1-on-1
            </Button>
            <Button
              variant="outline"
              onClick={() => handleQuickFilterToggle("isTrialAvailable")}
              className={`cursor-pointer transition-colors ${
                isFilterActive("isTrialAvailable")
                  ? "bg-primary text-white border-blue-200 hover:bg-blue-500"
                  : "hover:bg-primary border-muted-1 bg-transparent"
              }`}
            >
              Trial Lessons
            </Button>
          </div>
          {/* Teacher Count */}
          <div className="text-sm text-gray-800 whitespace-nowrap">
            {teachers.length}{" "}
            <span className="text-gray-500">teachers found</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <TeacherGrid
            teachers={teachers}
            loading={loading}
            hasMore={hasMore}
            onLoadMore={() => loadTeachers(true)}
          />
        </div>
      </main>
    </div>
  );
}
