import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-card rounded-technical border border-border shadow-elevation p-6 hover:shadow-command transition-all duration-300">
      <div className="flex items-start space-x-4 mb-4">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <h4 className="font-medium text-primary">{testimonial.name}</h4>
          <p className="text-sm text-text-secondary">{testimonial.role}</p>
          <p className="text-sm text-accent">{testimonial.company}</p>
        </div>
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Icon
              key={i}
              name="Star"
              size={16}
              className={i < testimonial.rating ? "text-warning fill-current" : "text-border"}
            />
          ))}
        </div>
      </div>

      <blockquote className="text-text-secondary italic mb-4 leading-relaxed">
        "{testimonial.content}"
      </blockquote>

      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Icon name="Target" size={14} className="text-system-healthy" />
            <span className="text-xs text-text-secondary">Project: {testimonial.project}</span>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <Icon name="Calendar" size={14} className="text-text-muted" />
          <span className="text-xs text-text-secondary">{testimonial.date}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;