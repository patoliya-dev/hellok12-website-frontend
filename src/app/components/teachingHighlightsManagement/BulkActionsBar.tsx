"use client";

import React from "react";
import Icon from "@/app/components/ui/Icon";
import Button from "@/app/components/ui/Button";

export interface BulkActionsBarProps {
  selectedCount: number;
  totalItems: number;
  onSelectAll: () => void;
  onDeselectAll: () => void;
  onBulkDelete: () => void;
}

const BulkActionsBar: React.FC<BulkActionsBarProps> = ({
  selectedCount,
  totalItems,
  onSelectAll,
  onDeselectAll,
  onBulkDelete,
}) => {
  const allSelected = selectedCount === totalItems && totalItems > 0;

  return (
    <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-6 animate-slide-in">
      <div className="flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Icon name="CheckSquare" size={20} className="text-primary" />
            <span className="font-medium text-foreground">
              {selectedCount} item{selectedCount !== 1 ? "s" : ""} selected
            </span>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={allSelected ? onDeselectAll : onSelectAll}
            iconName={allSelected ? "Square" : "CheckSquare"}
            iconPosition="left"
          >
            {allSelected ? "Deselect All" : "Select All"}
          </Button>
        </div>

        {/* Right */}
        <Button
          variant="destructive"
          size="sm"
          onClick={onBulkDelete}
          iconName="Trash2"
          iconPosition="left"
          disabled={selectedCount === 0}
        >
          Delete Selected
        </Button>
      </div>
    </div>
  );
};

export default BulkActionsBar;
