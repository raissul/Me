import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import SkillCategory from './components/SkillCategory';
import LearningTimeline from './components/LearningTimeline';
import TechStack from './components/TechStack';
import CodeShowcase from './components/CodeShowcase';

const TechnicalExpertiseShowcase = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Auto-expand first category after page load
    setTimeout(() => {
      setExpandedCategory(0);
    }, 1000);
  }, []);

  const skillCategories = [
    {
      id: 0,
      title: 'System Architecture & Design',
      icon: 'Cpu',
      bgColor: 'bg-command-gradient',
      yearsExperience: '6+',
      proficiencyScore: 95,
      description: `Expert in designing scalable, fault-tolerant systems for high-frequency trading and payment processing environments. Specializing in microservices architecture, event-driven design, and distributed system patterns that ensure 99.99% uptime in mission-critical financial applications.`,
      skills: [
        {
          name: 'Microservices Architecture',
          level: 'Expert',
          experience: '5+ years',
          applications: [
            'Designed payment processing system handling 50K+ TPS',
            'Built trading platform with sub-millisecond latency',
            'Implemented event-driven architecture for real-time risk assessment'
          ],
          tools: ['Spring Boot', 'Node.js', 'gRPC', 'Apache Kafka', 'Redis']
        },
        {
          name: 'Distributed Systems',
          level: 'Expert',
          experience: '6+ years',
          applications: [
            'Multi-region deployment with automatic failover',
            'Consensus algorithms for transaction consistency',
            'Distributed caching for high-frequency trading data'
          ],
          tools: ['Consul', 'etcd', 'Apache Zookeeper', 'Hazelcast']
        },
        {
          name: 'Event-Driven Architecture',
          level: 'Advanced',
          experience: '4+ years',
          applications: [
            'Real-time fraud detection system',
            'Order matching engine with event sourcing',
            'Audit trail system for regulatory compliance'
          ],
          tools: ['Apache Kafka', 'RabbitMQ', 'AWS EventBridge', 'NATS']
        },
        {
          name: 'API Design & Management',
          level: 'Expert',
          experience: '6+ years',
          applications: [
            'RESTful APIs for banking operations',
            'GraphQL implementation for trading dashboards',
            'gRPC services for high-performance communication'
          ],
          tools: ['OpenAPI', 'GraphQL', 'gRPC', 'Kong', 'AWS API Gateway']
        }
      ],
      codeExample: `// Event-driven payment processing architecture
@Service
@Transactional
public class PaymentProcessor {
    
    @EventListener
    @Async
    public void handlePaymentRequest(PaymentRequestEvent event) {
        try {
            // Validate payment request
            ValidationResult validation = paymentValidator
                .validate(event.getPaymentRequest());
            
            if (!validation.isValid()) {
                publishEvent(new PaymentRejectedEvent(
                    event.getPaymentId(), 
                    validation.getErrors()
                ));
                return;
            }
            
            // Process payment with distributed lock
            String lockKey = "payment:" + event.getPaymentId();
            try (DistributedLock lock = lockManager.acquire(lockKey)) {
                
                PaymentResult result = processPayment(
                    event.getPaymentRequest()
                );
                
                // Publish success event
                publishEvent(new PaymentProcessedEvent(
                    event.getPaymentId(),
                    result.getTransactionId(),
                    result.getAmount()
                ));
                
            } catch (LockAcquisitionException e) {
                // Handle concurrent processing
                publishEvent(new PaymentRetryEvent(event));
            }
            
        } catch (Exception e) {
            // Publish failure event for compensation
            publishEvent(new PaymentFailedEvent(
                event.getPaymentId(), 
                e.getMessage()
            ));
        }
    }
}`,
      lastUpdated: 'July 2024',
      relatedProjects: true
    },
    {
      id: 1,
      title: 'DevOps & Containerization',
      icon: 'Package',
      bgColor: 'bg-accent-gradient',
      yearsExperience: '5+',
      proficiencyScore: 92,
      description: `Docker Certified Associate and Kubernetes Administrator with extensive experience in container orchestration, CI/CD pipeline automation, and infrastructure as code. Proven track record of reducing deployment times by 80% and achieving zero-downtime deployments for financial services.`,
      skills: [
        {
          name: 'Docker & Containerization',
          level: 'Expert',
          experience: '5+ years',
          applications: [
            'Multi-stage builds reducing image size by 70%',
            'Security scanning and vulnerability management',
            'Container orchestration for trading systems'
          ],
          tools: ['Docker', 'Podman', 'Buildah', 'Harbor', 'Trivy']
        },
        {
          name: 'Kubernetes Orchestration',
          level: 'Expert',
          experience: '4+ years',
          applications: [
            'Production K8s clusters with 99.99% uptime',
            'Auto-scaling for payment processing workloads',
            'Service mesh implementation for secure communication'
          ],
          tools: ['Kubernetes', 'Helm', 'Istio', 'Prometheus', 'Grafana']
        },
        {
          name: 'CI/CD Pipeline Automation',
          level: 'Advanced',
          experience: '5+ years',
          applications: [
            'GitOps workflows with automated testing',
            'Blue-green deployments for zero downtime',
            'Automated security scanning and compliance checks'
          ],
          tools: ['Jenkins', 'GitLab CI', 'ArgoCD', 'Tekton', 'Spinnaker']
        },
        {
          name: 'Infrastructure as Code',
          level: 'Advanced',
          experience: '4+ years',
          applications: [
            'Multi-cloud infrastructure provisioning',
            'Disaster recovery automation',
            'Compliance-ready infrastructure templates'
          ],
          tools: ['Terraform', 'Ansible', 'Pulumi', 'CloudFormation']
        }
      ],
      codeExample: `# Kubernetes deployment with advanced configuration
apiVersion: apps/v1
kind: Deployment
metadata:
  name: trading-engine
  labels:
    app: trading-engine
    version: v2.1.0
spec:
  replicas: 5
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 2
      maxUnavailable: 1
  selector:
    matchLabels:
      app: trading-engine
  template:
    spec:
      containers:
      - name: trading-engine
        image: fintech/trading-engine:v2.1.0
        resources:
          requests:
            memory: "1Gi" cpu:"500m"
          limits:
            memory: "2Gi" cpu:"1000m"
        livenessProbe:
          httpGet:
            path: /health
            port: 8080
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /ready
            port: 8080
          initialDelaySeconds: 5
          periodSeconds: 5`,
      lastUpdated: 'June 2024',
      relatedProjects: true
    },
    {
      id: 2,
      title: 'Fintech Infrastructure',
      icon: 'CreditCard',
      bgColor: 'bg-cta-gradient',
      yearsExperience: '4+',
      proficiencyScore: 89,
      description: `Specialized expertise in financial technology infrastructure including payment processing systems, regulatory compliance automation, and real-time risk management. Deep understanding of PCI DSS, SOX compliance, and financial data security requirements.`,
      skills: [
        {
          name: 'Payment Processing Systems',
          level: 'Expert',
          experience: '4+ years',
          applications: [
            'High-frequency payment processing (50K+ TPS)',
            'Multi-currency transaction handling',
            'Real-time fraud detection and prevention'
          ],
          tools: ['Stripe Connect', 'PayPal APIs', 'Plaid', 'Dwolla', 'ACH Networks']
        },
        {
          name: 'Regulatory Compliance',
          level: 'Advanced',
          experience: '3+ years',
          applications: [
            'PCI DSS Level 1 compliance implementation',
            'SOX audit trail automation',
            'GDPR data protection measures'
          ],
          tools: ['Vault', 'AWS KMS', 'HashiCorp Boundary', 'Splunk']
        },
        {
          name: 'Real-time Risk Management',
          level: 'Advanced',
          experience: '3+ years',
          applications: [
            'ML-based fraud detection systems',
            'Real-time transaction monitoring',
            'Automated risk scoring algorithms'
          ],
          tools: ['Apache Kafka', 'Redis', 'TensorFlow', 'Apache Spark']
        },
        {
          name: 'Financial Data Security',
          level: 'Expert',
          experience: '4+ years',
          applications: [
            'End-to-end encryption for sensitive data',
            'Tokenization of payment information',
            'Secure key management and rotation'
          ],
          tools: ['HashiCorp Vault', 'AWS KMS', 'Azure Key Vault', 'CyberArk']
        }
      ],
      codeExample: `// Real-time fraud detection pipeline
@Component
public class FraudDetectionEngine {
    
    @KafkaListener(topics = "payment-events")
    public void processPaymentEvent(PaymentEvent event) {
        
        // Real-time risk scoring
        RiskScore riskScore = calculateRiskScore(event);
        
        if (riskScore.getScore() > FRAUD_THRESHOLD) {
            // Immediate transaction hold
            paymentService.holdTransaction(
                event.getTransactionId()
            );
            
            // Alert fraud team
            alertService.sendFraudAlert(
                event, riskScore
            );
            
            // Log for compliance
            auditService.logFraudDetection(
                event, riskScore
            );
        }
        
        // Update ML model with new data point
        mlModelService.updateModel(event, riskScore);
    }
    
    private RiskScore calculateRiskScore(PaymentEvent event) {
        return RiskScore.builder()
            .velocityScore(velocityAnalyzer.analyze(event))
            .geolocationScore(geoAnalyzer.analyze(event))
            .behaviorScore(behaviorAnalyzer.analyze(event))
            .deviceScore(deviceAnalyzer.analyze(event))
            .build();
    }
}`,
      lastUpdated: 'July 2024',
      relatedProjects: true
    },
    {
      id: 3,
      title: 'Debugging & Optimization',
      icon: 'Search',
      bgColor: 'bg-system-healthy',
      yearsExperience: '6+',
      proficiencyScore: 96,
      description: `Master-level debugging skills with expertise in performance optimization, memory leak detection, and distributed system troubleshooting. Proven ability to resolve critical production issues under pressure, including a 99.9% reduction in system downtime through proactive monitoring and rapid incident response.`,
      skills: [
        {
          name: 'Performance Optimization',
          level: 'Expert',
          experience: '6+ years',
          applications: [
            'Reduced API response time from 2s to 50ms',
            'Optimized database queries for 10x performance gain',
            'Memory usage optimization reducing costs by 40%'
          ],
          tools: ['JProfiler', 'New Relic', 'DataDog', 'AppDynamics', 'Grafana']
        },
        {
          name: 'Distributed System Debugging',
          level: 'Expert',
          experience: '5+ years',
          applications: [
            'Root cause analysis of cascade failures',
            'Distributed tracing for microservices',
            'Network partition and split-brain resolution'
          ],
          tools: ['Jaeger', 'Zipkin', 'OpenTelemetry', 'Wireshark', 'tcpdump']
        },
        {
          name: 'Memory & Resource Analysis',
          level: 'Advanced',
          experience: '6+ years',
          applications: [
            'JVM heap dump analysis and optimization',
            'Container resource optimization',
            'Memory leak detection and resolution'
          ],
          tools: ['Eclipse MAT', 'JVisualVM', 'Valgrind', 'pprof', 'heaptrack']
        },
        {
          name: 'Production Incident Response',
          level: 'Expert',
          experience: '6+ years',
          applications: [
            'Mean Time to Resolution (MTTR) under 15 minutes',
            'Post-incident analysis and prevention',
            'Chaos engineering and resilience testing'
          ],
          tools: ['PagerDuty', 'Opsgenie', 'Chaos Monkey', 'Gremlin', 'Litmus']
        }
      ],
      codeExample: `// Advanced debugging and monitoring setup
@Component
@Slf4j
public class PerformanceMonitor {
    
    private final MeterRegistry meterRegistry;
    private final Timer.Sample sample;
    
    @EventListener
    @Timed(value = "payment.processing.time", 
           description = "Payment processing duration")
    public void monitorPaymentProcessing(PaymentEvent event) {
        
        Timer.Sample sample = Timer.start(meterRegistry);
        
        try {
            // Process payment with detailed metrics
            processPaymentWithMetrics(event);
            
        } catch (Exception e) {
            // Increment error counter
            meterRegistry.counter("payment.errors", 
                "error.type", e.getClass().getSimpleName())
                .increment();
            
            // Log with correlation ID for tracing
            MDC.put("correlationId", event.getCorrelationId());
            log.error("Payment processing failed", e);
            
            throw e;
        } finally {
            sample.stop(Timer.builder("payment.processing.time")
                .register(meterRegistry));
            MDC.clear();
        }
    }
    
    @Scheduled(fixedRate = 30000)
    public void healthCheck() {
        // Custom health metrics
        Gauge.builder("system.health.score")
            .register(meterRegistry, this, 
                PerformanceMonitor::calculateHealthScore);
    }
}`,
      lastUpdated: 'July 2024',
      relatedProjects: true
    }
  ];

  const handleCategoryToggle = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const overallStats = {
    totalTechnologies: 45,
    yearsExperience: 6,
    certifications: 8,
    projectsCompleted: 25
  };

  return (
    <>
      <Helmet>
        <title>Technical Expertise - Interactive Skill Showcase | SojibTech Portfolio</title>
        <meta name="description" content="Explore Sojib Hossain's comprehensive technical expertise in system architecture, DevOps, fintech infrastructure, and debugging. Interactive skill matrix with real-world applications and code examples." />
        <meta name="keywords" content="system architecture, DevOps, Kubernetes, Docker, fintech, payment processing, debugging, performance optimization, microservices" />
        <meta property="og:title" content="Technical Expertise - Interactive Skill Showcase | SojibTech" />
        <meta property="og:description" content="Comprehensive technical expertise showcase featuring system architecture, DevOps mastery, and fintech specialization with interactive skill demonstrations." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/technical-expertise-interactive-skill-showcase" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-command-gradient text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className={`text-center transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Icon name="Code" size={20} />
                <span className="text-sm font-medium">Technical Expertise Showcase</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Mastering the Art of
                <span className="block text-accent typewriter">System Engineering</span>
              </h1>
              
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
                Dive deep into my technical capabilities across system architecture, DevOps mastery, 
                fintech infrastructure, and advanced debugging. Each skill backed by real-world 
                applications in high-stakes financial environments.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Play"
                  iconPosition="left"
                  className="bg-white text-primary hover:bg-white/90 cta-text"
                  onClick={() => document.getElementById('skills-matrix').scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Skills Interactive
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Download"
                  iconPosition="left"
                  className="border-white text-white hover:bg-white hover:text-primary cta-text"
                  onClick={() => window.open('/assets/sojib-hossain-resume.pdf', '_blank')}
                >
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
          
          {/* Floating Tech Icons */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 animate-bounce">
              <Icon name="Server" size={32} className="text-white/20" />
            </div>
            <div className="absolute top-40 right-20 animate-bounce" style={{ animationDelay: '1s' }}>
              <Icon name="Database" size={28} className="text-white/20" />
            </div>
            <div className="absolute bottom-40 left-20 animate-bounce" style={{ animationDelay: '2s' }}>
              <Icon name="Cloud" size={36} className="text-white/20" />
            </div>
            <div className="absolute bottom-20 right-10 animate-bounce" style={{ animationDelay: '0.5s' }}>
              <Icon name="Cpu" size={30} className="text-white/20" />
            </div>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2 count-up">
                  {overallStats.totalTechnologies}+
                </div>
                <div className="text-text-secondary font-medium">
                  Technologies Mastered
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-system-healthy mb-2 count-up">
                  {overallStats.yearsExperience}+
                </div>
                <div className="text-text-secondary font-medium">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-system-warning mb-2 count-up">
                  {overallStats.certifications}
                </div>
                <div className="text-text-secondary font-medium">
                  Professional Certifications
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2 count-up">
                  {overallStats.projectsCompleted}+
                </div>
                <div className="text-text-secondary font-medium">
                  Projects Completed
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Matrix */}
        <section id="skills-matrix" className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
                Interactive Skills Matrix
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Explore my technical expertise across four core domains. Click each category 
                to reveal detailed proficiency levels, real-world applications, and implementation examples.
              </p>
            </div>

            <div className="space-y-6">
              {skillCategories.map((category) => (
                <SkillCategory
                  key={category.id}
                  category={category}
                  isExpanded={expandedCategory === category.id}
                  onToggle={() => handleCategoryToggle(category.id)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <TechStack />
          </div>
        </section>

        {/* Code Showcase */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <CodeShowcase />
          </div>
        </section>

        {/* Learning Timeline */}
        <section className="py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <LearningTimeline />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-command-gradient text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="mb-8">
              <Icon name="Rocket" size={48} className="mx-auto mb-6 text-accent" />
              <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
                Ready to Leverage This Expertise?
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Whether you need system architecture consultation, DevOps optimization, 
                or fintech infrastructure design, let's discuss how my expertise can 
                drive your next breakthrough project.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button
                variant="default"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                className="bg-white text-primary hover:bg-white/90 cta-text"
                onClick={() => window.location.href = '/contact-multi-channel-connection-hub'}
              >
                Schedule Technical Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="FolderOpen"
                iconPosition="left"
                className="border-white text-white hover:bg-white hover:text-primary cta-text"
                onClick={() => window.location.href = '/project-showcase-fintech-case-studies'}
              >
                View Project Case Studies
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-primary text-white py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-3 mb-4 md:mb-0">
                <div className="w-10 h-10 bg-accent rounded-technical flex items-center justify-center">
                  <Icon name="Terminal" size={20} color="white" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold">SojibTech</h3>
                  <p className="text-sm text-white/70">Digital Detective</p>
                </div>
              </div>
              
              <div className="text-center md:text-right">
                <p className="text-white/70 text-sm">
                  © {new Date().getFullYear()} Sojib Hossain. All rights reserved.
                </p>
                <p className="text-white/50 text-xs mt-1">
                  Crafted with precision for the fintech revolution
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default TechnicalExpertiseShowcase;