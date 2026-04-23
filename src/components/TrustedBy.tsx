const partners = [
  { name: "CASA", color: "#e85d04" },
  { name: "EgyptAir", color: "#00529b" },
  { name: "Air Canada", color: "#d22630" },
  { name: "DELTA", color: "#003a7d" },
  { name: "Air Lines", color: "#c8102e" },
  { name: "WestJet", color: "#009cde" },
  { name: "Xiamen Air", color: "#c41e3a" },
];

export default function TrustedBy() {
  return (
    <section className="bg-white py-10 border-t border-b border-gray-100">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
          <div className="min-w-[180px]">
            <p className="text-lg font-bold text-gray-800">Trusted by</p>
            <p className="text-sm text-gray-500 mt-1 leading-relaxed">
              We are a trusted partner of airlines, payment gateways, and travel services around the world.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            {partners.map((p) => (
              <div
                key={p.name}
                className="border border-gray-200 rounded-lg px-4 py-2 text-sm font-bold hover:border-[#1d5bff] transition-colors cursor-pointer"
                style={{ color: p.color }}
              >
                {p.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
