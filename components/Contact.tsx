
import React, { useState } from 'react';
import { Github, Linkedin, Twitter, Mail, Send, Loader, CheckCircle, AlertTriangle } from 'lucide-react';
import { submitContactForm } from '../services/supabaseService';
import type { ContactFormData } from '../types';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const socialLinks = [
  { icon: <Github />, href: '#', name: 'GitHub' },
  { icon: <Linkedin />, href: '#', name: 'LinkedIn' },
  { icon: <Twitter />, href: '#', name: 'Twitter' },
  { icon: <Mail />, href: 'mailto:lee@leechapman.uk', name: 'Email' },
];

enum FormStatus {
  Idle,
  Loading,
  Success,
  Error,
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<FormStatus>(FormStatus.Idle);
  const [errorMessage, setErrorMessage] = useState('');
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(FormStatus.Loading);
    setErrorMessage('');

    const result = await submitContactForm(formData);
    
    if (result.success) {
      setStatus(FormStatus.Success);
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus(FormStatus.Error);
      setErrorMessage(result.error || 'An unexpected error occurred.');
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div
        ref={ref}
        className={`container mx-auto px-6 transition-opacity duration-1000 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Get In Touch</h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </div>
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="lg:w-1/3">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Details</h3>
            <div className="bg-dark-card/50 backdrop-blur-md p-6 rounded-2xl border border-slate-700/50 space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-300 group"
                >
                  <span className="text-brand-secondary group-hover:text-white transition-colors">{link.icon}</span>
                  <span className="ml-4 text-slate-300">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="lg:w-2/3">
             <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
             <form onSubmit={handleSubmit} className="space-y-6">
               <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                  <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="w-full bg-dark-card border border-slate-600 rounded-lg py-3 px-4 text-white placeholder-slate-500 focus:ring-2 focus:ring-brand-primary focus:outline-none transition-shadow" placeholder="Your Name" />
               </div>
               <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                  <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="w-full bg-dark-card border border-slate-600 rounded-lg py-3 px-4 text-white placeholder-slate-500 focus:ring-2 focus:ring-brand-primary focus:outline-none transition-shadow" placeholder="your.email@example.com" />
               </div>
               <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                  <textarea name="message" id="message" rows={5} required value={formData.message} onChange={handleChange} className="w-full bg-dark-card border border-slate-600 rounded-lg py-3 px-4 text-white placeholder-slate-500 focus:ring-2 focus:ring-brand-primary focus:outline-none transition-shadow" placeholder="How can I help you?"></textarea>
               </div>
               <div>
                 <button type="submit" disabled={status === FormStatus.Loading} className="w-full flex justify-center items-center gap-3 bg-brand-primary text-white font-semibold py-3 px-8 rounded-full hover:bg-brand-secondary transition-all duration-300 transform hover:scale-105 shadow-lg shadow-brand-primary/30 disabled:bg-slate-600 disabled:cursor-not-allowed">
                   {status === FormStatus.Loading && <Loader className="animate-spin" size={20} />}
                   {status !== FormStatus.Loading && <Send size={20} />}
                   <span>{status === FormStatus.Loading ? 'Sending...' : 'Send Message'}</span>
                 </button>
               </div>
               {status === FormStatus.Success && (
                  <div className="flex items-center gap-3 text-green-400 bg-green-900/50 p-3 rounded-lg">
                    <CheckCircle />
                    <p>Message sent successfully! I'll get back to you soon.</p>
                  </div>
                )}
                {status === FormStatus.Error && (
                  <div className="flex items-center gap-3 text-red-400 bg-red-900/50 p-3 rounded-lg">
                    <AlertTriangle />
                    <p>{errorMessage}</p>
                  </div>
                )}
             </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
