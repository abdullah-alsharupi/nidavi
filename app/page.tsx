'use client'

import { useEffect, useState } from 'react'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import ProjectSection from './components/ProjectSection'
import TestimonialSection from './components/TestimonialSection'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <main className="">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectSection />
      <TestimonialSection /> 
      <Footer />
    </main>
  )
}