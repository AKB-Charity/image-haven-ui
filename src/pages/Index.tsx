import React from 'react';
import { ImageGrid } from '@/components/ImageGrid';

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
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/50 to-secondary/20 py-12 px-6">
      <div className="max-w-7xl mx-auto space-y-20">
        <header className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold font-display text-secondary-foreground">
            Image Gallery
          </h1>
          <p className="text-lg text-secondary-foreground/80 font-sans max-w-2xl mx-auto">
            Explore our curated collection of beautiful images across various categories
          </p>
        </header>
        
        {CATEGORIES.map((category) => (
          <section key={category} className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-secondary-foreground inline-block relative">
                {category}
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 rounded-full"></span>
              </h2>
            </div>
            <ImageGrid 
              images={IMAGES[category as keyof typeof IMAGES]} 
              className="px-4"
            />
          </section>
        ))}
      </div>
    </div>
  );
};

export default Index;