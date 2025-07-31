import React, { useState } from 'react';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedCaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 'fintech-trading-platform',
      title: 'High-Frequency Trading Platform Optimization',
      client: 'TradeTech Solutions',
      industry: 'Financial Services',
      duration: '8 months',
      challenge: `Legacy trading platform experiencing latency issues during peak market hours, causing significant revenue loss and client dissatisfaction. System was processing 50K transactions/second with average response time of 200ms.`,
      solution: `Implemented microservices architecture with Docker containerization, Redis caching layer, and optimized database queries. Deployed Kubernetes for auto-scaling and load balancing.`,
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop',
      metrics: {
        before: {
          responseTime: '200ms',
          throughput: '50K/sec',
          uptime: '99.2%',
          errorRate: '0.8%'
        },
        after: {
          responseTime: '12ms',
          throughput: '500K/sec',
          uptime: '99.97%',
          errorRate: '0.02%'
        }
      },
      technologies: ['Docker', 'Kubernetes', 'Redis', 'PostgreSQL', 'Node.js', 'Nginx'],
      impact: [
        'Reduced latency by 94%',
        'Increased throughput by 900%',
        'Saved $2.4M annually in downtime costs',
        'Improved client satisfaction by 85%'
      ]
    },
    {
      id: 'payment-gateway-scaling',
      title: 'Payment Gateway Infrastructure Scaling',
      client: 'PayFlow Systems',
      industry: 'Fintech',
      duration: '6 months',
      challenge: `Payment processing system failing under Black Friday traffic loads, with frequent timeouts and transaction failures. System could only handle 10K concurrent users before degradation.`,
      solution: `Designed fault-tolerant architecture with circuit breakers, implemented horizontal scaling with Docker Swarm, and optimized database connection pooling. Added comprehensive monitoring and alerting.`,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      metrics: {
        before: {
          concurrentUsers: '10K',
          successRate: '94.2%',
          avgProcessingTime: '3.5s',
          dailyVolume: '100K'
        },
        after: {
          concurrentUsers: '100K',
          successRate: '99.8%',
          avgProcessingTime: '0.8s',
          dailyVolume: '2.4M'
        }
      },
      technologies: ['Docker Swarm', 'HAProxy', 'MongoDB', 'Redis', 'Python', 'Prometheus'],
      impact: [
        'Handled 10x traffic increase',
        'Improved success rate by 5.6%',
        'Reduced processing time by 77%',
        'Zero downtime during peak events'
      ]
    },
    {
      id: 'regulatory-compliance-system',
      title: 'Regulatory Compliance Automation',
      client: 'ComplianceFirst Bank',
      industry: 'Banking',
      duration: '12 months',
      challenge: `Manual compliance reporting taking 40+ hours weekly, with high error rates and regulatory audit failures. Risk of significant penalties and operational inefficiencies.`,
      solution: `Built automated compliance monitoring system with real-time transaction analysis, automated report generation, and audit trail management. Implemented machine learning for anomaly detection.`,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
      metrics: {
        before: {
          reportingTime: '40 hours/week',
          errorRate: '12%',
          auditScore: '72%',
          manualTasks: '85%'
        },
        after: {
          reportingTime: '2 hours/week',
          errorRate: '0.5%',
          auditScore: '98%',
          manualTasks: '15%'
        }
      },
      technologies: ['Python', 'Apache Kafka', 'Elasticsearch', 'Docker', 'PostgreSQL', 'Grafana'],
      impact: [
        'Reduced reporting time by 95%',
        'Improved accuracy by 96%',
        'Achieved 98% audit compliance',
        'Saved $800K in operational costs'
      ]
    }
  ];

  const currentCase = caseStudies[activeCase];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-accent/10 rounded-technical flex items-center justify-center">
              <Icon name="FolderOpen" size={24} className="text-accent" />
            </div>
            <h2 className="text-responsive-lg font-heading font-bold text-primary">
              Featured Case Studies
            </h2>
          </div>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Real-world fintech challenges solved through precision engineering and innovative system design. 
            Explore detailed case studies with measurable impact and technical insights.
          </p>
        </div>

        {/* Case Study Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {caseStudies.map((study, index) => (
            <button
              key={study.id}
              onClick={() => setActiveCase(index)}
              className={`px-6 py-3 rounded-technical text-sm font-medium transition-all duration-300 ${
                activeCase === index
                  ? 'bg-accent text-white shadow-command'
                  : 'bg-card text-text-secondary hover:bg-surface border border-border'
              }`}
            >
              {study.title.split(' ').slice(0, 3).join(' ')}
            </button>
          ))}
        </div>

        {/* Active Case Study */}
        <div className="bg-card rounded-technical shadow-elevation border border-border overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Column - Image & Overview */}
            <div className="relative">
              <div className="aspect-video lg:aspect-square overflow-hidden">
                <Image
                  src={currentCase.image}
                  alt={currentCase.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-command-gradient/80 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <Icon name="TrendingUp" size={48} className="mx-auto mb-4 text-accent" />
                    <h3 className="text-2xl font-bold mb-2">{currentCase.title}</h3>
                    <div className="flex items-center justify-center space-x-4 text-sm opacity-90">
                      <span className="flex items-center space-x-1">
                        <Icon name="Building" size={16} />
                        <span>{currentCase.client}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Icon name="Clock" size={16} />
                        <span>{currentCase.duration}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="p-8 space-y-8">
              {/* Challenge & Solution */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-3 flex items-center space-x-2">
                    <Icon name="AlertTriangle" size={20} className="text-warning" />
                    <span>Challenge</span>
                  </h4>
                  <p className="text-text-secondary leading-relaxed">{currentCase.challenge}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-primary mb-3 flex items-center space-x-2">
                    <Icon name="Lightbulb" size={20} className="text-accent" />
                    <span>Solution</span>
                  </h4>
                  <p className="text-text-secondary leading-relaxed">{currentCase.solution}</p>
                </div>
              </div>

              {/* Metrics Comparison */}
              <div className="bg-surface rounded-technical p-6">
                <h4 className="text-lg font-semibold text-primary mb-4 flex items-center space-x-2">
                  <Icon name="BarChart3" size={20} className="text-system-healthy" />
                  <span>Performance Impact</span>
                </h4>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-sm font-medium text-text-secondary mb-3 uppercase tracking-wide">Before</h5>
                    <div className="space-y-2">
                      {Object.entries(currentCase.metrics.before).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center">
                          <span className="text-sm text-text-secondary capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </span>
                          <span className="font-mono text-sm text-system-critical">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-medium text-text-secondary mb-3 uppercase tracking-wide">After</h5>
                    <div className="space-y-2">
                      {Object.entries(currentCase.metrics.after).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center">
                          <span className="text-sm text-text-secondary capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </span>
                          <span className="font-mono text-sm text-system-healthy font-semibold">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Technologies Used */}
              <div>
                <h4 className="text-lg font-semibold text-primary mb-3 flex items-center space-x-2">
                  <Icon name="Code" size={20} className="text-accent" />
                  <span>Technologies</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentCase.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Business Impact */}
              <div>
                <h4 className="text-lg font-semibold text-primary mb-3 flex items-center space-x-2">
                  <Icon name="Target" size={20} className="text-system-healthy" />
                  <span>Business Impact</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentCase.impact.map((impact, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="CheckCircle" size={16} className="text-system-healthy flex-shrink-0" />
                      <span className="text-sm text-text-secondary">{impact}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Button
            variant="default"
            size="lg"
            iconName="ExternalLink"
            iconPosition="right"
            className="cta-text"
            onClick={() => window.location.href = '/project-showcase-fintech-case-studies'}
          >
            View All Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudies;