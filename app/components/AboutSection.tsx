// import Image from 'next/image';
// import React, { useEffect, useState } from 'react';
// import { useInView } from 'react-intersection-observer';
// import { motion } from 'framer-motion';

// const About: React.FC = () => {
//   const [ref, inView] = useInView({
//     threshold: 0.3,
//     triggerOnce: false
//   });

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut"
//       }
//     }
//   };

//   const imageVariants = {
//     hidden: { opacity: 0, x: 50 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 1,
//         ease: "anticipate"
//       }
//     }
//   };

//   const buttonVariants = {
//     hover: {
//       scale: 1.05,
//       transition: {
//         yoyo: Infinity,
//         duration: 0.3
//       }
//     },
//     tap: {
//       scale: 0.95
//     }
//   };

//   return (
//     <section 
//       id="about" 
//       className="bg-black text-white py-16 md:py-24 lg:py-32"
//       ref={ref}
//     >
//       <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//           {/* Left Content */}
//           <motion.div 
//             className="space-y-8"
//             variants={containerVariants}
//             initial="hidden"
//             animate={inView ? "visible" : "hidden"}
//           >
//             <motion.div variants={itemVariants}>
//               <p className="text-yellow-400 font-medium mb-2 md:mb-4 text-lg">Über Uns</p>
//               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6 md:mb-8">
//                 <span className="italic font-serif">Lerne uns</span> kennen
//               </h2>
//             </motion.div>

//             <motion.div 
//               className="space-y-4 md:space-y-6 text-gray-300 leading-relaxed text-base md:text-lg"
//               variants={itemVariants}
//             >
//               <p>
//                 NIDAVI ist deine Designagentur aus Miesbach – spezialisiert auf Branding, Webdesign und Marketing mit Wirkung.
//               </p>
//               <p>
//                 Wir gestalten keine 08/15-Designs, sondern Marken mit Charakter. Für Handwerksbetriebe und kleine Unternehmen entwickeln wir individuelle Lösungen, die sichtbar machen, was dich besonders macht – klar, strategisch, ästhetisch.
//               </p>
//             </motion.div>

//             <motion.a
//               href="#contact"
//               className="inline-block bg-yellow-400 text-black px-6 py-3 md:px-8 md:py-4 font-medium hover:bg-yellow-500 transition-all duration-300"
//               variants={itemVariants}
//               whileHover="hover"
//               whileTap="tap"
          
//             >
//               Mehr zu uns
//             </motion.a>
//           </motion.div>

//           {/* Right Content */}
//           <motion.div 
//             className="relative"
//             initial="hidden"
//             animate={inView ? "visible" : "hidden"}
//             variants={imageVariants}
//           >
//             <div className="relative w-full mx-auto">
//               <div className="aspect-w-16 aspect-h-9 md:aspect-w-3 md:aspect-h-2">
//                 <Image 
//                   src="/NidaviLogoColorful.png" 
//                   alt="NIDAVI Team"
//                   layout="responsive"
//                   width={800}
//                   height={600}
//                   className="rounded-lg shadow-2xl"
//                   objectFit="cover"
//                   quality={100}
//                 />
//               </div>
              
//               {/* Floating elements animation */}
//               {inView && (
//                 <>
//                   <motion.div 
//                     className="absolute -top-4 -left-4 w-16 h-16 bg-yellow-400 rounded-full mix-blend-multiply opacity-20"
//                     animate={{
//                       y: [0, -10, 0],
//                       scale: [1, 1.1, 1]
//                     }}
//                     transition={{
//                       duration: 4,
//                       repeat: Infinity,
//                       ease: "easeInOut"
//                     }}
//                   />
//                   <motion.div 
//                     className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full mix-blend-multiply opacity-20"
//                     animate={{
//                       y: [0, 10, 0],
//                       scale: [1, 1.2, 1]
//                     }}
//                     transition={{
//                       duration: 5,
//                       repeat: Infinity,
//                       ease: "easeInOut",
//                       delay: 0.5
//                     }}
//                   />
//                 </>
//               )}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <>
     <div className="min-h-screen">
      {/* About Us Section */}
      <section className="min-h-screen  items-center justify-center px-3  lg:px-16 relative overflow-hidden bg-black text-white">
        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-6 z-10 relative mt-16 ">
            {/* Small Yellow Heading */}
            <h3 className="text-yellow-400 text-2xl font-medium tracking-wide flex-1 text-center">
              Über Uns
            </h3>
            
            {/* Main Heading */}
            <h2 className="text-xl lg:text-5xl xl:text-6xl font-light  text-white flex-1 text-center">
              <span className="italic text-center">Lerne uns</span> <span className="font-normal">kennen</span>
            </h2>
            
            {/* Description Text */}
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                NIDAVI ist deine Designagentur aus Miesbach – 
                spezialisiert auf Branding, Webdesign und Marketing mit 
                Wirkung.
              </p>
              
              <p>
                Wir gestalten keine 08/15-Designs, sondern Marken mit 
                Charakter. Für Handwerksbetriebe und kleine 
                Unternehmen entwickeln wir individuelle Lösungen, die 
                sichtbar machen, was dich besonders macht – klar, 
                strategisch, ästhetisch.
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="pt-4 lg:pt-16">
              {/* Desktop Button - Left Aligned */}
              <div className="hidden lg:block">
                <button className="bg-yellow-400 text-black px-8 py-4 font-semibold hover:bg-yellow-300 transition-colors duration-300 transform hover:scale-105">
                  Mehr zu uns
                </button>
              </div>
              
              {/* Mobile Button - Centered with Extra Spacing */}
              <div className="lg:hidden flex justify-center pt- pb-3 ">
                <button className="bg-yellow-400 text-black px-8 py-2  font-semibold hover:bg-yellow-300 transition-colors duration-300 transform hover:scale-105">
                  Mehr zu uns
                </button>
              </div>
            </div>
          </div>
          
          {/* Right Visual - Desktop Only */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-yellow-400/10 blur-3xl rounded-full"></div>
              
              {/* Logo Container - Full Logo for Desktop */}
              <div className="relative p-8">
                <img 
                  src="/NidaviLogoColorful.png" 
                  alt="NIDAVI Logo" 
                  className="w-full max-w-md h-auto object-contain"
                />
              </div>
              
              {/* Decorative Elements */}
          
            </div>
          </div>
        </div>

        {/* Mobile Logo - Bottom Half Only */}
        <div className="lg:hidden absolute bottom-0 left-0 right-0 w-full h-32 overflow-hidden z-50">
          <div className="relative w-full h-64 flex items-center justify-center">
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-yellow-400/5 blur-2xl"></div>
            
            {/* Logo Container - Only bottom half visible */}
            <div className="relative">
              <img 
                src="/NidaviLogoColorful.png" 
                alt="NIDAVI Logo" 
                className="w-48 h-auto object-contain opacity-80"
              />
            </div>
            
   
          </div>
        </div>
      </section>

      {/* Services Section */}
  
    </div>
    
    </>
  )
}

export default About