
import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-bg border-t border-white/5 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Lee<span className="text-brand-primary">Chapman</span>.uk</h3>
            <p className="text-slate-500">Building the digital future, one pixel at a time.</p>
          </div>

          <div className="flex gap-4">
            <a href="#" className="p-2 bg-white/5 rounded-full text-slate-400 hover:text-white hover:bg-brand-primary transition-all duration-300">
              <Github size={20} />
            </a>
            <a href="#" className="p-2 bg-white/5 rounded-full text-slate-400 hover:text-white hover:bg-brand-primary transition-all duration-300">
              <Twitter size={20} />
            </a>
            <a href="#" className="p-2 bg-white/5 rounded-full text-slate-400 hover:text-white hover:bg-brand-primary transition-all duration-300">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center text-slate-600 text-sm">
          <p>&copy; {currentYear} Lee Chapman. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
