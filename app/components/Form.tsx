import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    vorname: '',
    nachname: '',
    unternehmen: '',
    email: '',
    telefon: '',
    nachricht: '',
    datenschutz: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-4 md:px-8 py-16 relative overflow-hidden">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h3 className="text-yellow-400 text-xl mb-4 uppercase tracking-wider">
            Kontaktmöglichkeit
          </h3>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 lg:mb-8">
            Fragen <span className="italic font-serif">oder</span> Ideen?
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-7xl mx-auto">
            Du hast Fragen zu uns, unseren Dienstleistungen oder was 
            Anderem oder brauchst jemanden der deine Ideen auf bester Art 
            umsetzt? Dann schreib uns jetzt an!
          </p>
        </motion.div>

        {/* Contact Form - Full width on desktop */}
        <motion.form 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-8 w-full max-w-6xl mx-auto"
        >
          {/* First Row - Name Fields */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="relative">
              <input
                type="text"
                name="vorname"
                value={formData.vorname}
                onChange={handleInputChange}
                placeholder="Vorname*"
                required
                className="w-full bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-gray-400 py-3 px-0 focus:outline-none focus:border-yellow-400 transition-colors text-lg lg:text-xl"
              />
            </div>
            <div className="relative">
              <input
                type="text"
                name="nachname"
                value={formData.nachname}
                onChange={handleInputChange}
                placeholder="Nachname*"
                required
                className="w-full bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-gray-400 py-3 px-0 focus:outline-none focus:border-yellow-400 transition-colors text-lg lg:text-xl"
              />
            </div>
          </div>

          {/* Company Field - Full width */}
          <div className="relative">
            <input
              type="text"
              name="unternehmen"
              value={formData.unternehmen}
              onChange={handleInputChange}
              placeholder="Unternehmen"
              className="w-full bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-gray-400 py-3 px-0 focus:outline-none focus:border-yellow-400 transition-colors text-lg lg:text-xl"
            />
          </div>

          {/* Email Field - Full width */}
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="E-Mail-Adresse*"
              required
              className="w-full bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-gray-400 py-3 px-0 focus:outline-none focus:border-yellow-400 transition-colors text-lg lg:text-xl"
            />
          </div>

          {/* Phone Field with German Flag - Full width */}
          <div className="relative">
            <div className="flex items-center border-b-2 border-gray-600 focus-within:border-yellow-400 transition-colors w-full">
              <div className="flex items-center mr-4 flex-shrink-0">
                {/* German Flag */}
                <div className="w-8 h-5 border border-gray-500 overflow-hidden rounded-sm">
                  <div className="w-full h-1/3 bg-black"></div>
                  <div className="w-full h-1/3 bg-red-600"></div>
                  <div className="w-full h-1/3 bg-yellow-400"></div>
                </div>
              </div>
              <input
                type="tel"
                name="telefon"
                value={formData.telefon}
                onChange={handleInputChange}
                placeholder="Telefonnummer*"
                required
                className="flex-1 bg-transparent border-0 text-white placeholder-gray-400 py-3 px-0 focus:outline-none text-lg lg:text-xl"
              />
            </div>
          </div>

          {/* Message Field - Full width */}
          <div className="relative">
            <textarea
              name="nachricht"
              value={formData.nachricht}
              onChange={handleInputChange}
              placeholder="Nachricht"
              rows={4}
              className="w-full bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-gray-400 py-3 px-0 focus:outline-none focus:border-yellow-400 transition-colors text-lg lg:text-xl resize-none"
            />
          </div>

          {/* Privacy Checkbox - Full width */}
          <div className="flex items-start space-x-3 pt-4 w-full">
            <input
              type="checkbox"
              name="datenschutz"
              checked={formData.datenschutz}
              onChange={handleInputChange}
              required
              className="mt-1 w-5 h-5 text-yellow-400 bg-transparent border-2 border-gray-600 rounded focus:ring-yellow-400 focus:ring-2 flex-shrink-0"
            />
            <label className="text-gray-300 text-sm lg:text-base leading-relaxed">
              Mit der Verarbeitung der im Kontaktformular angegebenen 
              personenbezogenen Daten zum Zwecke der 
              Kontaktaufnahme durch die Bold Marketing + Development 
              GmbH bin ich einverstanden. Nähere Informationen zur 
              Datenverarbeitung finden Sie in unserer{' '}
              <a href="#" className="text-yellow-400 hover:underline">
                Datenschutzerklärung
              </a>. *
            </label>
          </div>

          {/* Submit Button - Centered but full width on mobile */}
          <div className="pt-6 flex justify-center lg:justify-start">
            <button
              type="submit"
              className="bg-yellow-400 text-black px-8 py-4 font-semibold hover:bg-yellow-300 transition-colors duration-300 transform hover:scale-105 text-lg lg:text-xl w-full lg:w-auto"
            >
              Jetzt absenden
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;