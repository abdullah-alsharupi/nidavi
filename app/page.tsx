'use client'

import { useEffect, useState } from 'react'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import ProjectSection from './components/ProjectSection'
import TestimonialSection from './components/TestimonialSection'
import Header from './components/Header'
import Footer from './components/Footer'
import Form from './components/Form'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
     <div className="overflow-x-hidden">
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 w-full max-w-[100vw]">
        <Header />
        <HeroSection />
        <AboutSection />
           <ServicesSection />
      <ProjectSection />
      <TestimonialSection /> 
        <Form/>
        <Footer />
      </main>
    </div>
  )
}
