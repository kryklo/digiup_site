import React from 'react';
import { Search, Lightbulb, Rocket } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Szybki audyt',
      description: 'rozmowa + analiza danych (30–60 min)',
      color: 'bg-cyan-500'
    },
    {
      icon: Lightbulb,
      number: '02',
      title: 'Prototyp / PoC',
      description: 'mały zakres, efekt w 1–2 tygodnie',
      color: 'bg-blue-500'
    },
    {
      icon: Rocket,
      number: '03',
      title: 'Wdrożenie i monitoring',
      description: 'działające rozwiązanie, logi, krótka instrukcja obsługi',
      color: 'bg-purple-500'
    }
  ];

  return (
    <section id="process" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Dots */}
      <div className="absolute top-16 left-16 w-2 h-2 bg-cyan-300 rounded-full animate-float animate-pulse-grow"></div>
      <div className="absolute bottom-20 right-20 w-3 h-3 bg-blue-300 rounded-full animate-float-delayed animate-pulse-grow-delayed"></div>
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-300 rounded-full animate-float-slow animate-pulse-grow-slow"></div>
      
      {/* Additional dots */}
      <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-cyan-200 rounded-full animate-float-delayed animate-pulse-grow-delayed"></div>
      <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-blue-200 rounded-full animate-float-slow animate-pulse-grow-slow"></div>
      <div className="absolute top-2/3 left-16 w-4 h-4 bg-purple-100 rounded-full animate-float animate-pulse-grow"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 px-2 sm:px-0">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-800 mb-4">
            Jak pracuję
          </h2>
          <p className="text-lg font-body text-gray-600 max-w-3xl mx-auto">
            Prosty, sprawdzony proces od analizy po wdrożenie
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 px-2 sm:px-0 justify-items-center">
          {steps.map((step, index) => (
            <div key={index} className="relative group w-full max-w-sm lg:max-w-none">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-12 h-0.5 bg-cyan-300 transform translate-x-4"></div>
              )}
              
              <div className="relative bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transform sm:hover:scale-105 transition-all duration-300 border border-gray-100 ml-6 sm:ml-0">
                {/* Step Number */}
                <div className="absolute -top-4 -left-3 sm:-left-4 w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {step.number}
                </div>

                <div className="text-center">
                  {/* Icon */}
                  <div className={`inline-flex p-6 rounded-2xl ${step.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon size={40} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-heading font-bold text-gray-800 mb-4 group-hover:text-cyan-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="font-body text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/5 rounded-2xl transition-all duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 max-w-4xl mx-auto mx-4 sm:mx-auto">
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
              Gotowy na pierwszą rozmowę?
            </h3>
            <p className="font-body text-gray-600 mb-6">
              Opowiedz mi o swoim wyzwaniu – już podczas pierwszej rozmowy otrzymasz konkretne wskazówki.
            </p>
            <button
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-xl font-body font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Zacznijmy rozmowę
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;