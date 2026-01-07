import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import HeroSplit from './HeroSplit'

describe('HeroSplit Component', () => {
  it('renders the main VSS branding', () => {
    render(<HeroSplit />)
    
    // Check for main headline
    expect(screen.getByText('Vertical Service')).toBeInTheDocument()
    expect(screen.getByText('Solutions')).toBeInTheDocument()
    
    // Check for subtitle
    expect(screen.getByText('Ihr Partner für professionelle Aufzug-Lösungen und Mobilfunk-Infrastruktur')).toBeInTheDocument()
  })

  it('renders both service sections', () => {
    render(<HeroSplit />)
    
    // Check for Mobilfunk section
    expect(screen.getByText('Mobilfunk')).toBeInTheDocument()
    expect(screen.getByText('Netzwerk-Infrastruktur für moderne Unternehmen')).toBeInTheDocument()
    
    // Check for Fahrstuhl section
    expect(screen.getByText('Aufzüge')).toBeInTheDocument()
    expect(screen.getByText('Moderne Liftsysteme für Industrie und Gewerbe')).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<HeroSplit />)
    
    expect(screen.getByText('+49 (0) 123 456 789')).toBeInTheDocument()
    expect(screen.getByText('info@vertical-service-solutions.com')).toBeInTheDocument()
  })

  it('has proper CTA buttons', () => {
    render(<HeroSplit />)
    
    expect(screen.getByText('Kostenloses Beratungsgespräch')).toBeInTheDocument()
    expect(screen.getByText('Mehr erfahren')).toBeInTheDocument()
  })

  it('has diagonal split layout', () => {
    render(<HeroSplit />)
    
    // Check that both sections have the correct clipPath for diagonal split
    const mobilfunkSection = screen.getByText('Mobilfunk').closest('div')
    const fahrstuhlSection = screen.getByText('Aufzüge').closest('div')
    
    // The sections should have clipPath styles for diagonal split
    expect(mobilfunkSection).toHaveStyle('clipPath: polygon(0 100%, 100% 0, 100% 100%)')
    expect(fahrstuhlSection).toHaveStyle('clipPath: polygon(0 0, 100% 0, 100% 100%)')
  })

  it('has full viewport sections', () => {
    render(<HeroSplit />)
    
    const mobilfunkSection = screen.getByText('Mobilfunk').closest('div')
    const fahrstuhlSection = screen.getByText('Aufzüge').closest('div')
    
    // The sections should be full width and height
    expect(mobilfunkSection).toHaveClass('w-full h-full')
    expect(fahrstuhlSection).toHaveClass('w-full h-full')
  })

  it('has above the fold content visible', () => {
    render(<HeroSplit />)
    
    // Check that all above-the-fold content is visible
    expect(screen.getByText('Vertical Service')).toBeVisible()
    expect(screen.getByText('Solutions')).toBeVisible()
    expect(screen.getByText('Mobilfunk')).toBeVisible()
    expect(screen.getByText('Aufzüge')).toBeVisible()
    expect(screen.getByText('+49 (0) 123 456 789')).toBeVisible()
    expect(screen.getByText('info@vertical-service-solutions.com')).toBeVisible()
  })

  it('has VSS brand colors', () => {
    render(<HeroSplit />)
    
    const mobilfunkSection = screen.getByText('Mobilfunk').closest('div')
    const fahrstuhlSection = screen.getByText('Aufzüge').closest('div')
    
    // Check that sections have the correct VSS brand colors
    expect(mobilfunkSection).toHaveClass('bg-[#0284c7]') // VSS Blue
    expect(fahrstuhlSection).toHaveClass('bg-[#10b981]') // VSS Green
  })
})

export {}