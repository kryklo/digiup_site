import React from 'react';
import { ShoppingCart, Factory, TrendingUp, CheckCircle } from 'lucide-react';

const Cases = () => {
  const cases = [
    {
      icon: ShoppingCart,
      category: 'Handel',
      title: 'Automatyzacja obsługi zamówień',
      problem: 'ręczne przetwarzanie zamówień od klientów ze sklepu internetowego, opóźnienia i pomyłki.',
      problem: 'Ręczne przetwarzanie zamówień od klientów ze sklepu internetowego, opóźnienia i pomyłki.',
      solution: 'Automatyczny import i walidacja zamówień, integracja z ERP.',
      result: 'Redukcja pracy ręcznej o 80%, szybsza obsługa klienta.',
      stats: [
        { value: '80%', label: 'Redukcja pracy ręcznej' },
        { value: '2 tygodnie', label: 'Czas wdrożenia' }
      ]
    },
    {
      icon: Factory,
      category: 'Manufacturing',
      title: 'Case 2 – Produkcja',
      problem: 'Brak raportów operacyjnych w czasie rzeczywistym.',
      solution: 'Dashboardy z danymi z MS SQL i Oracle, automatyczna dystrybucja raportów PDF/Excel.',
      result: 'Decyzje oparte na aktualnych danych, większa przejrzystość procesów.',
      stats: [
        { value: 'Real-time', label: 'Czas generowania raportów' },
        { value: '+100%', label: 'Przejrzystość procesów' }
      ]
    }
  ];

  return (
    <section id="cases" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background Dots */}
      <div className="absolute top-16 left-16 w-2 h-2 bg-cyan-300 dark:bg-cyan-400 rounded-full animate-float animate-pulse-grow"></div>
      <div className="absolute bottom-20 right-20 w-3 h-3 bg-blue-300 dark:bg-blue-400 rounded-full animate-float-delayed animate-pulse-grow-delayed"></div>
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-300 dark:bg-purple-400 rounded-full animate-float-slow animate-pulse-grow-slow"></div>
      
      {/* Additional dots */}
      <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-cyan-200 dark:bg-cyan-300 rounded-full animate-float-delayed animate-pulse-grow-delayed"></div>
      <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-blue-200 dark:bg-blue-300 rounded-full animate-float-slow animate-pulse-grow-slow"></div>
      <div className="absolute top-2/3 left-16 w-4 h-4 bg-purple-100 dark:bg-purple-200 rounded-full animate-float animate-pulse-grow"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 px-2 sm:px-0">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-800 dark:text-white mb-4">
            Case Studies
          </h2>
          <p className="text-lg font-body text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Przykłady rzeczywistych wdrożeń i ich rezultatów
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 px-2 sm:px-0">
          {cases.map((case_, index) => (
            <div
              key={index}
              className="group p-6 sm:p-8 rounded-xl bg-white dark:bg-gray-700 hover:shadow-xl dark:hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-600"
            >
              <div className="mb-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-lg bg-cyan-100 dark:bg-cyan-800 text-cyan-600 dark:text-cyan-400">
                    <case_.icon size={24} />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-cyan-600 uppercase tracking-wide">{case_.category}</span>
                    <h3 className="text-xl font-heading font-bold text-gray-800 dark:text-white">
                      {case_.title}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-heading font-semibold text-red-600 mb-2">Problem:</h4>
                  <p className="font-body text-gray-600 dark:text-gray-300 text-sm">{case_.problem}</p>
                </div>

                <div>
                  <h4 className="font-heading font-semibold text-cyan-600 mb-2">Rozwiązanie:</h4>
                  <p className="font-body text-gray-600 dark:text-gray-300 text-sm">{case_.solution}</p>
                </div>

                <div>
                  <h4 className="font-heading font-semibold text-green-600 mb-2">Efekt:</h4>
                  <p className="font-body text-gray-600 dark:text-gray-300 text-sm mb-4">{case_.result}</p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100 dark:border-gray-600">
                    {case_.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="text-2xl font-heading font-bold text-cyan-600">{stat.value}</div>
                        <div className="text-xs font-body text-gray-500 dark:text-gray-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-body font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Omów swój projekt
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cases;