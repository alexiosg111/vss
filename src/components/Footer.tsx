'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowUp, Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Clock, Shield, Award } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Aufzüge', href: '#aufzuge' },
    { name: 'Mobilfunk', href: '#mobilfunk' },
    { name: 'Warum VSS', href: '#benefits' },
    { name: 'Kontakt', href: '#kontakt' }
  ]

  const services = [
    { name: 'Aufzug-Installation', href: '#aufzuge' },
    { name: 'Aufzug-Wartung', href: '#aufzuge' },
    { name: '5G-Infrastruktur', href: '#mobilfunk' },
    { name: 'Signalverstärkung', href: '#mobilfunk' },
    { name: 'Notfall-Service', href: '#kontakt' }
  ]

  const legalLinks = [
    { name: 'Impressum', href: '/impressum' },
    { name: 'Datenschutz', href: '/datenschutz' },
    { name: 'AGB', href: '/agb' },
    { name: 'Cookie-Richtlinie', href: '/cookies' }
  ]

  const socialLinks = [
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com/company/vertical-service-solutions',
      name: 'LinkedIn'
    },
    { 
      icon: Twitter, 
      href: 'https://twitter.com/vss_gmbh',
      name: 'Twitter'
    },
    { 
      icon: Facebook, 
      href: 'https://facebook.com/verticalservicesolutions',
      name: 'Facebook'
    }
  ]

  const certifications = [
    { icon: Shield, text: 'ISO 9001 Zertifiziert' },
    { icon: Award, text: 'TÜV geprüft' },
    { icon: Clock, text: '24/7 Service' }
  ]

  return (
    <footer className="bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.02%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      {/* Main Footer Content */}
      <div className="relative z-10">
        
        {/* Top Section - Company Info & Contact */}
        <div className="container-padding py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
              
              {/* Company Info */}
              <div className="lg:col-span-1">
                <Link href="/" className="flex items-center space-x-3 group mb-6">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-vss-blue to-vss-green rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-vss transition-all duration-300">
                      <span className="text-white font-bold text-xl">VSS</span>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-lg text-white group-hover:text-vss-blue transition-colors duration-300">
                      VSS
                    </div>
                    <div className="text-sm text-gray-400">
                      Vertical Service Solutions
                    </div>
                  </div>
                </Link>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Ihr vertrauensvoller Partner für professionelle Aufzug-Lösungen 
                  und Mobilfunk-Infrastruktur mit über 15 Jahren Branchenerfahrung.
                </p>
                
                {/* Certifications */}
                <div className="space-y-2">
                  {certifications.map((cert, index) => {
                    const IconComponent = cert.icon
                    return (
                      <div key={index} className="flex items-center space-x-2 text-sm text-gray-400">
                        <IconComponent className="h-4 w-4 text-vss-green" />
                        <span>{cert.text}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-6">Navigation</h3>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <Link 
                        href={link.href}
                        className="text-gray-300 hover:text-vss-blue transition-colors duration-300 flex items-center group"
                      >
                        <ArrowUp className="h-3 w-3 mr-2 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li key={index}>
                      <Link 
                        href={service.href}
                        className="text-gray-300 hover:text-vss-green transition-colors duration-300 flex items-center group"
                      >
                        <ArrowUp className="h-3 w-3 mr-2 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-6">Kontakt</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-vss-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">+49 (0) 123 456 789</p>
                      <p className="text-gray-400 text-sm">Mo-Fr 8:00-18:00 Uhr</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-vss-green mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">info@vertical-service-solutions.com</p>
                      <p className="text-gray-400 text-sm">Antwort binnen 24h</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-vss-orange mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Industriegebiet Nord</p>
                      <p className="text-gray-400 text-sm">12345 Musterstadt</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Social & Legal */}
        <div className="border-t border-gray-700">
          <div className="container-padding py-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                
                {/* Social Links */}
                <div className="flex items-center space-x-4">
                  <span className="text-gray-400 text-sm">Folgen Sie uns:</span>
                  <div className="flex space-x-3">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon
                      return (
                        <Link
                          key={index}
                          href={social.href}
                          aria-label={social.name}
                          className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-0.5"
                        >
                          <IconComponent className="h-4 w-4" />
                        </Link>
                      )
                    })}
                  </div>
                </div>

                {/* Legal Links */}
                <div className="flex flex-wrap items-center justify-center space-x-6 text-sm">
                  {legalLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700">
          <div className="container-padding py-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 text-sm text-gray-400">
                <p>
                  © {currentYear} Vertical Service Solutions GmbH. Alle Rechte vorbehalten.
                </p>
                <p>
                  Entwickelt mit{' '}
                  <span className="text-vss-green">♥</span>{' '}
                  für moderne Unternehmen
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-vss-blue to-vss-green text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 z-50 flex items-center justify-center group"
        aria-label="Nach oben scrollen"
      >
        <ArrowUp className="h-5 w-5 group-hover:-translate-y-0.5 transition-transform duration-300" />
      </button>
    </footer>
  )
}

export default Footer