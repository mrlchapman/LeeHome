
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-card/30 border-t border-slate-800/50">
      <div className="container mx-auto px-6 py-6 text-center text-slate-400">
        <p>&copy; {currentYear} LeeChapman.uk. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
