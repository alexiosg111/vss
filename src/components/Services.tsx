'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Cog, Zap, Shield, Settings, Phone, Clock, Users, Award, CheckCircle } from 'lucide-react'

const Services = () => {
  const services = [
    {
      id: 'aufzuge',
      icon: Cog,
      title: 'Aufzug-Systeme',
      subtitle: 'Moderne Liftsysteme',
      description: 'Professionelle Planung, Installation und Wartung von Aufzug-Systemen für gewerbliche und industrielle Anwendungen.',
      features: [
        'Neubau & Modernisierung',
        'Wartung & Service',
        'Notfall-Service 24/7',
        'Sicherheitsprüfungen',
        'Energieeffiziente Lösungen'
      ],
      color: 'from-vss-blue to-vss-blue/80',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-600',
      ctaText: 'Aufzug-Service anfragen'
    },
    {
      id: 'mobilfunk',
      icon: Zap,
      title: 'Mobilfunk-Infrastruktur',
      subtitle: 'Netzwerk-Lösungen',
      description: 'Planung und Implementierung moderner Mobilfunk-Infrastruktur für optimale Konnektivität und Abdeckung.',
      features: [
        '5G-Netzwerk Implementierung',
        'Signalverstärkung',
        'Indoor & Outdoor Coverage',
        'Infrastruktur-Optimierung',
        'Netzwerk-Monitoring'
      ],
      color: 'from-vss-green to-vss-green/80',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-600',
      ctaText: 'Mobilfunk-Lösung anfragen'
    }
  ]

  const benefits = [
    {
      icon: Shield,
      title: 'Zuverlässigkeit',
      description: 'Bewährte Technologien und erfahrene Techniker für maximale Sicherheit und Verfügbarkeit.'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Rund um die Uhr verfügbar für Notfälle und kritische Serviceanfragen.'
    },
    {
      icon: Users,
      title: 'Expertise',
      description: '15+ Jahre Erfahrung in der Industrie- und Mobilfunkbranche mit zertifiziertem Team.'
    },
    {
      icon: Award,
      title: 'Qualität',
      description: 'Höchste Qualitätsstandards und Zertifizierungen für alle unsere Dienstleistungen.'
    }
  ]

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-white via-gray-50 to-blue-50/30">
      <div className="container-padding">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 shadow-lg mb-6">
              <Settings className="h-4 w-4 text-vss-blue" />
              <span className="text-sm font-medium text-dark-800">Unsere Services</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 mb-6">
              Professionelle
              <span className="block text-gradient-vss">Technik-Lösungen</span>
            </h2>
            
            <p className="text-xl text-dark-600 max-w-3xl mx-auto leading-relaxed">
              Von der Planung bis zur Implementierung – wir bieten Ihnen maßgeschneiderte 
              Lösungen für Aufzüge und Mobilfunk-Infrastruktur auf höchstem technischen Niveau.
            </p>
          </div>

          {/* Main Services Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div 
                  key={service.id}
                  id={service.id}
                  className="group card p-8 hover:shadow-vss transition-all duration-500 transform hover:-translate-y-2 scroll-mt-24"
                >
                  <div className="space-y-6">
                    
                    {/* Service Header */}
                    <div className="flex items-start space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-dark-900 group-hover:text-dark-800 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className={`text-lg font-medium ${service.textColor} mt-1`}>
                          {service.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Service Description */}
                    <p className="text-dark-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Service Features */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-dark-900 mb-3">Leistungsumfang:</h4>
                      <div className="grid sm:grid-cols-1 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <CheckCircle className={`h-4 w-4 ${service.textColor} flex-shrink-0`} />
                            <span className="text-dark-600 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Service CTA */}
                    <div className="pt-4">
                      <Link 
                        href="#kontakt"
                        className={`group/btn inline-flex items-center space-x-2 bg-gradient-to-r ${service.color} text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5`}
                      >
                        <span>{service.ctaText}</span>
                        <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Benefits Section */}
          <div id="benefits" className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200/50">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
                Warum Vertical Service Solutions?
              </h3>
              <p className="text-lg text-dark-600 max-w-2xl mx-auto">
                Mit unserer Expertise und unserem Engagement sind wir der ideale Partner 
                für Ihre technischen Herausforderungen.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <div 
                    key={index}
                    className="group text-center space-y-4 p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-vss-blue to-vss-green rounded-2xl flex items-center justify-center shadow-lg mx-auto group-hover:shadow-vss transition-all duration-300 transform group-hover:scale-110">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-dark-900 mb-2 group-hover:text-vss-blue transition-colors duration-300">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-dark-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Link 
                href="#kontakt"
                className="btn-primary"
              >
                Kostenloses Beratungsgespräch
              </Link>
              <Link 
                href="#aufzuge"
                className="btn-outline"
              >
                Mehr über Aufzüge
              </Link>
              <Link 
                href="/mobilfunk"
                className="btn-outline"
              >
                Mehr über Mobilfunk
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services