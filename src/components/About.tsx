import React from 'react';
import { Clock, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Dots */}
      <div className="absolute top-20 right-10 w-3 h-3 bg-cyan-300 rounded-full animate-float opacity-30"></div>
      <div className="absolute bottom-32 left-20 w-2 h-2 bg-blue-300 rounded-full animate-float-delayed opacity-40"></div>
      <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-purple-200 rounded-full animate-float-slow opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Photo */}
          <div className="relative">
            <div className="relative w-full max-w-sm mx-auto">
              {/* Simple Background */}
              <div className="absolute inset-0 bg-cyan-100 rounded-2xl transform rotate-3"></div>
              
              {/* Placeholder for portrait photo */}
              <div className="relative bg-white rounded-2xl aspect-square flex items-center justify-center shadow-lg border border-gray-100">
                <div className="text-center text-gray-500">
                  <div className="w-16 h-16 bg-cyan-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-2xl">👨‍💼</span>
                  </div>
                  <p className="font-medium text-sm">Krystian Kłopocki</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                O mnie
              </h2>
            </div>

            <div className="space-y-4 text-gray-600">
              <p className="text-lg leading-relaxed">
                Nazywam się <strong className="text-cyan-600">Krystian Kłopocki</strong> i prowadzę firmę 
                <strong className="text-gray-800"> DigiUp IT Consulting & Solutions</strong>.
              </p>
              <p className="leading-relaxed">
                Od ponad <strong className="text-cyan-600">15 lat</strong> łączę technologię z biznesem. Mam doświadczenie w ERP (BPSC), 
                systemach produkcji przepływowej (SysOW), integracjach EDI i automatyzacjach procesów.
              </p>
              <p className="leading-relaxed">
                Lubię <strong className="text-gray-800">proste i szybkie usprawnienia</strong>, które natychmiast odciążają ludzi od 
                powtarzalnej pracy.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600 mb-2">15+</div>
                <div className="text-sm text-gray-500">lat doświadczenia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600 mb-2">80%</div>
                <div className="text-sm text-gray-500">redukcja pracy ręcznej</div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
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