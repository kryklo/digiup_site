import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Building } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Declare Quill as global
declare global {
  interface Window {
    Quill: any;
  }
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isQuillLoaded, setIsQuillLoaded] = useState(false);
  const quillRef = useRef<any>(null);
  const editorRef = useRef<HTMLDivElement>(null);

  // Load Quill.js dynamically
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.quilljs.com/1.3.6/quill.min.js';
    script.onload = () => {
      setIsQuillLoaded(true);
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // Initialize Quill editor
  useEffect(() => {
    if (isQuillLoaded && editorRef.current && !quillRef.current) {
      quillRef.current = new window.Quill(editorRef.current, {
        theme: 'snow',
        placeholder: 'Opisz swój problem, projekt lub pytanie...',
        modules: {
          toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'indent': '-1'}, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean']
          ]
        }
      });

      // Handle content changes
      quillRef.current.on('text-change', () => {
        const html = quillRef.current.root.innerHTML;
        const text = quillRef.current.getText();
        setFormData(prev => ({ ...prev, message: html }));
      });
    }
  }, [isQuillLoaded]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        'service_z3io2d5',
        'template_unho3ac',
        {
          title: 'Nowe zapytanie z digiup.biz',
          from_name: formData.name,
          name: formData.name,
          time: new Date().toLocaleString('pl-PL'),
          message: formData.message,
          from_email: formData.email,
          email: formData.email,
          reply_to: formData.email,
          user_email: formData.email,
          contact_email: formData.email
        },
        'fMKpRoT0Jpqg_SB87'
      );
      
      setSubmitStatus('success');
      setShowSuccessPopup(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Clear Quill editor
      if (quillRef.current) {
        quillRef.current.setContents([]);
      }
      
      // Hide success popup after 4 seconds
      setTimeout(() => {
        setShowSuccessPopup(false);
      }, 4000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-green-500 text-white px-8 py-6 rounded-xl shadow-2xl animate-slide-up max-w-md mx-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-500 text-2xl font-bold">✓</span>
              </div>
              <h3 className="font-body font-bold text-xl mb-2">Wiadomość wysłana!</h3>
              <p className="font-body text-green-100">Skontaktuję się z Tobą w ciągu 24 godzin</p>
            </div>
          </div>
        </div>
      )}

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
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="font-body text-green-800 text-sm">
                    ✅ Dziękuję za wiadomość! Skontaktuję się z Tobą w ciągu 24 godzin.
                  </p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="font-body text-red-800 text-sm">
                    ❌ Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie lub zadzwoń: 
                    <a href="tel:+48571570330" className="underline ml-1">+48 571 570 330</a> lub napisz: 
                    <a href="mailto:krystian@digiup.biz" className="underline ml-1">krystian@digiup.biz</a>
                  </p>
                </div>
              )}

              <h3 className="text-xl font-heading font-bold text-gray-800 mb-2">
                Szybka wycena
              </h3>
              <p className="font-body text-gray-600 text-sm mb-6">Opisz swój problem, a skontaktuję się z Tobą w ciągu 24 godzin</p>
              <form onSubmit={handleSubmit} className="space-y-6">
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
                  <label htmlFor="message" className="block text-sm font-body font-medium text-gray-700 mb-1">
                    Wiadomość *
                  </label>
                  <p className="text-xs font-body text-gray-500 mb-2">
                    💡 Tip: Możesz formatować tekst i wklejać obrazy, ale duże pliki mogą powodować problemy z wysyłką
                  </p>
                  <div className="quill-wrapper">
                    {!isQuillLoaded ? (
                      <div className="w-full h-40 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                        <span className="font-body text-gray-500">Ładowanie edytora...</span>
                      </div>
                    ) : (
                      <div 
                        ref={editorRef}
                        className="bg-white rounded-lg border border-gray-200"
                        style={{ minHeight: '200px' }}
                      />
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !formData.message.trim()}
                  className="w-full bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg font-body font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <span>Wysyłanie...</span>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Wyślij zapytanie</span>
                    </>
                  )}
                </button>

                <p className="text-sm font-body text-gray-500 text-center">
                  * Pola wymagane. Odpowiem w ciągu 24 godzin.
                </p>

                <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4 text-center">
                  <p className="text-xs font-body text-cyan-800">
                    🍪 <strong>Informacja o cookies:</strong> Wysyłając formularz, potwierdzasz akceptację plików cookies niezbędnych do jego działania. 
                    Więcej informacji znajdziesz w naszej polityce prywatności.
                  </p>
                </div>
                <div className="text-xs font-body text-gray-500 text-center">
                  <p>Wysyłając formularz, wyrażasz zgodę na przetwarzanie danych osobowych w celu udzielenia odpowiedzi na zapytanie, zgodnie z naszą polityką prywatności. Dane będą przetwarzane przez DigiUp IT Consulting & Solutions Krystian Kłopocki.</p>
                </div>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;