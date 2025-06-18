'use client';

import { Twitter, Youtube, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Logo and Description Column */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              {/* Logo */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white flex items-center justify-center mr-4 transform rotate-12">
                  <span className="text-black font-bold text-2xl transform -rotate-12">N</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold">NIDAVI</h2>
                  <p className="text-gray-300 text-sm">Create. Impress. Stay.</p>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                NIDAVI ist eine kreative Designagentur aus Miesbach, die Unternehmen dabei unterstützt, starke Markenauftritte zu entwickeln – visuell, digital und strategisch.
              </p>
            </div>
          </div>

          {/* Unternehmen Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Unternehmen</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Über Uns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Unsere Vision
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Zielgruppe
                </a>
              </li>
            </ul>
          </div>

          {/* Leistungen Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Leistungen</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Design & Branding
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Webseitenerstellung
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Marketing
                </a>
              </li>
            </ul>
          </div>

          {/* Rechtliches and Angaben Column */}
          <div>
            {/* Rechtliches Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-6">Rechtliches</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Impressum
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Datenschutz
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>

            {/* Angaben Section */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Angaben</h3>
              <div className="space-y-3">
                <p className="text-gray-300 text-sm">
                  Fraunhoferstr. 8<br />
                  83714 Miesbach
                </p>
                <button className="bg-yellow-400 text-black px-6 py-2 text-sm font-semibold hover:bg-yellow-300 transition-colors">
                  Kontakt
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            Copyright © 2025 NIDAVI - Create. Impress. Stay. | Designagentur in Miesbach
          </p>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Youtube size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}