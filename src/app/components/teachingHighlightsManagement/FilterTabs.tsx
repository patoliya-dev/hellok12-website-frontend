"use client";

import React from "react";
import Icon from "@/app/components/ui/Icon";
import Input from "@/app/components/ui/Input";

export interface FilterTabsProps {
  activeFilter: string;
  onFilterChange: (id: string) => void;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  mediaCounts: {
    all: number;
    videos: number;
    images: number;
  };
}

const FilterTabs: React.FC<FilterTabsProps> = ({
  activeFilter,
  onFilterChange,
  searchQuery,
  onSearchChange,
  mediaCounts,
}) => {
  const filters = [
    { id: "all", label: "All Media", icon: "Grid3X3", count: mediaCounts.all },
    { id: "videos", label: "Videos", icon: "Video", count: mediaCounts.videos },
    { id: "images", label: "Images", icon: "Image", count: mediaCounts.images },
  ];

  return (
    <div className="bg-card rounded-xl p-4 mb-6 border border-border">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Filters */}
        <div className="flex items-center space-x-1 bg-muted p-1 rounded-lg">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => onFilterChange(filter.id)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all ${
                activeFilter === filter.id
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-card"
              }`}
            >
              <Icon name={filter.icon} size={16} />
              <span>{filter.label}</span>

              <span
                className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                  activeFilter === filter.id
                    ? "bg-primary-foreground/20 text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="w-full sm:w-64">
          <Input
            type="search"
            placeholder="Search your highlights..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterTabs;
