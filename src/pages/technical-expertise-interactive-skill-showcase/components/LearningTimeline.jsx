import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LearningTimeline = () => {
  const [selectedYear, setSelectedYear] = useState('2024');

  const timelineData = {
    '2024': [
      {
        id: 1,
        month: 'July',
        title: 'Advanced Kubernetes Security',
        provider: 'Cloud Native Computing Foundation',
        type: 'Certification',
        status: 'In Progress',
        description: 'Deep dive into K8s security best practices, RBAC, network policies, and compliance frameworks for fintech environments.',
        skills: ['Kubernetes Security', 'RBAC', 'Network Policies', 'Compliance'],
        icon: 'Shield',
        color: 'bg-system-warning'
      },
      {
        id: 2,
        month: 'June',
        title: 'Microservices Architecture Patterns',
        provider: 'O\'Reilly Learning',
        type: 'Course',
        status: 'Completed',
        description: 'Comprehensive study of microservices patterns, event-driven architecture, and distributed system design for financial applications.',
        skills: ['Microservices', 'Event Sourcing', 'CQRS', 'Distributed Systems'],
        icon: 'Network',
        color: 'bg-system-healthy'
      },
      {
        id: 3,
        month: 'May',
        title: 'AWS Solutions Architect Professional',
        provider: 'Amazon Web Services',
        type: 'Certification',
        status: 'Completed',
        description: 'Advanced AWS certification focusing on complex architectures, cost optimization, and enterprise-scale deployments.',
        skills: ['AWS Architecture', 'Cost Optimization', 'Enterprise Scale', 'Multi-Region'],
        icon: 'Award',
        color: 'bg-system-healthy'
      },
      {
        id: 4,
        month: 'April',
        title: 'Financial Systems Integration',
        provider: 'Fintech Institute',
        type: 'Specialization',
        status: 'Completed',
        description: 'Specialized training in payment processing systems, regulatory compliance, and real-time transaction monitoring.',
        skills: ['Payment Processing', 'Compliance', 'Real-time Monitoring', 'Risk Management'],
        icon: 'CreditCard',
        color: 'bg-system-healthy'
      }
    ],
    '2023': [
      {
        id: 5,
        month: 'December',
        title: 'Docker Certified Associate',
        provider: 'Docker Inc.',
        type: 'Certification',
        status: 'Completed',
        description: 'Comprehensive Docker certification covering containerization, orchestration, and production deployment strategies.',
        skills: ['Docker', 'Containerization', 'Docker Swarm', 'Production Deployment'],
        icon: 'Package',
        color: 'bg-system-healthy'
      },
      {
        id: 6,
        month: 'October',
        title: 'Site Reliability Engineering',
        provider: 'Google Cloud',
        type: 'Course',
        status: 'Completed',
        description: 'Google\'s SRE practices, monitoring, alerting, and incident response for high-availability systems.',
        skills: ['SRE', 'Monitoring', 'Alerting', 'Incident Response'],
        icon: 'Activity',
        color: 'bg-system-healthy'
      },
      {
        id: 7,
        month: 'August',
        title: 'Advanced System Design',
        provider: 'System Design Interview',
        type: 'Course',
        status: 'Completed',
        description: 'In-depth system design principles for large-scale distributed systems, focusing on fintech use cases.',
        skills: ['System Design', 'Scalability', 'Load Balancing', 'Database Design'],
        icon: 'Cpu',
        color: 'bg-system-healthy'
      }
    ],
    '2022': [
      {
        id: 8,
        month: 'November',
        title: 'Certified Kubernetes Administrator',
        provider: 'Cloud Native Computing Foundation',
        type: 'Certification',
        status: 'Completed',
        description: 'Hands-on Kubernetes administration certification covering cluster management, networking, and troubleshooting.',
        skills: ['Kubernetes', 'Cluster Management', 'Networking', 'Troubleshooting'],
        icon: 'Server',
        color: 'bg-system-healthy'
      },
      {
        id: 9,
        month: 'September',
        title: 'DevOps Foundation',
        provider: 'DevOps Institute',
        type: 'Certification',
        status: 'Completed',
        description: 'Foundational DevOps principles, CI/CD pipelines, and automation strategies for enterprise environments.',
        skills: ['DevOps', 'CI/CD', 'Automation', 'Pipeline Design'],
        icon: 'GitBranch',
        color: 'bg-system-healthy'
      }
    ]
  };

  const years = Object.keys(timelineData).sort((a, b) => b - a);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Completed': return 'CheckCircle';
      case 'In Progress': return 'Clock';
      default: return 'Circle';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'text-system-healthy';
      case 'In Progress': return 'text-system-warning';
      default: return 'text-text-secondary';
    }
  };

  return (
    <div className="bg-card rounded-technical border border-border shadow-elevation">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-heading font-bold text-primary">
              Continuous Learning Journey
            </h3>
            <p className="text-text-secondary mt-1">
              Tracking my professional development and skill advancement
            </p>
          </div>
          <div className="flex items-center space-x-2">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-4 py-2 rounded-technical text-sm font-medium transition-all duration-200 ${
                  selectedYear === year
                    ? 'bg-accent text-white' :'bg-surface text-text-secondary hover:bg-muted'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-8">
            {timelineData[selectedYear].map((item, index) => (
              <div key={item.id} className="relative flex items-start space-x-6">
                {/* Timeline Dot */}
                <div className={`relative z-10 w-16 h-16 ${item.color} rounded-technical flex items-center justify-center shadow-command`}>
                  <Icon name={item.icon} size={24} color="white" strokeWidth={2} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="bg-surface rounded-technical p-6 hover:shadow-elevation transition-shadow duration-200">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center space-x-3 mb-1">
                          <h4 className="text-lg font-heading font-bold text-primary">
                            {item.title}
                          </h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            item.type === 'Certification' ? 'bg-accent/10 text-accent' :
                            item.type === 'Course'? 'bg-system-info/10 text-system-info' : 'bg-system-warning/10 text-system-warning'
                          }`}>
                            {item.type}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-text-secondary">
                          <span className="font-medium">{item.provider}</span>
                          <span>•</span>
                          <span>{item.month} {selectedYear}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon 
                          name={getStatusIcon(item.status)} 
                          size={16} 
                          className={getStatusColor(item.status)}
                        />
                        <span className={`text-sm font-medium ${getStatusColor(item.status)}`}>
                          {item.status}
                        </span>
                      </div>
                    </div>

                    <p className="text-text-secondary mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-primary/5 text-primary text-sm rounded-full font-medium border border-primary/10"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">
                  {timelineData[selectedYear].length}
                </div>
                <div className="text-sm text-text-secondary">
                  Achievements
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-system-healthy">
                  {timelineData[selectedYear].filter(item => item.status === 'Completed').length}
                </div>
                <div className="text-sm text-text-secondary">
                  Completed
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-system-warning">
                  {timelineData[selectedYear].filter(item => item.status === 'In Progress').length}
                </div>
                <div className="text-sm text-text-secondary">
                  In Progress
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              iconName="ExternalLink"
              iconPosition="right"
              onClick={() => window.open('https://linkedin.com/in/sojib-hossain', '_blank')}
            >
              View All Certifications
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningTimeline;