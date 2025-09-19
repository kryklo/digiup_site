import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import About from './components/About';
import Cases from './components/Cases';
import FinalCTA from './components/FinalCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      <Hero />
      <Services />
      <Process />
      <About />
      <Cases />
      <FinalCTA />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;