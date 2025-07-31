import React from 'react';
import Icon from '../../../components/AppIcon';

const WhyFintech = () => {
  const fintechPassions = [
    {
      title: "High-Stakes Environment",
      description: "Every millisecond matters when processing financial transactions. The pressure creates an environment where precision and reliability aren\'t just nice-to-haves—they\'re absolute necessities.",
      icon: "Zap",
      stats: "99.99% uptime requirement",
      impact: "Downtime costs can exceed $100K per minute"
    },
    {
      title: "Regulatory Complexity",
      description: "Financial systems must comply with multiple regulatory frameworks simultaneously. This creates fascinating technical challenges around data sovereignty, audit trails, and security.",
      icon: "Shield",
      stats: "15+ compliance standards",
      impact: "PCI DSS, SOX, GDPR, and more"
    },
    {
      title: "Scale & Performance",
      description: "Processing millions of transactions daily while maintaining sub-second response times requires innovative architectural solutions and constant optimization.",
      icon: "TrendingUp",
      stats: "1M+ daily transactions",
      impact: "Sub-100ms response time targets"
    },
    {
      title: "Trust & Security",
      description: "People trust us with their financial lives. This responsibility drives me to build systems that are not just functional, but fundamentally secure and trustworthy.",
      icon: "Lock",
      stats: "Zero tolerance for data breaches",
      impact: "Protecting millions in assets"
    }
  ];

  const regulatoryExperience = [
    {
      standard: "PCI DSS",
      description: "Payment Card Industry Data Security Standard",
      experience: "Implemented tokenization and encryption systems ensuring Level 1 compliance"
    },
    {
      standard: "SOX",
      description: "Sarbanes-Oxley Act",
      experience: "Built audit trail systems with immutable logging and change management"
    },
    {
      standard: "GDPR",
      description: "General Data Protection Regulation",
      experience: "Designed data anonymization and right-to-be-forgotten mechanisms"
    },
    {
      standard: "ISO 27001",
      description: "Information Security Management",
      experience: "Established security controls and risk management frameworks"
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-responsive-lg font-heading font-bold text-primary mb-4">
            Why Fintech Captivates Me
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            The intersection of technology and finance creates a unique environment where system reliability directly impacts financial trust and people's lives.
          </p>
        </div>

        {/* Passion Points */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {fintechPassions.map((passion, index) => (
            <div key={index} className="bg-card p-8 rounded-technical shadow-elevation hover-lift">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-accent/10 rounded-technical flex items-center justify-center flex-shrink-0">
                  <Icon name={passion.icon} size={28} className="text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                    {passion.title}
                  </h3>
                  <p className="text-text-secondary mb-4 leading-relaxed">
                    {passion.description}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-accent/5 p-4 rounded-technical">
                    <div>
                      <div className="text-lg font-bold text-accent">{passion.stats}</div>
                      <div className="text-sm text-text-muted">{passion.impact}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Regulatory Expertise */}
        <div className="bg-card p-8 rounded-technical shadow-elevation">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">
              Regulatory Compliance Expertise
            </h3>
            <p className="text-text-secondary">
              Deep understanding of financial regulations and their technical implementation requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {regulatoryExperience.map((reg, index) => (
              <div key={index} className="bg-surface p-6 rounded-technical border-l-4 border-accent">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-technical flex items-center justify-center">
                    <Icon name="FileCheck" size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-primary">{reg.standard}</h4>
                    <p className="text-sm text-text-muted">{reg.description}</p>
                  </div>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {reg.experience}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Statement */}
        <div className="mt-16 text-center">
          <div className="bg-command-gradient p-12 rounded-technical">
            <Icon name="Heart" size={48} className="text-accent mx-auto mb-6" />
            <h3 className="text-2xl font-heading font-bold text-white mb-4">
              The Human Impact
            </h3>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              "What drives me most about fintech is knowing that the systems I build directly impact people's financial well-being. When I optimize a payment system, I'm not just improving performance metrics—I'm ensuring that a small business owner gets paid on time, that a family can transfer money to loved ones instantly, and that financial services remain accessible and reliable for everyone."
            </p>
            <div className="flex items-center justify-center space-x-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">$50M+</div>
                <div className="text-gray-400 text-sm">Daily Transaction Volume</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">99.99%</div>
                <div className="text-gray-400 text-sm">System Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">100K+</div>
                <div className="text-gray-400 text-sm">Users Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyFintech;