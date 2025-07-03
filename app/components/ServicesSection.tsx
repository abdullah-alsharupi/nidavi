import React from 'react';
import { ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section id="services" className="min-h-screen bg-white relative overflow-hidden py-8">
      {/* Mobile Logo - Top Half */}
      <div className="lg:hidden absolute top-0 left-0 right-0 w-full h-32 overflow-hidden">
        <div className="relative w-full h-64 flex items-center justify-center -translate-y-32">
          {/* Background Glow Effect */}
          <div className="absolute inset-0 bg-yellow-400/5 blur-2xl"></div>
          
          {/* Logo Container - Only top half visible */}
          <div className="relative">
            <img 
              src="/NidaviLogoColorful.png" 
              alt="NIDAVI Logo" 
              className="w-48 h-auto object-contain opacity-80"
            />
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute bottom-4 left-8 w-4 h-4 bg-yellow-400 rounded-full opacity-40"></div>
          <div className="absolute bottom-8 left-16 w-2 h-2 bg-yellow-400 rounded-full opacity-30"></div>
        </div>
      </div>

      <div className="flex items-center justify-center min-h-screen px-8 pt-16 lg:pt-0">
        <div className="max-w-6xl mx-auto w-full">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-gray-600 text-xl mb-4 uppercase tracking-wider">Leistungen</h3>
            <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-8">
              Was wir <span className="italic font-serif">anbieten</span>
            </h2>
          </motion.div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center gap-12">
            {/* Image Section - Left */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <div className="bg-gray-100 rounded-lg p-8">
                <img 
                  alt='Service Webdesign' 
                  src='/ServiceWebdesign.png' 
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </motion.div>

            {/* Content Section - Right */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <div className="space-y-6">
                <h4 className="text-3xl font-bold text-gray-900">01 / 06 Webdesign</h4>
                
                <p className="text-gray-700 leading-relaxed text-lg">
                  Deine Website ist oft der erste Eindruck und der zählt. 
                  Wir entwickeln moderne, funktionale Webseiten, die nicht 
                  nur gut aussehen, sondern auch intuitiv funktionieren.
                </p>
                
                <p className="text-gray-700 leading-relaxed text-lg">
                  Ob Landingpages, Unternehmensseite oder Shop: Wir 
                  gestalten Webdesign, das deine Marke digital stark macht 
                  – responsiv, durchdacht und mit Blick fürs Detail. Dabei 
                  achten wir auf schnelle Ladezeiten, klare Nutzerführung 
                  und mobiloptimiertes Design, das überall überzeugt.
                </p>
                
                {/* Buttons */}
                <div className="flex gap-4 pt-6">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-yellow-400 text-black px-6  font-semibold hover:bg-yellow-500 transition-colors"
                  >
                    Zu den Leistungen
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-gray-300 text-gray-700 px-6  md:py-1 font-semibold hover:border-gray-400 transition-colors flex items-center gap-2"
                  >
                    Zum Projekt <ExternalLink size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden">
            {/* Image Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="bg-gray-100 rounded-lg p-6">
                <img 
                  alt='Service Webdesign' 
                  src='/ServiceWebdesign.png' 
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </motion.div>

            {/* Buttons - Mobile */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex gap-3 mb-8 justify-center"
            >
              <button className="bg-yellow-400 text-black px-2 py-1 font-semibold text-sm">
                Zu den Leistungen
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-2 py-1 font-semibold text-sm flex items-center gap-2">
                Zum Projekt <ExternalLink size={14} />
              </button>
            </motion.div>

            {/* Navigation Arrows */}
            <div className="flex justify-between items-center mb-6">
              <button className="p-2">
                <ChevronLeft size={24} className="text-gray-600" />
              </button>
              <button className="p-2">
                <ChevronRight size={24} className="text-gray-600" />
              </button>
            </div>

            {/* Content Section - Mobile */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <h4 className="text-2xl font-bold text-gray-900">01 / 06 Webdesign</h4>
              
              <p className="text-gray-700 leading-relaxed">
                Deine Website ist oft der erste Eindruck und der zählt. 
                Wir entwickeln moderne, funktionale Webseiten, die nicht 
                nur gut aussehen, sondern auch intuitiv funktionieren.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Ob Landingpages, Unternehmensseite oder Shop: Wir 
                gestalten Webdesign, das deine Marke digital stark macht 
                – responsiv, durchdacht und mit Blick fürs Detail. Dabei 
                achten wir auf schnelle Ladezeiten, klare Nutzerführung 
                und mobiloptimiertes Design, das überall überzeugt.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;