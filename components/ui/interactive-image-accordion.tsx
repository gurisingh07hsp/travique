'use client'

import React, { useState } from 'react';
import Link from 'next/link';

// --- Data for the image accordion ---
const accordionItems = [
  {
    id: 1,
    title: 'Milford Sound',
    imageUrl: '/hero1.jpeg',
  },
  {
    id: 2,
    title: 'Queenstown',
    imageUrl: '/hero2.jpeg',
  },
  {
    id: 3,
    title: 'Airport Transfers',
    imageUrl: '/hero3.jpeg',
  },
  {
    id: 4,
    title: 'Private Tours',
    imageUrl: '/hero6.jpeg',
  },
  {
    id: 5,
    title: 'Ski Transport',
    imageUrl: '/hero5.jpeg',
  },
];

// --- Accordion Item Component ---
interface AccordionItemProps {
  item: {
    id: number;
    title: string;
    imageUrl: string;
  };
  isActive: boolean;
  onMouseEnter: () => void;
}
const AccordionItem = ({ item, isActive, onMouseEnter }: AccordionItemProps) => {
  return (
    <div
      className={`
        relative h-100 md:h-112.5 rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        ${isActive ? 'w-75 md:w-100' : 'w-12.5 md:w-15'}
      `}
      onMouseEnter={onMouseEnter}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = 'https://placehold.co/400x450/2d3748/ffffff?text=Image+Error';
        }}
      />
      {/* Dark overlay for better text readability */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}

      {/* Caption Text */}
      {/* <span
        className={`
          absolute text-white text-lg font-semibold whitespace-nowrap
          transition-all duration-300 ease-in-out
          ${
            isActive
              ? 'bottom-6 left-1/2 -translate-x-1/2 rotate-0' // Active state: horizontal, bottom-center
              : 'w-auto text-left bottom-24 left-1/2 -translate-x-1/2 rotate-90'
          }
        `}
      >
        {item.title}
      </span> */}
    </div>
  );
};

// --- Main Component ---
export function LandingAccordionItem() {
  const [activeIndex, setActiveIndex] = useState(2);

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="font-sans">
      <section className="container mx-auto px-4 pt-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Side: Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-gray-600 text-sm md:text-base mb-2">All you need is MilkyWayTours</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tighter">
              Reliable Airport Transfers & Private Tours Across New Zealand
            </h1>
            <p className="mt-6 text-lg text-gray-700 max-w-xl mx-auto lg:mx-0">
              Experience the beauty of New Zealand with our professional and comfortable travel services.
            </p>
            <div className="mt-8">
              <Link
                href="/tours"
                className="inline-block bg-[#ff7528] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-300"
              >
                Explore Tours
              </Link>
            </div>
          </div>

          {/* Right Side: Image Accordion */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-row items-center justify-center gap-2 md:gap-4 overflow-x-auto py-4">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => handleItemHover(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
