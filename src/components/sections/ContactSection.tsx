import { useState, FormEvent } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Implement form submission to backend
    // For now, just simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    alert('Thank you for your inquiry! We will contact you shortly.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      address: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-brand-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Get a <span className="text-brand-yellow">Free Quote</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have questions or ready to order? Fill out the form below or give us a call. We're here
            to help!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Request a Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-yellow transition-colors"
                  placeholder="John Doe"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-yellow transition-colors"
                  placeholder="(915) 255-DUMP"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-yellow transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              {/* Project Address */}
              <div>
                <label htmlFor="address" className="block text-sm font-semibold text-gray-300 mb-2">
                  Project Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-yellow transition-colors"
                  placeholder="123 Main St, El Paso, TX 79912"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-yellow transition-colors resize-none"
                  placeholder="Tell us about your project and what size dumpster you think you need..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-yellow text-brand-black py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Get Your Free Quote'}
              </button>

              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to be contacted by Dump Haul Go regarding your
                inquiry.
              </p>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Call Us */}
            <div className="bg-gradient-to-br from-brand-yellow to-yellow-500 rounded-2xl p-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-brand-black rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-brand-yellow"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-black mb-2">Call Us Now</h3>
                  <a
                    href="tel:+19152553867"
                    className="text-2xl font-bold text-brand-black hover:underline"
                  >
                    (915) 255-DUMP
                  </a>
                  <p className="text-brand-black/70 text-sm mt-2">
                    Available 24/7 for orders and emergencies
                  </p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-brand-yellow/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-brand-yellow"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Office Hours</h3>
                  <div className="space-y-2 text-gray-400">
                    <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                    <p>Saturday: 8:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Area */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-brand-yellow/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-brand-yellow"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Service Area</h3>
                  <p className="text-gray-400 mb-3">
                    We proudly serve El Paso and surrounding areas including:
                  </p>
                  <ul className="text-gray-400 space-y-1 text-sm">
                    <li>• Downtown El Paso</li>
                    <li>• East Side & Lower Valley</li>
                    <li>• West Side & Upper Valley</li>
                    <li>• Northeast & Far East</li>
                    <li>• Surrounding communities</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-brand-yellow/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-brand-yellow"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email Us</h3>
                  <a
                    href="mailto:info@dumphaulgo.com"
                    className="text-brand-yellow hover:underline"
                  >
                    info@dumphaulgo.com
                  </a>
                  <p className="text-gray-400 text-sm mt-2">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
