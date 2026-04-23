import Image from "next/image";

interface TourCardProps {
  title: string;
  location: string;
  duration: string;
  guests: string;
  price: number;
  image: string;
  badge?: "Top Rated" | "Best Sale" | "25% Off";
}

export default function TourCard({ title, location, duration, guests, price, image, badge }: TourCardProps) {
  const badgeColors: Record<string, string> = {
    "Top Rated": "bg-[#f4a20a]",
    "Best Sale": "bg-emerald-500",
    "25% Off": "bg-red-500",
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex-shrink-0 w-full">
      {/* Image */}
      <div className="relative h-48">
        <Image src={image} alt={title} fill className="object-cover" />
        {badge && (
          <span className={`absolute top-3 left-3 ${badgeColors[badge]} text-white text-[10px] font-bold px-2.5 py-1 rounded-full`}>
            {badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-bold text-gray-900 text-sm mb-1 leading-snug">{title}</h3>
        <div className="flex items-center gap-1 text-gray-500 text-xs mb-2">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          </svg>
          {location}
        </div>
        <div className="flex items-center gap-3 text-gray-500 text-xs mb-4">
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {duration}
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {guests}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-900 font-bold text-sm">
            <span className="text-[#1d5bff]">${price.toFixed(2)}</span>
            <span className="text-gray-400 font-normal text-xs"> / person</span>
          </p>
          <button className="bg-[#1d5bff] hover:bg-[#1448e0] text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
