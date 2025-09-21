import React, { useState, useEffect } from 'react';
import { Cookie, X, Check } from 'lucide-react';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('digiup-cookie-consent');
    if (!consent) {
      // Show consent after 1 second only if no previous consent
      const timer = setTimeout(() => {
        // Double check that consent wasn't given in another tab
        const currentConsent = localStorage.getItem('digiup-cookie-consent');
        if (!currentConsent) {
          setShowConsent(true);
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('digiup-cookie-consent', JSON.stringify({
      type: 'all',
      timestamp: new Date().toISOString()
    }));
    setShowConsent(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem('digiup-cookie-consent', JSON.stringify({
      type: 'necessary', 
      timestamp: new Date().toISOString()
    }));
    setShowConsent(false);
  };

  const rejectAll = () => {
    localStorage.setItem('digiup-cookie-consent', JSON.stringify({
      type: 'rejected',
      timestamp: new Date().toISOString()
    }));
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-end justify-center z-50 p-4">
      <div className="bg-white rounded-t-2xl max-w-4xl w-full shadow-2xl animate-slide-up">
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-cyan-100 rounded-lg">
                <Cookie className="text-cyan-600" size={24} />
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-800">
                Używam plików cookies
              </h3>
            </div>
            <button
              onClick={rejectAll}
              className="text-gray-400 hover:text-gray-600 p-1"
            >
              <X size={20} />
            </button>
          </div>

          <div className="mb-6">
            <p className="font-body text-gray-600 mb-4">
              Strona używa plików cookies, aby zapewnić najlepsze doświadczenia użytkownika. 
              Cookies pomagają mi analizować ruch na stronie i dostosowywać treści.
            </p>

            {showDetails && (
              <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm font-body text-gray-600">
                <h4 className="font-semibold text-gray-800 mb-2">Rodzaje cookies:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <Check size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Niezbędne:</strong> Zapewniają podstawowe funkcjonalności strony
                    </div>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Analityczne:</strong> Pomagają zrozumieć, jak użytkownicy korzystają ze strony
                    </div>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check size={16} className="text-purple-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Marketingowe:</strong> Służą do wyświetlania spersonalizowanych treści
                    </div>
                  </li>
                </ul>
              </div>
            )}

            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-cyan-600 hover:text-cyan-700 font-body text-sm underline"
            >
              {showDetails ? 'Ukryj szczegóły' : 'Pokaż szczegóły'}
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={acceptAll}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-body font-semibold flex-1 transition-colors duration-200"
            >
              Akceptuj wszystkie
            </button>
            <button
              onClick={acceptNecessary}
              className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-body font-semibold hover:border-cyan-500 hover:text-cyan-600 flex-1 transition-colors duration-200"
            >
              Tylko niezbędne
            </button>
            <button
              onClick={rejectAll}
              className="text-gray-500 hover:text-gray-700 px-6 py-3 rounded-lg font-body text-sm underline transition-colors duration-200"
            >
              Odrzuć wszystkie
            </button>
          </div>

          <p className="text-xs font-body text-gray-500 mt-4 text-center">
            Możesz zmienić swoje preferencje w każdej chwili w ustawieniach przeglądarki.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;