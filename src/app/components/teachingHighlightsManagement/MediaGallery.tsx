/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import Icon from "@/app/components/ui/Icon";
import Image from "@/app/components/ui/AppImage";
import Button from "@/app/components/ui/Button";
import MediaModal from "./MediaModal";
import { MediaItem } from "./index";

export interface MediaGalleryProps {
  mediaItems: MediaItem[];
  selectedItems: string[];
  onItemSelect: (id: string) => void;
  onItemDelete: (id: string) => void;
  onItemReplace: (id: string) => void;
  showBulkActions: boolean;
}

const MediaGallery: React.FC<MediaGalleryProps> = ({
  mediaItems,
  selectedItems,
  onItemSelect,
  onItemDelete,
  onItemReplace,
  showBulkActions,
}) => {
  const [modalItem, setModalItem] = useState<any>(null);

  const getFileIcon = (mime: string) =>
    mime.startsWith("video") ? "Video" : "Image";

  const formatFileSize = (bytes = 0) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / k ** i).toFixed(2))} ${sizes[i]}`;
  };

  const formatDate = (date?: string) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
      day: "numeric",
    });
  };

  const handleItemClick = (item: MediaItem) => {
    setModalItem({
      ...item,
      name: item.name.substring(item.name.indexOf("_") + 1),
      type: item.mime,
      uploadDate: item.createdAt,
    });
  };

  const closeModal = () => setModalItem(null);

  if (!mediaItems?.length) {
    return (
      <div className="bg-card rounded-xl p-12 text-center">
        <div className="w-20 h-20 mx-auto bg-muted rounded-full flex items-center justify-center mb-4">
          <Icon name="FileImage" size={40} className="text-muted-foreground" />
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-2">
          No highlights yet
        </h3>

        <p className="text-muted-foreground mb-6">
          Start building your teaching portfolio
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {mediaItems.map((item) => (
          <div
            key={item._id}
            className="bg-card rounded-lg border border-border overflow-hidden shadow-card hover:shadow-modal transition-all hover-scale"
          >
            {/* Checkbox (Bulk Select Mode) */}
            {showBulkActions && (
              <div className="absolute top-2 left-2 z-10">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item._id)}
                  onChange={() => onItemSelect(item._id)}
                  className="w-4 h-4 text-primary bg-card border-border rounded focus:ring-2 focus:ring-primary"
                />
              </div>
            )}

            {/* Thumbnail */}
            <div
              className="relative aspect-video bg-muted cursor-pointer"
              onClick={() => handleItemClick(item)}
            >
              {item.mime.startsWith("video") ? (
                <>
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Icon name="Play" size={24} className="text-primary" />
                    </div>
                  </div>

                  <video
                    src={item.url}
                    className="absolute inset-0 w-full h-full object-cover"
                    muted
                  />
                </>
              ) : (
                <Image
                  src={item.url}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              )}

              {/* MIME Indicator */}
              <div className="absolute top-2 right-2">
                <div
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    item.mime.startsWith("video")
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  <Icon
                    name={getFileIcon(item.mime)}
                    size={12}
                    className="inline mr-1"
                  />
                  {item.mime.split("/")[0].toUpperCase()}
                </div>
              </div>
            </div>

            {/* Meta */}
            <div className="p-3">
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium truncate">
                    {item.name.substring(item.name.indexOf("_") + 1)}
                  </h4>

                  <div className="flex items-center space-x-2 mt-1 text-xs text-muted-foreground">
                    <span>{formatFileSize(item.size)}</span>
                    <span>•</span>
                    <span>{formatDate(item.createdAt)}</span>
                  </div>
                </div>

                {/* Item Menu */}
                <div className="relative group">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Icon name="MoreVertical" size={14} />
                  </Button>

                  <div className="absolute right-0 top-full mt-1 w-32 bg-popover border border-border rounded-lg shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
                    <button
                      onClick={() => handleItemClick(item)}
                      className="w-full px-3 py-2 text-left text-sm hover:bg-muted flex items-center space-x-2"
                    >
                      <Icon name="Eye" size={14} />
                      <span>View</span>
                    </button>

                    <button
                      onClick={() => onItemReplace(item._id)}
                      className="w-full px-3 py-2 text-left text-sm hover:bg-muted flex items-center space-x-2"
                    >
                      <Icon name="RefreshCw" size={14} />
                      <span>Replace</span>
                    </button>

                    <button
                      onClick={() => onItemDelete(item._id)}
                      className="w-full px-3 py-2 text-left text-sm text-error hover:bg-error/10 flex items-center space-x-2"
                    >
                      <Icon name="Trash2" size={14} />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {modalItem && (
        <MediaModal
          item={modalItem}
          onClose={closeModal}
          onDelete={() => {
            modalItem._id && onItemDelete(modalItem._id);
            closeModal();
          }}
          onReplace={() => {
            modalItem._id && onItemReplace(modalItem._id);
            closeModal();
          }}
        />
      )}
    </>
  );
};

export default MediaGallery;
