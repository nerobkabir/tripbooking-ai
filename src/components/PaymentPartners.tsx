const payments = [
  { name: "PayPal", color: "#003087" },
  { name: "Stripe", color: "#635bff" },
  { name: "Payoneer", color: "#ff4800" },
  { name: "VISA", color: "#1a1f71" },
  { name: "Cash App", color: "#00d64f" },
  { name: "Bitcoin", color: "#f7931a" },
  { name: "DISCOVER", color: "#ff6600" },
];

export default function PaymentPartners() {
  return (
    <section className="py-10 bg-white border-t border-gray-100">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {payments.map((p) => (
            <span
              key={p.name}
              className="text-base font-bold tracking-tight opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
              style={{ color: p.color }}
            >
              {p.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
