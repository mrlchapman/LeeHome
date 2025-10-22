
import type { ReactNode } from 'react';

export interface Service {
  // Fix: Use imported ReactNode type
  icon: ReactNode;
  title: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl?: string;
  videoUrl?: string;
  width: number;
  height: number;
  description?: string;
  tagline?: string;
  technologies?: string[];
  client?: string;
}

export interface Step {
  id: number;
  title:string;
  description: string;
}

export interface NavLink {
    name: string;
    href: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}