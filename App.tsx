
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LiquidEtherBackground from './components/LiquidEtherBackground';

const App: React.FC = () => {
  return (
    <div className="bg-dark-bg text-dark-text font-sans antialiased relative isolate">
      <LiquidEtherBackground />
      
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Services />
          <Portfolio />
          <About />
          <Process />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
