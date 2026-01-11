"use client";

import { useState, useEffect } from 'react';
import { DarkModeToggle } from '@/components/ui/dark-mode-toggle';

const Header: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(prefersDark);
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className={`relative w-full py-4 px-4 md:px-8 transition-colors duration-300 ${
      isDark ? 'bg-slate-900' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-vss-blue rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">VSS</span>
          </div>
          <span className="text-2xl font-black dark:text-white tracking-tighter">
            Vertical Service Solutions
          </span>
        </div>

        {/* Dark Mode Toggle */}
        <div className="flex items-center gap-4">
          <span className="text-sm text-slate-500 dark:text-slate-400">
            {isDark ? 'Dark Mode' : 'Light Mode'}
          </span>
          <DarkModeToggle />
        </div>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-8 mt-4">
        <a href="#" className="text-slate-600 hover:text-vss-blue transition-colors dark:text-slate-400 dark:hover:text-vss-blue">
          Services
        </a>
        <a href="#mobilfunk" className="text-slate-600 hover:text-vss-blue transition-colors dark:text-slate-400 dark:hover:text-vss-blue">
          Mobilfunk
        </a>
        <a href="#fahrstuhl" className="text-slate-600 hover:text-vss-blue transition-colors dark:text-slate-400 dark:hover:text-vss-blue">
          Fahrstuhl
        </a>
        <a href="#kontakt" className="text-slate-600 hover:text-vss-blue transition-colors dark:text-slate-400 dark:hover:text-vss-blue">
          Kontakt
        </a>
      </nav>
    </header>
  );
};

export default Header;
