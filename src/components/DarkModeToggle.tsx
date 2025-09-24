import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  const [isManualOverride, setIsManualOverride] = useState(false);

  useEffect(() => {
    // Check if there's a manual override saved
    const savedOverride = localStorage.getItem('digiup-dark-mode-override');
    
    if (savedOverride) {
      const override = JSON.parse(savedOverride);
      setIsManualOverride(true);
      setIsDark(override.isDark);
      
      if (override.isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else {
      // No manual override - follow system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
      
      if (prefersDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }

    // Listen for system theme changes (only if no manual override)
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = (e: MediaQueryListEvent) => {
      const currentOverride = localStorage.getItem('digiup-dark-mode-override');
      
      // Only follow system changes if there's no manual override
      if (!currentOverride) {
        setIsDark(e.matches);
        if (e.matches) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    };

    mediaQuery.addEventListener('change', handleSystemChange);
    return () => mediaQuery.removeEventListener('change', handleSystemChange);
  }, []);

  const toggleDarkMode = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    setIsManualOverride(true);
    
    // Save manual override to localStorage
    localStorage.setItem('digiup-dark-mode-override', JSON.stringify({
      isDark: newIsDark,
      timestamp: new Date().toISOString()
    }));
    
    // Apply the change
    if (newIsDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const resetToSystem = () => {
    // Remove manual override
    localStorage.removeItem('digiup-dark-mode-override');
    setIsManualOverride(false);
    
    // Follow system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(prefersDark);
    
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="flex items-center space-x-2">
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
      
      {/* Reset button - only show if manual override is active */}
      {isManualOverride && (
        <button
          onClick={resetToSystem}
          className="text-xs text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200 underline"
          title="Powróć do ustawień systemowych"
        >
          Auto
        </button>
      )}
    </div>
  );
};

export default DarkModeToggle;