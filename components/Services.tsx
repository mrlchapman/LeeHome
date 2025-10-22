
import React from 'react';
import { SERVICES_LIST } from '../constants';
import type { Service } from '../types';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ServiceCard: React.FC<Service> = ({ icon, title, description }) => {
  return (
    <div className="bg-dark-card/50 backdrop-blur-md p-8 rounded-2xl border border-slate-700/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-primary/20">
      <div className="mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
    const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  return (
    <section id="services" className="py-20 lg:py-32">
      <div
        ref={ref}
        className={`container mx-auto px-6 transition-opacity duration-1000 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">What I Offer</h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            From concept to deployment, I provide end-to-end solutions to bring your digital ideas to life.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES_LIST.map((service, index) => (
             <div key={index} className={`transition-transform duration-700 ease-out ${isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: `${index * 150}ms` }}>
                <ServiceCard {...service} />
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
