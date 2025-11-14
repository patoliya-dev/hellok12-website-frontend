"use client";

import React from "react";
import Icon from "@/app/components/ui/Icon";
import Image from "@/app/components/ui/AppImage";
import Button from "@/app/components/ui/Button";

export interface MediaModalProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  item: any;
  onClose: () => void;
  onDelete: () => void;
  onReplace: () => void;
}

const MediaModal: React.FC<MediaModalProps> = ({ item, onClose }) => {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const isVideo = item.type.startsWith("video");

  return (
    <div
      className="fixed inset-0 z-100 bg-black/80 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-card rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-modal">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center space-x-3">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                isVideo
                  ? "bg-primary/20 text-primary"
                  : "bg-secondary/20 text-secondary"
              }`}
            >
              <Icon name={isVideo ? "Video" : "Image"} size={16} />
            </div>

            <h3 className="font-semibold text-foreground">{item.name}</h3>
          </div>

          <Button variant="ghost" size="icon" onClick={onClose}>
            <Icon name="X" size={20} />
          </Button>
        </div>

        {/* Body */}
        <div className="p-4">
          <div className="bg-muted rounded-lg overflow-hidden">
            {isVideo ? (
              <video
                src={item.url}
                controls
                autoPlay
                className="w-full max-h-[60vh] object-contain"
              />
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
      </div>
    </div>
  );
};

export default MediaModal;
