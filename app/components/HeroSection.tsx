"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";

export default function HeroSection() {
  const words = [
    "Geschichte",
    "Marke",
    "Strategie",
    "Identität",
    "Botschaft",
    "Lösung",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  const longestWord = words.reduce((a, b) => (a.length > b.length ? a : b));

  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    size: Math.random() * 5 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    speed: Math.random() * 0.5 + 0.1,
    delay: Math.random() * 5,
  }));

  const socialIcons = [
    {
      name: "Instagram",
      path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
        url: 'https://www.instagram.com/nidavi.de?igsh=MXVwdGwwN2VkZWZpYQ=='
    },
    {
      name: "Twitter",
      path: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
    },
    {
      name: "LinkedIn",
      path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    },
    {
      name: "Pinterest",
      path: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z",
    },
    {
      name: "GitHub",
      path: "M12 .297c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
    },
  ];

  return (
    <section
      id="home"
      ref={ref}
      className="italic bg-white relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Particle Background */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-black/10 rounded-full"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.5, 0],
              y: [0, -100],
              x: [0, (Math.random() - 0.5) * 50],
            }}
            transition={{
              duration: 10 + particle.speed * 10,
              delay: particle.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Dynamic Gradient Background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, rgba(255,214,0,1) 70%)",
            "radial-gradient(circle at 70% 50%, rgba(255,255,255,0.1) 0%, rgba(255,214,0,1) 70%)",
            "radial-gradient(circle at 50% 30%, rgba(255,255,255,0.1) 0%, rgba(255,214,0,1) 70%)",
            "radial-gradient(circle at 50% 70%, rgba(255,255,255,0.1) 0%, rgba(255,214,0,1) 70%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* Interactive Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating circles with parallax */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-black/5 rounded-full"
          style={{
            x: (mousePosition.x - window.innerWidth / 2) / 40,
            y: (mousePosition.y - window.innerHeight / 2) / 40,
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-black/10 rounded-full"
          style={{
            x: (mousePosition.x - window.innerWidth / 2) / -30,
            y: (mousePosition.y - window.innerHeight / 2) / -30,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Animated geometric shapes */}
        <motion.div
          className="absolute top-1/3 left-1/3 w-32 h-32 bg-black/10 transform rotate-45"
          animate={{
            rotate: [45, 405],
            borderRadius: ["20%", "50%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-black/5 transform"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Social Media Icons */}
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-20 flex flex-col space-y-4">
    {socialIcons.map((icon, i) => (
      <motion.a
        key={icon.name}
        href={icon.url || "#"} // استخدم الرابط إذا موجود أو # إذا لم يوجد
        target="_blank" // لفتح الرابط في تبويب جديد
        rel="noopener noreferrer" // لأمان أفضل
        className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
        initial={{ opacity: 0, x: 20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: i * 0.1 + 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d={icon.path} />
        </svg>
      </motion.a>
    ))}
  </div>

      {/* Main Content */}
      <div
        ref={containerRef}
        className="relative z-10 text-center text-black px-6 max-w-6xl mx-auto italic"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="italic text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight flex flex-wrap justify-center">
            <span>Eine </span>
            <span className="italic relative inline-block h-16 sm:h-20 md:h-24 lg:h-28 overflow-hidden align-middle mx-2">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWordIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className=" absolute left-0 right-0 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold italic"
                >
                  {words[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
              <span className="invisible">{longestWord}</span>
            </span>
          </h1>

          <motion.p
            className="italic text-xl sm:text-2xl md:text-3xl font-light mb-8 sm:mb-12"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            die Eindruck macht.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
            className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 font-medium hover:bg-gray-800 transition-all italic relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Kontakt aufnehmen</span>
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </motion.button>

          <motion.button
            className="border-2 border-black text-black px-6 sm:px-8 py-3 sm:py-4 font-medium hover:bg-black hover:text-white transition-all flex items-center justify-center italic group relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center">
              Projekte entdecken
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
            <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </motion.button>
        </motion.div>

        {/* Awards Section */}
        <motion.div
          className="flex items-center justify-center space-x-6 sm:space-x-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            className="flex items-center space-x-2 p-4 rounded-lg hover:bg-black/5 transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="w-12 sm:w-16 h-12 sm:h-16 bg-black rounded-full flex items-center justify-center"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Image src={'/BrandAwardDesign.png'}  alt="" width={500} height={300} quality={100}/>
            </motion.div>
            <div className="text-left">
              <div className="font-bold text-base sm:text-lg"> <Image src={'/GoogleRating.png'}  alt="" width={200} height={200}/></div>
             
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scrolling Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={
          inView
            ? {
                opacity: [0, 1, 0],
                y: [20, 0, -10],
              }
            : {}
        }
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

      {/* Custom cursor effect */}
      <motion.div
        className="fixed w-8 h-8 border-2 border-black rounded-full pointer-events-none z-50"
        style={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          mixBlendMode: "difference",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
    </section>
  );
}
