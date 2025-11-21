import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;

    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
          scrolled ? 'w-[90%] md:w-auto' : 'w-[95%] md:w-auto'
        }`}
      >
        <div className={`glass-panel rounded-full px-6 py-3 flex justify-between items-center transition-all duration-300 ${
          scrolled ? 'shadow-2xl bg-dark-card/80' : 'bg-dark-card/40'
        }`}>
          <a href="#home" onClick={handleLinkClick} className="text-xl font-bold text-white tracking-wider mr-8">
            Lee<span className="text-brand-primary">Chapman</span>
          </a>
          
          <nav className="hidden md:flex space-x-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="px-4 py-2 rounded-full text-sm font-medium text-dark-text hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-dark-bg/95 backdrop-blur-xl transition-opacity duration-300 md:hidden flex justify-center items-center ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <nav className="flex flex-col items-center space-y-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="text-2xl font-medium text-dark-text hover:text-brand-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
