import React from 'react';
import { cn } from "@/lib/utils";

interface CategoryTabsProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  className?: string;
}

export const CategoryTabs = ({
  categories,
  activeCategory,
  onCategoryChange,
  className,
}: CategoryTabsProps) => {
  return (
    <div className={cn("flex gap-4 overflow-x-auto pb-4", className)}>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "px-4 py-2 rounded-full transition-colors duration-300 whitespace-nowrap",
            activeCategory === category
              ? "bg-primary text-primary-foreground"
              : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
};