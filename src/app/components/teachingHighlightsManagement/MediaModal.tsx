"use client";

import React from "react";
import Icon from "@/app/components/ui/Icon";
import Image from "@/app/components/ui/AppImage";
import Button from "@/app/components/ui/Button";

export interface MediaItem {
  name: string;
  url: string;
  type?: string; // e.g., "image/png" or "video/mp4"
  size?: number; // optional
  createdAt?: string | Date;
}

interface MediaModalProps {
  item: MediaItem;
  onClose: () => void;
  onDelete?: () => void;
  onReplace?: () => void;
}

const MediaModal: React.FC<MediaModalProps> = ({ item, onClose }) => {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const isVideo = item?.type?.startsWith("video");
  const iconName = isVideo ? "Video" : "Image";

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-card rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-modal">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center space-x-3">
            <div
              className={`
                w-8 h-8 rounded-full flex items-center justify-center
                ${
                  isVideo
                    ? "bg-primary/20 text-primary"
                    : "bg-secondary/20 text-secondary"
                }
              `}
            >
              <Icon name={iconName} size={16} />
            </div>

            <div>
              <h3 className="font-semibold text-foreground">{item.name}</h3>

              {/* Optional: show metadata */}
              {/* {(item.size || item.createdAt) && (
                <p className="text-xs text-muted-foreground mt-1">
                  {item.size && `${formatFileSize(item.size)} • `}
                  {item.createdAt && formatDate(item.createdAt)}
                </p>
              )} */}
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground"
          >
            <Icon name="X" size={20} />
          </Button>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="bg-muted rounded-lg overflow-hidden">
            {isVideo ? (
              <video
                src={item.url}
                controls
                className="w-full max-h-[60vh] object-contain"
                autoPlay
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="flex items-center justify-center min-h-[300px]">
                <Image
                  src={item.url}
                  alt={item.name}
                  className="max-w-full max-h-[60vh] object-contain"
                />
              </div>
            )}
          </div>
        </div>

        {/* Optional footer actions */}
        {/* {(onDelete || onReplace) && (
          <div className="flex items-center justify-end gap-3 p-4 border-t border-border bg-muted/30">
            {onReplace && (
              <Button variant="outline" onClick={onReplace}>
                Replace
              </Button>
            )}
            {onDelete && (
              <Button variant="destructive" onClick={onDelete}>
                Delete
              </Button>
            )}
          </div>
        )} */}
      </div>
    </div>
  );
};

export default MediaModal;
