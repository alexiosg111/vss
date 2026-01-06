'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-lg border-b border-gray-200/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-padding">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-vss-blue to-vss-green rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-vss transition-all duration-300 transform group-hover:scale-105">
                <span className="text-white font-bold text-xl">VSS</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-vss-blue to-vss-green rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-xl text-dark-900 group-hover:text-vss-blue transition-colors duration-300">
                Vertical Service Solutions
              </div>
              <div className="text-sm text-dark-600 font-medium">
                Industrial & Mobile Tech
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              href="#services" 
              className="text-dark-700 hover:text-vss-blue font-medium transition-colors duration-300 flex items-center group"
            >
              Services
              <ChevronDown className="ml-1 h-4 w-4 group-hover:translate-y-0.5 transition-transform duration-300" />
            </Link>
            <Link 
              href="#aufzuge" 
              className="text-dark-700 hover:text-vss-blue font-medium transition-colors duration-300"
            >
              Aufzüge
            </Link>
            <Link 
              href="#mobilfunk" 
              className="text-dark-700 hover:text-vss-blue font-medium transition-colors duration-300"
            >
              Mobilfunk
            </Link>
            <Link 
              href="#benefits" 
              className="text-dark-700 hover:text-vss-blue font-medium transition-colors duration-300"
            >
              Warum VSS
            </Link>
            <Link 
              href="#kontakt" 
              className="text-dark-700 hover:text-vss-blue font-medium transition-colors duration-300"
            >
              Kontakt
            </Link>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-dark-600">
              <Phone className="h-4 w-4 text-vss-blue" />
              <span>+49 (0) 123 456 789</span>
            </div>
            <Link 
              href="#kontakt" 
              className="btn-primary text-sm py-2 px-6"
            >
              Angebot anfordern
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-dark-700 hover:text-vss-blue hover:bg-gray-100 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-lg">
            <nav className="container-padding py-6">
              <div className="flex flex-col space-y-4">
                <Link 
                  href="#services" 
                  className="text-dark-700 hover:text-vss-blue font-medium py-2 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  href="#aufzuge" 
                  className="text-dark-700 hover:text-vss-blue font-medium py-2 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Aufzüge
                </Link>
                <Link 
                  href="#mobilfunk" 
                  className="text-dark-700 hover:text-vss-blue font-medium py-2 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Mobilfunk
                </Link>
                <Link 
                  href="#benefits" 
                  className="text-dark-700 hover:text-vss-blue font-medium py-2 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Warum VSS
                </Link>
                <Link 
                  href="#kontakt" 
                  className="text-dark-700 hover:text-vss-blue font-medium py-2 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Kontakt
                </Link>
                
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2 text-sm text-dark-600 mb-4">
                    <Phone className="h-4 w-4 text-vss-blue" />
                    <span>+49 (0) 123 456 789</span>
                  </div>
                  <Link 
                    href="#kontakt" 
                    className="btn-primary w-full text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Angebot anfordern
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header