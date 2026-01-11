"use client";

import React, { useState, useEffect } from 'react';

interface DarkModeToggleProps {
  className?: string;
}

export const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ className = '' }) => {
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
    <button
      onClick={toggleDarkMode}
      className={`relative inline-flex items-center justify-center w-[3.5em] h-[2em] rounded-[30px] transition-all duration-500 bg-gray-200 dark:bg-[#0a1a44] hover:bg-gray-300 dark:hover:bg-[#16213e] ${className}`}
      aria-label="Toggle dark mode"
    >
      {/* Hidden Checkbox */}
      <input type="checkbox" className="peer opacity-0 w-0 h-0" />

      {/* Slider */}
      <div className="absolute inset-0 cursor-pointer">
        <span
          className="absolute inset-0 rounded-[30px] transition-all duration-500 bg-gray-400 dark:bg-white before:content-[''] before:absolute before:h-[1.4em] before:w-[1.4em] before:rounded-full before:left-[10%] before:bottom-[15%] before:shadow-[inset_8px_-4px_0px_#fff000] dark:before:bg-[#0a1a44] dark:before:shadow-[inset_15px_-4px_0px_15px_0] dark:before:transition dark:before:duration-500 peer-checked:before:translate-x-full peer-checked:before:shadow-[inset_15px_-4px_0px_15px_15px_0]"
        />
      </div>

      {/* Sun Icon (Light Mode) */}
      {!isDark && (
        <svg
          className="w-5 h-5 text-yellow-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 0 5v-1M9 21v1a1 1 0 011-1 1h2a1 1 0 011-1 1v-2a1 1 0 011-1 1-2a1 1 0 011-1 1-2m-2 1a1 1 0 011-1 1h2a1 1 0 011-1 1v-2a1 1 0 011-1 1z"
          />
        </svg>
      )}

      {/* Moon Icon (Dark Mode) */}
      {isDark && (
        <svg
          className="w-5 h-5 text-gray-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12.79A9 9 0 1111.21 11 21 12.79A9 9 0 1121 21 12.79A9 9 0 0112.21 12 12.79a9 9 0 010.88 16.5a9 9 0 010.88 12a9 9 0 0112.12 9.53a9 9 0 0112.12 7.53a9 9 0 0112.12 12.88a3 3 0 010 10 9.59a6 6 0 017.5 6 3a6 6 0 017.5 3 12a4 4 0 010 4.5 12a4 4 0 010 4.5 12a8 8 0 018 8 18a8 8 0 018 8 18a8 8 0 0110 10 8z"
          />
        </svg>
      )}
    </button>
  );
};
