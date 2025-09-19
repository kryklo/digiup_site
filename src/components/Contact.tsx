import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Building } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Dziękuję za wiadomość! Skontaktuję się z Tobą w ciągu 24 godzin.');
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Background Dots */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-cyan-300 rounded-full animate-float animate-pulse-grow"></div>
      <div className="absolute bottom-32 right-16 w-2 h-2 bg-blue-300 rounded-full animate-float-delayed animate-pulse-grow-delayed"></div>
      <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-purple-200 rounded-full animate-float-slow animate-pulse-grow-slow"></div>
      
      {/* Additional dots */}
      <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-cyan-200 rounded-full animate-float-delayed animate-pulse-grow-delayed"></div>
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-blue-200 rounded-full animate-float-slow animate-pulse-grow-slow"></div>
      <div className="absolute top-3/4 right-20 w-2 h-2 bg-purple-100 rounded-full animate-float animate-pulse-grow"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-800 mb-4">
            Kontakt
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h3 className="text-xl font-heading font-bold text-gray-800 mb-2">
                Szybka wycena
              </h3>
              <p className="font-body text-gray-600 text-sm mb-6">Opisz swój problem, a skontaktuję się z Tobą w ciągu 24 godzin</p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-body font-medium text-gray-700 mb-1">
                      Imię i nazwisko *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 font-body"
                      placeholder="Twoje imię i nazwisko"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-body font-medium text-gray-700 mb-1">
                      Firma
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 font-body"
                      placeholder="Nazwa firmy"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-body font-medium text-gray-700 mb-1">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 font-body"
                    placeholder="twoj@email.pl"
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-body font-medium text-gray-700 mb-1">
                    Opis problemu *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 resize-none font-body"
                    placeholder="Opisz czego potrzebujesz, jaki proces chcesz usprawnić lub jakim problemem się borykasz..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-body font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Wyślij zapytanie</span>
                </button>

                <p className="text-sm font-body text-gray-500 text-center">
                  * Pola wymagane. Odpowiem w ciągu 24 godzin.
                </p>
              </form>
            </div>
          </div>
          
          {/* Company Info */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <h3 className="text-lg font-heading font-bold text-gray-800 mb-4">
                Dane firmy
              </h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-body font-semibold text-gray-800">DigiUp IT Consulting & Solutions</p>
                  <p className="font-body text-gray-600">Krystian Kłopocki</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 font-body text-gray-600">
                    <Mail size={16} className="text-cyan-500" />
                    <span>krystian@digiup.biz</span>
                  </div>
                  <div className="flex items-center space-x-2 font-body text-gray-600">
                    <Phone size={16} className="text-cyan-500" />
                    <span>+48 571 570 330</span>
                  </div>
                  <div className="flex items-center space-x-2 font-body text-gray-600">
                    <Building size={16} className="text-cyan-500" />
                    <span>NIP: 6211763005</span>
                  </div>
                  <div className="flex items-center space-x-2 font-body text-gray-600">
                    <MapPin size={16} className="text-cyan-500" />
                    <span>Roszków os. Zielony Zakątek 73/1, 63-200 Jarocin</span>
                  </div>
                  <div className="flex items-center space-x-2 font-body text-gray-600">
                    <Building size={16} className="text-cyan-500" />
                    <span>REGON: 540342350</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-cyan-50 p-6 rounded-xl border border-cyan-100">
              <h4 className="font-heading font-semibold text-gray-800 mb-2">Kalendarz online</h4>
              <p className="text-sm font-body text-gray-600 mb-4">
                Umów się na bezpłatną konsultację bezpośrednio w kalendarzu
              </p>
              <button className="w-full bg-white hover:bg-gray-50 text-gray-800 px-4 py-2 rounded-lg border border-gray-200 text-sm font-body font-medium transition-all duration-200">
                Otwórz kalendarz Calendly
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;