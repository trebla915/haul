const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Choose Your Size',
      description:
        'Select the perfect dumpster size for your project. Not sure? Our team is here to help you choose.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Place Your Order',
      description:
        'Order online or call us directly. Schedule delivery for the date and time that works best for you.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Fill It Up',
      description:
        'We deliver your dumpster on time. Take up to 7 days to fill it at your own pace with acceptable materials.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'We Pick It Up',
      description:
        'When you\'re done, we haul it away and handle all disposal. It\'s that simple - no hassle for you!',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-brand-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            How <span className="text-brand-yellow">It Works</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Getting a dumpster has never been easier. Just four simple steps from order to pickup.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="relative mb-16">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-800 transform -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-0 w-3/4 h-1 bg-brand-yellow transform -translate-y-1/2"></div>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-4 gap-8 relative -mt-16">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Number Circle */}
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-brand-yellow rounded-full flex items-center justify-center text-brand-black font-bold text-2xl border-4 border-brand-black shadow-xl">
                    {step.number}
                  </div>
                </div>

                {/* Step Content */}
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 bg-gray-800 rounded-lg flex items-center justify-center text-brand-yellow">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Timeline */}
        <div className="lg:hidden max-w-2xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-800"></div>
            <div className="absolute left-8 top-0 h-3/4 w-1 bg-brand-yellow"></div>

            {/* Steps */}
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Step Number Circle */}
                  <div className="flex-shrink-0 w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center text-brand-black font-bold text-xl border-4 border-brand-black shadow-xl z-10">
                    {step.number}
                  </div>

                  {/* Step Content */}
                  <div className="ml-8 flex-grow">
                    <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-brand-yellow/50 transition-all duration-300">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center text-brand-yellow mr-3">
                          {step.icon}
                        </div>
                        <h3 className="text-lg font-bold">{step.title}</h3>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-brand-yellow to-yellow-500 rounded-2xl p-8 max-w-3xl">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-black mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-brand-black/80 mb-6">
              Order your dumpster now and experience the easiest waste removal in El Paso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#sizes"
                className="bg-brand-black text-brand-yellow px-8 py-3 rounded-lg font-bold hover:bg-gray-900 transition-all duration-200 shadow-lg"
              >
                View Sizes & Pricing
              </a>
              <a
                href="tel:+19152553867"
                className="border-2 border-brand-black text-brand-black px-8 py-3 rounded-lg font-bold hover:bg-brand-black hover:text-brand-yellow transition-all duration-200"
              >
                Call (915) 255-DUMP
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
