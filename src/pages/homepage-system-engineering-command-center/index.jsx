import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import SkillsMatrix from './components/SkillsMatrix';
import FeaturedCaseStudies from './components/FeaturedCaseStudies';
import LatestInsights from './components/LatestInsights';
import SystemStatusDashboard from './components/SystemStatusDashboard';
import CallToAction from './components/CallToAction';

const Homepage = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>SojibTech - System Engineer | Fintech </title>
        <meta 
          name="description" 
          content="Precision engineering meets financial innovation. Expert system engineering, DevOps automation, and debugging solutions for high-stakes fintech environments. 99.97% uptime guaranteed." 
        />
        <meta 
          name="keywords" 
          content="system engineering, fintech infrastructure, DevOps, Docker, Kubernetes, performance optimization, debugging, trading systems, payment gateways" 
        />
        <meta name="author" content="Sojib Hossain" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="SojibTech - System Engineering Command Center" />
        <meta property="og:description" content="Expert system engineering and fintech infrastructure solutions with proven track record of 99.97% uptime and 340% ROI." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sojibtech.com/homepage-system-engineering-command-center" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=630&fit=crop&crop=face" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SojibTech - System Engineering Command Center" />
        <meta name="twitter:description" content="Expert system engineering and fintech infrastructure solutions with proven track record." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=630&fit=crop&crop=face" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Sojib Hossain",
            "jobTitle": "System Engineering Expert",
            "description": "Precision engineering meets financial innovation. Expert in system architecture, DevOps automation, and debugging complex fintech infrastructure.",
            "url": "https://sojibtech.com",
            "sameAs": [
              "https://linkedin.com/in/sojibhossain",
              "https://github.com/sojibhossain"
            ],
            "knowsAbout": [
              "System Engineering",
              "DevOps",
              "Docker",
              "Kubernetes",
              "Fintech Infrastructure",
              "Performance Optimization",
              "Debugging"
            ],
            "hasOccupation": {
              "@type": "Occupation",
              "name": "System Engineering Consultant",
              "description": "Specialized in fintech infrastructure optimization and debugging"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <HeroSection />

          {/* Skills Matrix */}
          <SkillsMatrix />

          {/* Featured Case Studies */}
          <FeaturedCaseStudies />

          {/* System Status Dashboard */}
          <SystemStatusDashboard />

          {/* Latest Insights */}
          <LatestInsights />

          {/* Call to Action */}
          <CallToAction />
        </main>

        {/* Footer */}
        <footer className="bg-primary text-white py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Brand Column */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-accent rounded-technical flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">ST</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold">SojibTech</h3>
                    <p className="text-sm text-white/70">Digital Detective</p>
                  </div>
                </div>
                <p className="text-white/80 leading-relaxed mb-6 max-w-md">
                  Precision engineering meets financial innovation. Transforming complex system challenges 
                  into scalable, reliable solutions for the fintech industry.
                </p>
                <div className="flex items-center space-x-4">
                  <a href="https://linkedin.com/in/sojibhossain" target="_blank" rel="noopener noreferrer" 
                     className="w-10 h-10 bg-white/10 rounded-technical flex items-center justify-center hover:bg-accent transition-colors duration-200">
                    <span className="text-sm font-bold">in</span>
                  </a>
                  <a href="https://github.com/sojibhossain" target="_blank" rel="noopener noreferrer"
                     className="w-10 h-10 bg-white/10 rounded-technical flex items-center justify-center hover:bg-accent transition-colors duration-200">
                    <span className="text-sm font-bold">gh</span>
                  </a>
                  <a href="mailto:sojib@sojibtech.com"
                     className="w-10 h-10 bg-white/10 rounded-technical flex items-center justify-center hover:bg-accent transition-colors duration-200">
                    <span className="text-sm font-bold">@</span>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm text-white/80">
                  <li><a href="/technical-expertise-interactive-skill-showcase" className="hover:text-accent transition-colors duration-200">Technical Expertise</a></li>
                  <li><a href="/project-showcase-fintech-case-studies" className="hover:text-accent transition-colors duration-200">Case Studies</a></li>
                  <li><a href="/professional-services-consulting-collaboration" className="hover:text-accent transition-colors duration-200">Services</a></li>
                  <li><a href="/about-the-digital-detective-story" className="hover:text-accent transition-colors duration-200">About</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="font-semibold mb-4">Get in Touch</h4>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>raissulislamsajieeb@gmail.com</li>
                  <li>+8801791377886</li>
                  <li>Available for consultation</li>
                  <li>Response time: &lt; 24h</li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-white/60">
                © {new Date().getFullYear()} SojibTech. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 text-sm text-white/60 mt-4 md:mt-0">
                <a href="/privacy" className="hover:text-accent transition-colors duration-200">Privacy Policy</a>
                <a href="/terms" className="hover:text-accent transition-colors duration-200">Terms of Service</a>
                <span className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-system-healthy rounded-full animate-pulse-system"></div>
                  <span>All Systems Operational</span>
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Homepage;