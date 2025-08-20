import React from 'react';
import Button from '../../components/ui/Button';
import Icon from  '../../components/ui/Icon';

const ActiveFilters = ({ filters, onRemoveFilter, onClearAll }) => {
  const getActiveFilters = () => {
    const active = [];

    if (filters?.languages && filters?.languages?.length > 0) {
      filters?.languages?.forEach(lang => {
        active?.push({
          type: 'languages',
          value: lang,
          label: lang?.charAt(0)?.toUpperCase() + lang?.slice(1),
          displayLabel: `Language: ${lang?.charAt(0)?.toUpperCase() + lang?.slice(1)}`
        });
      });
    }

    if (filters?.experience) {
      active?.push({
        type: 'experience',
        value: filters?.experience,
        label: filters?.experience,
        displayLabel: `Experience: ${filters?.experience} years`
      });
    }

    if (filters?.availability && filters?.availability?.length > 0) {
      filters?.availability?.forEach(avail => {
        active?.push({
          type: 'availability',
          value: avail,
          label: avail,
          displayLabel: `Available: ${avail?.charAt(0)?.toUpperCase() + avail?.slice(1)}`
        });
      });
    }

    if (filters?.priceRange) {
      active?.push({
        type: 'priceRange',
        value: filters?.priceRange,
        label: filters?.priceRange,
        displayLabel: `Price: ${filters?.priceRange === '61+' ? '$61+/hour' : `$${filters?.priceRange}/hour`}`
      });
    }

    if (filters?.minRating) {
      active?.push({
        type: 'minRating',
        value: filters?.minRating,
        label: filters?.minRating,
        displayLabel: `${filters?.minRating}+ stars`
      });
    }

    return active;
  };

  const activeFilters = getActiveFilters();

  if (activeFilters?.length === 0) {
    return null;
  }

  return (
    <div className="bg-muted/50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 flex-wrap gap-2">
            <span className="text-sm font-medium text-text-secondary">
              Active filters:
            </span>
            {activeFilters?.map((filter, index) => (
              <div
                key={`${filter?.type}-${filter?.value}-${index}`}
                className="inline-flex items-center space-x-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
              >
                <span>{filter?.displayLabel}</span>
                <button
                  onClick={() => onRemoveFilter(filter?.type, filter?.value)}
                  className="ml-1 hover:bg-primary/20 rounded-full p-0.5 transition-educational"
                  aria-label={`Remove ${filter?.displayLabel} filter`}
                >
                  <Icon name="X" size={14} />
                </button>
              </div>
            ))}
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={onClearAll}
            iconName="RotateCcw"
            iconSize={14}
          >
            Clear All
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ActiveFilters;