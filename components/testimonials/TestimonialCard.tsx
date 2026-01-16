import React from 'react';
import { Star, Quote } from 'lucide-react';
import type { Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="glass-panel p-8 rounded-2xl relative group hover:bg-dark-card/80 transition-all duration-300">
      <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-primary/20 group-hover:text-brand-primary/40 transition-colors" />

      <div className="flex items-center gap-4 mb-6">
        {testimonial.clientAvatar ? (
          <img
            src={testimonial.clientAvatar}
            alt={testimonial.clientName}
            className="w-14 h-14 rounded-full object-cover border-2 border-brand-primary/30"
          />
        ) : (
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center text-white text-xl font-bold">
            {testimonial.clientName.charAt(0)}
          </div>
        )}
        <div>
          <h4 className="font-semibold text-white">{testimonial.clientName}</h4>
          <p className="text-sm text-slate-400">
            {testimonial.clientRole} at {testimonial.clientCompany}
          </p>
        </div>
      </div>

      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < testimonial.rating
                ? 'text-yellow-400 fill-yellow-400'
                : 'text-slate-600'
            }`}
          />
        ))}
      </div>

      <p className="text-slate-300 leading-relaxed italic">
        "{testimonial.testimonial}"
      </p>
    </div>
  );
};

export default TestimonialCard;
