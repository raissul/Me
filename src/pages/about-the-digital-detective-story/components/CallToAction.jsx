import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CallToAction = () => {
  const contactOptions = [
    {
      title: "Technical Consultation",
      description: "Discuss your system challenges and explore solutions",
      icon: "MessageSquare",
      action: "Schedule a Call",
      link: "/contact-multi-channel-connection-hub"
    },
    {
      title: "Project Collaboration",
      description: "Explore opportunities for system engineering projects",
      icon: "Handshake",
      action: "Start Discussion",
      link: "/professional-services-consulting-collaboration"
    },
    {
      title: "Knowledge Sharing",
      description: "Connect for technical discussions and mentorship",
      icon: "Users",
      action: "Connect Now",
      link: "/contact-multi-channel-connection-hub"
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-responsive-lg font-heading font-bold text-primary mb-4">
            Let's Solve Complex Problems Together
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Whether you're facing a critical system challenge, planning a major infrastructure project, or looking for technical mentorship, I'm here to help.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contactOptions.map((option, index) => (
            <div key={index} className="bg-card p-8 rounded-technical shadow-elevation hover-lift text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-technical flex items-center justify-center mx-auto mb-6">
                <Icon name={option.icon} size={28} className="text-accent" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary mb-4">
                {option.title}
              </h3>
              <p className="text-text-secondary mb-6 leading-relaxed">
                {option.description}
              </p>
              <Link to={option.link}>
                <Button
                  variant="outline"
                  size="default"
                  iconName="ArrowRight"
                  iconPosition="right"
                  fullWidth
                  className="cta-text"
                >
                  {option.action}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Main CTA */}
        <div className="bg-command-gradient p-12 rounded-technical text-center">
          <Icon name="Terminal" size={48} className="text-accent mx-auto mb-6" />
          <h3 className="text-2xl font-heading font-bold text-white mb-4">
            Ready to Debug Your Next Challenge?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Every complex problem has a solution waiting to be discovered. Let's work together to find it.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-multi-channel-connection-hub">
              <Button
                variant="default"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                className="cta-text bg-accent hover:bg-accent/90 text-white"
              >
                Schedule Technical Consultation
              </Button>
            </Link>
            <Link to="/project-showcase-fintech-case-studies">
              <Button
                variant="outline"
                size="lg"
                iconName="FolderOpen"
                iconPosition="left"
                className="cta-text border-white text-white hover:bg-white hover:text-primary"
              >
                View Case Studies
              </Button>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mt-8 pt-8 border-t border-white/20">
            <div className="flex items-center space-x-2 text-gray-300">
              <Icon name="Mail" size={16} />
              <span>sojib.hossain@digitaldetective.dev</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Icon name="Phone" size={16} />
              <span>+880 1234 567890</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Icon name="MapPin" size={16} />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          <Link 
            to="/homepage-system-engineering-command-center"
            className="flex items-center space-x-3 p-4 bg-card rounded-technical hover:bg-surface transition-colors duration-200"
          >
            <Icon name="Monitor" size={20} className="text-accent" />
            <span className="text-text-secondary hover:text-primary">Command Center</span>
          </Link>
          <Link 
            to="/technical-expertise-interactive-skill-showcase"
            className="flex items-center space-x-3 p-4 bg-card rounded-technical hover:bg-surface transition-colors duration-200"
          >
            <Icon name="Code" size={20} className="text-accent" />
            <span className="text-text-secondary hover:text-primary">Technical Skills</span>
          </Link>
          <Link 
            to="/project-showcase-fintech-case-studies"
            className="flex items-center space-x-3 p-4 bg-card rounded-technical hover:bg-surface transition-colors duration-200"
          >
            <Icon name="FolderOpen" size={20} className="text-accent" />
            <span className="text-text-secondary hover:text-primary">Projects</span>
          </Link>
          <Link 
            to="/professional-services-consulting-collaboration"
            className="flex items-center space-x-3 p-4 bg-card rounded-technical hover:bg-surface transition-colors duration-200"
          >
            <Icon name="Briefcase" size={20} className="text-accent" />
            <span className="text-text-secondary hover:text-primary">Services</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;