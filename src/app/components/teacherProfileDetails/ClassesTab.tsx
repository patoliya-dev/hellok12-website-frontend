/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from 'react';
import Icon from '../../components/ui/Icon';
import Button from '../../components/ui/Button';
import Select from '../../components/ui/Select';
import ClassCard from './ClassCard';

// Define types for class item and props
interface ClassItem {
  id: string | number;
  title: string;
  type: '1-on-1' | 'Group';
  price: number;
  duration: number;
  enrolledStudents?: number;
  maxStudents?: number;
  schedule?: {
    days?: string[];
    time?: string;
  };
  location?: string;
  nextSession?: string;
  description?: string;
}

interface ClassesTabProps {
  courses: ClassItem[];
  teacherId: string | number;
}

const ClassesTab: React.FC<ClassesTabProps> = ({ courses, teacherId }) => {
  // Type state as string | number | array to match Select onChange type
  const [sortBy, setSortBy] = useState<string | number | (string | number)[]>('price-low');
  const [filterType, setFilterType] = useState<string | number | (string | number)[]>('all');

  const sortOptions = [
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'duration', label: 'Duration' },
    { value: 'popularity', label: 'Most Popular' },
  ];

  const typeOptions = [
    { value: 'all', label: 'All Classes' },
    { value: '1-on-1', label: '1-on-1 Classes' },
    { value: 'Group', label: 'Group Classes' },
  ];

  const filteredAndSortedClasses = (): ClassItem[] => {
    let filtered = courses;

    // Filter by type
    if (filterType !== 'all') {
      filtered = filtered?.filter(cls => cls?.type === filterType);
    }

    // Sort courses
    return filtered?.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a?.price - b?.price;
        case 'price-high':
          return b?.price - a?.price;
        case 'duration':
          return a?.duration - b?.duration;
        case 'popularity':
          return (b?.enrolledStudents || 0) - (a?.enrolledStudents || 0);
        default:
          return 0;
      }
    });
  };

  const processedClasses = filteredAndSortedClasses();

  return (
    <div className="space-y-6">
      {/* Filter and Sort Controls */}
      <div className="flex flex-col sm:flex-row gap-4 p-4 bg-muted/30 rounded-lg">
        <div className="flex-1">
          <Select
            label="Filter by Type"
            options={typeOptions}
            value={filterType}
            onChange={(value: any) => setFilterType(value as string)}
            className="w-full"
          />
        </div>
        <div className="flex-1">
          <Select
            label="Sort by"
            options={sortOptions}
            value={sortBy}
            onChange={(value: any) => setSortBy(value as string)}
            className="w-full"
          />
        </div>
      </div>

      {/* Classes Summary */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            Available Classes ({processedClasses?.length})
          </h3>
          <p className="text-sm text-text-secondary">
            Choose from individual or group learning options
          </p>
        </div>
      </div>

      {/* Classes Grid */}
      {processedClasses?.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {processedClasses?.map((classItem) => (
            <ClassCard
              key={classItem?.id}
              classItem={{
                ...classItem,
                id: classItem.id.toString(),   // Convert id to string for ClassCard
              }}
              teacherId={teacherId.toString()}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="BookOpen" size={24} className="text-text-secondary" />
          </div>
          <h3 className="text-lg font-medium text-foreground mb-2">No Classes Found</h3>
          <p className="text-text-secondary mb-4">
            No courses match your current filter criteria.
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setFilterType('all');
              setSortBy('price-low');
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}

      {/* Class Types Info */}
      {/* <div className="grid md:grid-cols-2 gap-4 mt-8">
        <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Icon name="User" size={20} className="text-primary" />
            <h4 className="font-medium text-foreground">1-on-1 Classes</h4>
          </div>
          <p className="text-sm text-text-secondary">
            Personalized attention with flexible scheduling based on your availability and the teacher's calendar.
          </p>
        </div>
        <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Icon name="Users" size={20} className="text-accent" />
            <h4 className="font-medium text-foreground">Group Classes</h4>
          </div>
          <p className="text-sm text-text-secondary">
            Learn with others in a collaborative environment with fixed schedules and structured curriculum.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default ClassesTab;
