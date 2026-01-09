const SimplePage = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 sm:p-8 relative overflow-hidden">

      <div className="max-w-md w-full text-center space-y-6 sm:space-y-8 relative z-10">

        {/* Logo Only - Clean & Simple */}
        <div className="relative pt-8 sm:pt-12 pb-8 mb-6 border-b-2 border-brand-yellow/30">
          <div className="absolute inset-0 bg-brand-yellow/10 blur-3xl opacity-50"></div>
          <img
            src="/logo.png"
            alt="Dump Haul Go"
            className="h-32 sm:h-40 md:h-48 w-auto mx-auto drop-shadow-2xl relative z-10"
          />
          {/* Decorative accent line */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-brand-yellow to-transparent"></div>
        </div>

        {/* Primary CTA - Click to Call */}
        <a
          href="tel:+19152553867"
          className="block relative overflow-hidden group"
        >
          {/* Outer glow ring */}
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-yellow via-yellow-300 to-brand-yellow rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300"></div>

          {/* Main button */}
          <div className="relative bg-gradient-to-br from-brand-yellow via-yellow-400 to-yellow-500 rounded-2xl p-1 shadow-2xl">
            {/* Inner content container with border */}
            <div className="bg-gradient-to-br from-yellow-300 via-brand-yellow to-yellow-400 rounded-2xl py-3 sm:py-4 px-6 border-2 border-yellow-200/50 group-hover:border-white/60 transition-all duration-300 group-hover:scale-[1.02] transform">
              <div className="font-body text-sm sm:text-base text-black font-extrabold tracking-[0.15em] mb-2 drop-shadow-sm">
                CALL OR TEXT FOR SERVICE
              </div>
              <div className="font-display text-4xl sm:text-5xl md:text-6xl text-black font-bold tracking-wide leading-tight mb-2 drop-shadow-md">
                (915) 255-DUMP
              </div>
              <div className="font-body text-xs sm:text-sm text-black font-bold tracking-wide flex items-center justify-center gap-2 drop-shadow-sm">
                <svg className="w-4 h-4 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                El Paso, Texas Area
              </div>
            </div>
          </div>

          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 rounded-2xl"></div>
        </a>

        {/* Dumpster Image */}
        <div className="relative">
          {/* Frosted background container */}
          <div className="relative bg-white/10 backdrop-blur-md rounded-t-2xl p-6 sm:p-8 shadow-2xl">
            <img
              src="/dump.png"
              alt="15 Yard Dumpster"
              className="w-full h-auto relative z-10"
            />
          </div>

          {/* Price Banner - Seamlessly connected to image */}
          <div className="relative -mt-1">
            {/* Yellow glow background */}
            <div className="absolute inset-0 bg-brand-yellow blur-2xl opacity-20"></div>

            {/* Main price container */}
            <div className="relative bg-gradient-to-r from-brand-yellow via-yellow-400 to-brand-yellow rounded-b-2xl px-6 py-5 sm:py-6 shadow-2xl shadow-brand-yellow/40">
              <div className="flex items-center justify-center gap-6 sm:gap-8">
                {/* Size badge */}
                <div className="bg-black/90 backdrop-blur-sm rounded-full px-6 py-2.5 sm:px-8 sm:py-3 border-2 border-black">
                  <div className="font-display text-brand-yellow text-base sm:text-lg font-bold tracking-[0.25em]">
                    15 YARD
                  </div>
                </div>

                {/* Divider */}
                <div className="w-px h-10 sm:h-12 bg-black/20"></div>

                {/* Price */}
                <div className="text-center">
                  <div className="font-display text-black text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide leading-none">
                    $300
                  </div>
                  <div className="font-body text-black text-xs sm:text-sm font-bold tracking-[0.15em] mt-1">
                    FLAT RATE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits - Simple & Clear */}
        <div className="grid grid-cols-3 gap-4 sm:gap-5">
          <div className="bg-black/80 backdrop-blur-sm border-2 border-brand-yellow/50 rounded-xl p-5 sm:p-7 hover:border-brand-yellow transition-colors">
            <div className="font-display text-brand-yellow text-2xl sm:text-3xl font-bold mb-2 tracking-wider">24HR</div>
            <div className="font-body text-white text-xs sm:text-sm tracking-wide font-medium">Service</div>
          </div>
          <div className="bg-black/80 backdrop-blur-sm border-2 border-brand-yellow/50 rounded-xl p-5 sm:p-7 hover:border-brand-yellow transition-colors">
            <div className="font-display text-brand-yellow text-2xl sm:text-3xl font-bold mb-2 tracking-wider">FLAT</div>
            <div className="font-body text-white text-xs sm:text-sm tracking-wide font-medium">Rate</div>
          </div>
          <div className="bg-black/80 backdrop-blur-sm border-2 border-brand-yellow/50 rounded-xl p-5 sm:p-7 hover:border-brand-yellow transition-colors">
            <div className="font-display text-brand-yellow text-2xl sm:text-3xl font-bold mb-2 tracking-wider">FAST</div>
            <div className="font-body text-white text-xs sm:text-sm tracking-wide font-medium">Delivery</div>
          </div>
        </div>

        {/* What Can't Go In - Compact */}
        <details className="bg-black/70 backdrop-blur-sm rounded-xl border-2 border-white/20 overflow-hidden group hover:border-brand-yellow/40 transition-colors">
          <summary className="cursor-pointer px-6 py-4 flex items-center justify-between hover:bg-black/50 transition-colors">
            <span className="font-display text-brand-yellow text-base sm:text-lg font-bold tracking-wide">
              ⚠️ What Can't Go In
            </span>
            <svg className="w-5 h-5 text-brand-yellow transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="px-6 pb-4 pt-2 bg-black/50">
            <div className="font-body text-white text-xs sm:text-sm grid grid-cols-2 gap-2 font-medium">
              <div>• Hazmat</div>
              <div>• Paint</div>
              <div>• Chemicals</div>
              <div>• Tires</div>
              <div>• Batteries</div>
              <div>• Liquids</div>
            </div>
          </div>
        </details>

        {/* Footer - Google Compliant */}
        <footer className="pt-8 pb-4 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm">
            <a
              href="/terms"
              className="text-white/60 hover:text-brand-yellow transition-colors font-body font-medium"
            >
              Terms of Service
            </a>
            <span className="text-white/30">|</span>
            <a
              href="/privacy"
              className="text-white/60 hover:text-brand-yellow transition-colors font-body font-medium"
            >
              Privacy Policy
            </a>
          </div>
          <div className="text-center mt-3 text-xs text-white/40 font-body">
            © {new Date().getFullYear()} Dump Haul Go. All rights reserved.
          </div>
        </footer>

      </div>
    </div>
  );
};

export default SimplePage;
