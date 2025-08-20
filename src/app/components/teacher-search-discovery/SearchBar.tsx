"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import Icon from "../../components/ui/Icon";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onFilterToggle: () => void;
  showMobileFilters: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearchChange,
  onFilterToggle,
  showMobileFilters,
}) => {
  const [localQuery, setLocalQuery] = useState<string>(searchQuery);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearchChange(localQuery);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalQuery(value);

    // Real-time search on desktop
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      onSearchChange(value);
    }
  };

  return (
    <div className="bg-white border-b border-border sticky top-16 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <form onSubmit={handleSearch} className="flex items-center space-x-3">
          {/* Search Input */}
          <div className="flex-1 relative">
            <Input
              type="search"
              placeholder="Search by teacher name, language, or location..."
              value={localQuery}
              onChange={handleInputChange}
              className="pl-10 pr-4"
            />
            <Icon
              name="Search"
              size={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary"
            />
          </div>

          {/* Mobile Filter Button */}
          <Button
            type="button"
            variant="outline"
            size="default"
            onClick={onFilterToggle}
            className="md:hidden"
            iconName="Filter"
            iconSize={20}
          >
            {showMobileFilters ? "Hide" : "Filter"}
          </Button>

          {/* Desktop Search Button */}
          <Button
            type="submit"
            variant="default"
            className="hidden md:flex"
            iconName="Search"
            iconSize={18}
          >
            Search
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
