const PrivacyPolicy = () => {
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
          Privacy Policy
        </h1>
        <p className="text-white/60 font-body mb-8">
          Last Updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-6 font-body text-white/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-display text-brand-yellow font-bold mb-3">
              1. Information We Collect
            </h2>
            <p className="mb-2">
              When you use our services, we may collect the following information:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Name and contact information (phone number, email address)</li>
              <li>Service address and delivery location</li>
              <li>Payment information</li>
              <li>Service details and preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display text-brand-yellow font-bold mb-3">
              2. How We Use Your Information
            </h2>
            <p className="mb-2">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Provide and deliver our dumpster rental services</li>
              <li>Process payments and send service confirmations</li>
              <li>Communicate with you about your service</li>
              <li>Improve our services and customer experience</li>
              <li>Send promotional materials (with your consent)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display text-brand-yellow font-bold mb-3">
              3. Information Sharing
            </h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your
              information with:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Service providers who assist in our operations (payment processors, etc.)</li>
              <li>Law enforcement or regulatory authorities when required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display text-brand-yellow font-bold mb-3">
              4. Data Security
            </h2>
            <p>
              We implement appropriate security measures to protect your personal information from unauthorized
              access, alteration, disclosure, or destruction. However, no method of transmission over the internet
              is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-brand-yellow font-bold mb-3">
              5. Cookies and Tracking
            </h2>
            <p>
              Our website may use cookies and similar tracking technologies to enhance user experience and
              analyze site traffic. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-brand-yellow font-bold mb-3">
              6. Your Rights
            </h2>
            <p className="mb-2">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display text-brand-yellow font-bold mb-3">
              7. Children's Privacy
            </h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly collect
              personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-brand-yellow font-bold mb-3">
              8. Changes to Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting
              the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-brand-yellow font-bold mb-3">
              9. Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, please contact us at:
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

export default PrivacyPolicy;
