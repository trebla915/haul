import { useState } from 'react';
import { startCheckout } from '../../lib/payments/stripeClient';

const ChooseDumpsterSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleOrderClick = () => {
    startCheckout({ dumpsterSize: '20-yard' }); // Using 20-yard as closest match to 15-yard
  };

  const useCases = [
    'Smaller DIY projects',
    'Yard waste / landscape debris',
    'Room cleanouts',
    'Small home improvement projects',
    'Roofing material',
  ];

  const dimensions = [
    { label: 'Height', value: '5 ft' },
    { label: 'Width', value: '8 ft' },
    { label: 'Length', value: '15 ft' },
  ];

  return (
    <section className="py-20 md:py-32 bg-brand-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN - Content */}
          <div className="order-2 lg:order-1">
            {/* Main Heading */}
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-brand-yellow tracking-wide">
              Choose Your Dumpster Size
            </h2>

            {/* Tab-style Container */}
            <div className="mb-8">
              <div className="inline-block bg-gray-900/50 border-2 border-brand-yellow rounded-xl overflow-hidden">
                <div className="bg-brand-yellow px-8 py-4">
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-brand-black tracking-wide">
                    15 Yard Dumpster
                  </h3>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Perfect for residential projects and smaller commercial jobs. Our 15-yard dumpster
              provides ample capacity while maintaining a compact footprint.
            </p>

            {/* Use Cases List */}
            <div className="mb-10">
              <h4 className="text-xl font-bold text-white mb-4">Ideal For:</h4>
              <ul className="space-y-3">
                {useCases.map((useCase, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-brand-yellow mr-3 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-200 text-lg">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Order Button */}
            <button
              onClick={handleOrderClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="font-display group relative w-full sm:w-auto bg-brand-yellow text-brand-black px-12 py-5 rounded-xl font-bold text-2xl tracking-wider hover:bg-yellow-400 transition-all duration-300 shadow-2xl hover:shadow-brand-yellow/50 hover:scale-105 transform"
            >
              <span className="relative z-10">ORDER NOW</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </button>

            {/* Call Option */}
            <p className="text-gray-400 text-sm mt-6">
              Questions? Call us at{' '}
              <a
                href="tel:+19152553867"
                className="text-brand-yellow hover:underline font-semibold"
              >
                (915) 255-DUMP
              </a>
            </p>
          </div>

          {/* RIGHT COLUMN - Image & Dimensions */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Dumpster Image Container */}
              <div className="relative bg-gray-900/30 rounded-2xl p-8 border-2 border-gray-800">
                {/* Dumpster Image */}
                <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden mb-6">
                  <img
                    src="/dump.jpg"
                    alt="15 Yard Roll-Off Dumpster"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Dimensions Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {dimensions.map((dim, index) => (
                    <div
                      key={index}
                      className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 text-center hover:border-brand-yellow/50 transition-colors duration-300"
                    >
                      <div className="text-brand-yellow text-2xl font-bold mb-1">
                        {dim.value}
                      </div>
                      <div className="text-gray-400 text-sm font-semibold uppercase tracking-wide">
                        {dim.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Decorative Accent */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-yellow/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-yellow/5 rounded-full blur-3xl"></div>
              </div>

              {/* Feature Badge */}
              <div className="absolute -top-6 -left-6 bg-brand-yellow text-brand-black px-6 py-3 rounded-full font-bold text-sm shadow-xl transform rotate-[-5deg] hidden lg:block">
                Most Popular Size
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseDumpsterSection;
