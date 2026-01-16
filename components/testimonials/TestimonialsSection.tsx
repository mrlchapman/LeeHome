import React from 'react';
import { MessageSquareQuote } from 'lucide-react';
import TestimonialCard from './TestimonialCard';
import type { Testimonial } from '../../types';

// TODO: Replace with real testimonials from your clients
const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    clientName: 'Danielle Fearon',
    clientRole: 'Life Coach',
    clientCompany: 'Danielle Fearon Coaching',
    testimonial: 'Lee created an absolutely stunning website that perfectly captures my coaching brand. The design is professional, modern, and has helped me attract more clients. Highly recommend!',
    rating: 5,
    projectId: 1,
  },
  {
    id: 2,
    clientName: 'University Centre Leeds',
    clientRole: 'Academic Partner',
    clientCompany: 'UCL',
    testimonial: 'The AI Student Feedback Tool has transformed how we provide feedback to students. The integration was seamless and the results have been outstanding.',
    rating: 5,
    projectId: 2,
  },
  {
    id: 3,
    clientName: 'Future Client',
    clientRole: 'Role',
    clientCompany: 'Company',
    testimonial: 'Add your next testimonial here. Replace this placeholder with real feedback from your clients.',
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-6">
            <MessageSquareQuote className="w-5 h-5 text-brand-primary" />
            <span className="text-brand-secondary font-medium">Client Feedback</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Clients <span className="text-gradient">Say</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Don't just take my word for it. Here's what my clients have to say about working together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
