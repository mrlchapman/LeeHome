import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
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
      {/* Dark Overlay for Background Image */}
      <div className="absolute inset-0 bg-dark-bg/80 z-0"></div>

      {/* Liquid Background */}
      <div className="absolute inset-0 z-0 opacity-60 mix-blend-screen">
        <LiquidEther
          colors={['#6366F1', '#818CF8', '#C084FC']}
          mouseForce={25}
          cursorSize={120}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.4}
          autoIntensity={2.5}
          takeoverDuration={0.25}
          autoResumeDelay={2000}
          autoRampDuration={0.6}
        />
      </div>

      {/* Overlay Gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/30 via-transparent to-dark-bg/80 z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto pointer-events-none select-none">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full glass-panel animate-fade-in">
          <span className="text-sm font-medium text-brand-secondary tracking-wide uppercase">Available for new projects</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight animate-fade-in tracking-tight">
          Creating Bespoke <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent">
            Digital Products
          </span>
        </h1>

        <div className="h-20 md:h-24 overflow-hidden mb-8">
          <div className="flex items-center justify-center gap-3 text-2xl md:text-4xl text-slate-300 font-light">
            <span>Specializing in</span>
            <span
              className={`font-semibold text-white ${animationClass}`}
            >
              {services[currentService]}
            </span>
          </div>
        </div>

        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto animate-fade-in mb-12 leading-relaxed" style={{ animationDelay: '0.4s', animationFillMode: 'forwards', opacity: 0 }}>
          I build innovative and intelligent solutions that empower businesses and elevate brands in the digital landscape.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center animate-fade-in pointer-events-auto" style={{ animationDelay: '0.6s', animationFillMode: 'forwards', opacity: 0 }}>
          <a
            href="#portfolio"
            className="group relative px-8 py-4 bg-white text-dark-bg font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>

          <a
            href="#contact"
            className="px-8 py-4 glass-button rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 animate-bounce z-10 pointer-events-auto">
        <a href="#services" aria-label="Scroll down" className="p-2 rounded-full hover:bg-white/5 transition-colors">
          <ChevronDown className="w-8 h-8 text-slate-400" />
        </a>
      </div>
    </section>
  );
};

export default Hero;