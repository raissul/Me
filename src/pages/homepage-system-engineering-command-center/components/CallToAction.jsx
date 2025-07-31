import React from 'react';

import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CallToAction = () => {
  const consultationTypes = [
    {
      title: 'System Architecture Review',
      description: 'Comprehensive analysis of your current infrastructure with optimization recommendations',
      duration: '2-3 hours',
      icon: 'Layers',
      popular: false
    },
    {
      title: 'Performance Optimization Audit',
      description: 'Deep-dive into system bottlenecks with actionable performance improvement strategies',
      duration: '4-6 hours',
      icon: 'Zap',
      popular: true
    },
    {
      title: 'Incident Response Planning',
      description: 'Build robust incident response procedures and disaster recovery protocols',
      duration: '1-2 days',
      icon: 'Shield',
      popular: false
    }
  ];

  const contactMethods = [
    {
      method: 'Schedule Call',
      description: 'Book a technical consultation',
      icon: 'Calendar',
      action: '/contact-multi-channel-connection-hub',
      primary: true
    },
    {
      method: 'Send Email',
      description: 'Detailed project discussion',
      icon: 'Mail',
      action: 'mailto:raissulislamsajieeb@gmail.com',
      primary: false
    },
    {
      method: 'LinkedIn',
      description: 'Professional networking',
      icon: 'Linkedin',
      action: 'https://linkedin.com/in/raissulislamsajieeb',
      primary: false
    }
  ];

  const quickStats = [
    { label: 'Projects Delivered', value: '100+', icon: 'CheckCircle' },
    { label: 'Client Satisfaction', value: '98%', icon: 'Star' },
    { label: 'Response Time', value: '< 24h', icon: 'Clock' },
    { label: 'Success Rate', value: '99.7%', icon: 'Target' }
  ];

  return (
    <section className="py-20 bg-command-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-primary/30"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2300d4ff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M20%2020c0-5.5-4.5-10-10-10s-10%204.5-10%2010%204.5%2010%2010%2010%2010-4.5%2010-10zm10%200c0-5.5-4.5-10-10-10s-10%204.5-10%2010%204.5%2010%2010%2010%2010-4.5%2010-10z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main CTA Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-16 h-16 bg-accent/20 rounded-technical flex items-center justify-center backdrop-blur-sm">
              <Icon name="Rocket" size={32} className="text-accent" />
            </div>
          </div>
          
          <h2 className="text-responsive-lg font-heading font-bold text-white mb-6">
            Ready to Optimize Your
            <span className="block text-accent">Fintech Infrastructure?</span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
            Let's discuss how precision engineering and proven debugging methodologies 
            can transform your system performance and reliability.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {quickStats.map((stat) => (
              <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-technical p-4 border border-white/20">
                <Icon name={stat.icon} size={24} className="mx-auto mb-2 text-accent" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Consultation Types */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-bold text-white text-center mb-8">
            Choose Your Consultation Type
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {consultationTypes.map((consultation) => (
              <div
                key={consultation.title}
                className={`relative bg-white/10 backdrop-blur-sm rounded-technical p-6 border transition-all duration-300 hover:bg-white/15 hover:scale-105 ${
                  consultation.popular 
                    ? 'border-accent/50 shadow-command' 
                    : 'border-white/20'
                }`}
              >
                {consultation.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent text-primary px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-technical flex items-center justify-center mx-auto mb-4">
                    <Icon name={consultation.icon} size={24} className="text-accent" />
                  </div>
                  
                  <h4 className="text-lg font-semibold text-white mb-3">
                    {consultation.title}
                  </h4>
                  
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    {consultation.description}
                  </p>
                  
                  <div className="flex items-center justify-center space-x-2 text-accent text-sm font-medium">
                    <Icon name="Clock" size={16} />
                    <span>{consultation.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((contact) => (
            <div
              key={contact.method}
              className={`bg-white/10 backdrop-blur-sm rounded-technical p-6 border border-white/20 text-center transition-all duration-300 hover:bg-white/15 ${
                contact.primary ? 'ring-2 ring-accent/50' : ''
              }`}
            >
              <div className="w-12 h-12 bg-accent/20 rounded-technical flex items-center justify-center mx-auto mb-4">
                <Icon name={contact.icon} size={24} className="text-accent" />
              </div>
              
              <h4 className="text-lg font-semibold text-white mb-2">
                {contact.method}
              </h4>
              
              <p className="text-white/70 text-sm mb-4">
                {contact.description}
              </p>
              
              <Button
                variant={contact.primary ? "default" : "outline"}
                size="sm"
                className={contact.primary 
                  ? "bg-accent hover:bg-accent/90 text-primary cta-text w-full" 
                  : "border-white/30 text-white hover:bg-white/10 w-full"
                }
                onClick={() => {
                  if (contact.action.startsWith('http') || contact.action.startsWith('mailto:')) {
                    window.open(contact.action, '_blank');
                  } else {
                    window.location.href = contact.action;
                  }
                }}
              >
                {contact.method}
              </Button>
            </div>
          ))}
        </div>

        {/* Primary CTA Buttons */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="default"
              size="xl"
              iconName="Calendar"
              iconPosition="left"
              className="bg-accent hover:bg-accent/90 text-primary cta-text shadow-command"
              onClick={() => window.location.href = '/contact-multi-channel-connection-hub'}
            >
              Schedule Technical Consultation
            </Button>
            
            <Button
              variant="outline"
              size="xl"
              iconName="FolderOpen"
              iconPosition="left"
              className="border-white/30 text-white hover:bg-white/10 cta-text"
              onClick={() => window.location.href = '/project-showcase-fintech-case-studies'}
            >
              View Case Studies
            </Button>
          </div>
          
          <p className="text-white/60 text-sm mt-6">
            Trusted by 50+ fintech companies • Average project ROI: 340%
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-white/20">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-6">
              Trusted by Leading Fintech Companies
            </h4>
            
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {/* Mock company logos/names */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white/20 rounded-technical"></div>
                <span className="text-white/80 font-medium">TradeTech Solutions</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white/20 rounded-technical"></div>
                <span className="text-white/80 font-medium">PayFlow Systems</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white/20 rounded-technical"></div>
                <span className="text-white/80 font-medium">ComplianceFirst Bank</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white/20 rounded-technical"></div>
                <span className="text-white/80 font-medium">CryptoVault Inc</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;