import React, { useState, useEffect } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

type ThemeMode = 'light' | 'dark' | 'system';

const DarkModeToggle = () => {
  const [mode, setMode] = useState<ThemeMode>('system');
  const [systemPrefersDark, setSystemPrefersDark] = useState(false);

  useEffect(() => {
    // Check saved preference
    const savedMode = localStorage.getItem('digiup-theme-mode') as ThemeMode;
    const initialMode = savedMode || 'system';
    setMode(initialMode);

    // Get system preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setSystemPrefersDark(mediaQuery.matches);

    // Apply theme
    applyTheme(initialMode, mediaQuery.matches);

    // Listen for system changes
    const handleSystemChange = (e: MediaQueryListEvent) => {
      setSystemPrefersDark(e.matches);
      // If in system mode, apply the change
      const currentMode = localStorage.getItem('digiup-theme-mode') as ThemeMode;
      if (!currentMode || currentMode === 'system') {
        applyTheme('system', e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleSystemChange);
    return () => mediaQuery.removeEventListener('change', handleSystemChange);
  }, []);

  const applyTheme = (themeMode: ThemeMode, systemDark: boolean) => {
    const shouldBeDark = themeMode === 'dark' || (themeMode === 'system' && systemDark);
    
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const cycleMode = () => {
    const modes: ThemeMode[] = ['light', 'dark', 'system'];
    const currentIndex = modes.indexOf(mode);
    const nextMode = modes[(currentIndex + 1) % modes.length];
    
    setMode(nextMode);
    localStorage.setItem('digiup-theme-mode', nextMode);
    applyTheme(nextMode, systemPrefersDark);
  };

  const getCurrentIcon = () => {
    switch (mode) {
      case 'light':
        return <Sun size={16} className="text-yellow-500" />;
      case 'dark':
        return <Moon size={16} className="text-blue-400" />;
      case 'system':
        return <Monitor size={16} className="text-gray-500 dark:text-gray-400" />;
    }
  };

  const getLabel = () => {
    switch (mode) {
      case 'light':
        return 'Tryb jasny';
      case 'dark':
        return 'Tryb ciemny';
      case 'system':
        return 'Automatyczny';
    }
  };

  const getNextLabel = () => {
    switch (mode) {
      case 'light':
        return 'Przełącz na tryb ciemny';
      case 'dark':
        return 'Przełącz na tryb automatyczny';
      case 'system':
        return 'Przełącz na tryb jasny';
    }
  };

  return (
    <button
      onClick={cycleMode}
      key={`theme-${mode}`}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-1 dark:focus:ring-offset-gray-800"
      aria-label={getNextLabel()}
      title={getNextLabel()}
    >
      <div className="flex items-center justify-center w-5 h-5">
        {getCurrentIcon()}
      </div>
      <span key={`label-${mode}`} className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {getLabel()}
      </span>
    </button>
  );
};

export default DarkModeToggle;