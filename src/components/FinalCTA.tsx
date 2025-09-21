import React from 'react';
import { Calendar, MessageSquare, ArrowRight, Phone } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-50"></div>
      
      {/* Background Dots */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-cyan-300 rounded-full animate-float animate-pulse-grow"></div>
      <div className="absolute bottom-32 right-16 w-2 h-2 bg-blue-300 rounded-full animate-float-delayed animate-pulse-grow-delayed"></div>
      <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-purple-200 rounded-full animate-float-slow animate-pulse-grow-slow"></div>
      
      {/* Additional dots */}
      <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-cyan-200 rounded-full animate-float-delayed animate-pulse-grow-delayed"></div>
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-blue-200 rounded-full animate-float-slow animate-pulse-grow-slow"></div>
      <div className="absolute top-3/4 right-20 w-2 h-2 bg-purple-100 rounded-full animate-float animate-pulse-grow"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <div className="mb-8">
            <Calendar size={64} className="text-cyan-600 mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-800 mb-6 leading-tight">
              Masz 15 minut i pomysł na usprawnienie swojej pracy?
            </h2>
            <div className="w-24 h-1 bg-cyan-500 rounded-full mx-auto mb-8"></div>
          </div>

          <p className="text-lg font-body text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            A może nie masz pomysłu, ale wiesz, że chcesz coś zmienić? 
            <br />
            <strong>Zapraszam do kontaktu.</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group bg-cyan-500 hover:bg-cyan-600 text-white px-10 py-5 rounded-xl font-body font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-3"
            >
              <MessageSquare size={24} />
              <span>Umów rozmowę</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            <div className="text-white/80 text-center">
              <p className="text-sm font-body text-gray-500">lub</p>
            </div>

            <a
              href="tel:+48571570330"
              className="font-body text-gray-700 hover:text-cyan-600 transition-colors duration-200 flex items-center space-x-2"
            >
              <Phone size={20} className="text-cyan-500" />
              <span className="font-semibold">+48 571 570 330</span>
            </a>
          </div>

          <div className="mt-12 text-center">
            <p className="font-body text-gray-500 text-sm max-w-2xl mx-auto">
              Pierwsza konsultacja to rozmowa o Twoich potrzebach i wyzwaniach. 
              Bez zobowiązań, z konkretnymi wskazówkami już podczas pierwszego spotkania.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;