import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Header from '../../components/ui/Header';
import ServiceCard from './components/ServiceCard';
import DiagnosticQuestionnaire from './components/DiagnosticQuestionnaire';
import TestimonialCard from './components/TestimonialCard';
import PricingTable from './components/PricingTable';
import CollaborationProcess from './components/CollaborationProcess';
import FAQSection from './components/FAQSection';
import ConsultationBooking from './components/ConsultationBooking';

const ProfessionalServicesPage = () => {
  const [activeSection, setActiveSection] = useState('services');
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

  // Mock services data
  const services = [
    {
      id: 'architecture-review',
      title: 'System Architecture Review',
      price: '$3,000',
      priceUnit: 'per project',
      duration: '1-2 weeks',
      description: 'Comprehensive analysis of your system architecture with detailed recommendations for scalability, performance, and maintainability improvements.',
      deliverables: [
        'Complete architecture assessment report',
        'Scalability bottleneck identification',
        'Security vulnerability analysis',
        'Technology stack optimization recommendations',
        'Implementation roadmap with priorities'
      ],
      timeline: '1-2 weeks',
      icon: 'Building',
      iconBg: 'bg-system-info'
    },
    {
      id: 'performance-optimization',
      title: 'Performance Optimization',
      price: '$1,500',
      priceUnit: 'per day',
      duration: '3-10 days',
      description: 'Hands-on performance tuning of your systems, databases, and applications to achieve measurable speed and efficiency improvements.',
      deliverables: [
        'Performance baseline analysis',
        'Database query optimization',
        'Code refactoring and optimization',
        'Caching strategy implementation',
        'Monitoring and alerting setup'
      ],
      timeline: '3-10 days',
      icon: 'Zap',
      iconBg: 'bg-system-warning'
    },
    {
      id: 'debugging-troubleshooting',
      title: 'Debugging & Troubleshooting',
      price: '$200',
      priceUnit: 'per hour',
      duration: 'As needed',
      description: 'Expert debugging services for complex technical issues, production incidents, and mysterious system behaviors that need immediate resolution.',
      deliverables: [
        'Root cause analysis report',
        'Issue resolution implementation',
        'Prevention strategy documentation',
        'Team knowledge transfer',
        'Monitoring improvements'
      ],
      timeline: 'Variable',
      icon: 'Bug',
      iconBg: 'bg-system-critical'
    },
    {
      id: 'infrastructure-scaling',
      title: 'Infrastructure Scaling Strategy',
      price: '$4,500',
      priceUnit: 'per project',
      duration: '2-3 weeks',
      description: 'Strategic planning and implementation guidance for scaling your infrastructure to handle growth, traffic spikes, and increased complexity.',
      deliverables: [
        'Current infrastructure audit',
        'Scaling strategy document',
        'Cost optimization analysis',
        'Migration planning and execution',
        'Team training and documentation'
      ],
      timeline: '2-3 weeks',
      icon: 'TrendingUp',
      iconBg: 'bg-system-healthy'
    }
  ];

  // Mock testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'CTO',
      company: 'FinanceFlow Technologies',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      content: `Sojib's system architecture review saved us months of development time and prevented a major scalability crisis. His insights into our payment processing bottlenecks were spot-on, and the implementation roadmap he provided became our technical strategy for the next year.`,
      project: 'Payment System Optimization',date: 'December 2024'
    },
    {
      id: 2,
      name: 'Michael Rodriguez',role: 'VP Engineering',company: 'TradeTech Solutions',avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      content: `Working with Sojib on our high-frequency trading system performance issues was exceptional. He identified and resolved critical latency problems that our team had been struggling with for months. His debugging methodology is systematic and thorough.`,
      project: 'Trading System Performance',date: 'November 2024'
    },
    {
      id: 3,
      name: 'Emily Watson',role: 'Engineering Manager',company: 'CryptoVault Inc.',avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',rating: 5,content: `Sojib's infrastructure scaling strategy helped us handle a 10x increase in user traffic without any downtime. His approach to knowledge transfer ensured our team could maintain and extend the solutions independently. Highly recommended for fintech companies.`,
      project: 'Infrastructure Scaling',
      date: 'October 2024'
    }
  ];

  // Mock case study previews
  const caseStudyPreviews = [
    {
      id: 1,
      title: 'Payment Processing Optimization',
      company: 'Major Fintech Platform',
      challenge: 'Transaction processing delays causing customer complaints',
      solution: 'Database optimization and caching strategy implementation',
      results: '75% reduction in processing time, 99.9% uptime achieved',
      icon: 'CreditCard',
      color: 'bg-system-healthy'
    },
    {
      id: 2,
      title: 'Trading System Debugging',
      company: 'High-Frequency Trading Firm',
      challenge: 'Intermittent system failures during market volatility',
      solution: 'Root cause analysis and system architecture improvements',
      results: 'Zero critical failures in 6 months, 40% performance improvement',
      icon: 'TrendingUp',
      color: 'bg-system-warning'
    },
    {
      id: 3,
      title: 'Infrastructure Migration',
      company: 'Growing Cryptocurrency Exchange',
      challenge: 'Legacy system unable to handle user growth',
      solution: 'Cloud migration with microservices architecture',
      results: '10x capacity increase, 60% cost reduction',
      icon: 'Cloud',
      color: 'bg-system-info'
    }
  ];

  const handleServiceLearnMore = (service) => {
    alert(`Learn more about ${service.title}. This would typically open a detailed service page or modal.`);
  };

  const handleQuestionnaireComplete = (answers) => {
    console.log('Questionnaire answers:', answers);
    setShowQuestionnaire(false);
    alert('Thank you for completing the assessment! Based on your responses, I recommend starting with a System Architecture Review. I\'ll contact you within 24 hours to discuss next steps.');
  };

  const handlePackageSelect = (pkg) => {
    setShowBooking(true);
    setActiveSection('booking');
  };

  const navigationSections = [
    { id: 'services', label: 'Services', icon: 'Briefcase' },
    { id: 'process', label: 'Process', icon: 'GitBranch' },
    { id: 'pricing', label: 'Pricing', icon: 'DollarSign' },
    { id: 'testimonials', label: 'Testimonials', icon: 'MessageSquare' },
    { id: 'faq', label: 'FAQ', icon: 'HelpCircle' },
    { id: 'booking', label: 'Book Consultation', icon: 'Calendar' }
  ];

  return (
    <>
      <Helmet>
        <title>Professional Services - Consulting & Collaboration | SojibTech</title>
        <meta name="description" content="Expert fintech consulting services including system architecture review, performance optimization, debugging, and infrastructure scaling. Transparent pricing and proven methodologies." />
        <meta name="keywords" content="fintech consulting, system architecture, performance optimization, technical consulting, debugging services" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-command-gradient text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Icon name="Shield" size={16} className="text-accent" />
                <span className="text-sm font-medium">Trusted by 50+ Fintech Companies</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Professional <span className="text-accent">Consulting</span>
                <br />& Collaboration Services
              </h1>
              
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                Expert technical consulting for fintech companies facing complex system challenges. 
                Transparent processes, proven methodologies, and measurable results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                  onClick={() => {
                    setActiveSection('booking');
                    setShowBooking(true);
                  }}
                >
                  Schedule Free Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="FileText"
                  iconPosition="left"
                  className="border-white text-white hover:bg-white hover:text-primary"
                  onClick={() => setShowQuestionnaire(true)}
                >
                  Take Technical Assessment
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-accent mb-2">50+</div>
                <div className="text-sm text-gray-200">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-accent mb-2">99.9%</div>
                <div className="text-sm text-gray-200">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-accent mb-2">24hr</div>
                <div className="text-sm text-gray-200">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-accent mb-2">5yr</div>
                <div className="text-sm text-gray-200">Fintech Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="sticky top-16 z-40 bg-card border-b border-border shadow-sm">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center space-x-1 overflow-x-auto py-4">
              {navigationSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-technical text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    activeSection === section.id
                      ? 'bg-accent text-accent-foreground'
                      : 'text-text-secondary hover:text-primary hover:bg-surface'
                  }`}
                >
                  <Icon name={section.icon} size={16} />
                  <span>{section.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          {/* Diagnostic Questionnaire Modal */}
          {showQuestionnaire && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-card rounded-technical shadow-modal max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-4 border-b border-border flex items-center justify-between">
                  <h2 className="text-xl font-heading font-semibold text-primary">
                    Technical Needs Assessment
                  </h2>
                  <button
                    onClick={() => setShowQuestionnaire(false)}
                    className="p-2 hover:bg-surface rounded-technical transition-colors duration-200"
                  >
                    <Icon name="X" size={20} className="text-text-secondary" />
                  </button>
                </div>
                <div className="p-6">
                  <DiagnosticQuestionnaire onComplete={handleQuestionnaireComplete} />
                </div>
              </div>
            </div>
          )}

          {/* Services Section */}
          {activeSection === 'services' && (
            <section className="space-y-12">
              <div className="text-center">
                <h2 className="text-3xl font-heading font-bold text-primary mb-4">
                  Specialized Consulting Services
                </h2>
                <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                  Comprehensive technical services designed specifically for fintech companies 
                  facing complex system challenges and scaling requirements.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {services.map((service) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    onLearnMore={handleServiceLearnMore}
                  />
                ))}
              </div>

              {/* Case Study Previews */}
              <div className="mt-16">
                <h3 className="text-2xl font-heading font-bold text-primary mb-8 text-center">
                  Similar Challenges I've Solved
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {caseStudyPreviews.map((caseStudy) => (
                    <div
                      key={caseStudy.id}
                      className="bg-card rounded-technical border border-border shadow-elevation p-6 hover:shadow-command transition-all duration-300"
                    >
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`w-10 h-10 ${caseStudy.color} rounded-technical flex items-center justify-center`}>
                          <Icon name={caseStudy.icon} size={20} color="white" strokeWidth={2} />
                        </div>
                        <h4 className="font-heading font-semibold text-primary">
                          {caseStudy.title}
                        </h4>
                      </div>
                      <p className="text-sm text-text-secondary mb-2">
                        <strong>Client:</strong> {caseStudy.company}
                      </p>
                      <p className="text-sm text-text-secondary mb-2">
                        <strong>Challenge:</strong> {caseStudy.challenge}
                      </p>
                      <p className="text-sm text-text-secondary mb-2">
                        <strong>Solution:</strong> {caseStudy.solution}
                      </p>
                      <p className="text-sm text-system-healthy font-medium">
                        <strong>Results:</strong> {caseStudy.results}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Collaboration Process Section */}
          {activeSection === 'process' && (
            <CollaborationProcess />
          )}

          {/* Pricing Section */}
          {activeSection === 'pricing' && (
            <section className="space-y-12">
              <div className="text-center">
                <h2 className="text-3xl font-heading font-bold text-primary mb-4">
                  Transparent Pricing Structure
                </h2>
                <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                  Clear, upfront pricing with no hidden fees. Choose the engagement model 
                  that best fits your project needs and budget.
                </p>
              </div>

              <PricingTable onSelectPackage={handlePackageSelect} />

              {/* Additional Pricing Information */}
              <div className="bg-surface rounded-technical p-8">
                <h3 className="text-xl font-heading font-semibold text-primary mb-6 text-center">
                  Engagement Options & Terms
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium text-primary mb-3">Payment Terms</h4>
                    <ul className="space-y-2 text-sm text-text-secondary">
                      <li className="flex items-start space-x-2">
                        <Icon name="CheckCircle" size={14} className="text-system-healthy mt-0.5 flex-shrink-0" />
                        <span>50% deposit required to begin work</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="CheckCircle" size={14} className="text-system-healthy mt-0.5 flex-shrink-0" />
                        <span>Net 15 payment terms for invoices</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="CheckCircle" size={14} className="text-system-healthy mt-0.5 flex-shrink-0" />
                        <span>Multiple payment methods accepted</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="CheckCircle" size={14} className="text-system-healthy mt-0.5 flex-shrink-0" />
                        <span>Volume discounts for long-term engagements</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-3">What's Included</h4>
                    <ul className="space-y-2 text-sm text-text-secondary">
                      <li className="flex items-start space-x-2">
                        <Icon name="CheckCircle" size={14} className="text-system-healthy mt-0.5 flex-shrink-0" />
                        <span>Comprehensive documentation</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="CheckCircle" size={14} className="text-system-healthy mt-0.5 flex-shrink-0" />
                        <span>Knowledge transfer sessions</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="CheckCircle" size={14} className="text-system-healthy mt-0.5 flex-shrink-0" />
                        <span>Post-project support period</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="CheckCircle" size={14} className="text-system-healthy mt-0.5 flex-shrink-0" />
                        <span>Regular progress updates</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Testimonials Section */}
          {activeSection === 'testimonials' && (
            <section className="space-y-12">
              <div className="text-center">
                <h2 className="text-3xl font-heading font-bold text-primary mb-4">
                  Client Success Stories
                </h2>
                <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                  Hear from CTOs and engineering leaders who have worked with me to solve 
                  complex technical challenges and scale their fintech platforms.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {testimonials.map((testimonial) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="bg-card rounded-technical border border-border p-8">
                <h3 className="text-xl font-heading font-semibold text-primary mb-6 text-center">
                  Trusted by Industry Leaders
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <Icon name="Shield" size={32} className="text-accent mx-auto mb-2" />
                    <div className="text-sm font-medium text-primary">SOC 2 Compliant</div>
                  </div>
                  <div>
                    <Icon name="Lock" size={32} className="text-accent mx-auto mb-2" />
                    <div className="text-sm font-medium text-primary">NDA Protected</div>
                  </div>
                  <div>
                    <Icon name="Award" size={32} className="text-accent mx-auto mb-2" />
                    <div className="text-sm font-medium text-primary">Industry Certified</div>
                  </div>
                  <div>
                    <Icon name="Users" size={32} className="text-accent mx-auto mb-2" />
                    <div className="text-sm font-medium text-primary">Team Integration</div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* FAQ Section */}
          {activeSection === 'faq' && (
            <FAQSection />
          )}

          {/* Booking Section */}
          {activeSection === 'booking' && (
            <section className="space-y-12">
              <div className="text-center">
                <h2 className="text-3xl font-heading font-bold text-primary mb-4">
                  Schedule Your Consultation
                </h2>
                <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                  Book a technical consultation to discuss your specific challenges and explore 
                  how we can work together to achieve your goals.
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <ConsultationBooking />
              </div>
            </section>
          )}
        </main>

        {/* CTA Section */}
        <section className="bg-surface py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">
              Ready to Solve Your Technical Challenges?
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Let's discuss how my expertise can help your fintech company overcome complex 
              system challenges and achieve scalable, reliable solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                onClick={() => {
                  setActiveSection('booking');
                  setShowBooking(true);
                }}
              >
                Schedule Free Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Mail"
                iconPosition="left"
                onClick={() => window.location.href = 'mailto:sojib@sojibtech.com'}
              >
                Email Direct: sojib@sojibtech.com
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-primary text-primary-foreground py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-accent rounded-technical flex items-center justify-center">
                    <Icon name="Terminal" size={20} color="white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold">SojibTech</h3>
                    <p className="text-sm text-gray-300">Digital Detective</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 max-w-md">
                  Expert fintech consulting services for system architecture, performance optimization, 
                  and complex technical challenges.
                </p>
                <div className="flex items-center space-x-4">
                  <a href="mailto:sojib@sojibtech.com" className="text-accent hover:text-accent/80">
                    <Icon name="Mail" size={20} />
                  </a>
                  <a href="https://linkedin.com/in/sojibhossain" className="text-accent hover:text-accent/80">
                    <Icon name="Linkedin" size={20} />
                  </a>
                  <a href="https://github.com/sojibhossain" className="text-accent hover:text-accent/80">
                    <Icon name="Github" size={20} />
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="font-heading font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>System Architecture Review</li>
                  <li>Performance Optimization</li>
                  <li>Debugging & Troubleshooting</li>
                  <li>Infrastructure Scaling</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-heading font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>sojib@sojibtech.com</li>
                  <li>Available EST 9AM-6PM</li>
                  <li>24hr Emergency Support</li>
                  <li>Remote & On-site</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
              <p className="text-sm text-gray-300">
                © {new Date().getFullYear()} SojibTech. All rights reserved. | 
                Expert fintech consulting services with proven results.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ProfessionalServicesPage;