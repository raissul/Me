import React from 'react';
import Icon from '../../../components/AppIcon';

const TechnicalPhilosophy = () => {
  const philosophyPrinciples = [
    {
      title: "Root Cause Over Quick Fixes",
      description: "Every problem is a symptom of something deeper. I believe in digging until we find the real cause, not just treating the symptoms.",
      icon: "Search",
      example: "Instead of restarting a failing service, I trace through logs, analyze system metrics, and identify the memory leak causing the crashes."
    },
    {
      title: "Systems Thinking",
      description: "No component exists in isolation. Understanding the interconnections and dependencies is crucial for building resilient architectures.",
      icon: "Network",
      example: "When designing a payment system, I consider not just the transaction flow, but also monitoring, rollback mechanisms, and regulatory compliance."
    },
    {
      title: "Proactive Monitoring",
      description: "The best problems are the ones that never happen. Comprehensive monitoring and alerting prevent issues before they impact users.",
      icon: "Activity",
      example: "I implement predictive alerts that warn of potential disk space issues 48 hours before they become critical, not after they cause downtime."
    },
    {
      title: "Documentation as Code",
      description: "Knowledge that isn't shared is knowledge lost. Every solution should be documented, every process should be repeatable.",
      icon: "FileText",
      example: "My runbooks include not just the \'how\' but the \'why\' - helping future engineers understand the reasoning behind each decision."
    }
  ];

  const debuggingMethodology = [
    {
      step: "1",
      title: "Gather Evidence",
      description: "Collect logs, metrics, and user reports. Never assume - always verify with data."
    },
    {
      step: "2",
      title: "Form Hypotheses",
      description: "Based on evidence, create testable theories about what might be causing the issue."
    },
    {
      step: "3",
      title: "Test Systematically",
      description: "Validate each hypothesis methodically, changing one variable at a time."
    },
    {
      step: "4",
      title: "Document Findings",
      description: "Record what worked, what didn't, and why - creating knowledge for the future."
    }
  ];

  return (
    <section className="py-20 bg-command-gradient">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-responsive-lg font-heading font-bold text-white mb-4">
            Technical Philosophy
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My approach to system engineering is built on fundamental principles that guide every decision, from architecture design to incident response.
          </p>
        </div>

        {/* Core Principles */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {philosophyPrinciples.map((principle, index) => (
            <div key={index} className="bg-card/10 backdrop-blur-sm p-8 rounded-technical border border-white/10">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/20 rounded-technical flex items-center justify-center flex-shrink-0">
                  <Icon name={principle.icon} size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-white mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {principle.description}
                  </p>
                  <div className="bg-accent/5 p-4 rounded-technical border-l-4 border-accent">
                    <p className="text-sm text-gray-400 italic">
                      <strong>Example:</strong> {principle.example}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Debugging Methodology */}
        <div className="bg-card/5 backdrop-blur-sm p-8 rounded-technical border border-white/10">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading font-bold text-white mb-4">
              The Detective's Debugging Method
            </h3>
            <p className="text-gray-300">
              A systematic approach to problem-solving that I've refined over years of complex troubleshooting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {debuggingMethodology.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-card/10 p-6 rounded-technical border border-accent/20 hover-lift">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <h4 className="text-lg font-heading font-semibold text-white mb-3 text-center">
                    {step.title}
                  </h4>
                  <p className="text-gray-300 text-sm text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow for desktop */}
                {index < debuggingMethodology.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <Icon name="ArrowRight" size={20} className="text-accent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="text-center mt-16">
          <blockquote className="text-2xl font-heading text-white italic mb-4">
            "The best system engineers are part detective, part architect, and part storyteller."
          </blockquote>
          <p className="text-gray-400">
            — My personal motto that guides every technical decision
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechnicalPhilosophy;