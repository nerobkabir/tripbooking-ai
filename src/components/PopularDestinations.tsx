import Image from "next/image";

const destinations = [
  { name: "Venice", tours: 356, img: "https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?w=400&q=80" },
  { name: "Amsterdam", tours: 356, img: "https://images.unsplash.com/photo-1545158535-c3f7168c28b6?w=400&q=80" },
  { name: "Budapest", tours: 356, img: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?w=400&q=80" },
  { name: "Lisbon", tours: 356, img: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=400&q=80" },
  { name: "London", tours: 356, img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&q=80" },
  { name: "Ottawa", tours: 356, img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&q=80" },
  { name: "Paris", tours: 356, img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80" },
];

export default function PopularDestinations() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1">Popular Destinations</h2>
        <p className="text-sm text-gray-500 mb-8">Favorite destinations based on customer reviews</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {destinations.map((dest, i) => (
            <div
              key={dest.name}
              className="group relative rounded-xl overflow-hidden cursor-pointer"
              style={{ height: "200px" }}
            >
              <Image
                src={dest.img}
                alt={dest.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 flex items-end justify-between">
                <div>
                  <p className="text-white font-bold text-sm">{dest.name}</p>
                  <p className="text-white/80 text-xs">{dest.tours} Tours</p>
                </div>
                <button className="text-white">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}

          
          <div className="bg-[#1d5bff] rounded-xl p-5 flex flex-col justify-between" style={{ height: "200px" }}>
            <h3 className="text-white font-bold text-base leading-snug">
              Crafting Your Perfect Travel Experience
            </h3>
            <button className="flex items-center gap-2 bg-[#f4a20a] text-white text-xs font-semibold px-4 py-2 rounded-full w-fit">
              Browse All destinations
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
