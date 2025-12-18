const SimplePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-black via-gray-900 to-brand-black flex items-center justify-center p-4 sm:p-8 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255, 216, 0, 0.1) 35px, rgba(255, 216, 0, 0.1) 70px)`
        }}></div>
      </div>

      <div className="max-w-md w-full text-center space-y-6 sm:space-y-8 relative z-10">

        {/* Top Section - Tighter Spacing */}
        <div className="space-y-2 bg-black/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-brand-yellow/20">
          {/* Logo */}
          <div className="mb-2">
            <img
              src="/logo.png"
              alt="Dump Haul Go"
              className="h-40 sm:h-52 md:h-64 lg:h-72 w-auto mx-auto drop-shadow-2xl"
            />
          </div>

          {/* Phone Number Display */}
          <div className="font-display text-white text-2xl sm:text-3xl tracking-wider drop-shadow-lg">
            (915) 255-DUMP
          </div>

          {/* Service Area */}
          <div className="font-display text-brand-yellow text-lg sm:text-xl tracking-wide drop-shadow-lg">
            El Paso, Texas Area
          </div>
        </div>

        {/* Dumpster Image */}
        <div className="relative group">
          {/* Frosted background container */}
          <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden">
            <img
              src="/dump.png"
              alt="15 Yard Dumpster"
              className="w-full h-auto transform group-hover:scale-105 transition-all duration-300"
            />
            {/* Bottom gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* Pricing */}
        <div className="relative group my-6">
          {/* Angled cut design */}
          <div className="relative bg-gradient-to-br from-brand-yellow via-yellow-500 to-brand-yellow p-1 transform -skew-y-2 shadow-2xl shadow-brand-yellow/40">
            <div className="bg-gradient-to-br from-gray-950 to-black p-8 sm:p-10 transform skew-y-2">
              <div className="flex flex-col items-center justify-center space-y-4">
                {/* Single line title */}
                <div className="relative">
                  <div className="absolute inset-0 bg-brand-yellow blur-xl opacity-50"></div>
                  <div className="relative font-display text-brand-yellow text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest drop-shadow-2xl">
                    15 YARD DUMPSTER
                  </div>
                </div>

                {/* Price */}
                <div className="relative pt-4">
                  <div className="absolute inset-0 bg-white blur-2xl opacity-20"></div>
                  <div className="relative font-display text-white text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight drop-shadow-2xl">
                    $300
                  </div>
                </div>

                {/* Subtitle */}
                <div className="font-body text-gray-400 text-sm sm:text-base italic pt-2">
                  Flat Rate • No Hidden Fees
                </div>
              </div>
            </div>
          </div>

          {/* Animated corner accents */}
          <div className="absolute -top-2 -left-2 w-6 h-6 bg-brand-yellow transform rotate-45 group-hover:scale-150 transition-transform duration-300"></div>
          <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-brand-yellow transform rotate-45 group-hover:scale-150 transition-transform duration-300"></div>
        </div>

        {/* Service Qualities */}
        <div className="flex justify-center gap-3 sm:gap-4 my-6 bg-black/30 backdrop-blur-sm rounded-full py-4 px-6 border border-brand-yellow/30">
          <div className="font-display text-brand-yellow text-lg sm:text-xl tracking-wide drop-shadow-lg">FAST</div>
          <div className="text-brand-yellow text-lg sm:text-xl">•</div>
          <div className="font-display text-brand-yellow text-lg sm:text-xl tracking-wide drop-shadow-lg">QUICK</div>
          <div className="text-brand-yellow text-lg sm:text-xl">•</div>
          <div className="font-display text-brand-yellow text-lg sm:text-xl tracking-wide drop-shadow-lg">PROFESSIONAL</div>
        </div>

        {/* What Can't Go In */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-2xl">
          <div className="font-display text-brand-yellow text-xl sm:text-2xl font-bold mb-4 tracking-wide drop-shadow-lg">
            ⚠️ WHAT CAN'T GO IN
          </div>
          <div className="font-body text-gray-300 text-sm sm:text-base space-y-2">
            <div>• Hazmat Materials</div>
            <div>• Paint</div>
            <div>• Chemicals</div>
            <div>• Tires</div>
            <div>• Batteries</div>
            <div>• Liquids</div>
          </div>
        </div>

        {/* CTA */}
        <div className="space-y-3 bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-brand-yellow/20">
          <div className="font-display text-white text-lg sm:text-xl tracking-wide drop-shadow-lg">
            TEXT OR CALL FOR SERVICE
          </div>
          <div className="font-display text-brand-yellow text-2xl sm:text-3xl font-bold tracking-wider drop-shadow-lg animate-pulse">
            24 HOURS
          </div>
        </div>

        {/* Bottom CTA Button */}
        <a
          href="tel:+19152553867"
          className="block bg-gradient-to-r from-brand-yellow via-yellow-400 to-brand-yellow text-brand-black font-display text-xl sm:text-2xl font-bold py-4 sm:py-5 px-8 rounded-2xl hover:from-yellow-400 hover:via-brand-yellow hover:to-yellow-400 hover:scale-105 transition-all duration-300 tracking-wide mt-6 shadow-2xl shadow-brand-yellow/50 hover:shadow-brand-yellow/70 relative overflow-hidden group"
        >
          <span className="relative z-10">CALL (915) 255-DUMP</span>
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
        </a>

      </div>
    </div>
  );
};

export default SimplePage;
