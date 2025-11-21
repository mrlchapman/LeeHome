import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We start by diving deep into your vision, goals, and target audience to understand the core of your project.'
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'I develop a comprehensive roadmap, selecting the right technologies and design approach for success.'
  },
  {
    number: '03',
    title: 'Design',
    description: 'Creating high-fidelity prototypes and visual assets that align with your brand identity.'
  },
  {
    number: '04',
    title: 'Development',
    description: 'Writing clean, efficient code to bring the designs to life, ensuring performance and scalability.'
  },
  {
    number: '05',
    title: 'Launch',
    description: 'Rigorous testing and deployment, followed by ongoing support to ensure everything runs smoothly.'
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24  relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-gradient">Process</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A structured approach to turning ideas into reality.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-accent opacity-30 md:-translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                {/* Content */}
                <div className="md:w-1/2 pl-16 md:pl-0 md:px-12">
                  <div className={`glass-panel p-8 rounded-2xl relative transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="text-6xl font-bold text-white/5 absolute -top-8 -right-4 select-none pointer-events-none">
                      {step.number}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-3 relative z-10">{step.title}</h3>
                    <p className="text-slate-400 leading-relaxed relative z-10">{step.description}</p>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-[11px] md:left-1/2 top-8 md:top-1/2 w-5 h-5 rounded-full  border-2 border-brand-primary md:-translate-x-1/2 md:-translate-y-1/2 z-20 shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                  <div className="absolute inset-0 bg-brand-primary rounded-full animate-pulse-slow opacity-50"></div>
                </div>

                {/* Empty Space for Layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
