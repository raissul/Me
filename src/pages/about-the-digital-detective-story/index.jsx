import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import OriginStory from './components/OriginStory';
import ProfessionalTimeline from './components/ProfessionalTimeline';
import TechnicalPhilosophy from './components/TechnicalPhilosophy';
import WhyFintech from './components/WhyFintech';
import PersonalElements from './components/PersonalElements';
import TestimonialsSection from './components/TestimonialsSection';
import CallToAction from './components/CallToAction';

const AboutPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = 'About - The Digital Detective Story | SojibTech Portfolio';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover Sojib Hossain\'s journey from curious engineer to fintech system specialist. Learn about his technical philosophy, professional evolution, and passion for solving complex infrastructure challenges.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Origin Story */}
        <OriginStory />
        
        {/* Professional Timeline */}
        <ProfessionalTimeline />
        
        {/* Technical Philosophy */}
        <TechnicalPhilosophy />
        
        {/* Why Fintech */}
        <WhyFintech />
        
        {/* Personal Elements */}
        <PersonalElements />
        
        {/* Testimonials */}
        <TestimonialsSection />
        
        {/* Call to Action */}
        <CallToAction />
      </main>

      {/* Footer */}
      <footer className="bg-command-gradient py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} SojibTech. All rights reserved. | The Digital Detective
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Building systems that scale, solutions that last.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;