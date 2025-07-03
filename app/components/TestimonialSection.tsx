import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Mit NIDAVI haben wir endlich einen Partner gefunden, der nicht nur versteht, was wir brauchen y sondern auch, wie man es modern, professionell und mit Wiedererkennungswert umsetzt. Vom Logo bis zur Website passt einfach alles. Unsere Kunden merken den Unterschied.",
      author: "Fatih Arslan",
      company: "Arslan Tiefbau"
    },
    {
      id: 2,
      quote: "Die Zusammenarbeit mit NIDAVI war von Anfang an professionell und zielführend. Das Team hat unsere Vision perfekt verstanden und in ein modernes, ansprechendes Design umgesetzt.",
      author: "Maria Schmidt",
      company: "Schmidt Consulting"
    },
    {
      id: 3,
      quote: "Hervorragende Arbeit! NIDAVI hat unseren kompletten Markenauftritt revolutioniert. Die Qualität und Aufmerksamkeit für Details ist beeindruckend.",
      author: "Thomas Weber",
      company: "Weber Solutions"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="min-h-screen bg-white text-black py-20 px-4 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-gray-600 text-lg mb-6 uppercase tracking-wider font-medium">
            Kundenstimmen
          </h3>
          <h2 className="text-5xl md:text-6xl font-light mb-4 leading-tight">
            <span className="italic font-serif">Zufriedenheit</span>
          </h2>
          <p className="text-2xl md:text-3xl font-light text-gray-700 mt-2">
            unserer Kunden
          </p>
        </div>

        {/* Testimonial Content */}
        <div className="max-w-3xl mx-auto">
          <div className="relative min-h-[300px] flex items-center">
            <div className="w-full text-center">
              <blockquote className="text-xl md:text-2xl leading-relaxed text-gray-800 mb-12 font-light">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              
              {/* Navigation */}
              <div className="flex items-center justify-center gap-8 mb-8">
                <button
                  onClick={prevTestimonial}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={24} className="text-gray-600" />
                </button>
                
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-black mb-1">
                    {testimonials[currentTestimonial].author}
                  </h4>
                  <p className="text-gray-600 text-lg">
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>
                
                <button
                  onClick={nextTestimonial}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={24} className="text-gray-600" />
                </button>
              </div>
              
              {/* CTA Button */}
              <button className="bg-yellow-400 text-black px-8 py-3 text-lg font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105">
                Zum Projekt
              </button>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-12 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentTestimonial === index 
                  ? 'bg-yellow-400 scale-110' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;