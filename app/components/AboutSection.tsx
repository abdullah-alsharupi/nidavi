'use client'

import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-yellow-400 text-lg font-medium mb-4">Über Uns</h3>
            <h2 className="text-4xl md:text-5xl font-light mb-8">
              Lerne uns <em className="italic">kennen</em>
            </h2>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                NIDAVI ist deine Designagentur aus Miesbach, spezialisiert 
                auf modernes Branding, Webdesign und strategisches 
                Marketing für Handwerksbetriebe und kleine Unternehmen.
              </p>
              
              <p>
                Wir glauben an Gestaltung mit Bedeutung. Unsere Entwürfe 
                sehen nicht nur gut aus – sie lösen Aufgaben. Sichtbarkeit, 
                Wiedererkennung, Vertrauen – alles beginnt mit dem 
                richtigen Design.
              </p>
              
              <p>
                Unser Ansatz ist bewusst anders: keine 08/15-Designs, keine 
                Templates von der Stange, keine Floskeln. keine 08/15-
                Designs, keine Templates von der Stange, keine Floskeln.
              </p>
            </div>
            
            <motion.button
              className="bg-yellow-400 text-black px-8 py-3 font-medium mt-8 hover:bg-yellow-300 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Mehr zu uns
            </motion.button>
          </motion.div>
          
         <motion.div
  className="relative"
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
<div className="flex flex-col items-center">
  {/* الديف الأول - في البداية */}
  <div className="w-full">
    <h3 className="float-start start-0 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-2 md:mb-4">
      Create.
    </h3>
  </div>

  {/* الديف الثاني - في المنتصف أسفل الأول */}
  <div className="w-full text-center my-4">
    <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none text-yellow-400 italic mb-2 md:mb-4">
      Impress.
    </h3>
  </div>

  {/* الديف الثالث - في النهاية أسفل الثاني */}
  <div className="w-full text-right">
    <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none">
      Stay.
    </h3>
  </div>
</div>
</motion.div>
        </div>
      </div>
    </section>
  )
}