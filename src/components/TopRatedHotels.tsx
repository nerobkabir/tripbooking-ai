"use client";

import { useRef } from "react";
import HotelCard from "./HotelCard";

const hotels = [
  {
    title: "California Sunset/Twilight Boat Cruise",
    location: "Manchester, England",
    price: 48.25,
    rating: 5,
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80",
  },
  {
    title: "NYC: Food Tastings and Culture Tour",
    location: "Manchester, England",
    price: 17.32,
    rating: 5,
    image: "https://images.unsplash.com/photo-1490644658840-3f2e3f8c5625?w=600&q=80",
  },
  {
    title: "Grand Canyon Horseshoe Bend 2 days",
    location: "Manchester, England",
    price: 15.63,
    rating: 5,
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&q=80",
  },
  {
    title: "California Sunset/Twilight Boat Cruise",
    location: "Manchester, England",
    price: 48.25,
    rating: 5,
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80",
  },
];

export default function TopRatedHotels() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-[#eef6ff]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Top Rated Hotels</h2>
            <p className="text-sm text-gray-500 mt-1">Quality as judged by customers. Book at the ideal price!</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 bg-white hover:border-[#1d5bff] hover:text-[#1d5bff] transition-colors text-gray-500"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 bg-white hover:border-[#1d5bff] hover:text-[#1d5bff] transition-colors text-gray-500"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto hide-scrollbar pt-6 pb-2"
        >
          {hotels.map((hotel, i) => (
            <HotelCard key={i} {...hotel} />
          ))}
        </div>
      </div>
    </section>
  );
}
