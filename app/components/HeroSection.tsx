import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header'; // تأكد من المسار الصحيح
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const words = ["Geschichte", "Marke", "Strategie", "Identität", "Botschaft", "Lösung"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <section className="min-h-screen bg-white relative w-full">
      <Header isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 bg-white z-40 lg:hidden pt-20"
          >
            <div className="flex flex-col items-center justify-start h-full space-y-8 p-8">
              <a href="#" className="text-2xl font-medium text-black hover:text-gray-600 transition-colors" onClick={toggleMobileMenu}>Über Uns</a>
              <a href="#" className="text-2xl font-medium text-black hover:text-gray-600 transition-colors" onClick={toggleMobileMenu}>Leistungen</a>
              <a href="#" className="text-2xl font-medium text-black hover:text-gray-600 transition-colors" onClick={toggleMobileMenu}>Projekte</a>
              <a href="#" className="text-2xl font-medium text-black hover:text-gray-600 transition-colors" onClick={toggleMobileMenu}>Kunden</a>
              <a href="#" className="text-2xl font-medium text-black hover:text-gray-600 transition-colors" onClick={toggleMobileMenu}>Blog</a>
              <button className="bg-black text-white px-8 py-3 text-lg font-medium hover:bg-gray-800 transition-colors mt-8" onClick={toggleMobileMenu}>Kontakt</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="min-h-screen w-full flex flex-col justify-center px-6 lg:px-16 pt-32 pb-16 lg:pt-40">
        <div className="w-full max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="w-full text-center lg:text-left">
            <div className="mb-8 lg:mb-12">
              {/* "Eine" - Full width */}
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-gray-500 mb-2 lg:mb-4 leading-none tracking-tighter w-full"
              >
                Eine
              </motion.h1>
              
              {/* Animated Word - Full width */}
              <div className="relative h-24 sm:h-28 md:h-32 lg:h-56 xl:h-64 w-full flex items-center justify-center lg:justify-start overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.h2
                    key={currentWordIndex}
                    initial={{ opacity: 0, y: 100, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    exit={{ opacity: 0, y: -100, rotateX: 90 }}
                    transition={{ 
                      duration: 0.8,
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }}
                    className="absolute font-serif italic text-4xl sm:text-5xl md:text-6xl lg:text-[10rem] xl:text-[15rem] text-black leading-none tracking-tighter w-full"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {words[currentWordIndex]}
                  </motion.h2>
                </AnimatePresence>
              </div>

              {/* Subtitle */}
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black mt-4 lg:mt-6 mb-8 lg:mb-12 leading-relaxed font-light"
              >
                die Eindruck macht
              </motion.p>
            </div>
            
            {/* Buttons and Awards Container */}
            <div className="flex flex-col lg:flex-row items-center justify-between w-full">
              {/* Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8 lg:mb-0"
              >
                <button className="group bg-black text-white px-6 sm:px-8 py-1 text-base sm:text-lg font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                  Projekte entdecken
                </button>
                
                <button className="group bg-yellow-400 text-black px-6 sm:px-8 py-1 text-base sm:text-lg font-medium hover:bg-yellow-500 transition-all duration-300 flex items-center gap-2 transform hover:scale-105">
                  Kontakt aufnehmen
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </motion.div>

              {/* Awards - Visible on mobile with adjusted layout */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex lg:hidden items-center justify-center space-x-6 mt-8"
              >
                <div className="flex items-center justify-center">
                  <Image 
                    alt='brand' 
                    src={'/BrandAwardDesign.png'} 
                    width={60} 
                    height={60} 
                    className="w-16"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <Image 
                    alt='google-rating' 
                    src={'/GoogleRating.png'} 
                    width={100} 
                    height={40} 
                    className="w-24"
                  />
                </div>
              </motion.div>

              {/* Awards - Desktop version */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="hidden lg:flex items-center justify-center space-x-8"
              >
                <div className="flex items-center justify-center">
                  <Image alt='brand' src={'/BrandAwardDesign.png'} width={80} height={80} className="w-20"/>
                </div>
                <div className="flex items-center justify-center">
                  <Image alt='google-rating' src={'/GoogleRating.png'} width={120} height={60} className="w-32"/>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;