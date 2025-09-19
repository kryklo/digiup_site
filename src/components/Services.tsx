import React from 'react';
import { Settings, Code, BarChart3, Target } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: 'Automatyzacje procesów',
      subtitle: 'Integracje systemów i eliminacja powtarzalnej pracy',
      items: [
        'Integracje systemów (ERP, WMS, EDI)',
        'Skrypty i roboty eliminujące powtarzalne czynności',
        'Harmonogramy, alerty, logowanie błędów'
      ],
      color: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      icon: Code,
      title: 'Programy szyte na miarę',
      subtitle: 'Lekkie aplikacje dostosowane do Twoich potrzeb',
      items: [
        'Lekkie aplikacje Windows/CLI w Go',
        'Obsługa plików, API, raportów',
        'Tworzone szybko w modelu PoC → wdrożenie'
      ],
      color: 'bg-cyan-100',
      iconColor: 'text-cyan-600'
    },
    {
      icon: BarChart3,
      title: 'Dashboardy i raporty',
      subtitle: 'Przejrzyste dane z różnych źródeł w jednym miejscu',
      items: [
        'Raporty z różnych źródeł – MS SQL, Oracle, Google Sheets i inne',
        'Dashboardy i raporty w Grafana',
        'Automatyczna dystrybucja raportów'
      ],
      color: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: Target,
      title: 'Doradztwo IT',
      subtitle: 'Strategiczne podejście do automatyzacji procesów',
      items: [
        'Audyt procesów i systemów',
        'Roadmapa automatyzacji (1–3 miesiące)',
        'Pomoc przy wyborze i wdrożeniu narzędzi'
      ],
      color: 'bg-red-100',
      iconColor: 'text-red-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Dots */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-cyan-300 rounded-full animate-float animate-pulse-grow"></div>
      <div className="absolute top-32 right-20 w-3 h-3 bg-blue-300 rounded-full animate-float-delayed animate-pulse-grow-delayed"></div>
      <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-purple-300 rounded-full animate-float-slow animate-pulse-grow-slow"></div>
      <div className="absolute bottom-40 right-1/3 w-4 h-4 bg-cyan-200 rounded-full animate-float animate-pulse-grow"></div>
      
      {/* Additional dots */}
      <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-blue-200 rounded-full animate-float-delayed animate-pulse-grow-delayed"></div>
      <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-purple-200 rounded-full animate-float-slow animate-pulse-grow-slow"></div>
      <div className="absolute top-2/3 left-20 w-2 h-2 bg-cyan-100 rounded-full animate-float animate-pulse-grow"></div>
      <div className="absolute bottom-1/4 right-16 w-3 h-3 bg-blue-100 rounded-full animate-float-delayed animate-pulse-grow-delayed"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-800 mb-4">
            Usługi
          </h2>
          <p className="text-lg font-body text-gray-600 max-w-3xl mx-auto">
            Kompleksowe rozwiązania automatyzacji i cyfryzacji dla Twojej firmy
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl bg-white hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start space-x-6">
                <div className={`p-4 rounded-xl ${service.color} ${service.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-bold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm font-body text-gray-500 mb-4">{service.subtitle}</p>
                  <ul className="space-y-3">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="font-body text-gray-600 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
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
            Porozmawiajmy o Twoim projekcie
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;