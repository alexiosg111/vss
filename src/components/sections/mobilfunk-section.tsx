"use client";
import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { DarkModeToggle } from '@/components/ui/dark-mode-toggle';

const MobilfunkSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check current dark mode state
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <section
      id="mobilfunk"
      ref={ref}
      className={`relative w-full min-h-screen ${isDark ? 'bg-black' : 'bg-slate-900'} py-20 px-4 md:px-8`}
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Dark Mode Toggle */}
        <div className="absolute top-4 right-4 z-50">
          <DarkModeToggle />
        </div>

        {/* Tablet Display mit Bild */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto max-w-2xl"
        >
          {/* Tablet Frame */}
          <div className="relative bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl dark:bg-gray-950">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-1 bg-slate-700 dark:bg-gray-700 rounded-full"></div>

            {/* Title über dem Tablet */}
            <div className="text-center mb-8 mt-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-3xl md:text-5xl font-bold text-white mb-4 dark:text-gray-100"
              >
                Telekommunikationsstruktur
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-3xl font-semibold text-vss-blue dark:text-blue-400"
              >
                Mit uns in die digitale Zukunft
              </motion.p>
            </div>

            {/* Tablet Screen mit Bild */}
            <div className="relative bg-slate-50 dark:bg-gray-900 rounded-[2rem] overflow-hidden aspect-[4/3]">
              <Image
                src="/images/telecom-structure.svg"
                alt="Telekommunikationsstruktur Visualisierung"
                fill
                className="object-contain p-4"
                draggable={false}
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Services Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16"
        >
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Netzplanung",
                description: "Strategische Netzinfrastruktur",
                icon: "📡"
              },
              {
                title: "Sendeanlagen",
                description: "Professionelle Installation",
                icon: "📶"
              },
              {
                title: "5G & Breitband",
                description: "Hochgeschwindigkeit",
                icon: "⚡"
              },
              {
                title: "Wartung & Service",
                description: "24/7 Support",
                icon: "🛠️"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-gray-100 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600 dark:text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-vss-blue hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            Jetzt Kontakt aufnehmen
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MobilfunkSection;
