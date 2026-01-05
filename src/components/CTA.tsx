'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Phone, Mail, MapPin, Clock, CheckCircle, Star } from 'lucide-react'

const CTA = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Telefonisch',
      info: '+49 (0) 123 456 789',
      description: 'Mo-Fr 8:00-18:00 Uhr',
      action: 'tel:+49123456789',
      color: 'from-vss-blue to-vss-blue/80'
    },
    {
      icon: Mail,
      title: 'Per E-Mail',
      info: 'info@vertical-service-solutions.com',
      description: 'Antwort binnen 24h',
      action: 'mailto:info@vertical-service-solutions.com',
      color: 'from-vss-green to-vss-green/80'
    },
    {
      icon: MapPin,
      title: 'Vor Ort',
      info: 'Industriegebiet Nord',
      description: 'Termine nach Vereinbarung',
      action: '#kontakt',
      color: 'from-vss-orange to-vss-orange/80'
    }
  ]

  const testimonials = [
    {
      text: "Hervorragender Service und sehr professionelle Beratung. Die Aufzug-Modernisierung wurde termingerecht und预算fähig durchgeführt.",
      author: "Thomas Müller",
      company: "Bürogebäude Centrum",
      rating: 5
    },
    {
      text: "Die Mobilfunk-Infrastruktur wurde perfekt implementiert. Alle Bereiche haben jetzt optimalen Empfang.",
      author: "Sarah Weber", 
      company: "Technologie Park",
      rating: 5
    }
  ]

  return (
    <section id="kontakt" className="section-padding bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.02%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-vss-blue/10 to-vss-green/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-vss-green/10 to-vss-orange/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>

      <div className="relative z-10 container-padding">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 shadow-lg mb-6">
              <Phone className="h-4 w-4 text-white" />
              <span className="text-sm font-medium text-white">Kontakt aufnehmen</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Bereit für Ihr
              <span className="block bg-gradient-to-r from-vss-blue via-vss-green to-vss-orange bg-clip-text text-transparent">
                nächste Projekt?
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Kontaktieren Sie uns noch heute für eine kostenlose Beratung. 
              Wir freuen uns darauf, Ihre individuellen Anforderungen zu besprechen.
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon
              return (
                <div 
                  key={index}
                  className="group glass rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-glass"
                >
                  <div className="text-center space-y-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center shadow-lg mx-auto group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {method.title}
                      </h3>
                      <p className="text-lg text-vss-blue font-semibold mb-1">
                        {method.info}
                      </p>
                      <p className="text-sm text-gray-400">
                        {method.description}
                      </p>
                    </div>
                    
                    <Link 
                      href={method.action}
                      className={`inline-flex items-center space-x-2 bg-gradient-to-r ${method.color} text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 text-sm`}
                    >
                      <span>Kontaktieren</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Testimonials */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Was unsere Kunden sagen
              </h3>
              <p className="text-gray-300">
                Vertrauen Sie auf die Erfahrung zufriedener Kunden
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                >
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-vss-orange fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-white font-semibold">{testimonial.author}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Link 
                href="tel:+49123456789"
                className="group btn-primary text-center flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Jetzt anrufen</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link 
                href="mailto:info@vertical-service-solutions.com"
                className="group btn-secondary text-center flex items-center justify-center space-x-2"
              >
                <Mail className="h-5 w-5" />
                <span>E-Mail schreiben</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link 
                href="#services"
                className="group btn-outline border-white text-white hover:bg-white hover:text-dark-900 text-center flex items-center justify-center space-x-2"
              >
                <span>Services ansehen</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Additional Info */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Schnelle Antwort binnen 24h</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4" />
                <span>Kostenlose Erstberatung</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4" />
                <span>Individuelle Lösungen</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA