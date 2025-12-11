import { startCheckout } from '../../lib/payments/stripeClient';

const Hero = () => {
  const handleOrderClick = () => {
    startCheckout({ dumpsterSize: '20-yard' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-black">
      {/* Solid black background */}
      <div className="absolute inset-0 bg-brand-black"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-brand-yellow/10 border border-brand-yellow/30 rounded-full px-4 py-2 mb-8">
            <svg
              className="w-4 h-4 text-brand-yellow"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-brand-yellow text-sm font-semibold">
              Proudly Serving El Paso & Surrounding Areas
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-wide">
            <span className="text-white">Roll-Off Dumpster</span>
            <br />
            <span className="text-brand-yellow">Rental Made Simple</span>
          </h1>

          {/* Subheadline */}
          <p className="font-body text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Fast delivery, transparent flat-rate pricing, and reliable service.
            Your local El Paso waste solution for residential and commercial projects.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleOrderClick}
              className="font-display w-full sm:w-auto bg-brand-yellow text-brand-black px-8 py-4 rounded-lg font-bold text-xl tracking-wide hover:bg-yellow-400 transition-all duration-200 shadow-2xl hover:shadow-brand-yellow/50 hover:scale-105 transform"
            >
              Order Online Now
            </button>
            <a
              href="tel:+19152553867"
              className="font-display w-full sm:w-auto border-2 border-brand-yellow text-brand-yellow px-8 py-4 rounded-lg font-bold text-xl tracking-wide hover:bg-brand-yellow hover:text-brand-black transition-all duration-200"
            >
              Call (915) 255-DUMP
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="font-display text-4xl font-bold text-brand-yellow mb-2 tracking-wide">Same Day</div>
              <div className="font-body text-gray-400 text-sm">Delivery Available</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl font-bold text-brand-yellow mb-2 tracking-wide">100%</div>
              <div className="font-body text-gray-400 text-sm">Transparent Pricing</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl font-bold text-brand-yellow mb-2 tracking-wide">24/7</div>
              <div className="font-body text-gray-400 text-sm">Customer Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-brand-yellow"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
