const SimplePage = () => {
  return (
    <div className="min-h-screen bg-brand-black flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6">

        {/* Logo */}
        <div className="mb-4">
          <img
            src="/logo.png"
            alt="Dump Haul Go"
            className="h-24 w-auto mx-auto"
          />
        </div>

        {/* Phone Number - Large Yellow Button */}
        <a
          href="tel:+19152553867"
          className="block bg-brand-yellow text-brand-black font-display text-2xl font-bold py-4 px-8 rounded-lg hover:bg-yellow-400 transition-all duration-200 tracking-wide"
        >
          📞 CALL NOW
        </a>

        {/* Phone Number Display */}
        <div className="font-display text-white text-3xl tracking-wider">
          (915) 255-DUMP
        </div>

        {/* Service Area */}
        <div className="font-display text-brand-yellow text-xl tracking-wide">
          El Paso Area
        </div>

        {/* Pricing */}
        <div className="bg-gray-900/50 border-2 border-brand-yellow rounded-xl p-6 my-6">
          <div className="font-display text-brand-yellow text-3xl font-bold mb-2 tracking-wide">
            15 YARD
          </div>
          <div className="font-display text-white text-5xl font-bold tracking-wide">
            $300
          </div>
        </div>

        {/* Dumpster Image */}
        <div className="rounded-lg overflow-hidden border-2 border-brand-yellow">
          <img
            src="/dump.jpg"
            alt="15 Yard Dumpster"
            className="w-full h-auto"
          />
        </div>

        {/* Service Qualities */}
        <div className="flex justify-center gap-4 my-6">
          <div className="font-display text-brand-yellow text-lg tracking-wide">FAST</div>
          <div className="text-brand-yellow">•</div>
          <div className="font-display text-brand-yellow text-lg tracking-wide">QUICK</div>
          <div className="text-brand-yellow">•</div>
          <div className="font-display text-brand-yellow text-lg tracking-wide">PROFESSIONAL</div>
        </div>

        {/* What Can't Go In */}
        <div className="bg-red-900/20 border-2 border-red-600 rounded-xl p-4">
          <div className="font-display text-red-500 text-xl font-bold mb-3 tracking-wide">
            ⚠️ WHAT CAN'T GO IN
          </div>
          <div className="font-body text-gray-300 text-sm space-y-1">
            <div>• Hazmat Materials</div>
            <div>• Paint</div>
            <div>• Chemicals</div>
            <div>• Tires</div>
            <div>• Batteries</div>
            <div>• Liquids</div>
          </div>
        </div>

        {/* CTA */}
        <div className="font-display text-white text-lg mt-6 tracking-wide">
          TEXT OR CALL FOR SERVICE
        </div>
        <div className="font-display text-brand-yellow text-2xl font-bold tracking-wider">
          24 HOURS
        </div>

        {/* Bottom CTA Button */}
        <a
          href="tel:+19152553867"
          className="block bg-brand-yellow text-brand-black font-display text-xl font-bold py-4 px-8 rounded-lg hover:bg-yellow-400 transition-all duration-200 tracking-wide mt-6"
        >
          CALL (915) 255-DUMP
        </a>

      </div>
    </div>
  );
};

export default SimplePage;
