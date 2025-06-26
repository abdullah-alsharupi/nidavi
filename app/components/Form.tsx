import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flag } from 'lucide-react';

interface FormData {
  vorname: string;
  nachname: string;
  unternehmen: string;
  email: string;
  telefon: string;
  datenschutz: boolean;
}

function Form() {
  const [formData, setFormData] = useState<FormData>({
    vorname: '',
    nachname: '',
    unternehmen: '',
    email: '',
    telefon: '',
    datenschutz: false
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.vorname.trim()) {
      newErrors.vorname = 'Vorname ist erforderlich';
    }

    if (!formData.nachname.trim()) {
      newErrors.nachname = 'Nachname ist erforderlich';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-Mail-Adresse ist erforderlich';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Ungültige E-Mail-Adresse';
    }

    if (!formData.telefon.trim()) {
      newErrors.telefon = 'Telefonnummer ist erforderlich';
    }

   

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          vorname: '',
          nachname: '',
          unternehmen: '',
          email: '',
          telefon: '',
          datenschutz: false
        });
      }, 3000);
    }
  };

  // German flag animation variants
  const flagVariants = {
    initial: { rotate: -10, y: -10 },
    animate: { 
      rotate: 0, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 10
      }
    },
    hover: {
      rotate: [0, -5, 5, 0],
      transition: {
        duration: 0.8,
        repeat: Infinity
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="w-full max-w-4xl"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header Section */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.h2 
            className="text-yellow-400 text-lg font-medium mb-2"
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.3 }}
          >
            Kontaktmöglichkeit
          </motion.h2>
          <motion.h1 
            className="text-white text-4xl md:text-5xl font-light italic mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Fragen oder Ideen?
          </motion.h1>
          <motion.p 
            className="text-white text-lg leading-relaxed max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Du hast Fragen zu uns, unseren Dienstleistungen oder was Anderem oder brauchst 
            jemanden der deine Ideen auf bester Art umsetzt? Dann schreib uns jetzt an!
          </motion.p>
        </motion.div>

        {/* Contact Form */}
        <motion.form 
          onSubmit={handleSubmit} 
          className="space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {/* First Row - Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="relative"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <input
                type="text"
                name="vorname"
                value={formData.vorname}
                onChange={handleInputChange}
                placeholder="Vorname*"
                className={`w-full bg-transparent border-0 border-b-2 ${
                  errors.vorname ? 'border-red-500' : 'border-white'
                } text-white placeholder-gray-400 pb-2 focus:outline-none focus:border-yellow-400 transition-colors duration-300`}
              />
              <AnimatePresence>
                {errors.vorname && (
                  <motion.span 
                    className="text-red-500 text-sm mt-1 block"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {errors.vorname}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <input
                type="text"
                name="nachname"
                value={formData.nachname}
                onChange={handleInputChange}
                placeholder="Nachname*"
                className={`w-full bg-transparent border-0 border-b-2 ${
                  errors.nachname ? 'border-red-500' : 'border-white'
                } text-white placeholder-gray-400 pb-2 focus:outline-none focus:border-yellow-400 transition-colors duration-300`}
              />
              <AnimatePresence>
                {errors.nachname && (
                  <motion.span 
                    className="text-red-500 text-sm mt-1 block"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {errors.nachname}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Company Field */}
          <motion.div 
            className="relative"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <input
              type="text"
              name="unternehmen"
              value={formData.unternehmen}
              onChange={handleInputChange}
              placeholder="Unternehmen"
              className="w-full bg-transparent border-0 border-b-2 border-white text-white placeholder-gray-400 pb-2 focus:outline-none focus:border-yellow-400 transition-colors duration-300"
            />
          </motion.div>

          {/* Second Row - Contact Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="relative"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="E-Mail-Adresse*"
                className={`w-full bg-transparent border-0 border-b-2 ${
                  errors.email ? 'border-red-500' : 'border-white'
                } text-white placeholder-gray-400 pb-2 focus:outline-none focus:border-yellow-400 transition-colors duration-300`}
              />
              <AnimatePresence>
                {errors.email && (
                  <motion.span 
                    className="text-red-500 text-sm mt-1 block"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {errors.email}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <div className="flex items-center">
                <motion.div
                  variants={flagVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  className="flex items-center"
                >
                  <Flag className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                  {/* German flag stripes */}
                  <div className="flex h-5 w-8 overflow-hidden rounded-sm mr-3">
                    <div className="w-full h-1/3 bg-black"></div>
                    <div className="w-full h-1/3 bg-red-500"></div>
                    <div className="w-full h-1/3 bg-yellow-400"></div>
                  </div>
                </motion.div>
                <input
                  type="tel"
                  name="telefon"
                  value={formData.telefon}
                  onChange={handleInputChange}
                  placeholder="Telefonnummer*"
                  className={`w-full bg-transparent border-0 border-b-2 ${
                    errors.telefon ? 'border-red-500' : 'border-white'
                  } text-white placeholder-gray-400 pb-2 focus:outline-none focus:border-yellow-400 transition-colors duration-300`}
                />
              </div>
              <AnimatePresence>
                {errors.telefon && (
                  <motion.span 
                    className="text-red-500 text-sm mt-1 block"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {errors.telefon}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Privacy Policy Checkbox */}
          <motion.div 
            className="py-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <label className="flex items-start space-x-3 cursor-pointer">
              <motion.input
                type="checkbox"
                name="datenschutz"
                checked={formData.datenschutz}
                onChange={handleInputChange}
                className="mt-1 w-4 h-4 text-yellow-400 border-white bg-transparent rounded focus:ring-yellow-400 focus:ring-2"
                whileTap={{ scale: 0.9 }}
              />
              <span className="text-sm text-gray-300 leading-relaxed">
                Mit der Verarbeitung der im Kontaktformular angegebenen personenbezogenen Daten zum Zwecke der Kontaktaufnahme durch die Bold Marketing + Development GmbH bin ich einverstanden. Nähere Informationen zur Datenverarbeitung finden Sie in unserer Datenschutzerklärung. *
              </span>
            </label>
            <AnimatePresence>
              {errors.datenschutz && (
                <motion.span 
                  className="text-red-500 text-sm mt-2 block"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {errors.datenschutz}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Submit Button */}
          <motion.div 
            className="pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <AnimatePresence mode="wait">
              {submitSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="bg-green-500 text-white px-8 py-3 rounded text-center"
                >
                  Nachricht erfolgreich gesendet!
                </motion.div>
              ) : (
                <motion.button
                  key="submit"
                  type="submit"
                  className="bg-yellow-400 text-black px-8 py-3 font-medium hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center justify-center"
                    >
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="inline-block h-5 w-5 border-2 border-black border-t-transparent rounded-full mr-2"
                      />
                      Wird gesendet...
                    </motion.span>
                  ) : (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      Jetzt absenden
                    </motion.span>
                  )}
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.form>
      </motion.div>
    </motion.div>
  );
}

export default Form;