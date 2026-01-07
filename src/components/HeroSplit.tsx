'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Phone, Mail } from 'lucide-react'

const HeroSplit = () => {
  const [hoveredSection, setHoveredSection] = useState<'mobilfunk' | 'fahrstuhl' | null>(null)

  // VSS Brand Colors from the original website
  const vssBlue = '#0284c7'
  const vssGreen = '#10b981'
  const vssDark = '#1f2937'
  const vssLight = '#f8fafc'

  // Placeholder images using SVG data URLs
  const mobilfunkImage = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f0f0f0'/%3E%3Ctext x='200' y='150' font-family='Arial, sans-serif' font-size='24' font-weight='bold' text-anchor='middle' fill='%23333'%3EMobilfunk%3C/text%3E%3Ctext x='200' y='180' font-family='Arial, sans-serif' font-size='16' text-anchor='middle' fill='%23666'%3ENetzwerk-Infrastruktur%3C/text%3E%3C/svg%3E`

  const fahrstuhlImage = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f0f0f0'/%3E%3Ctext x='200' y='150' font-family='Arial, sans-serif' font-size='24' font-weight='bold' text-anchor='middle' fill='%23333'%3EAufzüge%3C/text%3E%3Ctext x='200' y='180' font-family='Arial, sans-serif' font-size='16' text-anchor='middle' fill='%23666'%3EModerne Liftsysteme%3C/text%3E%3C/svg%3E`

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Diagonal Split Container */}
      <div className="relative w-full h-screen">
        {/* Mobilfunk Section - Bottom Left */}
        <div
          className={`absolute bottom-0 left-0 w-full h-full ${vssBlue} transition-all duration-500 ease-in-out`}
          style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }}
          onMouseEnter={() => setHoveredSection('mobilfunk')}
          onMouseLeave={() => setHoveredSection(null)}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 opacity-90"></div>
          <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
            <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 max-w-sm">
              <h2 className="text-2xl font-bold mb-2">Mobilfunk</h2>
              <p className="text-blue-100 mb-4">Netzwerk-Infrastruktur für moderne Unternehmen</p>
              <Link
                href="#mobilfunk"
                className="inline-flex items-center space-x-2 bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                <span>Mehr erfahren</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={mobilfunkImage}
              alt="Mobilfunk Netzwerk-Infrastruktur"
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        </div>

        {/* Fahrstuhl Section - Top Right */}
        <div
          className={`absolute top-0 right-0 w-full h-full ${vssGreen} transition-all duration-500 ease-in-out`}
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
          onMouseEnter={() => setHoveredSection('fahrstuhl')}
          onMouseLeave={() => setHoveredSection(null)}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-700 opacity-90"></div>
          <div className="relative z-10 h-full flex flex-col justify-start p-8 text-white">
            <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 mt-8 max-w-sm">
              <h2 className="text-2xl font-bold mb-2">Aufzüge</h2>
              <p className="text-green-100 mb-4">Moderne Liftsysteme für Industrie und Gewerbe</p>
              <Link
                href="#aufzuge"
                className="inline-flex items-center space-x-2 bg-white text-green-600 px-4 py-2 rounded-lg font-medium hover:bg-green-50 transition-colors"
              >
                <span>Mehr erfahren</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={fahrstuhlImage}
              alt="Moderne Aufzugssysteme"
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        </div>

        {/* Inverse Hover Effects */}
        {hoveredSection === 'mobilfunk' && (
          <div className="absolute top-0 right-0 w-full h-full bg-white/10 backdrop-blur-sm border-l-2 border-b-2 border-white/20"></div>
        )}
        {hoveredSection === 'fahrstuhl' && (
          <div className="absolute bottom-0 left-0 w-full h-full bg-white/10 backdrop-blur-sm border-r-2 border-t-2 border-white/20"></div>
        )}

        {/* Center Content - Main Branding */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center z-20 px-8">
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-2xl max-w-md">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Vertical Service
                <span className="block text-gradient-vss">Solutions</span>
              </h1>
              <p className="text-xl text-gray-700 font-medium mb-6">
                Ihr Partner für professionelle Aufzug-Lösungen und Mobilfunk-Infrastruktur
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#kontakt"
                  className="group btn-primary text-center flex items-center justify-center space-x-2"
                >
                  <span>Kostenloses Beratungsgespräch</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info - Bottom Center */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex flex-col sm:flex-row gap-6 justify-center bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
          <div className="flex items-center space-x-2 text-gray-700">
            <Phone className="h-4 w-4 text-vss-blue" />
            <span className="font-medium">+49 (0) 123 456 789</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-700">
            <Mail className="h-4 w-4 text-vss-green" />
            <span className="font-medium">info@vertical-service-solutions.com</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSplit