import React from 'react';
import { Search, Lightbulb, Rocket } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Szybki audyt',
      description: 'rozmowa + analiza danych (30–60 min)',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Lightbulb,
      number: '02',
      title: 'Prototyp / PoC',
      description: 'mały zakres, efekt w 1–2 tygodnie',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: Rocket,
      number: '03',
      title: 'Wdrożenie i monitoring',
      description: 'działające rozwiązanie, logi, krótka instrukcja obsługi',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Jak pracuję
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prosty, sprawdzony proces od analizy po wdrożenie
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-12 h-0.5 bg-gradient-to-r from-cyan-300 to-blue-300 transform translate-x-4"></div>
              )}
              
              <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-100">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {step.number}
                </div>

                <div className="text-center">
                  {/* Icon */}
                  <div className={`inline-flex p-6 rounded-2xl bg-gradient-to-r ${step.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon size={40} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-cyan-700 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/0 to-blue-600/0 group-hover:from-cyan-600/5 group-hover:to-blue-600/5 rounded-2xl transition-all duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Gotowy na pierwszą rozmowę?
            </h3>
            <p className="text-gray-600 mb-6">
              Opowiedz mi o swoim wyzwaniu – już podczas pierwszej rozmowy otrzymasz konkretne wskazówki.
            </p>
            <button
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
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