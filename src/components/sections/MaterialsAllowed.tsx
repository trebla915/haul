const MaterialsAllowed = () => {
  const acceptedMaterials = [
    'Construction & demolition debris',
    'Wood, lumber & pallets',
    'Drywall, plaster & concrete',
    'Metals & scrap metal',
    'Roofing materials & shingles',
    'Carpet, flooring & tile',
    'Furniture & appliances (without Freon)',
    'Yard waste & landscaping debris',
    'Cardboard & paper products',
    'Glass & windows',
  ];

  const prohibitedMaterials = [
    'Hazardous waste & chemicals',
    'Paint & solvents',
    'Asbestos materials',
    'Tires & automotive fluids',
    'Batteries (car & household)',
    'Electronics & computers',
    'Appliances with Freon (refrigerators, AC units)',
    'Propane tanks & cylinders',
    'Medical waste',
    'Radioactive materials',
  ];

  return (
    <section id="materials" className="py-20 md:py-32 bg-brand-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            What Can You <span className="text-brand-yellow">Throw Away</span>?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Know before you throw. Here's a quick guide to what's acceptable and what's not in our
            dumpsters.
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Accepted Materials */}
          <div className="bg-gradient-to-br from-green-900/20 to-gray-800/50 border-2 border-green-700/50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-green-400">Accepted Materials</h3>
            </div>
            <ul className="space-y-3">
              {acceptedMaterials.map((material, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300">{material}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-green-700/30">
              <p className="text-sm text-gray-400">
                <span className="text-green-400 font-semibold">Note:</span> Most common household
                and construction debris is accepted. If you're unsure, call us!
              </p>
            </div>
          </div>

          {/* Prohibited Materials */}
          <div className="bg-gradient-to-br from-red-900/20 to-gray-800/50 border-2 border-red-700/50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-red-400">Prohibited Materials</h3>
            </div>
            <ul className="space-y-3">
              {prohibitedMaterials.map((material, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-red-400 mr-3 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300">{material}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-red-700/30">
              <p className="text-sm text-gray-400">
                <span className="text-red-400 font-semibold">Warning:</span> Additional fees may
                apply for prohibited items found in dumpsters.
              </p>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 bg-gray-800/50 border border-brand-yellow/30 rounded-xl px-8 py-6">
            <svg
              className="w-12 h-12 text-brand-yellow"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-bold text-white mb-1">Not sure if it's allowed?</h4>
              <p className="text-gray-400">
                Give us a call at{' '}
                <a href="tel:+19152553867" className="text-brand-yellow hover:underline font-semibold">
                  (915) 255-DUMP
                </a>{' '}
                and we'll help you figure it out.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialsAllowed;
