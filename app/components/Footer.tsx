import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary via-primary to-green-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          {/* Top Section - Brand & CTA */}
          <div className="text-center mb-12">
            <Link href="/" className="inline-block font-headline text-3xl font-bold text-white mb-4">
              <img src="/png/2.png" alt="Relax.ng" height={100} />
            </Link>
            <p className="text-xl text-green-100 mb-6 max-w-2xl mx-auto">
              More time for you, less stress from life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://apps.apple.com/ng/app/relaxdotng/id6753727565"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download on App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.relaxdotng.app&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Get it on Google Play
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Services */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">
                Services
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-green-100 hover:text-white transition-colors">
                  <span className="mr-3">🧺</span>
                  <span>Laundry Services</span>
                </li>
                <li className="flex items-center text-green-100 hover:text-white transition-colors">
                  <span className="mr-3">🧹</span>
                  <span>Home Cleaning</span>
                </li>
                <li className="flex items-center text-green-100 hover:text-white transition-colors">
                  <span className="mr-3">🏠</span>
                  <span>Home Essentials</span>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">
                Company
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-green-100 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/providers" className="text-green-100 hover:text-white transition-colors">
                    For Providers
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-green-100 hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/delivery-returns" className="text-green-100 hover:text-white transition-colors">
                    Delivery & Returns
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-green-100 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">
                Get in Touch
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="mr-3 text-accent">📧</span>
                  <a
                    href="mailto:hello@relax.ng"
                    className="text-green-100 hover:text-white transition-colors"
                  >
                    hello@relax.ng
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="mr-3 text-accent">🌍</span>
                  <span className="text-green-100">Northern Nigeria</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3 text-accent">⏰</span>
                  <span className="text-green-100">Mon-Sat: 8AM-6PM</span>
                </div>
              </div>
            </div>

            {/* Social & Newsletter */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">
                Stay Connected
              </h3>

              {/* Social Media */}
              <div className="flex space-x-4 mb-6">
                <a
                  href="https://x.com/relaxdotng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Follow us on X (Twitter)"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/relaxdotng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Follow us on Instagram"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.082 5.48.204 4.955.388a7.418 7.418 0 0 0-2.676 1.74c-.976.976-1.479 2.192-1.74 2.676C.204 5.48.082 6.094.048 7.041.013 7.989 0 8.396 0 12.017s.013 4.028.048 4.976c.034.947.156 1.561.34 2.086a7.418 7.418 0 0 0 1.74 2.676c.976.976 2.192 1.479 2.676 1.74.525.184 1.139.306 2.086.34.948.035 1.355.048 4.976.048s4.028-.013 4.976-.048c.947-.034 1.561-.156 2.086-.34a7.418 7.418 0 0 0 2.676-1.74c.976-.976 1.479-2.192 1.74-2.676.184-.525.306-1.139.34-2.086.035-.948.048-1.355.048-4.976s-.013-4.028-.048-4.976c-.034-.947-.156-1.561-.34-2.086a7.418 7.418 0 0 0-1.74-2.676C19.428.665 18.212.162 17.728.048 17.203-.136 16.589-.258 15.641-.292 14.693-.327 14.286-.34 10.665-.34L12.017 0zm-.68 5.838a6.162 6.162 0 1 1 0 12.324 6.162 6.162 0 0 1 0-12.324zM12.017 16a4.017 4.017 0 1 0 0-8.034 4.017 4.017 0 0 0 0 8.034zm6.624-10.801a1.44 1.44 0 1 1 0 2.88 1.44 1.44 0 0 1 0-2.88z" />
                  </svg>
                </a>
                <a
                  href="https://tiktok.com/@relaxdotng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Follow us on TikTok"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </a>
              </div>

              <p className="text-green-100 text-sm mb-4">Follow @relaxdotng</p>

              {/* App Download */}
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <p className="text-white text-sm font-medium mb-2">Download the App</p>
                <p className="text-green-100 text-xs mb-3">Available on iOS and Android</p>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://apps.apple.com/ng/app/relaxdotng/id6753727565"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded text-sm transition-colors text-center"
                  >
                    App Store
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.relaxdotng.app&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded text-sm transition-colors text-center"
                  >
                    Google Play
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <p className="text-green-100 text-sm">
                © 2025 Relax.ng. All rights reserved.
              </p>
              <span className="text-green-100 text-xs">🇳🇬 Made in Nigeria</span>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              <Link href="/privacy" className="text-green-100 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/delivery-returns" className="text-green-100 hover:text-white text-sm transition-colors">
                Delivery & Returns
              </Link>
              <Link href="/terms" className="text-green-100 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-green-100 hover:text-white text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}