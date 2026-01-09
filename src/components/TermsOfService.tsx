const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-black text-white p-6 sm:p-8 md:p-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <a
            href="/"
            className="inline-flex items-center text-brand-yellow hover:text-yellow-300 transition-colors font-body font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </a>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl text-brand-yellow font-bold mb-4">
          Terms of Service
        </h1>
        <p className="text-white/60 font-body mb-8">
          Last Updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-6 font-body text-white/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-display text-brand-yellow font-bold mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using Dump Haul Go's services, you accept and agree to be bound by the terms
              and provision of this agreement. If you do not agree to these Terms of Service, please do not
              use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-brand-yellow font-bold mb-3">
              2. Service Description
            </h2>
            <p>
              Dump Haul Go provides dumpster rental and waste removal services in the El Paso, Texas area.
              Our flat-rate pricing includes delivery, pickup, and disposal of approved materials within the
              specified time period.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-brand-yellow font-bold mb-3">
              3. Prohibited Items
            </h2>
            <p className="mb-2">
              The following items are strictly prohibited from being placed in our dumpsters:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Hazardous materials</li>
              <li>Paint and paint products</li>
              <li>Chemicals and solvents</li>
              <li>Tires</li>
              <li>Batteries</li>
              <li>Liquids of any kind</li>
            </ul>
            <p className="mt-2">
              Additional fees may apply if prohibited items are found in the dumpster.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-brand-yellow font-bold mb-3">
              4. Payment Terms
            </h2>
            <p>
              Payment is due at the time of service. We accept various payment methods. Prices quoted are
              for the specified rental period and include delivery, pickup, and disposal fees for approved
              materials up to the weight limit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-brand-yellow font-bold mb-3">
              5. Liability
            </h2>
            <p>
              Customer is responsible for ensuring safe placement of the dumpster and any damage to property
              caused by the dumpster placement. Dump Haul Go is not liable for damage to driveways, lawns,
              or other property resulting from normal dumpster placement and removal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-brand-yellow font-bold mb-3">
              6. Cancellation Policy
            </h2>
            <p>
              Cancellations must be made at least 24 hours before scheduled delivery. Late cancellations may
              be subject to fees.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-brand-yellow font-bold mb-3">
              7. Changes to Terms
            </h2>
            <p>
              Dump Haul Go reserves the right to modify these terms at any time. Continued use of our services
              after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-brand-yellow font-bold mb-3">
              8. Contact Information
            </h2>
            <p>
              For questions about these Terms of Service, please contact us at:
            </p>
            <p className="mt-2">
              Phone: <a href="tel:+19152553867" className="text-brand-yellow hover:text-yellow-300">(915) 255-DUMP</a>
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <a
            href="/"
            className="inline-flex items-center text-brand-yellow hover:text-yellow-300 transition-colors font-body font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
