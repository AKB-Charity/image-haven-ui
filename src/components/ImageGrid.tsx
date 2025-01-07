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
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", className)}>
      {images.map((image) => (
        <div
          key={image.id}
          className="group relative overflow-hidden rounded-2xl aspect-square animate-image-enter shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="absolute inset-2 border-2 border-primary/20 rounded-xl z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 border-4 border-secondary/30 rounded-2xl"></div>
          <img
            src={image.url}
            alt={image.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <div className="w-full">
              <h3 className="text-white font-sans font-medium text-lg tracking-wide mb-2">
                {image.title}
              </h3>
              <div className="h-1 w-16 bg-primary rounded-full"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};