import React from 'react';
import Select from '../../components/ui/Select';
import Button from '../../components/ui/Button';


const SortingControls = ({ sortBy, onSortChange, viewMode, onViewModeChange, resultsCount }) => {
  const sortOptions = [
    { value: 'relevance', label: 'Most Relevant' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'experience', label: 'Most Experienced' },
    { value: 'availability', label: 'Most Available' },
    { value: 'newest', label: 'Newest Teachers' }
  ];

  return (
    <div className="bg-white border-b border-border">
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
          {/* Results Count */}
          <div className="text-sm text-text-secondary">
            <span className="font-medium text-foreground">{resultsCount}</span> teachers found
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            {/* Sort Dropdown */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-text-secondary hidden sm:block">Sort by:</span>
              <Select
                options={sortOptions}
                value={sortBy}
                onChange={onSortChange}
                className="min-w-[160px]"
              />
            </div>

            {/* View Mode Toggle - Desktop Only */}
            <div className="hidden lg:flex items-center space-x-1 bg-muted rounded-educational p-1">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => onViewModeChange('grid')}
                iconName="Grid3X3"
                iconSize={16}
              >
                Grid
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => onViewModeChange('list')}
                iconName="List"
                iconSize={16}
              >
                List
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortingControls;