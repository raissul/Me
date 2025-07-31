import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <section className="relative bg-command-gradient min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-accent rounded-full"></div>
        <div className="absolute bottom-40 right-32 w-24 h-24 border border-warm-gold rounded-technical"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
              <Icon name="Search" size={16} className="text-accent" />
              <span className="text-accent font-mono text-sm">The Digital Detective</span>
            </div>
            
            <h1 className="text-responsive-xl font-heading font-bold text-white mb-6">
              Sojib Hossain
              <span className="block text-accent mt-2">System Engineering Specialist</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              From curious engineer to fintech system specialist, my journey has been defined by an insatiable appetite for solving complex infrastructure puzzles and a commitment to building systems that scale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <div className="flex items-center space-x-3 text-gray-300">
                <Icon name="MapPin" size={20} className="text-accent" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Icon name="Calendar" size={20} className="text-accent" />
                <span>8+ Years Experience</span>
              </div>
            </div>
          </div>

          {/* Professional Photo */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-accent/20 rounded-technical transform rotate-6"></div>
              <div className="absolute inset-0 bg-warm-gold/20 rounded-technical transform -rotate-3"></div>
              <div className="relative bg-card rounded-technical overflow-hidden shadow-modal">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Sojib Hossain - System Engineering Specialist"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-system-healthy rounded-full animate-pulse-system"></div>
                    <span className="text-white text-sm font-mono">Available for Consultation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={24} className="text-accent" />
      </div>
    </section>
  );
};

export default HeroSection;