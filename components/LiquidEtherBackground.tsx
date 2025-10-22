
import React from 'react';

const LiquidEtherBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-dark-bg"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-primary/20 rounded-full filter blur-3xl opacity-50 animate-liquid-1"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-500/20 rounded-full filter blur-3xl opacity-50 animate-liquid-2"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl opacity-50 animate-liquid-3"></div>
    </div>
  );
};

export default LiquidEtherBackground;
