/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import Icon from "@/app/components/ui/Icon";
import Button from "@/app/components/ui/Button";
import CourseHero from "@/app/components/courseDetails/CourseHero";
import LessonList from "@/app/components/courseDetails/LessonList";
import EnrollmentSection from "@/app/components/courseDetails/EnrollmentSection";
import ReviewsSection from "@/app/components/courseDetails/ReviewsSection";
import LessonModal from "@/app/components/courseDetails/LessonModal";
import { getCourseDetails } from "@/lib/services/course/course.services";
import { errorToast } from "@/lib/utils/utils";
import PageTitle from "@/app/components/PageTitle";
import PublicNavigation from "@/app/components/ui/PublicNavigation";

export default function PublicCourseDetails() {
  const { id } = useParams();
  const router = useRouter();

  const [course, setCourse] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [showLessonModal, setShowLessonModal] = useState(false);

  // Fetch course details
  useEffect(() => {
    const fetchCourse = async () => {
      setIsLoading(true);
      try {
        const { data } = await getCourseDetails(id as string);
        setCourse(data);
      } catch (error: any) {
        errorToast(error.response?.data || error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  // Navigate for enrollment
  const handleEnrollCourse = () => {
    const path = `https://dev-app.hellok12.com/parent/book-lesson/${id}?action=enroll`;
    router.push(path);
  };

  // Trial lesson trigger
  const handleTrialLesson = () => {
    setShowLessonModal(true);
  };

  // Loading placeholder
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        {/* Page title */}
        <PageTitle title={"Course details"} />

        <PublicNavigation />
        <div className="pt-18">
          <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="animate-pulse">
              <div className="h-64 bg-muted rounded-lg mb-8"></div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="h-8 bg-muted rounded mb-4"></div>
                  <div className="h-4 bg-muted rounded mb-4"></div>
                  <div className="space-y-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="h-16 bg-muted rounded"></div>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-1">
                  <div className="h-64 bg-muted rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // If course not found
  if (!course) {
    return (
      <div className="min-h-screen bg-background">
        <PublicNavigation />
        <div className="pt-18">
          <div className="max-w-6xl mx-auto px-6 py-8 text-center">
            <Icon
              name="AlertCircle"
              size={48}
              className="text-muted-foreground mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              Course Not Found
            </h2>
            <p className="text-muted-foreground mb-6">
              The course you&apos;re looking for doesn&apos;t exist or is no
              longer available.
            </p>
            <Button onClick={() => router.push("/")}>
              <Icon name="ArrowLeft" size={16} className="mr-2" />
              Back to Courses
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Main UI
  return (
    <div className="min-h-screen bg-background">
      <PublicNavigation />
      <div className="pt-18">
        <CourseHero
          course={course}
          onEnroll={handleEnrollCourse}
          onTrial={handleTrialLesson}
        />

        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* LEFT SIDE */}
            <div className="lg:col-span-2 space-y-8">
              <LessonList
                lessons={course?.lessons}
                selectedLesson={selectedLesson as any}
              />

              <ReviewsSection id={id as string} />
            </div>

            {/* RIGHT SIDE */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <EnrollmentSection
                  course={course}
                  onEnroll={handleEnrollCourse}
                  onTrial={handleTrialLesson}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TRIAL LESSON MODAL */}
      <LessonModal
        isOpen={showLessonModal}
        lessons={course?.lessons}
        teachers={course?.teachers}
        onClose={() => setShowLessonModal(false)}
        onTrial={() => {
          setShowLessonModal(false);
          router.push(
            `https://dev-app.hellok12.com/parent/book-lesson/${id}?action=trial`
          );
        }}
      />
    </div>
  );
}
