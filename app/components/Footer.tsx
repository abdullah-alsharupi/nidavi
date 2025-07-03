import React from 'react';
import { Twitter, Youtube, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-12">
          {/* Logo and Description Column */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white flex items-center justify-center">
                <span className="text-black font-bold text-xl">N</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">NIDAVI</h3>
                <p className="text-sm text-gray-400">Create. Impress. Stay.</p>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-gray-300 leading-relaxed">
              NIDAVI ist eine <span className="text-yellow-400">kreative Designagentur</span> in Miesbach, die Unternehmen dabei unterstützt, starke Markenauftritte zu entwickeln.
            </p>
            
            {/* Blog Section */}
            <div>
              <p className="text-gray-300 mb-3">Neuester Blogartikel:</p>
              <button className="border border-gray-600 text-white px-4 py-2 hover:border-yellow-400 transition-colors">
                Jetzt lesen →
              </button>
            </div>
          </div>

          {/* Unternehmen Column */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Unternehmen</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-400 hover:text-yellow-400 transition-colors">Über Uns</a></li>
              <li><a href="#" className="text-blue-400 hover:text-yellow-400 transition-colors">Unsere Vision</a></li>
              <li><a href="#" className="text-blue-400 hover:text-yellow-400 transition-colors">Zielgruppe</a></li>
              <li><a href="#" className="text-blue-400 hover:text-yellow-400 transition-colors">Kunden</a></li>
              <li><a href="#" className="text-blue-400 hover:text-yellow-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Leistungen Column */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Leistungen</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Design & Branding</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Webseitenerstellung</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Marketing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Fotoproduktion</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Videoproduktion</a></li>
            </ul>
          </div>

          {/* Contact and Legal Column */}
          <div className="space-y-8">
            {/* Rechtliches */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-6">Rechtliches</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Impressum</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Datenschutz</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Cookies</a></li>
              </ul>
            </div>

            {/* Angaben */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-6">Angaben</h4>
              <div className="space-y-3">
                <p className="text-gray-300">Fraunhoferstr. 8</p>
                <p className="text-gray-300">83714 Miesbach</p>
                <button className="bg-yellow-400 text-black px-6 py-2 font-semibold hover:bg-yellow-300 transition-colors">
                  Kontakt
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Logo and Description */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-white flex items-center justify-center">
                <span className="text-black font-bold text-xl">N</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">NIDAVI</h3>
                <p className="text-sm text-gray-400">Create. Impress. Stay.</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center space-x-6 mb-6">
              <Twitter className="w-5 h-5 text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer" />
              <Facebook className="w-5 h-5 text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer" />
            </div>

            <p className="text-gray-300 leading-relaxed mb-4">
              NIDAVI ist eine <span className="text-yellow-400">kreative Designagentur</span> in Miesbach, die Unternehmen dabei unterstützt, starke Markenauftritte zu entwickeln.
            </p>

            <p className="text-gray-300 mb-4">Neuester Blogartikel:</p>
          </div>

          {/* Mobile Grid */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            {/* Unternehmen */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Unternehmen</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-400 hover:text-yellow-400 transition-colors text-sm">Über Uns</a></li>
                <li><a href="#" className="text-blue-400 hover:text-yellow-400 transition-colors text-sm">Unsere Vision</a></li>
                <li><a href="#" className="text-blue-400 hover:text-yellow-400 transition-colors text-sm">Zielgruppe</a></li>
                <li><a href="#" className="text-blue-400 hover:text-yellow-400 transition-colors text-sm">Kunden</a></li>
                <li><a href="#" className="text-blue-400 hover:text-yellow-400 transition-colors text-sm">Blog</a></li>
              </ul>
            </div>

            {/* Leistungen */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Leistungen</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">Design & Branding</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">Webseitenerstellung</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">Marketing</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">Fotoproduktion</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">Videoproduktion</a></li>
              </ul>
            </div>

            {/* Rechtliches */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Rechtliches</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">Impressum</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">Datenschutz</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">Cookies</a></li>
              </ul>
            </div>

            {/* Angaben */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Angaben</h4>
              <div className="space-y-2">
                <p className="text-gray-300 text-sm">Fraunhoferstr. 8</p>
                <p className="text-gray-300 text-sm">83714 Miesbach</p>
                <button className="bg-yellow-400 text-black px-4 py-2 font-semibold hover:bg-yellow-300 transition-colors text-sm mt-2">
                  Kontakt
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Social Icons and Copyright */}
        <div className="hidden lg:block">
          <div className="flex justify-between items-center pt-8 border-t border-gray-800">
            <div className="flex space-x-6">
              <Twitter className="w-5 h-5 text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer" />
              <Facebook className="w-5 h-5 text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer" />
            </div>
            <p className="text-gray-400 text-sm">
              Copyright © 2025 NIDAVI - Create. Impress. Stay. | Designagentur in Miesbach
            </p>
          </div>
        </div>

        {/* Mobile Copyright */}
        <div className="lg:hidden text-center pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm leading-relaxed">
            Copyright © 2025 NIDAVI<br />
            Create. Impress. Stay.<br />
            Deine Designagentur in Miesbach
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;