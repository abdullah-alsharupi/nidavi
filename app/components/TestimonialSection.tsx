'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    text: "Mit NIDAVI haben wir endlich einen Bloger gefunden, der nicht nur versteht, was wir brauchen – sondern auch, wie man es modern, professionell und mit Wiedererkennungswert umsetzt. Vom Logo bis zur Website passt einfach alles. Unsere Kunden merken den Unterschied.",
    author: "Fatih Arslan",
    company: "Arslan Tiefbau"
  },
  {
    id: 2,
    text: "Die Zusammenarbeit mit NIDAVI war von Anfang an professionell und zielführend. Unser neues Corporate Design spiegelt perfekt wider, wofür unser Unternehmen steht. Die Qualität der Arbeit ist herausragend.",
    author: "Michael Weber",
    company: "Weber Sanitär"
  },
  {
    id: 3,
    text: "NIDAVI hat unsere digitale Präsenz komplett transformiert. Die neue Website und das Marketing-Konzept haben zu einer deutlichen Steigerung unserer Kundenanfragen geführt. Absolut empfehlenswert!",
    author: "Thomas Müller",
    company: "Müller Elektro"
  }
]

export default function TestimonialSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-12 md:py-20 bg-gray-50 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-base md:text-lg font-medium mb-3">Kundenstimmen</h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light">
            <em className="italic">Zufriedenheit</em>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mt-3 md:mt-4">unserer Kunden</p>
        </motion.div>

        <div className="max-w-3xl lg:max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6 md:mb-8 px-4 gap-4 sm:gap-0">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border-2 border-black hover:bg-black hover:text-white transition-colors flex-shrink-0"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <motion.div
              key={currentTestimonial}
              className="text-center flex-1 mx-2 sm:mx-4 md:mx-6 min-w-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <blockquote className="text-base md:text-lg lg:text-xl text-gray-800 mb-4 md:mb-6 leading-relaxed px-2">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <div className="font-medium md:font-bold text-base md:text-lg">
                {testimonials[currentTestimonial].author} - {testimonials[currentTestimonial].company}
              </div>
            </motion.div>
            
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border-2 border-black hover:bg-black hover:text-white transition-colors flex-shrink-0"
            >
              <svg className="w-5 h-5 sm:w-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          <div className="text-center mt-6 md:mt-8">
            <button className="bg-yellow-400 text-black px-6 py-2 md:px-8 md:py-3 font-medium hover:bg-yellow-300 transition-colors text-sm md:text-base">
              Zum Projekt
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}