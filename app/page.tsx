'use client'

import { useEffect, useState } from 'react'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import ProjectSection from './components/ProjectSection'
import TestimonialSection from './components/TestimonialSection'
import Footer from './components/Footer'
import Form from './components/Form'
import Customers from './components/Customer'
import Contact from './components/Form'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="w-full overflow-x-hidden">
      <main className="min-h-screen from-blue-50 to-indigo-100 w-full">
     
       
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <Customers />
          <ProjectSection />
          <TestimonialSection />
          <Contact />
        <Footer />
      </main>
    </div>
  )
}