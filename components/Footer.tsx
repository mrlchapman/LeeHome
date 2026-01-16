
import React from 'react';
import { Github, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

// TODO: Replace these placeholder URLs with your actual social media profiles
const SOCIAL_LINKS = [
  { name: 'YouTube', icon: Youtube, url: '#youtube' },      // e.g., https://youtube.com/@YourChannel
  { name: 'Instagram', icon: Instagram, url: '#instagram' }, // e.g., https://instagram.com/yourhandle
  { name: 'GitHub', icon: Github, url: '#github' },          // e.g., https://github.com/yourusername
  { name: 'Twitter', icon: Twitter, url: '#twitter' },       // e.g., https://twitter.com/yourhandle
  { name: 'LinkedIn', icon: Linkedin, url: '#linkedin' },    // e.g., https://linkedin.com/in/yourprofile
];

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
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="p-2 bg-white/5 rounded-full text-slate-400 hover:text-white hover:bg-brand-primary transition-all duration-300"
              >
                <social.icon size={20} />
              </a>
            ))}
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
