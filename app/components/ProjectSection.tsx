'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'ARSLAN TIEFBAU',
    description: 'Design ist mehr als ein schönes Logo oder eine moderne Website – es ist die Grundlage dafür, wie deine Marke wahrgenommen wird. Außerdem kreieren wir nicht nur deinen Wunsch in bester Art sondern zusätzlich noch ein Lächeln im Gesicht durch unsere Professionalität.',
    additionalText: 'Bei NIDAVI, deiner kreativen Designagentur aus Miesbach, entwickeln wir ganzheitliche Markenerlebnisse, die genau auf dich, dein Unternehmen und deine Zielgruppe abgestimmt sind. Ob Logo-Design für Handwerksbetriebe, Webdesign für kleine Unternehmen oder hochwertige Printmedien, wir gestalten nicht nur Oberflächen – wir formen Identität.',
    image: '/10.png',
    category: 'Branding'
  },
  {
    id: 2,
    title: 'MÜLLER ELEKTRO',
    description: 'Komplette Markenidentität für einen modernen Elektrobetrieb mit Logo, Website und Geschäftsausstattung.',
    additionalText: 'Ein durchgängiges Corporate Design, das Vertrauen schafft und die Professionalität des Unternehmens unterstreicht.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Corporate Design'
  },
  {
    id: 3,
    title: 'WEBER SANITÄR',
    description: 'Moderne Website mit Buchungssystem für einen Sanitärbetrieb aus der Region.',
    additionalText: 'Benutzerfreundliche Website mit integriertem Terminbuchungssystem für optimierte Kundenbetreuung.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Webdesign'
  },
  {
    id: 4,
    title: 'SCHMIDT MALEREI',
    description: 'Komplette Markenentwicklung für einen traditionellen Malerbetrieb.',
    additionalText: 'Von der Logoentwicklung bis zur Fahrzeugbeschriftung – ein stimmiges Gesamtkonzept.',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Branding'
  },
  {
    id: 5,
    title: 'FISCHER HEIZUNG',
    description: 'Digitale Transformation eines Heizungsbetriebs mit neuer Website und Online-Marketing.',
    additionalText: 'Moderne digitale Präsenz für nachhaltiges Wachstum und bessere Kundengewinnung.',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Digital Marketing'
  },
  {
    id: 6,
    title: 'BAUER ZIMMEREI',
    description: 'Traditionelles Handwerk modern präsentiert – Website und Printmedien für eine Zimmerei.',
    additionalText: 'Authentische Darstellung traditioneller Handwerkskunst in zeitgemäßem Design.',
    image: 'https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Corporate Design'
  }
]

export default function ProjectSection() {
  const duplicatedProjects = [...projects, ...projects]

  return (
    <section id="projekte" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-yellow-400 text-lg font-medium mb-4">Projekte</h3>
            <h2 className="text-4xl md:text-5xl font-light mb-8">
              Unsere <em className="italic">Projekte</em>
            </h2>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Design ist mehr als ein schönes Logo oder eine moderne 
                Website – es ist die Grundlage dafür, wie deine Marke 
                wahrgenommen wird. Außerdem kreieren wir nicht nur deinen 
                Wunsch in bester Art sondern zusätzlich noch ein Lächeln im 
                Gesicht durch unsere Professionalität.
              </p>
              
              <p>
                Bei NIDAVI, deiner kreativen Designagentur aus Miesbach, 
                entwickeln wir ganzheitliche Markenerlebnisse, die genau auf 
                dich, dein Unternehmen und deine Zielgruppe abgestimmt 
                sind. Ob Logo-Design für Handwerksbetriebe, Webdesign für 
                kleine Unternehmen oder hochwertige Printmedien, wir 
                gestalten nicht nur Oberflächen – wir formen Identität.
              </p>
            </div>
            
            <motion.button
              className="bg-yellow-400 text-black px-8 py-3 font-medium mt-8 hover:bg-yellow-300 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Zum Projekt
            </motion.button>
          </motion.div>
          
          <motion.div
            className="relative h-96 overflow-hidden rounded-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
             <div className="relative h-[600px] overflow-hidden">
          <div className="flex flex-col animate-slide-vertical-slow">
            {duplicatedProjects.map((project, index) => (
              <motion.div
                key={`${project.id}-${index}`}
                className="flex-shrink-0 mb-8 mx-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: (index % projects.length) * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gray-900 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 max-w-md mx-auto group">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-yellow-400 text-sm font-medium mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
          </motion.div>
        </div>

        {/* Vertical Auto-Sliding Projects */}
      
      </div>
    </section>
  )
}