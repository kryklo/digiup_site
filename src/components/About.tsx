import React from 'react';
import { Clock, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Dots */}
      <div className="absolute top-20 right-10 w-3 h-3 bg-cyan-300 dark:bg-cyan-400 rounded-full animate-float animate-pulse-grow"></div>
      <div className="absolute bottom-32 left-20 w-2 h-2 bg-blue-300 dark:bg-blue-400 rounded-full animate-float-delayed animate-pulse-grow-delayed"></div>
      <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-purple-200 dark:bg-purple-300 rounded-full animate-float-slow animate-pulse-grow-slow"></div>
      
      {/* Additional dots */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-cyan-200 dark:bg-cyan-300 rounded-full animate-float-delayed animate-pulse-grow-delayed"></div>
      <div className="absolute bottom-1/4 right-16 w-3 h-3 bg-blue-200 dark:bg-blue-300 rounded-full animate-float-slow animate-pulse-grow-slow"></div>
      <div className="absolute top-3/4 left-1/3 w-2 h-2 bg-purple-100 dark:bg-purple-200 rounded-full animate-float animate-pulse-grow"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center px-2 sm:px-0">
          
          {/* Photo */}
          <div className="relative">
            <div className="relative w-full max-w-sm mx-auto">
              {/* Simple Background */}
              <div className="absolute inset-0 bg-cyan-100 dark:bg-cyan-800 rounded-2xl transform rotate-3"></div>
              
              {/* Placeholder for portrait photo */}
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl aspect-square flex items-center justify-center shadow-lg border border-gray-100 dark:border-gray-700">
                {/* Light backdrop for photo in dark mode */}
                <div className="absolute inset-0 bg-white/90 dark:bg-white/95 rounded-2xl"></div>
                <img 
                  src="/IMG_6213.HEIC_compressed.JPEG" 
                  alt="Krystian Kłopocki" 
                  className="relative z-10 w-full h-full object-cover object-center rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-800 dark:text-white mb-4">
                O mnie
              </h2>
            </div>

            <div className="space-y-4 font-body text-gray-600 dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                Nazywam się <strong className="text-cyan-600">Krystian Kłopocki</strong> i prowadzę firmę 
                <strong className="text-gray-800 dark:text-gray-100"> DigiUp IT Consulting & Solutions</strong>.
              </p>
              <p className="leading-relaxed">
                Od ponad <strong className="text-cyan-600">15 lat</strong> łączę technologię z biznesem. Mam doświadczenie w ERP, 
                systemach produkcji przepływowej, integracjach EDI i automatyzacjach procesów.
              </p>
              <p className="leading-relaxed">
                Lubię <strong className="text-gray-800 dark:text-gray-100">proste i szybkie usprawnienia</strong>, które natychmiast odciążają ludzi od 
                powtarzalnej pracy.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600 mb-2">15+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">lat doświadczenia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600 mb-2">80%</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">redukcja pracy ręcznej</div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-body font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 w-full sm:w-auto flex items-center justify-center"
              >
                Poznajmy się bliżej
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;