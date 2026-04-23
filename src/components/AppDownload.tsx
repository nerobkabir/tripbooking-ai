export default function AppDownload() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        <div className="bg-[#1d5bff] rounded-3xl overflow-hidden relative">
          {/* Background decorative circle */}
          <div className="absolute right-0 top-0 w-[350px] h-[350px] bg-white/10 rounded-full translate-x-1/3 -translate-y-1/3" />
          <div className="absolute right-24 bottom-0 w-[200px] h-[200px] bg-white/5 rounded-full translate-y-1/3" />

          <div className="relative z-10 p-8 sm:p-12 max-w-lg">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Find The Best Travel Deals Instantly With AI!
            </h2>
            <p className="text-white/75 text-sm mb-7">
              No more endless searching! Our AI scans thousands of travel packages to find you the best deals — Whether it&apos;s a budget getaway or a luxury escape, we&apos;ll match you with the best deal — instantly!
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-2.5 bg-black text-white px-5 py-2.5 rounded-xl font-medium text-sm hover:bg-gray-900 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div>
                  <div className="text-[10px] opacity-75">Download on the</div>
                  <div className="font-bold">Apple Store</div>
                </div>
              </button>
              <button className="flex items-center gap-2.5 bg-black text-white px-5 py-2.5 rounded-xl font-medium text-sm hover:bg-gray-900 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 20.5v-17c0-.83 1-.83 1.5-.5l15 8.5c.5.25.5.75 0 1L4.5 21c-.5.33-1.5.33-1.5-.5zm2-14.36v11.72l9.5-5.86L5 6.14z" />
                </svg>
                <div>
                  <div className="text-[10px] opacity-75">Get it on</div>
                  <div className="font-bold">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
