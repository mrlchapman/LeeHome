
import React from 'react';
import type { Service, Project, Step, NavLink } from './types';
import { Code, Bot, Layout, Palette } from 'lucide-react';

export const NAV_LINKS: NavLink[] = [
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'About', href: '#about' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' },
];

export const SERVICES_LIST: Service[] = [
  {
    icon: <Layout className="w-8 h-8 text-brand-secondary" />,
    title: 'Web Design',
    description: 'Crafting stunning, responsive websites that captivate and convert visitors into customers.',
  },
  {
    icon: <Bot className="w-8 h-8 text-brand-secondary" />,
    title: 'AI Automations',
    description: 'Streamlining your business processes with intelligent automations that save time and reduce costs.',
  },
  {
    icon: <Code className="w-8 h-8 text-brand-secondary" />,
    title: 'AI Dashboards',
    description: 'Building custom, AI-powered dashboards to visualize data and unlock actionable insights.',
  },
  {
    icon: <Palette className="w-8 h-8 text-brand-secondary" />,
    title: 'Digital Design',
    description: 'Creating cohesive and memorable digital branding that makes a lasting impression.',
  },
];

export const PROJECTS_LIST: Project[] = [
    {
      id: 1,
      title: 'Danielle Fearon Coaching',
      category: 'Professional Website',
      videoUrl: '/Media/DanielleFearonCoaching_UnlockYourGreatestSelf.mp4',
      width: 1920,
      height: 1080,
      tagline: 'Unlock Your Greatest Self',
      description: 'A stunning, professional life coaching website designed to inspire and empower clients on their personal development journey.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
      client: 'Danielle Fearon'
    },
    {
      id: 2,
      title: 'AI Student Feedback Tool',
      category: 'Educational Technology',
      videoUrl: '/Media/AI_Student_Feedback.mp4',
      width: 1920,
      height: 1080,
      tagline: 'Intelligent Learning Analytics',
      description: 'An advanced AI-powered educational platform with full LTI integration, providing personalized student feedback and analytics for University Centre Leeds.',
      technologies: ['AI/ML', 'LTI Integration', 'React', 'Node.js', 'Educational APIs'],
      client: 'University Centre Leeds'
    },
];

export const PROCESS_STEPS: Step[] = [
  {
    id: 1,
    title: 'Discovery & Strategy',
    description: "We start by understanding your vision, goals, and challenges to build a strategic foundation for your project.",
  },
  {
    id: 2,
    title: 'Design & Prototyping',
    description: "I create intuitive UI/UX designs and interactive prototypes, ensuring the final product is both beautiful and user-friendly.",
  },
  {
    id: 3,
    title: 'Development & AI Integration',
    description: "Leveraging modern tech stacks and AI, I build robust, scalable solutions tailored to your specific needs.",
  },
  {
    id: 4,
    title: 'Launch & Optimization',
    description: "After rigorous testing, we launch your product. I provide ongoing support and optimization to ensure continued success.",
  },
];
