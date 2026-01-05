'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Zap, Shield, Cog, Phone, Mail, ChevronRight } from 'lucide-react'
import { ContainerScroll } from './ui/container-scroll-animation'
import { HeroScrollDemo } from './demo'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      {/* Initial Hero Section with CTA */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-950">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%230284c7%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-vss-blue/20 to-vss-green/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-vss-green/20 to-vss-orange/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-br from-vss-orange/20 to-vss-blue/20 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="relative z-10 container-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-8">
              
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 shadow-lg">
                <Zap className="h-4 w-4 text-vss-blue" />
                <span className="text-sm font-medium text-dark-800">Industrial & Mobile Tech Experts</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-dark-900 leading-tight">
                  Vertical Service
                  <span className="block text-gradient-vss">
                    Solutions
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-dark-600 font-medium max-w-3xl mx-auto">
                  Ihr Partner für professionelle Aufzug-Lösungen und Mobilfunk-Infrastruktur
                </p>
              </div>

              {/* Description */}
              <p className="text-lg text-dark-600 max-w-4xl mx-auto leading-relaxed">
                Mit jahrelanger Expertise in der Industrie- und Mobilfunkbranche liefern wir 
                zuverlässige, innovative Lösungen für moderne Unternehmen. Von Aufzug-Systemen 
                bis zur Mobilfunk-Infrastruktur – wir sind Ihr vertrauensvoller Partner.
              </p>

              {/* Key Features Grid */}
              <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="w-12 h-12 bg-gradient-to-br from-vss-blue to-vss-blue/80 rounded-lg flex items-center justify-center">
                    <Cog className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-dark-900">Aufzüge</div>
                    <div className="text-sm text-dark-600">Moderne Liftsysteme</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="w-12 h-12 bg-gradient-to-br from-vss-green to-vss-green/80 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-dark-900">Mobilfunk</div>
                    <div className="text-sm text-dark-600">Netzwerk-Infrastruktur</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="#kontakt"
                  className="group btn-primary text-center flex items-center justify-center space-x-2"
                >
                  <span>Kostenloses Beratungsgespräch</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link 
                  href="#services"
                  className="group btn-outline text-center flex items-center justify-center space-x-2"
                >
                  <span>Unsere Services</span>
                  <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                <div className="flex items-center space-x-2 text-dark-600">
                  <Phone className="h-4 w-4 text-vss-blue" />
                  <span className="font-medium">+49 (0) 123 456 789</span>
                </div>
                <div className="flex items-center space-x-2 text-dark-600">
                  <Mail className="h-4 w-4 text-vss-green" />
                  <span className="font-medium">info@vertical-service-solutions.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-dark-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-dark-300 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Container Scroll Animation Section */}
      <section className="bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
        <HeroScrollDemo />
      </section>
    </>
  )
}

export default Hero