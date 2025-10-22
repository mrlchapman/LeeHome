import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import LiquidEther from './LiquidEther';

const services = ['Websites', 'AI Automations', 'Dashboards', 'Digital Branding'];

const Hero: React.FC = () => {
  const [currentService, setCurrentService] = useState(0);
  const [animationClass, setAnimationClass] = useState('animate-fade-in-up');

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass('opacity-0 transition-opacity duration-500'); // Start fade out
      setTimeout(() => {
        setCurrentService((prev) => (prev + 1) % services.length);
        setAnimationClass('animate-fade-in-up'); // Start fade in
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
        id="home" 
        className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('images/Desk.png')" }}
    >
        <div className="absolute inset-0 bg-dark-bg/80 z-0"></div>
        <div className="absolute inset-0 z-0 opacity-100">
            <LiquidEther
                colors={['#6366F1', '#818CF8', '#a855f7']}
                mouseForce={20}
                cursorSize={100}
                isViscous={false}
                viscous={30}
                iterationsViscous={32}
                iterationsPoisson={32}
                resolution={0.5}
                isBounce={false}
                autoDemo={true}
                autoSpeed={0.5}
                autoIntensity={2.2}
                takeoverDuration={0.25}
                autoResumeDelay={3000}
                autoRampDuration={0.6}
            />
        </div>
      <div className="relative z-10 max-w-4xl mx-auto pointer-events-none">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight animate-fade-in">
          Creating Bespoke Digital Products:
        </h1>
        <div className="h-16 md:h-24 lg:h-28 overflow-hidden">
          <h2
            className={`text-4xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary ${animationClass}`}
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards', opacity: 0 }}
          >
            {services[currentService]}
          </h2>
        </div>
        <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards', opacity: 0 }}>
          I build innovative and intelligent solutions that empower businesses and elevate brands in the digital landscape.
        </p>
        <div className="mt-10 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards', opacity: 0 }}>
          <a
            href="#services"
            className="inline-block bg-brand-primary text-white font-semibold py-3 px-8 rounded-full hover:bg-brand-secondary transition-transform duration-300 transform hover:scale-105 shadow-lg shadow-brand-primary/30 pointer-events-auto"
          >
            Explore My Work
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 animate-bounce z-10">
        <a href="#services" aria-label="Scroll down">
          <ChevronDown className="w-8 h-8 text-slate-400" />
        </a>
      </div>
    </section>
  );
};

export default Hero;