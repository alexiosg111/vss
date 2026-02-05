'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Moon, Sun } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Check system preference on mount
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const savedTheme = localStorage.getItem('vss-theme')
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkState = !isDark
    setIsDark(newDarkState)
    
    if (newDarkState) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('vss-theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('vss-theme', 'light')
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg shadow-lg border-b border-gray-200/50 dark:border-gray-700/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Simplified */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-vss-blue to-vss-green rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
              <span className="text-white font-bold text-lg">VSS</span>
            </div>
            <span className="hidden sm:block font-bold text-lg text-dark-900 dark:text-white">
              VSS
            </span>
          </Link>

          {/* Desktop Navigation - Cleaned up */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              href="#services" 
              className="text-dark-700 dark:text-gray-300 hover:text-vss-blue dark:hover:text-vss-blue font-medium transition-colors duration-300"
            >
              Services
            </Link>
            <Link 
              href="#mobilfunk" 
              className="text-dark-700 dark:text-gray-300 hover:text-vss-blue dark:hover:text-vss-blue font-medium transition-colors duration-300"
            >
              Mobilfunk
            </Link>
            <Link 
              href="#aufzuge" 
              className="text-dark-700 dark:text-gray-300 hover:text-vss-blue dark:hover:text-vss-blue font-medium transition-colors duration-300"
            >
              Aufzüge
            </Link>
            <Link 
              href="#kontakt" 
              className="text-dark-700 dark:text-gray-300 hover:text-vss-blue dark:hover:text-vss-blue font-medium transition-colors duration-300"
            >
              Kontakt
            </Link>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
              aria-label="Toggle dark mode"
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-slate-600" />
              )}
            </button>
          </nav>

          {/* Mobile: Menu + Dark Mode Toggle */}
          <div className="flex items-center space-x-2 md:hidden">
            {/* Dark Mode Toggle Mobile */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-slate-600" />
              )}
            </button>

            {/* Menu Button */}
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-dark-700 dark:text-gray-300 hover:text-vss-blue hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg">
            <nav className="px-4 py-6">
              <div className="flex flex-col space-y-4">
                <Link 
                  href="#services" 
                  className="text-dark-700 dark:text-gray-300 hover:text-vss-blue font-medium py-2 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  href="#mobilfunk" 
                  className="text-dark-700 dark:text-gray-300 hover:text-vss-blue font-medium py-2 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Mobilfunk
                </Link>
                <Link 
                  href="#aufzuge" 
                  className="text-dark-700 dark:text-gray-300 hover:text-vss-blue font-medium py-2 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Aufzüge
                </Link>
                <Link 
                  href="#kontakt" 
                  className="text-dark-700 dark:text-gray-300 hover:text-vss-blue font-medium py-2 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Kontakt
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
