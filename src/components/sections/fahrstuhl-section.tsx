"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const FahrstuhlSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="fahrstuhl"
      ref={ref}
      className="relative w-full min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-50 py-20 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold tracking-[0.3em] uppercase text-vss-orange mb-4 block">
            Vertical Systems
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6">
            FAHRSTUHL
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Experten für Aufzugsanlagen, Wartung, Modernisierung und Notfallrettungssysteme
            mit Fokus auf Sicherheit und Effizienz.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Tablet Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-2 md:order-1"
          >
            <div className="relative mx-auto max-w-lg">
              {/* Tablet Frame */}
              <div className="relative bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-1 bg-slate-700 rounded-full"></div>
                <div className="relative bg-slate-50 rounded-[2rem] overflow-hidden aspect-[3/4]">
                  {/* Animated Content */}
                  <div className="absolute inset-0 bg-gradient-to-br from-vss-orange/20 via-white to-vss-green/20"></div>
                  <div className="relative p-6 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-8 h-8 bg-vss-orange rounded-full animate-pulse"></div>
                        <div className="flex gap-2">
                          <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                          <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                          <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="h-4 bg-slate-200 rounded-full w-3/4 animate-pulse"></div>
                        <div className="h-4 bg-slate-200 rounded-full w-1/2 animate-pulse"></div>
                        <div className="h-4 bg-slate-200 rounded-full w-5/6 animate-pulse"></div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {/* Elevator Control Panel */}
                      <div className="bg-white rounded-xl p-4 shadow-lg">
                        <div className="text-xs font-bold text-slate-500 mb-3">FLOOR CONTROL</div>
                        <div className="grid grid-cols-3 gap-2">
                          {[1, 2, 3, 4, 5, 6].map((floor) => (
                            <div
                              key={floor}
                              className="aspect-square bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 font-bold text-sm hover:bg-vss-orange hover:text-white transition-colors cursor-pointer"
                            >
                              {floor}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Status Indicators */}
                      <div className="bg-white rounded-xl p-4 shadow-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-xs text-slate-500 mb-1">Current Floor</div>
                            <div className="text-2xl font-bold text-vss-orange">3</div>
                          </div>
                          <div className="flex flex-col items-center">
                            <motion.div
                              animate={{ opacity: [1, 0.5, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="w-3 h-3 bg-green-500 rounded-full mb-1"
                            ></motion.div>
                            <div className="text-xs text-slate-500">Online</div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs text-slate-500 mb-1">Next Service</div>
                            <div className="text-sm font-bold text-slate-700">24h</div>
                          </div>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white rounded-xl p-4 shadow-lg">
                          <div className="text-xs text-slate-500 mb-1">Trips Today</div>
                          <div className="text-xl font-bold text-slate-700">1,247</div>
                        </div>
                        <div className="bg-white rounded-xl p-4 shadow-lg">
                          <div className="text-xs text-slate-500 mb-1">Efficiency</div>
                          <div className="text-xl font-bold text-green-600">98%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 bg-vss-orange text-white p-3 rounded-xl shadow-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 bg-vss-blue text-white p-3 rounded-xl shadow-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
            </div>
          </motion.div>

          {/* Services List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 order-1 md:order-2"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-vss-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-vss-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Aufzugsanlagen</h3>
                  <p className="text-slate-600">Planung, Installation und Modernisierung von Personen- und Lastenaufzügen</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-vss-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-vss-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Sicherheitssysteme</h3>
                  <p className="text-slate-600">Notfallrettungssysteme und Sicherheitsüberprüfung nach TÜV-Standards</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-vss-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-vss-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Wartung & Service</h3>
                  <p className="text-slate-600">Regelmäßige Wartungsarbeiten und 24/7 Notfallservice</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-vss-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-vss-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Modernisierung</h3>
                  <p className="text-slate-600">Energieeffiziente Nachrüstung und Smart Building Integration</p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                href="#kontakt"
                className="inline-flex items-center gap-2 bg-vss-orange hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Jetzt Kontakt aufnehmen
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FahrstuhlSection;
