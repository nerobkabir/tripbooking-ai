"use client";

import { useRef } from "react";
import TourCard from "./TourCard";

const tours = [
  {
    title: "California Sunset/Twilight Boat Cruise",
    location: "Manchester, England",
    duration: "2 days 3 nights",
    guests: "4-6 guest",
    price: 48.25,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    badge: "Top Rated" as const,
  },
  {
    title: "NYC: Food Tastings and Culture Tour",
    location: "Manchester, England",
    duration: "3 days 3 nights",
    guests: "4-6 guest",
    price: 17.32,
    image: "https://images.unsplash.com/photo-1490644658840-3f2e3f8c5625?w=600&q=80",
    badge: "Best Sale" as const,
  },
  {
    title: "Grand Canyon Horseshoe Bend 2 days",
    location: "Manchester, England",
    duration: "7 days 6 nights",
    guests: "4-6 guest",
    price: 15.63,
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&q=80",
    badge: "25% Off" as const,
  },
];

const promoSlides = [
  {
    bg: "from-blue-600 to-blue-800",
    title: "We Make Every Trips Special",
    img: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=300&q=80",
  },
  {
    bg: "from-amber-400 to-amber-500",
    title: "Limited Offers",
    subtitle: "Buy 1, Get 1 Free Attractions",
    img: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=300&q=80",
  },
  {
    bg: "from-sky-500 to-blue-600",
    title: "Limited Offers",
    subtitle: "Buy 1, Get 1 Free Attractions",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=300&q=80",
  },
];

export default function FeaturedTours() {
  const promoRef = useRef<HTMLDivElement>(null);

  const scrollPromo = (dir: "left" | "right") => {
    if (promoRef.current) {
      promoRef.current.scrollBy({ left: dir === "left" ? -280 : 280, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Our Featured Tours</h2>
            <p className="text-sm text-gray-500 mt-1">Favorite destinations based on customer reviews</p>
          </div>
          <div className="flex gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 hover:border-[#1d5bff] hover:text-[#1d5bff] transition-colors text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 hover:border-[#1d5bff] hover:text-[#1d5bff] transition-colors text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6 mb-8">
          {tours.map((tour) => (
            <TourCard key={tour.title} {...tour} />
          ))}
        </div>

        {/* Promo Slides */}
        <div className="relative">
          <button
            onClick={() => scrollPromo("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-7 h-7 bg-white rounded-full shadow flex items-center justify-center text-gray-500 hover:text-[#1d5bff]"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div
            ref={promoRef}
            className="flex gap-4 overflow-x-auto hide-scrollbar pb-1"
          >
            {promoSlides.map((slide, i) => (
              <div
                key={i}
                className={`relative flex-shrink-0 rounded-2xl overflow-hidden bg-gradient-to-br ${slide.bg} h-36 w-[260px] sm:w-[300px] p-4 flex flex-col justify-between`}
              >
                <div className="text-white">
                  {slide.subtitle && <p className="text-xs font-medium opacity-80 mb-1">{slide.title}</p>}
                  <p className="font-bold text-sm leading-snug">{slide.subtitle || slide.title}</p>
                </div>
                <button className="text-xs font-semibold bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-full w-fit transition-colors">
                  View More →
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={() => scrollPromo("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-7 h-7 bg-white rounded-full shadow flex items-center justify-center text-gray-500 hover:text-[#1d5bff]"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
