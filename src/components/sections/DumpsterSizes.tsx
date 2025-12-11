import { startCheckout, getDumpsterPrice, type DumpsterSize } from '../../lib/payments/stripeClient';

const DumpsterSizes = () => {
  const dumpsters = [
    {
      size: '20-yard' as DumpsterSize,
      title: '20 Yard Dumpster',
      dimensions: '22L × 8W × 4H',
      capacity: '~6 pickup truck loads',
      price: getDumpsterPrice('20-yard'),
      description: 'Perfect for small to medium projects like garage cleanouts or minor renovations.',
      useCases: [
        'Garage or basement cleanouts',
        'Small bathroom or kitchen remodels',
        'Roof replacements (up to 1,500 sq ft)',
        'Deck removal',
        'Spring cleaning projects',
      ],
      popular: false,
    },
    {
      size: '30-yard' as DumpsterSize,
      title: '30 Yard Dumpster',
      dimensions: '22L × 8W × 6H',
      capacity: '~9 pickup truck loads',
      price: getDumpsterPrice('30-yard'),
      description: 'Our most popular size for home renovations and construction projects.',
      useCases: [
        'Major home renovations',
        'New construction or additions',
        'Large deck or fence removal',
        'Commercial cleanouts',
        'Estate cleanouts',
      ],
      popular: true,
    },
    {
      size: '40-yard' as DumpsterSize,
      title: '40 Yard Dumpster',
      dimensions: '22L × 8W × 8H',
      capacity: '~12 pickup truck loads',
      price: getDumpsterPrice('40-yard'),
      description: 'Maximum capacity for large-scale construction and demolition projects.',
      useCases: [
        'Full home renovations or demolitions',
        'Major construction projects',
        'Large commercial cleanouts',
        'Multi-unit property cleanups',
        'Window or siding replacements',
      ],
      popular: false,
    },
  ];

  const handleOrderClick = (size: DumpsterSize) => {
    startCheckout({ dumpsterSize: size });
  };

  return (
    <section id="sizes" className="py-20 md:py-32 bg-brand-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Choose Your <span className="text-brand-yellow">Dumpster Size</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Not sure which size you need? Give us a call at{' '}
            <a href="tel:+19152553867" className="text-brand-yellow hover:underline">
              (915) 255-DUMP
            </a>{' '}
            and we'll help you pick the perfect fit.
          </p>
        </div>

        {/* Dumpster Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dumpsters.map((dumpster, index) => (
            <div
              key={index}
              className={`relative bg-gray-800 border-2 rounded-2xl p-8 hover:scale-105 transition-all duration-300 ${
                dumpster.popular
                  ? 'border-brand-yellow shadow-2xl shadow-brand-yellow/20'
                  : 'border-gray-700 hover:border-brand-yellow/50'
              }`}
            >
              {/* Popular Badge */}
              {dumpster.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-brand-yellow text-brand-black px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Size Title */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-brand-yellow mb-2">{dumpster.title}</h3>
                <p className="text-gray-400 text-sm mb-1">{dumpster.dimensions}</p>
                <p className="text-gray-500 text-xs">{dumpster.capacity}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-6 pb-6 border-b border-gray-700">
                <div className="text-4xl font-bold text-white mb-2">
                  ${dumpster.price}
                  <span className="text-lg text-gray-400 font-normal">/week</span>
                </div>
                <p className="text-gray-400 text-sm">All-inclusive pricing</p>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 text-center">{dumpster.description}</p>

              {/* Use Cases */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-brand-yellow mb-3 uppercase tracking-wide">
                  Ideal For:
                </h4>
                <ul className="space-y-2">
                  {dumpster.useCases.map((useCase, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-400">
                      <svg
                        className="w-5 h-5 text-brand-yellow mr-2 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => handleOrderClick(dumpster.size)}
                className={`w-full py-3 rounded-lg font-bold transition-all duration-200 ${
                  dumpster.popular
                    ? 'bg-brand-yellow text-brand-black hover:bg-yellow-400 shadow-lg'
                    : 'bg-gray-700 text-white hover:bg-brand-yellow hover:text-brand-black'
                }`}
              >
                Order This Size
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gray-800/50 border border-gray-700 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-bold text-lg mb-2 text-brand-yellow">Rental Period</h4>
              <p className="text-gray-400 text-sm">Up to 7 days included in flat rate</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-brand-yellow">Weight Limit</h4>
              <p className="text-gray-400 text-sm">Varies by size, typically 2-4 tons</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-brand-yellow">Delivery Time</h4>
              <p className="text-gray-400 text-sm">Same or next day available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DumpsterSizes;
