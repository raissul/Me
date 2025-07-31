import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredTech, setHoveredTech] = useState(null);

  const categories = ['All', 'Cloud & Infrastructure', 'Containers & Orchestration', 'Monitoring & Observability', 'Fintech Specialized', 'Development & CI/CD'];

  const technologies = [
    // Cloud & Infrastructure
    {
      name: 'Amazon Web Services',
      category: 'Cloud & Infrastructure',
      logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=100&fit=crop&crop=center',
      proficiency: 95,
      yearsUsed: '5+ years',
      description: 'Expert in EC2, ECS, EKS, RDS, Lambda, CloudFormation, and multi-region architectures for fintech applications.',
      keyServices: ['EC2', 'EKS', 'RDS', 'Lambda', 'CloudFormation', 'VPC', 'IAM', 'CloudWatch'],
      recentProjects: 'Payment processing infrastructure, Real-time fraud detection system'
    },
    {
      name: 'Microsoft Azure',
      category: 'Cloud & Infrastructure',
      logo: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop&crop=center',
      proficiency: 88,
      yearsUsed: '4+ years',
      description: 'Proficient in Azure Kubernetes Service, Azure DevOps, and hybrid cloud solutions for enterprise fintech.',
      keyServices: ['AKS', 'Azure DevOps', 'Azure Functions', 'Cosmos DB', 'Application Gateway'],
      recentProjects: 'Multi-tenant banking platform, Compliance monitoring system'
    },
    {
      name: 'Google Cloud Platform',
      category: 'Cloud & Infrastructure',
      logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop&crop=center',
      proficiency: 82,
      yearsUsed: '3+ years',
      description: 'Experience with GKE, Cloud Run, BigQuery, and Pub/Sub for data-intensive financial applications.',
      keyServices: ['GKE', 'Cloud Run', 'BigQuery', 'Pub/Sub', 'Cloud Functions'],
      recentProjects: 'Real-time analytics platform, Trading data pipeline'
    },

    // Containers & Orchestration
    {
      name: 'Docker',
      category: 'Containers & Orchestration',
      logo: 'https://images.unsplash.com/photo-1605745341112-85968b19335a?w=100&h=100&fit=crop&crop=center',
      proficiency: 98,
      yearsUsed: '6+ years',
      description: 'Docker Certified Associate with expertise in multi-stage builds, security scanning, and production optimization.',
      keyServices: ['Multi-stage builds', 'Docker Compose', 'Security scanning', 'Registry management'],
      recentProjects: 'Microservices containerization, CI/CD pipeline optimization'
    },
    {
      name: 'Kubernetes',
      category: 'Containers & Orchestration',
      logo: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=100&h=100&fit=crop&crop=center',
      proficiency: 94,
      yearsUsed: '4+ years',
      description: 'Certified Kubernetes Administrator specializing in production deployments, security, and troubleshooting.',
      keyServices: ['Cluster management', 'RBAC', 'Network policies', 'Helm charts', 'Operators'],
      recentProjects: 'High-frequency trading platform, Payment processing cluster'
    },
    {
      name: 'Helm',
      category: 'Containers & Orchestration',
      logo: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=100&h=100&fit=crop&crop=center',
      proficiency: 90,
      yearsUsed: '3+ years',
      description: 'Advanced Helm chart development for complex fintech applications with environment-specific configurations.',
      keyServices: ['Chart development', 'Templating', 'Release management', 'Repository management'],
      recentProjects: 'Multi-environment deployment automation, Application lifecycle management'
    },

    // Monitoring & Observability
    {
      name: 'Prometheus',
      category: 'Monitoring & Observability',
      logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop&crop=center',
      proficiency: 92,
      yearsUsed: '4+ years',
      description: 'Expert in metrics collection, alerting rules, and custom exporters for financial system monitoring.',
      keyServices: ['Metrics collection', 'Alerting rules', 'Custom exporters', 'PromQL queries'],
      recentProjects: 'Trading system monitoring, SLA compliance tracking'
    },
    {
      name: 'Grafana',
      category: 'Monitoring & Observability',
      logo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop&crop=center',
      proficiency: 89,
      yearsUsed: '4+ years',
      description: 'Advanced dashboard creation, alerting, and data visualization for real-time financial system monitoring.',
      keyServices: ['Dashboard design', 'Alerting', 'Data visualization', 'Plugin development'],
      recentProjects: 'Executive dashboards, Real-time trading monitors'
    },
    {
      name: 'ELK Stack',
      category: 'Monitoring & Observability',
      logo: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=100&h=100&fit=crop&crop=center',
      proficiency: 87,
      yearsUsed: '5+ years',
      description: 'Elasticsearch, Logstash, and Kibana for log aggregation, analysis, and compliance reporting.',
      keyServices: ['Log aggregation', 'Search optimization', 'Compliance reporting', 'Data pipelines'],
      recentProjects: 'Audit log system, Fraud detection analytics'
    },

    // Fintech Specialized
    {
      name: 'Apache Kafka',
      category: 'Fintech Specialized',
      logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&h=100&fit=crop&crop=center',
      proficiency: 91,
      yearsUsed: '4+ years',
      description: 'Event streaming platform expertise for real-time payment processing and financial data pipelines.',
      keyServices: ['Event streaming', 'Topic management', 'Consumer groups', 'Schema registry'],
      recentProjects: 'Payment event processing, Real-time risk assessment'
    },
    {
      name: 'Redis',
      category: 'Fintech Specialized',
      logo: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=100&h=100&fit=crop&crop=center',
      proficiency: 88,
      yearsUsed: '5+ years',
      description: 'High-performance caching and session management for low-latency financial applications.',
      keyServices: ['Caching strategies', 'Session management', 'Pub/Sub', 'Clustering'],
      recentProjects: 'Trading cache optimization, Session management system'
    },
    {
      name: 'PostgreSQL',
      category: 'Fintech Specialized',
      logo: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=100&h=100&fit=crop&crop=center',
      proficiency: 93,
      yearsUsed: '6+ years',
      description: 'Advanced PostgreSQL optimization, replication, and security for financial data management.',
      keyServices: ['Query optimization', 'Replication', 'Security', 'Backup strategies'],
      recentProjects: 'Transaction database optimization, Data archival system'
    },

    // Development & CI/CD
    {
      name: 'Jenkins',
      category: 'Development & CI/CD',
      logo: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=100&h=100&fit=crop&crop=center',
      proficiency: 90,
      yearsUsed: '5+ years',
      description: 'Advanced pipeline development, plugin customization, and distributed builds for fintech applications.',
      keyServices: ['Pipeline development', 'Plugin customization', 'Distributed builds', 'Security integration'],
      recentProjects: 'Automated deployment pipelines, Security scanning integration'
    },
    {
      name: 'GitLab CI/CD',
      category: 'Development & CI/CD',
      logo: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=100&h=100&fit=crop&crop=center',
      proficiency: 86,
      yearsUsed: '3+ years',
      description: 'GitLab CI/CD pipeline optimization, security scanning, and compliance automation.',
      keyServices: ['Pipeline optimization', 'Security scanning', 'Compliance automation', 'Container registry'],
      recentProjects: 'DevSecOps implementation, Compliance pipeline automation'
    },
    {
      name: 'Terraform',
      category: 'Development & CI/CD',
      logo: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=100&h=100&fit=crop&crop=center',
      proficiency: 89,
      yearsUsed: '4+ years',
      description: 'Infrastructure as Code expertise with modules, state management, and multi-cloud deployments.',
      keyServices: ['IaC development', 'Module creation', 'State management', 'Multi-cloud deployment'],
      recentProjects: 'Multi-region infrastructure, Disaster recovery automation'
    }
  ];

  const filteredTechnologies = selectedCategory === 'All' 
    ? technologies 
    : technologies.filter(tech => tech.category === selectedCategory);

  const getProficiencyColor = (proficiency) => {
    if (proficiency >= 95) return 'text-system-healthy';
    if (proficiency >= 90) return 'text-accent';
    if (proficiency >= 80) return 'text-system-warning';
    return 'text-text-secondary';
  };

  const getProficiencyBg = (proficiency) => {
    if (proficiency >= 95) return 'bg-system-healthy';
    if (proficiency >= 90) return 'bg-accent';
    if (proficiency >= 80) return 'bg-system-warning';
    return 'bg-muted';
  };

  return (
    <div className="bg-card rounded-technical border border-border shadow-elevation">
      <div className="p-6 border-b border-border">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div>
            <h3 className="text-2xl font-heading font-bold text-primary">
              Technology Stack & Tools
            </h3>
            <p className="text-text-secondary mt-1">
              Production-tested technologies powering fintech solutions
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-technical text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-accent text-white shadow-command'
                    : 'bg-surface text-text-secondary hover:bg-muted hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTechnologies.map((tech, index) => (
            <div
              key={index}
              className="group relative bg-surface rounded-technical p-6 hover:shadow-elevation transition-all duration-300 cursor-pointer border border-transparent hover:border-accent/20"
              onMouseEnter={() => setHoveredTech(index)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 rounded-technical overflow-hidden bg-white shadow-sm flex-shrink-0">
                  <Image
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h4 className="font-heading font-bold text-primary text-lg mb-1 truncate">
                    {tech.name}
                  </h4>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className={`text-2xl font-bold ${getProficiencyColor(tech.proficiency)}`}>
                      {tech.proficiency}%
                    </span>
                    <span className="text-sm text-text-secondary">
                      • {tech.yearsUsed}
                    </span>
                  </div>
                  
                  <div className="w-full bg-muted rounded-full h-2 mb-3">
                    <div 
                      className={`h-2 rounded-full ${getProficiencyBg(tech.proficiency)} transition-all duration-1000 ease-out`}
                      style={{ width: `${tech.proficiency}%` }}
                    />
                  </div>
                  
                  <span className="inline-block px-2 py-1 bg-primary/5 text-primary text-xs rounded-full font-medium">
                    {tech.category}
                  </span>
                </div>
              </div>

              {hoveredTech === index && (
                <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-card rounded-technical border border-border shadow-modal z-20">
                  <div className="space-y-3">
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {tech.description}
                    </p>
                    
                    <div>
                      <h5 className="font-medium text-primary mb-2 text-sm">Key Services & Features:</h5>
                      <div className="flex flex-wrap gap-1">
                        {tech.keyServices.map((service, serviceIndex) => (
                          <span 
                            key={serviceIndex}
                            className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full font-mono"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-primary mb-1 text-sm">Recent Projects:</h5>
                      <p className="text-xs text-text-secondary">
                        {tech.recentProjects}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredTechnologies.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Search" size={48} className="text-text-secondary mx-auto mb-4" />
            <h4 className="text-lg font-medium text-primary mb-2">
              No technologies found
            </h4>
            <p className="text-text-secondary">
              Try selecting a different category to explore more technologies.
            </p>
          </div>
        )}

        <div className="mt-8 pt-6 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-accent mb-1">
                {technologies.length}
              </div>
              <div className="text-sm text-text-secondary">
                Technologies Mastered
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-system-healthy mb-1">
                {technologies.filter(t => t.proficiency >= 90).length}
              </div>
              <div className="text-sm text-text-secondary">
                Expert Level (90%+)
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-system-warning mb-1">
                {Math.round(technologies.reduce((sum, t) => sum + parseInt(t.yearsUsed), 0) / technologies.length)}+
              </div>
              <div className="text-sm text-text-secondary">
                Avg Years Experience
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">
                {categories.length - 1}
              </div>
              <div className="text-sm text-text-secondary">
                Specialized Categories
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;