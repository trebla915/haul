import { useState } from 'react';
import { startCheckout } from '../../lib/payments/stripeClient';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Dumpster Sizes', href: '#sizes' },
    { name: "What's Allowed", href: '#materials' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleOrderClick = () => {
    // Default to 20-yard for header CTA
    startCheckout({ dumpsterSize: '20-yard' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-brand-black border-b border-brand-yellow">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0 relative">
            <a href="#" className="flex items-center">
              <img
                src="/logo.png"
                alt="Dump Haul Go - Waste Solutions"
                className="h-32 w-auto relative z-10"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="font-display text-white hover:text-brand-yellow transition-colors duration-200 text-xl tracking-wide"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+19152553867"
              className="font-display text-white hover:text-brand-yellow transition-colors duration-200 text-xl tracking-wide"
            >
              (915) 255-DUMP
            </a>
            <button
              onClick={handleOrderClick}
              className="font-display bg-brand-yellow text-brand-black px-6 py-3 rounded-lg font-bold text-lg tracking-wide hover:bg-yellow-400 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Order Online
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-brand-yellow hover:bg-gray-900 transition-colors duration-200"
          >
            <span className="sr-only">Open main menu</span>
            {!mobileMenuOpen ? (
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-brand-yellow">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="font-display text-white hover:text-brand-yellow transition-colors duration-200 text-left text-2xl tracking-wide"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-4 border-t border-brand-yellow space-y-3">
                <a
                  href="tel:+19152553867"
                  className="font-display block text-white hover:text-brand-yellow transition-colors duration-200 text-xl tracking-wide"
                >
                  Call (915) 255-DUMP
                </a>
                <button
                  onClick={handleOrderClick}
                  className="font-display w-full bg-brand-yellow text-brand-black px-6 py-3 rounded-lg font-bold text-lg tracking-wide hover:bg-yellow-400 transition-all duration-200"
                >
                  Order Online
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
