'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Zap, Shield, Cog, Phone, Mail, ChevronRight, Play } from 'lucide-react'

const HeroSplit = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      {/* Above-the-fold Hero Split Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Split Background Container */}
        <div className="absolute inset-0 flex">
          {/* Left Side - Elevators */}
          <div 
            className={`flex-1 relative transition-all duration-700 ease-out ${
              hoveredSide === 'right' ? 'w-[45%]' : 'w-[50%]'
            }`}
            onMouseEnter={() => setHoveredSide('left')}
            onMouseLeave={() => setHoveredSide(null)}
          >
            {/* Background Gradient Left */}
            <div className="absolute inset-0 bg-gradient-to-br from-vss-blue via-blue-600 to-vss-blue/80"></div>
            
            {/* Pattern Overlay Left */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
            
            {/* Floating Elements Left */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
            <div className="absolute bottom-32 right-16 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
            
            {/* Content Left */}
            <div className="relative z-10 h-full flex items-center justify-center p-8">
              <div className="text-center text-white space-y-6 max-w-lg">
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
                  <Cog className="h-5 w-5" />
                  <span className="text-sm font-medium">Aufzug-Systeme</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Moderne
                  <span className="block text-blue-100">Aufzug-Lösungen</span>
                </h2>
                
                <p className="text-lg text-blue-100 leading-relaxed">
                  Innovative Aufzug-Technologie für gewerbliche und industrielle Gebäude. 
                  Zuverlässig, energieeffizient und zukunftssicher.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link 
                    href="#elevators"
                    className="group btn-white text-center flex items-center justify-center space-x-2"
                  >
                    <span>Aufzüge entdecken</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  <button className="group btn-outline-white text-center flex items-center justify-center space-x-2">
                    <Play className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                    <span>Demo ansehen</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Mobile */}
          <div 
            className={`flex-1 relative transition-all duration-700 ease-out ${
              hoveredSide === 'left' ? 'w-[55%]' : 'w-[50%]'
            }`}
            onMouseEnter={() => setHoveredSide('right')}
            onMouseLeave={() => setHoveredSide(null)}
          >
            {/* Background Gradient Right */}
            <div className="absolute inset-0 bg-gradient-to-br from-vss-green via-green-600 to-vss-green/80"></div>
            
            {/* Pattern Overlay Right */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
            
            {/* Floating Elements Right */}
            <div className="absolute top-32 right-12 w-28 h-28 bg-white/10 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-24 left-20 w-36 h-36 bg-white/10 rounded-full blur-xl animate-float" style={{animationDelay: '3s'}}></div>
            
            {/* Content Right */}
            <div className="relative z-10 h-full flex items-center justify-center p-8">
              <div className="text-center text-white space-y-6 max-w-lg">
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
                  <Zap className="h-5 w-5" />
                  <span className="text-sm font-medium">Mobilfunk-Infrastruktur</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Netzwerk-
                  <span className="block text-green-100">Technologie</span>
                </h2>
                
                <p className="text-lg text-green-100 leading-relaxed">
                  Professionelle Mobilfunk-Infrastruktur für optimale Konnektivität. 
                  5G ready und skalierbar für moderne Unternehmen.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link 
                    href="#telecoms"
                    className="group btn-white text-center flex items-center justify-center space-x-2"
                  >
                    <span>Netzwerk-Lösungen</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  <button className="group btn-outline-white text-center flex items-center justify-center space-x-2">
                    <Shield className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                    <span>Security</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Diagonal Divider */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div 
            className="absolute w-1 h-full bg-white/30 shadow-2xl transition-all duration-700 ease-out"
            style={{
              left: hoveredSide === 'left' ? '45%' : '50%',
              transform: 'rotate(45deg)',
              height: '200vh'
            }}
          ></div>
        </div>

        {/* Center Brand Logo */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl">
            <div className="text-center text-white">
              <div className="text-2xl font-bold mb-2">VSS</div>
              <div className="text-xs text-white/80">Vertical Service Solutions</div>
            </div>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
            <div className="flex items-center space-x-2 text-white">
              <Phone className="h-4 w-4" />
              <span className="font-medium">+49 (0) 123 456 789</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30"></div>
            <div className="flex items-center space-x-2 text-white">
              <Mail className="h-4 w-4" />
              <span className="font-medium">info@vertical-service-solutions.com</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Inverse Hover Effect Section */}
      <section className="bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 min-h-screen flex items-center justify-center">
        <div className="container-padding">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                VSS - Ihr Partner für
                <span className="block text-gradient-vss">Industrielle Lösungen</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Entdecken Sie unsere umfassenden Services für Aufzug-Systeme und Mobilfunk-Infrastruktur. 
                Zuverlässigkeit und Innovation seit Jahren.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#services"
                className="group btn-primary text-center flex items-center justify-center space-x-2"
              >
                <span>Alle Services</span>
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link 
                href="#kontakt"
                className="group btn-outline text-center flex items-center justify-center space-x-2"
              >
                <span>Kontakt aufnehmen</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSplit