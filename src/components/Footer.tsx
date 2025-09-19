import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10">
                <img 
                  src="/Original Logo Symbol.png" 
                  alt="DigiUp" 
                  className="w-full h-full object-contain opacity-90"
                />
              </div>
              <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                DigiUp
              </div>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed mb-4">
              DigiUp IT Consulting & Solutions specjalizuje się w automatyzacji procesów biznesowych, 
              integracjach systemów i rozwiązaniach szytych na miarę.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Szybkie linki</h4>
            <ul className="space-y-2">
              {[
                { label: 'Usługi', id: 'services' },
                { label: 'Proces', id: 'process' },
                { label: 'O mnie', id: 'about' },
                { label: 'Realizacje', id: 'cases' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail size={16} />
                <span className="text-sm">kontakt@digiup.biz</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone size={16} />
                <span className="text-sm">+48 123 456 789</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 DigiUp IT Consulting & Solutions. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;