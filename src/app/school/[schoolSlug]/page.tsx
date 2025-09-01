/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "next/navigation";
import { Funnel } from "lucide-react";
import SearchBar from "../../components/ui/SearchBar";
import TeacherGrid from "../../components/teacherSearchDiscovery/TeacherGrid";
import Button from "../../components/ui/Button";
import TeacherFilters from "../../components/teacherSearchDiscovery/TeacherFilter";
import SchoolFooter from "../../components/ui/SchoolFooter";
import type { Teacher } from "../../../lib/types";
import { mockTeachers } from "../../../lib/mock-data/teachers";
import { FilterState } from "../../teacher-search-discovery/page";
import SchoolHeader from "@/app/components/ui/SchoolHeader";
import { School } from "@/lib/mock-data/schools";
import Loader from "@/app/components/ui/Loader";
import PageTitle from "@/app/components/PageTitle";

const itemsPerPage = 8;

const TeacherSearchDiscovery: React.FC = () => {
  const router = useParams();
  const { schoolSlug } = router; // dynamic slug
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<FilterState>({
    school: "",
    languages: "",
    experience: "",
    availability: "",
    ageRange: "",
    rating: "",
    priceRange: "",
    onlineStatus: "",
    lessonType: "",
  });
  const [filteredTeachers, setFilteredTeachers] = useState<Teacher[]>([]);
  const [visibleCount, setVisibleCount] = useState(itemsPerPage);
  const [showFilters, setShowFilters] = useState(false);
  const [loading, setLoading] = useState(true);
  const [school, setSchool] = useState<School>();

  // Filter teachers based on search query + filters + schoolSlug
  const filterTeachers = useCallback(() => {
    const query = searchQuery.toLowerCase();

    return mockTeachers.filter((teacher) => {
      // Filter by schoolSlug
      const matchesSchool = !schoolSlug || teacher.schoolSlug === schoolSlug;

      // Search query filter
      const matchesSearch =
        !query ||
        teacher.name.toLowerCase().includes(query) ||
        teacher.title.toLowerCase().includes(query) ||
        teacher.languages.some((lang) => lang.toLowerCase().includes(query)) ||
        teacher.specialties.some((spec) => spec.toLowerCase().includes(query));

      // Language filter
      const matchesLanguage =
        !filters.languages || teacher.languages.some((lang) => lang.toLowerCase() === filters.languages.toLowerCase());

      // Experience filter
      const matchesExperience =
        !filters.experience ||
        (() => {
          switch (filters.experience) {
            case "beginner":
              return teacher.experience <= 3;
            case "intermediate":
              return teacher.experience > 3 && teacher.experience <= 7;
            case "expert":
              return teacher.experience > 7;
            default:
              return true;
          }
        })();

      return matchesSchool && matchesSearch && matchesLanguage && matchesExperience;
    });
  }, [searchQuery, filters, schoolSlug]);

  // Fetch school info on mount/schoolSlug change
  useEffect(() => {
    // Fetch school info dynamically based on schoolSlug
    if (schoolSlug) {
      setLoading(true);
      fetch(`/api/schools/${schoolSlug}`)
        .then((res) => res.json())
        .then((data) => {
          setSchool(data)
          setLoading(false);
        })
        .catch(() => {
          setSchool(undefined)
          setLoading(false);
        })
    }
  }, [schoolSlug])

  // Update filtered teachers on mount/search/filter change
  useEffect(() => {
    setLoading(true);
    const filtered = filterTeachers();
    setFilteredTeachers(filtered);
    setVisibleCount(itemsPerPage);
    setLoading(false);
  }, [searchQuery, filters, filterTeachers]);


  const handleSearchChange = (query: string) => setSearchQuery(query);

  const handleFilterChange = (newFilters: FilterState) => setFilters(newFilters);

  const handleLoadMore = () => setVisibleCount((prev) => prev + itemsPerPage);

  const displayedTeachers = filteredTeachers.slice(0, visibleCount);
  const hasMore = visibleCount < filteredTeachers.length;

  return (
    <div className="min-h-screen bg-background">

      {loading ? (
        <Loader />   // Show loader while fetching/filtering
      ) : (<>
        {/* Page title */}
        <PageTitle title={"School teachers"} />
        <SchoolHeader schoolLogo={school?.schoolLogo} schoolName={school?.schoolName} />

        <main className="pt-16">

          {/* Hero Section */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h1 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              {schoolSlug ? `${school?.schoolName || schoolSlug} Teachers` : "Find Your Perfect Language Teacher"}
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              {"Connect with qualified instructors from around the world. Choose from 200+ languages and find the perfect match for your child's learning journey."}
            </p>
          </div>

          {/* Search + Filter */}
          <div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="flex-1">
              <SearchBar onSearch={handleSearchChange} />
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
            <TeacherFilters filters={filters} schoolSlug={schoolSlug} onFiltersChange={(value: any) => handleFilterChange(value)} />
          )}

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 my-8">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" className="bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100 cursor-pointer">
                Online
              </Button>
              <Button variant="outline" className="hover:bg-primary/50 border-muted-1 bg-transparent cursor-pointer">
                In-Person
              </Button>
              <Button variant="outline" className="hover:bg-primary/50 border-muted-1 bg-transparent cursor-pointer">
                Group
              </Button>
              <Button variant="outline" className="hover:bg-primary/50 border-muted-1 bg-transparent cursor-pointer">
                1-on-1
              </Button>
              <Button variant="outline" className="hover:bg-primary/50 border-muted-1 bg-transparent cursor-pointer">
                Curriculum-Aligned Games
              </Button>
              <Button variant="outline" className="hover:bg-primary/50 border-muted-1 bg-transparent cursor-pointer">
                Trial Lessons
              </Button>

            </div>
            {/* Teacher Count */}
            <div className="text-sm text-gray-800 whitespace-nowrap">
              {filteredTeachers.length} <span className="text-gray-500">teachers found</span>
            </div>
          </div>

          {/* Teachers List */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <TeacherGrid teachers={displayedTeachers} loading={loading} hasMore={hasMore} onLoadMore={handleLoadMore} />
          </div>

        </main>

        <SchoolFooter />
      </>)}
    </div>
  );
};

export default TeacherSearchDiscovery;
