import React, { useState } from 'react';
import { ImageGrid } from '@/components/ImageGrid';
import { CategoryTabs } from '@/components/CategoryTabs';

const CATEGORIES = [
  "Donation Images",
  "Bills",
  "Organization Homes",
  "Today Images"
];

const IMAGES = {
  "Donation Images": [
    { id: "1", url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b", title: "Tech Donation" },
    { id: "2", url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d", title: "Digital Support" },
    { id: "3", url: "https://images.unsplash.com/photo-1472396961693-142e6e269027", title: "Nature Support" },
  ],
  "Bills": [
    { id: "4", url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9", title: "Bill Payment" },
    { id: "5", url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b", title: "Online Banking" },
    { id: "6", url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d", title: "Digital Bills" },
  ],
  "Organization Homes": [
    { id: "7", url: "https://images.unsplash.com/photo-1721322800607-8c38375eef04", title: "Modern Living" },
    { id: "8", url: "https://images.unsplash.com/photo-1472396961693-142e6e269027", title: "Organized Space" },
    { id: "9", url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9", title: "Home Design" },
  ],
  "Today Images": [
    { id: "10", url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b", title: "Daily Tech" },
    { id: "11", url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d", title: "Work Setup" },
    { id: "12", url: "https://images.unsplash.com/photo-1472396961693-142e6e269027", title: "Nature Today" },
  ],
};

const Index = () => {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);

  return (
    <div className="min-h-screen bg-secondary/30 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center text-secondary-foreground">
          Image Gallery
        </h1>
        
        <CategoryTabs
          categories={CATEGORIES}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          className="justify-center"
        />

        <ImageGrid 
          images={IMAGES[activeCategory as keyof typeof IMAGES]} 
        />
      </div>
    </div>
  );
};

export default Index;