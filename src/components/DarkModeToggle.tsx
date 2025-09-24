import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Always follow system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (prefersDark) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setIsDark(true);
        document.documentElement.classList.add('dark');
      } else {
        setIsDark(false);
        document.documentElement.classList.remove('dark');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleDarkMode = () => {
    // Toggle is now just visual feedback - system preference always wins
    // This could be removed entirely or kept for user feedback
  };

  return (
    <div
      onClick={toggleDarkMode}
      className="relative w-11 h-6 bg-gray-200 dark:bg-gray-600 rounded-full cursor-pointer transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-cyan-400 focus:ring-offset-1 dark:focus:ring-offset-gray-800"
      aria-label={isDark ? 'Przełącz na tryb jasny' : 'Przełącz na tryb ciemny'}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleDarkMode();
        }
      }}
    >
      {/* Slider Track */}
      <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
        isDark ? 'bg-cyan-400' : 'bg-gray-300'
      }`}></div>
      
      {/* Slider Button */}
      <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-all duration-300 transform flex items-center justify-center ${
        isDark ? 'translate-x-5' : 'translate-x-0.5'
      }`}>
        <Sun 
          size={12} 
          className={`absolute text-yellow-400 transition-all duration-300 transform ${
            isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
          }`}
        />
        <Moon 
          size={12} 
          className={`absolute text-slate-500 transition-all duration-300 transform ${
            isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
          }`}
        />
      </div>
    </div>
  );
};

export default DarkModeToggle;