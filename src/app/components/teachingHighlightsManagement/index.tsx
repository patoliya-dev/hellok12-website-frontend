"use client";

import React, { useEffect, useState } from "react";
import FilterTabs from "./FilterTabs";
import BulkActionsBar from "./BulkActionsBar";
import MediaGallery from "./MediaGallery";

export interface MediaItem {
  _id: string;
  id?: string;
  name: string;
  url: string;
  mime: string;
  size?: number;
  createdAt?: string;
}

interface TeachingHighlightsManagementProps {
  highlights: MediaItem[];
}

const TeachingHighlightsManagement: React.FC<
  TeachingHighlightsManagementProps
> = ({ highlights }) => {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<MediaItem[]>([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  useEffect(() => {
    setMediaItems(highlights);
  }, [highlights]);

  // Filtering logic
  useEffect(() => {
    let filtered = mediaItems;

    if (activeFilter === "videos")
      filtered = mediaItems.filter((i) => i.mime.startsWith("video"));

    if (activeFilter === "images")
      filtered = mediaItems.filter((i) => i.mime.startsWith("image"));

    if (searchQuery.trim()) {
      filtered = filtered.filter((i) =>
        i.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredItems(filtered);
  }, [mediaItems, activeFilter, searchQuery]);

  // Selections
  const handleItemSelect = (id: string) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () =>
    setSelectedItems(filteredItems.map((item) => item._id));

  const handleDeselectAll = () => setSelectedItems([]);

  const handleItemDelete = (id: string) => {
    setMediaItems((prev) => prev.filter((item) => item._id !== id));
    setSelectedItems((prev) => prev.filter((x) => x !== id));
  };

  const handleBulkDelete = () => {
    if (
      confirm(
        `Are you sure you want to delete ${selectedItems.length} item${
          selectedItems.length !== 1 ? "s" : ""
        }?`
      )
    ) {
      setMediaItems((prev) =>
        prev.filter((item) => !selectedItems.includes(item._id))
      );
      setSelectedItems([]);
    }
  };

  const handleItemReplace = (id: string) => {
    console.log("Replace item:", id);
  };

  const mediaCounts = {
    all: mediaItems.length,
    videos: mediaItems.filter((i) => i.mime.startsWith("video")).length,
    images: mediaItems.filter((i) => i.mime.startsWith("image")).length,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <FilterTabs
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        mediaCounts={mediaCounts}
      />

      {selectedItems.length > 0 && (
        <BulkActionsBar
          selectedCount={selectedItems.length}
          totalItems={filteredItems.length}
          onSelectAll={handleSelectAll}
          onDeselectAll={handleDeselectAll}
          onBulkDelete={handleBulkDelete}
        />
      )}

      <MediaGallery
        mediaItems={filteredItems}
        selectedItems={selectedItems}
        onItemSelect={handleItemSelect}
        onItemDelete={handleItemDelete}
        onItemReplace={handleItemReplace}
        showBulkActions={selectedItems.length > 0}
      />
    </div>
  );
};

export default TeachingHighlightsManagement;
