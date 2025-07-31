import React from 'react';
import Icon from '../../../components/AppIcon';

const CollaborationProcess = () => {
  const processSteps = [
    {
      step: 1,
      title: 'Initial Discovery',
      description: 'Comprehensive understanding of your technical challenges, team structure, and business objectives through detailed consultation.',
      duration: '1-2 days',
      deliverables: [
        'Technical requirements analysis',
        'Team capability assessment',
        'Project scope definition',
        'Timeline and milestone planning'
      ],
      icon: 'Search',
      color: 'bg-system-info'
    },
    {
      step: 2,
      title: 'System Analysis',
      description: 'Deep dive into your existing infrastructure, codebase, and processes to identify optimization opportunities and potential risks.',
      duration: '3-5 days',
      deliverables: [
        'Architecture review document',
        'Performance bottleneck analysis',
        'Security vulnerability assessment',
        'Improvement recommendations'
      ],
      icon: 'Activity',
      color: 'bg-system-warning'
    },
    {
      step: 3,
      title: 'Solution Design',
      description: 'Collaborative development of technical solutions with your team, ensuring alignment with business goals and technical constraints.',
      duration: '2-3 days',
      deliverables: [
        'Technical solution blueprint',
        'Implementation roadmap',
        'Risk mitigation strategies',
        'Resource allocation plan'
      ],
      icon: 'Lightbulb',
      color: 'bg-accent'
    },
    {
      step: 4,
      title: 'Implementation',
      description: 'Hands-on execution of solutions with continuous collaboration, code reviews, and knowledge transfer to your team.',
      duration: 'Variable',
      deliverables: [
        'Code implementation',
        'System configuration',
        'Testing and validation',
        'Performance optimization'
      ],
      icon: 'Code',
      color: 'bg-system-healthy'
    },
    {
      step: 5,
      title: 'Knowledge Transfer',
      description: 'Comprehensive documentation and training to ensure your team can maintain and extend the implemented solutions.',
      duration: '1-2 days',
      deliverables: [
        'Technical documentation',
        'Team training sessions',
        'Maintenance procedures',
        'Monitoring setup'
      ],
      icon: 'BookOpen',
      color: 'bg-secondary'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-heading font-bold text-primary mb-4">
          Collaboration Methodology
        </h2>
        <p className="text-lg text-text-secondary max-w-3xl mx-auto">
          A proven 5-step process that ensures successful project delivery while building your team's capabilities for long-term success.
        </p>
      </div>

      <div className="relative">
        {/* Process Timeline */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-border h-full"></div>

        <div className="space-y-12">
          {processSteps.map((step, index) => (
            <div
              key={step.step}
              className={`flex items-center ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex-col lg:space-x-8 space-y-6 lg:space-y-0`}
            >
              {/* Content Card */}
              <div className="flex-1 max-w-lg">
                <div className="bg-card rounded-technical border border-border shadow-elevation p-6 hover:shadow-command transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-10 h-10 ${step.color} rounded-technical flex items-center justify-center`}>
                      <Icon name={step.icon} size={20} color="white" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-primary">
                        {step.title}
                      </h3>
                      <p className="text-sm text-text-secondary">
                        Duration: {step.duration}
                      </p>
                    </div>
                  </div>

                  <p className="text-text-secondary mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  <div>
                    <h4 className="text-sm font-medium text-primary mb-2">
                      Key Deliverables:
                    </h4>
                    <ul className="space-y-1">
                      {step.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Icon name="CheckCircle" size={14} className="text-system-healthy mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-text-secondary">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step Number */}
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-command">
                  <span className="text-2xl font-heading font-bold text-primary-foreground">
                    {step.step}
                  </span>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="flex-1 max-w-lg hidden lg:block"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollaborationProcess;