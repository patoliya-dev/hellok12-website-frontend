"use client";

import React from "react";
import Icon from "../../components/ui/Icon";
import Button from "../../components/ui/Button";
import Select from "../../components/ui/Select";
import { Checkbox, CheckboxGroup } from "../../components/ui/Checkbox";

interface Option {
  value: string;
  label: string;
}

interface Filters {
  languages?: string[];
  experience?: string;
  availability?: string[];
  priceRange?: string;
  minRating?: string;
}

interface FilterSidebarProps {
  filters: Filters;
  onFilterChange: (key: keyof Filters, value: string | string[]) => void;
  onClearFilters: () => void;
  isMobile?: boolean;
  onClose?: () => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  onFilterChange,
  onClearFilters,
  isMobile = false,
  onClose,
}) => {
  const languageOptions: Option[] = [
    { value: "spanish", label: "Spanish" },
    { value: "french", label: "French" },
    { value: "german", label: "German" },
    { value: "italian", label: "Italian" },
    { value: "portuguese", label: "Portuguese" },
    { value: "chinese", label: "Chinese (Mandarin)" },
    { value: "japanese", label: "Japanese" },
    { value: "korean", label: "Korean" },
    { value: "arabic", label: "Arabic" },
    { value: "russian", label: "Russian" },
    { value: "hindi", label: "Hindi" },
    { value: "dutch", label: "Dutch" },
  ];

  const experienceOptions: Option[] = [
    { value: "0-1", label: "0-1 years" },
    { value: "2-5", label: "2-5 years" },
    { value: "6-10", label: "6-10 years" },
    { value: "10+", label: "10+ years" },
  ];

  const availabilityOptions: Option[] = [
    { value: "morning", label: "Morning (6AM - 12PM)" },
    { value: "afternoon", label: "Afternoon (12PM - 6PM)" },
    { value: "evening", label: "Evening (6PM - 10PM)" },
    { value: "weekend", label: "Weekends" },
  ];

  const priceRanges: Option[] = [
    { value: "0-20", label: "$0 - $20/hour" },
    { value: "21-40", label: "$21 - $40/hour" },
    { value: "41-60", label: "$41 - $60/hour" },
    { value: "61+", label: "$61+/hour" },
  ];

  const handleLanguageChange = (selectedLanguages: string[]) => {
    onFilterChange("languages", selectedLanguages);
  };

  const handleExperienceChange = (experience: string) => {
    onFilterChange("experience", experience);
  };

  const handleAvailabilityChange = (availability: string[]) => {
    onFilterChange("availability", availability);
  };

  const handlePriceChange = (priceRange: string) => {
    onFilterChange("priceRange", priceRange);
  };

  const handleRatingChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const rating = e?.target?.checked ? e?.target?.value : "";
    onFilterChange("minRating", rating);
  };

  const sidebarContent = (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-heading font-semibold text-foreground">
          Filter Teachers
        </h3>
        {isMobile && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            iconName="X"
            iconSize={20}
          >
            Close
          </Button>
        )}
      </div>

      {/* Languages */}
      <div className="space-y-3">
        <h4 className="font-medium text-foreground">Languages</h4>
        <Select
          placeholder="Select languages..."
          options={languageOptions}
          value={filters?.languages || []}
          onChange={handleLanguageChange}
          multiple
          searchable
          clearable
        />
      </div>

      {/* Experience Level */}
      <div className="space-y-3">
        <h4 className="font-medium text-foreground">Experience Level</h4>
        <Select
          placeholder="Select experience..."
          options={experienceOptions}
          value={filters?.experience || ""}
          onChange={handleExperienceChange}
          clearable
        />
      </div>

      {/* Availability */}
      <div className="space-y-3">
        <h4 className="font-medium text-foreground">Availability</h4>
        <Select
          placeholder="Select availability..."
          options={availabilityOptions}
          value={filters?.availability || []}
          onChange={handleAvailabilityChange}
          multiple
          clearable
        />
      </div>

      {/* Price Range */}
      <div className="space-y-3">
        <h4 className="font-medium text-foreground">Price Range</h4>
        <Select
          placeholder="Select price range..."
          options={priceRanges}
          value={filters?.priceRange || ""}
          onChange={handlePriceChange}
          clearable
        />
      </div>

      {/* Rating */}
      <div className="space-y-3">
        <h4 className="font-medium text-foreground">Minimum Rating</h4>
        <CheckboxGroup>
          {[5, 4, 3].map((rating) => (
            <Checkbox
              key={rating}
              label={
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={16}
                        className={
                          i < rating
                            ? "text-secondary fill-current"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                  <span className="text-sm">& up</span>
                </div>
              }
              value={rating.toString()}
              checked={filters?.minRating === rating.toString()}
              onChange={handleRatingChange}
            />
          ))}
        </CheckboxGroup>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3 pt-4 border-t border-border">
        <Button
          variant="outline"
          fullWidth
          onClick={onClearFilters}
          iconName="RotateCcw"
          iconSize={16}
        >
          Clear All Filters
        </Button>
        {isMobile && (
          <Button variant="default" fullWidth onClick={onClose}>
            Apply Filters
          </Button>
        )}
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <div className="fixed inset-0 z-50 bg-background overflow-y-auto">
        <div className="p-4">{sidebarContent}</div>
      </div>
    );
  }

  return (
    <div className="bg-surface border-r border-border p-6 h-full overflow-y-auto">
      {sidebarContent}
    </div>
  );
};

export default FilterSidebar;
