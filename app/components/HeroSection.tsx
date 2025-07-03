import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu } from 'lucide-react';

const Hero = () => {
  const words = [
    "Geschichte",
    "Marke", 
    "Strategie",
    "Identität",
    "Botschaft",
    "Lösung",
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-white relative overflow-hidden">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-8 lg:px-16 py-6">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-black flex items-center justify-center mr-4">
              <span className="text-white font-bold text-xl">N</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-12">
            <a href="#" className="text-black hover:text-gray-600 transition-colors font-medium">Über Uns</a>
            <a href="#" className="text-black hover:text-gray-600 transition-colors font-medium">Leistungen</a>
            <a href="#" className="text-black hover:text-gray-600 transition-colors font-medium">Projekte</a>
            <a href="#" className="text-black hover:text-gray-600 transition-colors font-medium">Kunden</a>
            <a href="#" className="text-black hover:text-gray-600 transition-colors font-medium">Blog</a>
            <button className="bg-black text-white px-6 py-2 font-medium hover:bg-gray-800 transition-colors">
              Kontakt
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center justify-between">
          {/* Logo */}
          <div className="w-10 h-10 bg-black flex items-center justify-center">
            <span className="text-white font-bold text-lg">N</span>
          </div>

          {/* Menu Button */}
          <button className="text-black">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="min-h-screen flex items-center justify-center px-8 lg:px-16">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            {/* Text Content */}
            <div className="lg:w-2/3 text-center lg:text-left">
              <div className="mb-8 lg:mb-12">
                {/* "Eine" - Static */}
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-black mb-4 leading-none"
                >
                  Eine
                </motion.h1>
                
                {/* Animated Word */}
                <div className="relative h-24 md:h-32 lg:h-36 xl:h-44 flex items-center justify-center lg:justify-start overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.h2
                      key={currentWordIndex}
                      initial={{ opacity: 0, y: 100, rotateX: -90 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      exit={{ opacity: 0, y: -100, rotateX: 90 }}
                      transition={{ 
                        duration: 0.8, 
                        ease: [0.4, 0.0, 0.2, 1],
                        type: "spring",
                        stiffness: 100,
                        damping: 15
                      }}
                      className="absolute font-serif italic text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-black leading-none"
                      style={{ 
                        transformStyle: 'preserve-3d'
                      }}
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
                  className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-black mt-6 mb-12 lg:mb-16 leading-relaxed"
                >
                  die Eindruck macht
                </motion.p>
              </div>
              
              {/* Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12 lg:mb-0"
              >
                <button className="group bg-black text-white px-8 lg:px-12 py-3 lg:py-4 text-base lg:text-lg font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                  <span className="group-hover:tracking-wide transition-all duration-300">
                    Projekte entdecken
                  </span>
                </button>
                
                <button className="group bg-yellow-400 text-black px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-medium hover:bg-yellow-500 transition-all duration-300 flex items-center gap-2 transform hover:scale-105">
                  <span className="group-hover:tracking-wide transition-all duration-300">
                    Kontakt aufnehmen
                  </span>
                  <ArrowRight 
                    size={20} 
                    className="group-hover:translate-x-1 transition-transform duration-300" 
                  />
                </button>
              </motion.div>
            </div>

            {/* Awards Section - Desktop Only */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="hidden lg:flex lg:w-1/3 flex-row items-center justify-center space-y-8"
            >
              {/* Brand Award */}
              <div className="flex flex-row items-center justify-center">
               <img 
                src="/BrandAwardDesign.png"
                alt="Brand Award Design" 
                className="w-30 h-30 object-cover rounded-full"
              />
              </div>
              
              {/* Google Rating */}
              <div className="flex items-center justify-center">
                  <img 
                src="/GoogleRating.png"
                alt="Brand Award Design" 
                className="w-30 h-30 object-cover rounded-full"
              />
              </div>
            </motion.div>
          </div>

          {/* Mobile Awards Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="lg:hidden flex items-center justify-center space-x-8 mt-8"
          >
            {/* Brand Award */}
            <div className="flex items-center justify-center">
              <img 
                src="/BrandAwardDesign.png"
                alt="Brand Award Design" 
                className="w-20 h-20 object-cover rounded-full"
              />
            </div>
            
            {/* Google Rating */}
            <div className="flex items-center justify-center">
               <img 
                src="/GoogleRating.png"
                alt="Brand Award Design" 
                className="w-22 h-20 object-cover rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: [0, 1, 0],
          y: [20, 0, -10],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
        }}
      >
        <div className="w-6 h-10 border-2 border-black rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-black rounded-full mt-2"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;