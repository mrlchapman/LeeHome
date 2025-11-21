import React from 'react';
import { Code, Cpu, LayoutDashboard, Palette } from 'lucide-react';

const services = [
  {
    icon: <Code size={40} />,
    title: 'Bespoke Websites',
    description: 'Custom-built, high-performance websites tailored to your brand\'s unique identity and goals.',
    gradient: 'from-blue-500 to-cyan-400'
  },
  {
    icon: <Cpu size={40} />,
    title: 'AI Automations',
    description: 'Streamline your operations with intelligent automation solutions that save time and reduce costs.',
    gradient: 'from-purple-500 to-pink-400'
  },
  {
    icon: <LayoutDashboard size={40} />,
    title: 'Interactive Dashboards',
    description: 'Visualize your data with intuitive, real-time dashboards that provide actionable insights.',
    gradient: 'from-emerald-500 to-teal-400'
  },
  {
    icon: <Palette size={40} />,
    title: 'Digital Branding',
    description: 'Create a cohesive and memorable digital presence that resonates with your target audience.',
    gradient: 'from-orange-500 to-amber-400'
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Leveraging cutting-edge technology to deliver exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl glass-panel hover:bg-dark-card/80 transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>

              <div className={`mb-6 p-4 rounded-2xl bg-gradient-to-br ${service.gradient} bg-opacity-10 w-fit text-white group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all duration-300">
                {service.title}
              </h3>

              <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
