import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const services = [
    {
      title: "Webdesign",
      description: [
        "Deine Website ist oft der erste Eindruck und der zählt. Wir entwickeln moderne, funktionale Webseiten, die nicht nur gut aussehen, sondern auch intuitiv funktionieren.",
        "Ob Landingpages, Unternehmensseite oder Shop: Wir gestalten Webdesign, das deine Marke digital stark macht – responsiv, durchdacht und mit Blick fürs Detail."
      ],
      images: [
        "/image.jpg",
        "/image.jpg",
        "/image.jpg"
      ]
    },
    {
      title: "Branding",
      description: [
        "Ein starkes Branding macht dich unverwechselbar. Wir entwickeln Markenidentitäten, die im Gedächtnis bleiben und emotional berühren.",
        "Von Logoentwicklung über Corporate Design bis zur Markenstrategie: Wir schaffen ganzheitliche Lösungen, die dein Unternehmen nachhaltig positionieren."
      ],
      images: [
        "/ServiceWebdesign.png",
        "/ServiceWebdesign.png",
        "/ServiceWebdesign.png"
      ]
    },
    {
      title: "Marketing",
      description: [
        "Effektives Marketing, das wirklich wirkt. Wir entwickeln Strategien, die deine Zielgruppe erreichen und überzeugen.",
        "Von Social Media Kampagnen bis Content Marketing: Wir setzen auf datenbasierte Entscheidungen und kreative Ansätze für maximale Reichweite."
      ],
      images: [
        "/ServiceWebdesign.png",
        "/ServiceWebdesign.png",
        "/ServiceWebdesign.png"
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [services.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0
    })
  };

  return (
    <section 
      id="services" 
      ref={ref}
      className="py-16 lg:py-24 bg-gray-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Left Content - Image Slider */}
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <div className="relative h-96 lg:h-[500px] w-full rounded-xl overflow-hidden shadow-2xl">
              <AnimatePresence custom={1} initial={false}>
                <motion.div
                  key={currentSlide}
                  custom={1}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="absolute inset-0 flex"
                >
                  <div className="relative flex-1">
                    {services[currentSlide].images.map((img, idx) => (
                      <motion.div
                        key={idx}
                        className={`absolute ${idx === 0 ? 'w-full h-full' : idx === 1 ? 'w-2/3 h-2/3 right-4 bottom-4' : 'w-1/3 h-1/2 right-8 bottom-8'} rounded-lg overflow-hidden shadow-lg`}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: idx * 0.2, duration: 0.5 }}
                      >
                        <img 
                          src={img} 
                          alt={`${services[currentSlide].title} example ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Controls */}
            <div className="flex justify-center mt-6 space-x-2">
              {services.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${currentSlide === idx ? 'bg-black w-6' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
            <motion.div variants={itemVariants}>
              <p className="text-gray-600 font-medium mb-4">Leistungen</p>
              <h2 className="text-4xl lg:text-5xl font-light mb-8">
                <span className="italic font-serif">Was wir</span> anbieten
              </h2>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
              variants={itemVariants}
            >
              <div className="flex items-start gap-4 mb-6">
                <span className="text-2xl font-light text-gray-400">0{currentSlide + 1}</span>
                <span className="text-gray-400">/</span>
                <span className="text-2xl font-light text-gray-400">0{services.length}</span>
                <motion.h3 
                  className="text-2xl font-bold text-gray-900 ml-4"
                  key={currentSlide}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {services[currentSlide].title}
                </motion.h3>
              </div>

              <div className="space-y-4 text-gray-600 leading-relaxed mb-6">
                {services[currentSlide].description.map((paragraph, idx) => (
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 + 0.3 }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="#services-detail"
                  className="bg-yellow-400 text-black px-6 py-3 font-medium hover:bg-yellow-500 transition-all duration-300 text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Zu den Leistungen
                </motion.a>
                <motion.a
                  href="#projects"
                  className="border-2 border-gray-900 text-gray-900 px-6 py-3 font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 text-center flex items-center justify-center gap-2"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "#111827",
                    color: "#fff"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Zum Projekt
                  <motion.span 
                    className="inline-block"
                    whileHover={{ x: 3 }}
                  >
                    ↗
                  </motion.span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;