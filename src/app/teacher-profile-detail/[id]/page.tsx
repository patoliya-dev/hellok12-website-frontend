/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Breadcrumb from "@/app/components/ui/BreadcrumbNavigation";
import TeacherHero from "@/app/components/teacherProfileDetails/TeacherHero";
import TabNavigation from "@/app/components/teacherProfileDetails/TabNavigation";
import AboutTab from "@/app/components/teacherProfileDetails/AboutTab";
import CoursesTab from "@/app/components/teacherProfileDetails/CoursesTab";
import ReviewsTab from "@/app/components/teacherProfileDetails/ReviewsTab";
import TeachingHighlightsManagement from "@/app/components/teachingHighlightsManagement";
import { fetchDetails } from "@/lib/services/teacher-service";
import Loader from "@/app/components/ui/Loader";
import PageTitle from "@/app/components/PageTitle";
import PublicNavigation from "@/app/components/ui/PublicNavigation";
import { mockReviews } from "@/lib/mock-data";

type Teacher = Record<string, any>;

const TeacherProfileDetailPage: React.FC = () => {
  const params = useParams();
  const id = (params as { id?: string })?.id ?? "";

  const [activeTab, setActiveTab] = useState<
    "about" | "courses" | "reviews" | "highlights"
  >("about");

  const [teacher, setTeacher] = useState<Teacher>({});
  const [loading, setLoading] = useState<boolean>(true);

  const loadDetails = async (teacherId: string) => {
    if (!teacherId) return;
    setLoading(true);
    try {
      const response = await fetchDetails(teacherId);
      const teacherDetails = response?.data ?? {};
      setTeacher(teacherDetails);
    } catch (err) {
      console.error("Failed to load teacher details:", err);
      setTeacher({});
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDetails(id);
  }, [id]);

  useEffect(() => {
    // scroll when tab changes
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [activeTab]);

  const reviews = teacher?.feedbacks ?? mockReviews;

  // Calculate rating distribution
  const ratingDistribution = reviews?.reduce(
    (acc: Record<string, number>, review: any) => {
      acc[review.rating] = (acc[review.rating] || 0) + 1;
      return acc;
    },
    {}
  );

  const breadCrumbData = [
    {
      label: "Dashboard",
      path: "/",
    },
    {
      label: "Find Teachers",
      path: "/teacher-search-discovery",
    },
    { label: teacher?.name ?? "Teacher", path: "#", current: true },
  ];

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Page title */}
      <PageTitle title={"Teacher Profile"} />

      <PublicNavigation />
      <main className="pt-16 pb-20 lg:pb-8">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6">
          <Breadcrumb customPath={breadCrumbData} />

          <TeacherHero teacher={teacher} />
        </div>

        <TabNavigation
          activeTab={activeTab}
          onTabChange={(tab) => setActiveTab(tab as 'about' | 'courses' | 'reviews' | 'highlights')}
          classesBadgeCount={teacher?.courses?.length}
          reviewsBadgeCount={reviews?.length}
        />

        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-12">
              {activeTab === "about" && <AboutTab teacher={teacher as any} />}
              {activeTab === "courses" && (
                <CoursesTab courses={teacher?.courses} />
              )}
              {activeTab === "reviews" && (
                <ReviewsTab
                  reviews={teacher?.feedbacks}
                  overallRating={teacher?.rating}
                  ratingDistribution={ratingDistribution}
                />
              )}
              {activeTab === "highlights" && (
                <TeachingHighlightsManagement
                  highlights={teacher?.highlights}
                />
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TeacherProfileDetailPage;
