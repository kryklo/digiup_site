import React from 'react';
import { Mail, Phone, Linkedin, X } from 'lucide-react';

const Footer = () => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = React.useState(false);
  const [showTerms, setShowTerms] = React.useState(false);

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <h3 className="text-xl font-heading font-bold text-white dark:text-gray-100">
                DigiUp <span className="font-body font-normal">IT C & S</span>
              </h3>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed mb-4">
            </p>
            <p className="font-body text-gray-400 dark:text-gray-300 max-w-md leading-relaxed mb-4">
              DigiUp IT Consulting & Solutions specjalizuje się w automatyzacji procesów biznesowych, 
              integracjach systemów i rozwiązaniach szytych na miarę.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/krystian-kłopocki" target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white dark:text-gray-100 mb-4">Szybkie linki</h4>
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
                    className="font-body text-gray-400 dark:text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-white dark:text-gray-100 mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 font-body text-gray-400 dark:text-gray-300">
                <Mail size={16} />
                <span className="text-sm">krystian@digiup.biz</span>
              </div>
              <div className="flex items-center space-x-2 font-body text-gray-400 dark:text-gray-300">
                <Phone size={16} />
                <span className="text-sm">+48 571 570 330</span>
              </div>
              <div className="font-body text-gray-400 dark:text-gray-300 text-xs mt-4">
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
        <div className="border-t border-gray-800 dark:border-gray-700 pt-8 mt-8 text-center">
          <p className="font-body text-gray-400 dark:text-gray-300 text-sm">
            © 2024 DigiUp IT Consulting & Solutions. Wszystkie prawa zastrzeżone.
          </p>
          <div className="mt-2">
            <button
              onClick={() => setShowPrivacyPolicy(true)}
              className="font-body text-gray-400 dark:text-gray-300 hover:text-cyan-400 text-sm underline transition-colors duration-200"
            >
              Polityka prywatności
            </button>
            <span className="text-gray-400 mx-2">|</span>
            <button
              onClick={() => setShowTerms(true)}
              className="font-body text-gray-400 dark:text-gray-300 hover:text-cyan-400 text-sm underline transition-colors duration-200"
            >
              Regulamin
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Policy Popup */}
      {showPrivacyPolicy && (
        <div className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl max-h-[80vh] relative">
            <div className="sticky top-0 bg-white dark:bg-gray-800 rounded-t-lg flex justify-between items-center p-6 pb-4 border-b border-gray-200 dark:border-gray-700 z-10">
              <h2 className="text-2xl font-heading font-bold text-gray-800 dark:text-white">Polityka prywatności</h2>
              <button
                onClick={() => setShowPrivacyPolicy(false)}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors duration-200"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6 pt-4 font-body text-gray-600 dark:text-gray-300 text-sm leading-relaxed overflow-y-auto max-h-[calc(80vh-80px)]">
              <div className="space-y-4">
                <p className="font-semibold text-gray-800 dark:text-white">DigiUp IT Consulting & Solutions Krystian Kłopocki</p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-heading font-semibold text-gray-800 dark:text-white mb-2">1. Informacje ogólne</h3>
                    <p className="mb-2">Administratorem danych osobowych jest:</p>
                    <div className="ml-4 space-y-1">
                      <p>DigiUp IT Consulting & Solutions Krystian Kłopocki</p>
                      <p>Roszków, os. Zielony Zakątek 73/1</p>
                      <p>63-200 Jarocin</p>
                      <p>NIP: 6211763005 | REGON: 540342350</p>
                    </div>
                    <p className="mt-2 mb-1">Dane kontaktowe:</p>
                    <div className="ml-4 space-y-1">
                      <p>📞 +48 571 570 330</p>
                      <p>📧 krystian@digiup.biz</p>
                      <p>🌐 digiup.biz</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-heading font-semibold text-gray-800 dark:text-white mb-2">2. Zakres zbieranych danych</h3>
                    <p className="mb-2">Podczas korzystania ze strony digiup.biz oraz usług Administratora mogą być zbierane dane:</p>
                    <ul className="ml-4 space-y-1 list-disc">
                      <li>podane w formularzu kontaktowym (imię, nazwisko, adres e-mail, numer telefonu, treść wiadomości),</li>
                      <li>dane przekazywane w trakcie współpracy (np. dane do faktur: nazwa firmy, NIP, adres),</li>
                      <li>dane techniczne związane z korzystaniem ze strony (adres IP, typ urządzenia, przeglądarka, pliki cookies).</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-heading font-semibold text-gray-800 dark:text-white mb-2">3. Cele przetwarzania danych</h3>
                    <p className="mb-2">Dane osobowe przetwarzane są w celach:</p>
                    <ul className="ml-4 space-y-1 list-disc">
                      <li>obsługi zapytań kierowanych przez formularz kontaktowy,</li>
                      <li>przygotowania i realizacji oferty usług,</li>
                      <li>prowadzenia rozliczeń księgowych i podatkowych,</li>
                      <li>zapewnienia prawidłowego działania strony internetowej,</li>
                      <li>marketingu własnych usług (np. newsletter – tylko za zgodą użytkownika).</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-heading font-semibold text-gray-800 dark:text-white mb-2">4. Podstawa prawna</h3>
                    <p className="mb-2">Przetwarzanie odbywa się zgodnie z RODO (Rozporządzeniem 2016/679), w oparciu o:</p>
                    <ul className="ml-4 space-y-1 list-disc">
                      <li>art. 6 ust. 1 lit. a – zgoda użytkownika,</li>
                      <li>art. 6 ust. 1 lit. b – wykonanie umowy,</li>
                      <li>art. 6 ust. 1 lit. c – obowiązki prawne (np. księgowe),</li>
                      <li>art. 6 ust. 1 lit. f – prawnie uzasadniony interes administratora.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-heading font-semibold text-gray-800 dark:text-white mb-2">5. Udostępnianie danych</h3>
                    <p className="mb-2">Dane mogą być udostępniane wyłącznie:</p>
                    <ul className="ml-4 space-y-1 list-disc">
                      <li>podmiotom wspierającym obsługę działalności (księgowość, hosting, IT),</li>
                      <li>organom publicznym – gdy wymagają tego przepisy prawa.</li>
                    </ul>
                    <p className="mt-2">Dane nie są sprzedawane ani przekazywane podmiotom trzecim w celach marketingowych.</p>
                  </div>

                  <div>
                    <h3 className="font-heading font-semibold text-gray-800 dark:text-white mb-2">6. Pliki cookies</h3>
                    <p className="mb-2">Strona digiup.biz wykorzystuje pliki cookies w celu:</p>
                    <ul className="ml-4 space-y-1 list-disc">
                      <li>zapewnienia poprawnego działania strony,</li>
                      <li>analizy statystycznej ruchu (np. Google Analytics),</li>
                      <li>działań marketingowych (np. piksel Facebooka, jeśli zostanie wdrożony).</li>
                    </ul>
                    <p className="mt-2 mb-2">Wysyłając formularz kontaktowy, automatycznie wyrażasz zgodę na wykorzystanie niezbędnych plików cookies do obsługi Twojego zapytania.</p>
                    <p>Użytkownik może wyłączyć cookies w ustawieniach swojej przeglądarki, jednak może to wpłynąć na funkcjonalność formularza kontaktowego.</p>
                  </div>

                  <div>
                    <h3 className="font-heading font-semibold text-gray-800 dark:text-white mb-2">7. Czas przechowywania danych</h3>
                    <p className="mb-2">Dane przechowujemy:</p>
                    <ul className="ml-4 space-y-1 list-disc">
                      <li>przez okres niezbędny do realizacji celu przetwarzania,</li>
                      <li>w przypadku dokumentów księgowych – przez okres wynikający z przepisów prawa (np. 5 lat),</li>
                      <li>do czasu wycofania zgody w przypadku danych przetwarzanych na jej podstawie.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-heading font-semibold text-gray-800 dark:text-white mb-2">8. Prawa użytkowników</h3>
                    <p className="mb-2">Użytkownik ma prawo do:</p>
                    <ul className="ml-4 space-y-1 list-disc">
                      <li>dostępu do swoich danych,</li>
                      <li>sprostowania, usunięcia lub ograniczenia przetwarzania,</li>
                      <li>sprzeciwu wobec przetwarzania,</li>
                      <li>przenoszenia danych,</li>
                      <li>cofnięcia zgody w dowolnym momencie,</li>
                      <li>wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-heading font-semibold text-gray-800 dark:text-white mb-2">9. Ochrona danych</h3>
                    <p>Administrator stosuje odpowiednie środki techniczne i organizacyjne, aby chronić dane przed nieuprawnionym dostępem, utratą, zniszczeniem lub nieuprawnioną modyfikacją.</p>
                  </div>

                  <div>
                    <h3 className="font-heading font-semibold text-gray-800 dark:text-white mb-2">10. Zmiany polityki</h3>
                    <p className="mb-2">Administrator zastrzega sobie prawo do zmian niniejszej Polityki w przypadku aktualizacji oferty, przepisów prawa lub technologii.</p>
                    <p>Aktualna wersja Polityki zawsze dostępna jest na stronie digiup.biz.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Terms of Service Popup */}
      {showTerms && (
        <div className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl max-h-[80vh] relative">
            <div className="sticky top-0 bg-white dark:bg-gray-800 rounded-t-lg flex justify-between items-center p-6 pb-4 border-b border-gray-200 dark:border-gray-700 z-10">
              <h2 className="text-2xl font-heading font-bold text-gray-800 dark:text-white">Regulamin strony internetowej DigiUp</h2>
              <button
                onClick={() => setShowTerms(false)}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors duration-200"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6 pt-4 font-body text-gray-600 dark:text-gray-300 text-sm leading-relaxed overflow-y-auto max-h-[calc(80vh-80px)]">
              <div className="space-y-4">
                <p>Strona digiup.biz prowadzona jest przez DigiUp IT Consulting & Solutions Krystian Kłopocki.</p>
                
                <p>Strona ma charakter informacyjny i prezentuje ofertę usług z zakresu doradztwa i rozwiązań IT.</p>
                
                <p>Korzystanie ze strony jest bezpłatne i dobrowolne.</p>
                
                <p>Zabronione jest dostarczanie treści bezprawnych oraz podejmowanie działań mogących zakłócić działanie strony.</p>
                
                <p>Administrator nie ponosi odpowiedzialności za wykorzystanie informacji ze strony przez użytkowników.</p>
                
                <p>Prawa autorskie do treści i materiałów zamieszczonych na stronie przysługują DigiUp, chyba że wyraźnie wskazano inaczej.</p>
                
                <p>W sprawach nieuregulowanych niniejszym Regulaminem stosuje się przepisy prawa polskiego.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;