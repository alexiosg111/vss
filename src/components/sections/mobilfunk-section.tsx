"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';

const MobilfunkSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="mobilfunk"
      ref={ref}
      className="relative w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20 px-4 md:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <span className="text-sm font-bold tracking-[0.3em] uppercase text-vss-blue mb-4 block">
            Connectivity Solutions
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6">
            MOBILFUNK
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Zuständigkeit für das Mobilfunk-Infrastrukturmanagement mit Fokus auf Planung,
            Bau und Instandhaltung von Sendeanlagen und Breitbandnetzen.
          </p>
        </motion.div>

        {/* ContainerScroll Animation mit Tablet */}
        <div className="flex flex-col overflow-hidden py-10">
          <ContainerScroll
            titleComponent={
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-semibold text-slate-900">
                  Telekommunikationsstruktur
                </h1>
                <p className="text-2xl md:text-4xl font-bold mt-4 text-vss-blue">
                  Mit uns in die digitale Zukunft
                </p>
              </div>
            }
          >
            <div className="relative h-full w-full bg-gradient-to-br from-vss-blue/10 via-white to-vss-green/10 flex items-center justify-center">
              <Image
                src="/images/telecom-structure.svg"
                alt="Telekommunikationsstruktur Visualisierung"
                fill
                className="object-contain"
                draggable={false}
                priority
              />
            </div>
          </ContainerScroll>
        </div>

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
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600">{service.description}</p>
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
            className="inline-flex items-center gap-2 bg-vss-blue hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
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
