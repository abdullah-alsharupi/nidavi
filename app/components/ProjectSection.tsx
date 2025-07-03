import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const projects = [
    {
      id: 0,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Previous Project',
      subtitle: 'Design & Development',
      company: 'Previous Company',
      description: 'Markenentwicklung'
    },
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Arslan Tiefbau',
      subtitle: 'Markenentwicklung',
      company: 'Arslan Tiefbau',
      description: 'Markenentwicklung',
      isMain: true
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Next Project',
      subtitle: 'Branding & Web',
      company: 'Next Company',
      description: 'Branding & Web'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getPrevIndex = () => (currentSlide - 1 + projects.length) % projects.length;
  const getNextIndex = () => (currentSlide + 1) % projects.length;

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-4 lg:px-8 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left lg:text-center mb-12 lg:mb-16"
        >
          <h3 className="text-yellow-400 text-xl mb-4 uppercase tracking-wider">Projekte</h3>
          <h2 className="text-4xl md:text-6xl font-light text-white mb-8 lg:mb-12">
            Unsere <span className="italic font-serif">Projekte</span>
          </h2>
        </motion.div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Für Arslan Tiefbau – ein etabliertes Unternehmen im Tief- 
                und Gartenbau – durften wir den kompletten 
                Markenauftritt entwickeln. Vom Logo über Visitenkarten, 
                Fahrzeugfolierung, eine moderne Website bis hin zu 
                durchdachtem Social Media Content und zielgerichtetem 
                Online Marketing.
              </p>
              
              <p>
                Alles aus einer Hand, visuell aufeinander abgestimmt und 
                auf maximale Wirkung ausgelegt. Das Ergebnis: ein 
                starker, professioneller Auftritt, der lokal wie digital 
                überzeugt.
              </p>
            </div>
            
            <div className="pt-4">
              <button className="bg-yellow-400 text-black px-8 py-4 font-semibold hover:bg-yellow-300 transition-colors duration-300 transform hover:scale-105">
                Zum Projekt
              </button>
            </div>
          </div>

          {/* Right Image Carousel */}
          <div className="relative">
            <div className="flex items-center justify-center overflow-hidden">
              {/* Previous Image (Partial) */}
              <div className="w-24 h-80 overflow-hidden opacity-60">
                <img 
                  src={projects[getPrevIndex()].image}
                  alt="Previous"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Current Main Image */}
              <div className="w-80 h-96 mx-4 relative overflow-hidden rounded-lg">
                <img 
                  src={projects[currentSlide].image}
                  alt={projects[currentSlide].title}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h4 className="text-white text-xl font-bold mb-1">{projects[currentSlide].company}</h4>
                  <p className="text-gray-300 text-sm">{projects[currentSlide].description}</p>
                </div>
              </div>

              {/* Next Image (Partial) */}
              <div className="w-24 h-80 overflow-hidden opacity-60">
                <img 
                  src={projects[getNextIndex()].image}
                  alt="Next"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-400 transition-colors z-10 bg-black/50 rounded-full p-2"
            >
              <ChevronLeft size={24} />
            </button>

            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-400 transition-colors z-10 bg-black/50 rounded-full p-2"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Description Text */}
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-12 text-center">
            <p>
              Für Arslan Tiefbau – ein etabliertes Unternehmen im Tief- 
              und Gartenbau – durften wir den kompletten 
              Markenauftritt entwickeln. Vom Logo über Visitenkarten, 
              Fahrzeugfolierung, eine moderne Website bis hin zu 
              durchdachtem Social Media Content und zielgerichtetem 
              Online Marketing.
            </p>
            
            <p>
              Alles aus einer Hand, visuell aufeinander abgestimmt und 
              auf maximale Wirkung ausgelegt. Das Ergebnis: ein 
              starker, professioneller Auftritt, der lokal wie digital 
              überzeugt.
            </p>
          </div>

          {/* Mobile Image Carousel */}
          <div className="relative mb-8">
            <div className="flex items-center justify-center overflow-hidden">
              {/* Previous Image (Partial) */}
              <div className="w-16 h-64 overflow-hidden opacity-50">
                <img 
                  src={projects[getPrevIndex()].image}
                  alt="Previous"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Current Main Image */}
              <div className="w-64 h-80 mx-2 relative overflow-hidden rounded-lg">
                <img 
                  src={projects[currentSlide].image}
                  alt={projects[currentSlide].title}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h4 className="text-white text-lg font-bold mb-1">{projects[currentSlide].company}</h4>
                  <p className="text-gray-300 text-sm">{projects[currentSlide].description}</p>
                  
                  <button className="bg-yellow-400 text-black px-4 py-2 font-medium hover:bg-yellow-500 transition-colors mt-3 text-sm">
                    Zum Projekt
                  </button>
                </div>
              </div>

              {/* Next Image (Partial) */}
              <div className="w-16 h-64 overflow-hidden opacity-50">
                <img 
                  src={projects[getNextIndex()].image}
                  alt="Next"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-400 transition-colors z-10 bg-black/50 rounded-full p-2"
            >
              <ChevronLeft size={20} />
            </button>

            <button 
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-400 transition-colors z-10 bg-black/50 rounded-full p-2"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-yellow-400' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;