"use client";

import React from "react";
import Icon from "@/app/components/ui/Icon";

export interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  classesBadgeCount?: number;
  reviewsBadgeCount?: number;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  activeTab,
  onTabChange,
}) => {
  const tabs = [
    { id: "about", label: "About", icon: "User" },
    {
      id: "courses",
      label: "Courses",
      icon: "BookOpen",
    },
    {
      id: "reviews",
      label: "Reviews",
      icon: "Star",
    },
    {
      id: "highlights",
      label: "Highlights",
      icon: "Clapperboard",
    },
  ];

  return (
    <div className="bg-card border-b border-border sticky top-16 z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <nav className="flex" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`${tab.id}-panel`}
              className={`flex items-center gap-2 px-4 py-4 text-sm font-medium border-b-2 transition-smooth ${
                activeTab === tab.id
                  ? "text-primary border-primary"
                  : "text-muted-foreground border-transparent hover:text-foreground hover:border-border"
              }`}
              onClick={() => onTabChange(tab.id)}
            >
              <Icon name={tab.icon} size={16} />
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default TabNavigation;
