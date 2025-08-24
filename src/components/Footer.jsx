import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold text-red-500 mb-4 font-poppins">
              dunetech
            </div>
            <p className="text-gray-400 mb-6 max-w-md font-inter">
              Professional web development agency building high-performance
              websites and web applications using React, Next.js and modern web
              technologies. Transforming your digital vision into reality.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://twitter.com/dunetech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                aria-label="Follow dunetech on Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </Link>
              <Link
                href="https://linkedin.com/company/dunetech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                aria-label="Connect with dunetech on LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
              <Link
                href="https://github.com/dunetech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                aria-label="View dunetech projects on GitHub"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-base font-semibold mb-4 font-poppins">
              Services
            </h3>
            <ul className="space-y-2 font-inter">
              <li>
                <Link
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                  prefetch={true}
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                  prefetch={true}
                >
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                  prefetch={true}
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                  prefetch={true}
                >
                  Performance Optimization
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                  prefetch={true}
                >
                  Maintenance & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-base font-semibold mb-4 font-poppins">
              Company
            </h3>
            <ul className="space-y-2 font-inter">
              <li>
                <Link
                  href="#team"
                  className="text-gray-400 hover:text-white transition-colors"
                  prefetch={true}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#portfolio"
                  className="text-gray-400 hover:text-white transition-colors"
                  prefetch={true}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-gray-400 hover:text-white transition-colors"
                  prefetch={true}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                  prefetch={true}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h3 className="text-xl font-bold mb-4 text-center font-poppins">
            Get In Touch
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-semibold mb-2 font-poppins">Email</h4>
              <Link
                href="mailto:hello@dunetech.com"
                className="text-red-400 hover:text-red-300 transition-colors font-inter"
              >
                hello@dunetech.com
              </Link>
            </div>
            <div>
              <h4 className="font-semibold mb-2 font-poppins">Phone</h4>
              <Link
                href="tel:+1234567890"
                className="text-red-400 hover:text-red-300 transition-colors font-inter"
              >
                +1 (234) 567-8900
              </Link>
            </div>
            <div>
              <h4 className="font-semibold mb-2 font-poppins">Response Time</h4>
              <p className="text-gray-400 font-inter">24 hours</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-red-600/20 to-red-400/20 rounded-2xl p-8 border border-red-500/30 mb-8 text-center">
          <h3 className="text-xl font-bold mb-3 font-poppins">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-300 mb-6 font-inter">
            Let's discuss how we can help transform your digital presence with
            our web development expertise.
          </p>
          <Link
            href="#contact"
            className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg text-white font-medium transition-colors inline-flex items-center gap-2 font-inter"
            prefetch={true}
          >
            Start Your Project
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-xs mb-4 md:mb-0 font-inter">
            © {new Date().getFullYear()} dunetech. All rights reserved.
          </div>
          <div className="flex space-x-6 text-xs">
            <Link
              href="/privacy-policy"
              className="text-gray-400 hover:text-white transition-colors font-inter"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-gray-400 hover:text-white transition-colors font-inter"
            >
              Terms of Service
            </Link>
            <Link
              href="/sitemap.xml"
              className="text-gray-400 hover:text-white transition-colors font-inter"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
