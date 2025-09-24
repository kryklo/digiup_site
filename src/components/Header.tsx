import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLogoRotating, setIsLogoRotating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleLogoClick = () => {
    setIsLogoRotating(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Reset rotation after animation completes
    setTimeout(() => setIsLogoRotating(false), 500);
  };
  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <button
              onClick={handleLogoClick}
              className="w-10 h-10 relative group focus:outline-none"
            >
              {/* Light mode logo */}
              <img 
                src="/Wordpress Transparent.png" 
                alt="DigiUp" 
                className={`dark:hidden w-full h-full object-contain transition-transform duration-500 ease-in-out group-hover:rotate-360 ${
                  isLogoRotating ? 'rotate-360' : ''
                }`}
              />
              {/* Dark mode logo */}
              <img 
                src="/Wordpress TransparentDarkMode.png" 
                alt="DigiUp" 
                className={`hidden dark:block w-full h-full object-contain transition-transform duration-500 ease-in-out group-hover:rotate-360 ${
                  isLogoRotating ? 'rotate-360' : ''
                }`}
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { label: 'Usługi', id: 'services' },
              { label: 'Proces', id: 'process' },
              { label: 'O mnie', id: 'about' },
              { label: 'Realizacje', id: 'cases' },
              { label: 'Kontakt', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-body text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 font-medium transition-colors duration-200 hover:scale-105 transform"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Dark Mode Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <DarkModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-lg mt-2 shadow-lg">
            <nav className="flex flex-col space-y-4 p-4">
              {[
                { label: 'Usługi', id: 'services' },
                { label: 'Proces', id: 'process' },
                { label: 'O mnie', id: 'about' },
                { label: 'Realizacje', id: 'cases' },
                { label: 'Kontakt', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left font-body text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <span className="font-body text-sm text-gray-600 dark:text-gray-400">Tryb ciemny</span>
                  <DarkModeToggle />
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;