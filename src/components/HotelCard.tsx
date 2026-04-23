import Image from "next/image";

interface HotelCardProps {
  title: string;
  location: string;
  price: number;
  rating: number;
  image: string;
}

export default function HotelCard({ title, location, price, rating, image }: HotelCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex-shrink-0 w-[260px] sm:w-[280px]">
      <div className="relative h-44">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-gray-900 text-sm mb-1 leading-snug">{title}</h3>
        <div className="flex items-center gap-1 text-gray-500 text-xs mb-2">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          </svg>
          {location}
        </div>
        <div className="flex mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} className={`w-3.5 h-3.5 ${i < rating ? "text-[#f4a20a]" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
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
