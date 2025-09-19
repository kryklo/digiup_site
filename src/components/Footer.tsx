import React from 'react';
import { Mail, Phone, Linkedin, Github, X } from 'lucide-react';

const Footer = () => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = React.useState(false);

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8">
                <img 
                  src="/Wordpress Transparent.png" 
                  alt="DigiUp" 
                  className="w-full h-full object-contain opacity-90"
                />
              </div>
              <span className="text-xl font-bold text-white">DigiUp</span>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed mb-4">
            </p>
            <p className="font-body text-gray-400 max-w-md leading-relaxed mb-4">
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
            <h4 className="font-heading font-bold text-white mb-4">Szybkie linki</h4>
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
                    className="font-body text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 font-body text-gray-400">
                <Mail size={16} />
                <span className="text-sm">krystian@digiup.biz</span>
              </div>
              <div className="flex items-center space-x-2 font-body text-gray-400">
                <Phone size={16} />
                <span className="text-sm">+48 571 570 330</span>
              </div>
              <div className="font-body text-gray-400 text-xs mt-4">
                <p>DigiUp IT Consulting & Solutions</p>
                <p>Krystian Kłopocki</p>
                <p>Roszków os. Zielony Zakątek 73/1</p>
                <p>63-200 Jarocin</p>
                <p>NIP: 6211763005 | REGON: 540342350</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="font-body text-gray-400 text-sm">
            © 2024 DigiUp IT Consulting & Solutions. Wszystkie prawa zastrzeżone.
          </p>
          <div className="mt-2">
            <button
              onClick={() => setShowPrivacyPolicy(true)}
              className="font-body text-gray-400 hover:text-cyan-400 text-sm underline transition-colors duration-200"
            >
              Polityka prywatności
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Policy Popup */}
      {showPrivacyPolicy && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl max-h-[80vh] overflow-y-auto p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-heading font-bold text-gray-800">Polityka prywatności</h2>
              <button
                onClick={() => setShowPrivacyPolicy(false)}
                className="text-gray-500 hover:text-gray-700 p-2"
              >
                <X size={24} />
              </button>
            </div>
            <div className="font-body text-gray-600 text-sm leading-relaxed">
              {Array.from({ length: 600 }, (_, i) => (
                <span key={i}>polityka prywatności </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;