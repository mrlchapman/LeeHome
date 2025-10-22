
import React from 'react';
import { PROCESS_STEPS } from '../constants';
import type { Step } from '../types';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ProcessStep: React.FC<Step & { isLast: boolean }> = ({ id, title, description, isLast }) => {
  return (
    <div className="relative pl-12 pb-12">
      {!isLast && <div className="absolute left-[22px] top-5 h-full w-px bg-slate-700"></div>}
      <div className="absolute left-0 top-0 flex items-center justify-center w-11 h-11 bg-dark-card border-2 border-brand-primary rounded-full">
        <span className="text-white font-bold text-lg">{id}</span>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </div>
  );
};

const Process: React.FC = () => {
    const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  return (
    <section id="process" className="py-20 lg:py-32">
      <div
        ref={ref}
        className={`container mx-auto px-6 transition-opacity duration-1000 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">My Process</h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            A streamlined and collaborative approach to ensure your project's success at every stage.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          {PROCESS_STEPS.map((step, index) => (
             <div key={step.id} className={`transition-all duration-700 ease-out ${isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: `${index * 200}ms` }}>
                <ProcessStep {...step} isLast={index === PROCESS_STEPS.length - 1} />
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
