import React from 'react';
import { cn } from "@/lib/utils";

interface Image {
  id: string;
  url: string;
  title: string;
}

interface ImageGridProps {
  images: Image[];
  className?: string;
}

export const ImageGrid = ({ images, className }: ImageGridProps) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", className)}>
      {images.map((image) => (
        <div
          key={image.id}
          className="group relative overflow-hidden rounded-lg aspect-square animate-image-enter"
        >
          <img
            src={image.url}
            alt={image.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <h3 className="text-white font-medium">{image.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};