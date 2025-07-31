import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ProfessionalTimeline = () => {
  const [activePhase, setActivePhase] = useState(0);

  const careerPhases = [
    {
      period: "2016 - 2018",
      role: "Junior System Engineer",
      company: "TechStart Solutions",
      location: "Dhaka, Bangladesh",
      achievements: [
        "Optimized database queries reducing response time by 60%",
        "Implemented automated backup systems saving 15 hours/week",
        "Led migration of legacy systems to cloud infrastructure"
      ],
      skills: ["Linux Administration", "MySQL Optimization", "AWS Basics", "Python Scripting"],
      keyLearning: "Discovered that every performance problem has a story to tell - you just need to know how to listen to the data."
    },
    {
      period: "2018 - 2020",
      role: "System Engineer",
      company: "DataFlow Technologies",
      location: "Dhaka, Bangladesh",
      achievements: [
        "Designed fault-tolerant architecture handling 1M+ daily transactions",
        "Reduced system downtime by 85% through proactive monitoring",
        "Mentored 3 junior engineers in debugging methodologies"
      ],
      skills: ["Docker", "Kubernetes", "Redis", "Monitoring & Alerting", "System Architecture"],
      keyLearning: "Real expertise comes from understanding not just what broke, but why it broke and how to prevent it from breaking again."
    },
    {
      period: "2020 - 2022",
      role: "Senior DevOps Engineer",
      company: "FinTech Innovations Ltd",
      location: "Dhaka, Bangladesh",
      achievements: [
        "Built CI/CD pipelines reducing deployment time from 4 hours to 15 minutes",
        "Implemented zero-downtime deployment strategies",
        "Achieved 99.9% uptime for critical payment processing systems"
      ],
      skills: ["Jenkins", "Terraform", "ELK Stack", "Security Compliance", "Performance Tuning"],
      keyLearning: "In fintech, system reliability isn't just about uptime - it's about maintaining trust in the digital financial ecosystem."
    },
    {
      period: "2022 - Present",
      role: "Lead System Engineer",
      company: "Digital Finance Corp",
      location: "Dhaka, Bangladesh",
      achievements: [
        "Architected microservices handling $50M+ daily transaction volume",
        "Led incident response team resolving critical issues in &lt;30 minutes",
        "Established engineering best practices adopted company-wide"
      ],
      skills: ["Microservices", "Event-Driven Architecture", "Incident Management", "Team Leadership"],
      keyLearning: "The best system engineers are part detective, part architect, and part storyteller - able to solve problems, design solutions, and communicate impact."
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-responsive-lg font-heading font-bold text-primary mb-4">
            Professional Evolution
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Eight years of continuous growth, learning, and problem-solving across diverse technical challenges and team environments.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 mb-12">
          {careerPhases.map((phase, index) => (
            <button
              key={index}
              onClick={() => setActivePhase(index)}
              className={`p-6 rounded-technical text-left transition-all duration-300 ${
                activePhase === index
                  ? 'bg-accent/10 border-2 border-accent shadow-command'
                  : 'bg-surface border-2 border-transparent hover:border-accent/30'
              }`}
            >
              <div className="text-sm font-mono text-accent mb-2">{phase.period}</div>
              <h3 className="font-heading font-semibold text-primary mb-1">{phase.role}</h3>
              <p className="text-sm text-text-secondary">{phase.company}</p>
              <div className="flex items-center space-x-2 mt-3">
                <Icon name="MapPin" size={14} className="text-text-muted" />
                <span className="text-xs text-text-muted">{phase.location}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Active Phase Details */}
        <div className="bg-surface p-8 rounded-technical shadow-elevation">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                {careerPhases[activePhase].role}
              </h3>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Icon name="Building" size={16} className="text-accent" />
                  <span className="text-text-secondary">{careerPhases[activePhase].company}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Calendar" size={16} className="text-accent" />
                  <span className="text-text-secondary">{careerPhases[activePhase].period}</span>
                </div>
              </div>

              <h4 className="font-heading font-semibold text-primary mb-3">Key Achievements</h4>
              <ul className="space-y-2 mb-6">
                {careerPhases[activePhase].achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Icon name="CheckCircle" size={16} className="text-system-healthy mt-1 flex-shrink-0" />
                    <span className="text-text-secondary">{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-accent/5 p-4 rounded-technical border-l-4 border-accent">
                <h5 className="font-heading font-semibold text-primary mb-2">Key Learning</h5>
                <p className="text-text-secondary italic">{careerPhases[activePhase].keyLearning}</p>
              </div>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-primary mb-4">Technical Skills Developed</h4>
              <div className="grid grid-cols-2 gap-3">
                {careerPhases[activePhase].skills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-card p-3 rounded-technical">
                    <Icon name="Code" size={16} className="text-accent" />
                    <span className="text-sm text-text-secondary">{skill}</span>
                  </div>
                ))}
              </div>

              {/* Progress Indicator */}
              <div className="mt-8">
                <h5 className="font-heading font-semibold text-primary mb-3">Career Progression</h5>
                <div className="flex items-center space-x-2">
                  {careerPhases.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                        index <= activePhase ? 'bg-accent' : 'bg-border'
                      }`}
                    ></div>
                  ))}
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-xs text-text-muted">Junior</span>
                  <span className="text-xs text-text-muted">Senior</span>
                  <span className="text-xs text-text-muted">Lead</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalTimeline;