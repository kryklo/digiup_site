import React, { useEffect, useState } from 'react';
import { ArrowDown, PlayCircle } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-white dark:bg-gray-900"></div>
      
      {/* Animated Background Dots */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-cyan-400 dark:bg-cyan-500 rounded-full animate-float animate-pulse-grow"></div>
      <div className="absolute top-32 right-20 w-2 h-2 bg-blue-400 dark:bg-blue-500 rounded-full animate-float-delayed animate-pulse-grow-delayed"></div>
      <div className="absolute bottom-40 left-20 w-4 h-4 bg-purple-400 dark:bg-purple-500 rounded-full animate-float-slow animate-pulse-grow-slow"></div>
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-cyan-300 dark:bg-cyan-400 rounded-full animate-float animate-pulse-grow"></div>
      <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-blue-300 dark:bg-blue-400 rounded-full animate-float-delayed animate-pulse-grow-delayed"></div>
      <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-purple-300 dark:bg-purple-400 rounded-full animate-float-slow animate-pulse-grow-slow"></div>
      <div className="absolute top-1/4 left-1/2 w-3 h-3 bg-cyan-500 dark:bg-cyan-600 rounded-full animate-float animate-pulse-grow"></div>
      <div className="absolute bottom-1/4 right-1/2 w-2 h-2 bg-blue-500 dark:bg-blue-600 rounded-full animate-float-delayed animate-pulse-grow-delayed"></div>
      
      {/* Additional dots */}
      <div className="absolute top-16 left-1/4 w-2 h-2 bg-cyan-200 dark:bg-cyan-300 rounded-full animate-float-slow animate-pulse-grow-slow"></div>
      <div className="absolute top-3/4 right-16 w-3 h-3 bg-blue-200 dark:bg-blue-300 rounded-full animate-float animate-pulse-grow"></div>
      <div className="absolute bottom-20 left-1/2 w-2 h-2 bg-purple-200 dark:bg-purple-300 rounded-full animate-float-delayed animate-pulse-grow-delayed"></div>
      <div className="absolute top-1/2 left-16 w-4 h-4 bg-cyan-100 dark:bg-cyan-200 rounded-full animate-float-slow animate-pulse-grow-slow"></div>
      <div className="absolute bottom-1/2 right-20 w-2 h-2 bg-blue-100 dark:bg-blue-200 rounded-full animate-float animate-pulse-grow"></div>
      <div className="absolute top-40 right-1/3 w-3 h-3 bg-purple-100 dark:bg-purple-200 rounded-full animate-float-delayed animate-pulse-grow-delayed"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center px-2 sm:px-0">
          
          {/* Content */}
          <div className={`space-y-8 transform transition-all duration-1000 px-2 sm:px-0 ${
            isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-heading font-bold leading-tight text-gray-800 dark:text-white">
                <span style={{ color: '#15A3C8' }}>
                  Digitalizacja
                </span>
                <br />
                <span className="font-body text-3xl lg:text-4xl text-black dark:text-gray-100">
                  na miarę Twoich potrzeb
                </span>
              </h1>
              
              <div className="w-16 h-1 bg-cyan-500 rounded-full"></div>
            </div>

            <p className="text-lg font-body text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
              Doradzę Ci jak przeprowadzić cyfryzację Twojej firmy. Powiem co zrobić, 
              aby usprawnić systemy, które nie spełniają Twoich oczekiwań. Buduję workflow, 
              lekkie aplikacje i raporty, które zdejmują powtarzalną pracę z ludzi.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-body font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Umów konsultację</span>
                <PlayCircle size={20} />
              </button>
              
              <button
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg font-body font-semibold hover:border-cyan-500 hover:text-cyan-600 dark:hover:border-cyan-400 dark:hover:text-cyan-400 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Zobacz co robię</span>
                <ArrowDown size={20} />
              </button>
            </div>
          </div>

          {/* Logo */}
          <div className={`flex justify-center lg:justify-end transform transition-all duration-1000 delay-300 ${
            isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="relative">
              {/* Subtle Background Circle */}
              <div className="absolute inset-0 bg-cyan-100/30 rounded-full animate-pulse"></div>
              
              {/* Main Logotype */}
              <div className="relative w-80 h-48 sm:w-96 sm:h-64 flex items-center justify-center">
                {/* Light backdrop for dark mode */}
                <div className="absolute inset-0 bg-white/80 dark:bg-white/90 rounded-2xl blur-sm"></div>
                <img 
                  src="/Transparent LogoType.png" 
                  alt="DigiUp IT Consulting & Solutions" 
                  className="relative z-10 w-full h-full object-contain animate-float hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-gray-400 dark:text-gray-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;