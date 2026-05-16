'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md '
        : 'bg-white/80 backdrop-blur-sm'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <img
                  src="/png/1.png"
                  alt="Relax.ng"
                  className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              <NavLink href="/" label="Home" />
              <NavLink href="/about" label="About" />
              <NavLink href="/providers" label="Providers" />
              <NavLink href="/faq" label="FAQ" />
              <NavLink href="/contact" label="Contact" />
            </div>
          </div>

          {/* Right Side - CTA & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Download App Dropdown */}
            <div className="hidden sm:block relative">
              <button
                onClick={() => setIsDownloadOpen(!isDownloadOpen)}
                onMouseEnter={() => setIsDownloadOpen(true)}
                onMouseLeave={() => setIsDownloadOpen(false)}
                className="inline-flex items-center bg-gradient-to-r from-accent to-orange-500 hover:from-accent/90 hover:to-orange-500/90 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <span className="mr-2">📱</span>
                Download App
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isDownloadOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
                  onMouseEnter={() => setIsDownloadOpen(true)}
                  onMouseLeave={() => setIsDownloadOpen(false)}
                >
                  <a
                    href="https://apps.apple.com/ng/app/relaxdotng/id6753727565"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    App Store
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.relaxdotng.app&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    Google Play
                  </a>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute top-2 left-1 w-4 h-0.5 bg-primary transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`} />
                <span className={`absolute top-3.5 left-1 w-4 h-0.5 bg-primary transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`} />
                <span className={`absolute top-5 left-1 w-4 h-0.5 bg-primary transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <div className="py-4 space-y-2 bg-white/95 backdrop-blur-md rounded-b-2xl border-t border-gray-200/50 mt-2">
            <MobileNavLink href="/" label="Home" onClick={() => setIsMenuOpen(false)} />
            <MobileNavLink href="/about" label="About" onClick={() => setIsMenuOpen(false)} />
            <MobileNavLink href="/providers" label="Providers" onClick={() => setIsMenuOpen(false)} />
            <MobileNavLink href="/faq" label="FAQ" onClick={() => setIsMenuOpen(false)} />
            <MobileNavLink href="/contact" label="Contact" onClick={() => setIsMenuOpen(false)} />

            <div className="pt-4 px-4 space-y-2">
              <a
                href="https://apps.apple.com/ng/app/relaxdotng/id6753727565"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.relaxdotng.app&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Google Play
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Desktop Navigation Link Component
function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="relative px-4 py-2 text-gray-700 hover:text-primary font-medium transition-all duration-300 group"
    >
      {label}
      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-accent to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </Link>
  );
}

// Mobile Navigation Link Component
function MobileNavLink({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  return (
    <Link
      href={href}
      className="flex items-center px-6 py-3 text-gray-700 hover:text-primary hover:bg-primary/5 font-medium transition-all duration-300 group"
      onClick={onClick}
    >
      <span className="w-2 h-2 bg-accent rounded-full mr-4 transform scale-0 group-hover:scale-100 transition-transform duration-300" />
      {label}
    </Link>
  );
}
