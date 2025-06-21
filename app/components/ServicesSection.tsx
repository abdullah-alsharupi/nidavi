'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const services = [
  {
    id: 1,
    number: '01',
    total: '06',
    title: 'Branding',
    description: 'Design ist mehr als ein schönes Logo oder eine moderne Website – es ist die Grundlage dafür, wie deine Marke wahrgenommen wird. Außerdem kreieren wir nicht nur deinen Wunsch in bester Art sondern zusätzlich noch ein Lächeln im Gesicht durch unsere Professionalität.',
    additionalText: 'Bei NIDAVI, deiner kreativen Designagentur aus Miesbach, entwickeln wir ganzheitliche Markenerlebnisse, die genau auf dich, dein Unternehmen und deine Zielgruppe abgestimmt sind. Ob Logo-Design für Handwerksbetriebe, Webdesign für kleine Unternehmen oder hochwertige Printmedien, wir gestalten nicht nur Oberflächen – wir formen Identität.',
    image: '/9.png'
  },
  {
    id: 2,
    number: '02',
    total: '06',
    title: 'Webdesign',
    description: 'Moderne, responsive Websites mit neuesten Technologien für optimale Benutzererfahrung und Performance.',
    additionalText: 'Unsere Websites sind nicht nur schön anzusehen, sondern auch funktional und benutzerfreundlich gestaltet.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 3,
    number: '03',
    total: '06',
    title: 'Marketing',
    description: 'Strategisches Marketing für nachhaltige Kundengewinnung und Markenaufbau.',
    additionalText: 'Wir entwickeln maßgeschneiderte Marketingstrategien für Ihr Unternehmen.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 4,
    number: '04',
    total: '06',
    title: 'Printdesign',
    description: 'Hochwertige Printmedien von Visitenkarten bis zu Broschüren.',
    additionalText: 'Professionelle Drucksachen, die Eindruck hinterlassen.',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 5,
    number: '05',
    total: '06',
    title: 'Fotografie',
    description: 'Professionelle Unternehmens- und Produktfotografie.',
    additionalText: 'Bilder, die Ihre Marke perfekt in Szene setzen.',
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 6,
    number: '06',
    total: '06',
    title: 'Beratung',
    description: 'Strategische Beratung für digitale Transformation und Markenentwicklung.',
    additionalText: 'Wir begleiten Sie auf dem Weg zu einer starken digitalen Präsenz.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
]
export default function ServicesSection() {
  return (
    <section id="leistungen" className="py-0 bg-white overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* العنوان */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-medium mb-3">Leistungen</h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light">
            Was wir <em className="italic">anbieten</em>
          </h2>
        </motion.div>

        {/* الشبكة الرئيسية */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start mb-12 md:mb-16">
          {/* عرض الخدمات الأفقي */}
          <motion.div
            className="relative h-auto lg:h-96 overflow-visible rounded-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-visible">
              <div className="flex animate-slide-horizontal-slow w-max">
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    className="flex-shrink-0 w-72 sm:w-80 md:w-96 lg:w-80 mx-2 sm:mx-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group h-full">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <div className="mb-4">
                          <span className="text-2xl font-bold">{service.number}</span>
                          <span className="text-lg text-gray-400 ml-2">/ {service.total}</span>
                          <span className="text-2xl font-bold ml-4">{service.title}</span>
                        </div>
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* محتوى الجانب الأيمن */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* ... (نفس محتوى الجانب الأيمن الأصلي) ... */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}