import React from 'react';
import { Calendar, MessageSquare, ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full animate-bounce delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <div className="mb-8">
            <Calendar size={64} className="text-white mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Masz 15 minut i pomysł na usprawnienie swojej pracy?
            </h2>
            <div className="w-24 h-1 bg-white/50 rounded-full mx-auto mb-8"></div>
          </div>

          <p className="text-xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            A może nie masz pomysłu, ale wiesz, że chcesz coś zmienić? 
            <br className="hidden sm:block" />
            <strong>Zapraszam do kontaktu.</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-white text-cyan-600 px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-3"
            >
              <MessageSquare size={24} />
              <span>Umów rozmowę</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            <div className="text-white/80 text-center">
              <p className="text-sm">lub</p>
            </div>

            <a
              href="tel:+48123456789"
              className="text-white hover:text-white/80 transition-colors duration-200 flex items-center space-x-2"
            >
              <span className="text-lg">📞</span>
              <span className="font-semibold">+48 123 456 789</span>
            </a>
          </div>

          <div className="mt-12 text-center">
            <p className="text-white/70 text-sm max-w-2xl mx-auto">
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