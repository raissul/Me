import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';

const SkillsMatrix = () => {
  const [visibleSkills, setVisibleSkills] = useState(new Set());
  const sectionRef = useRef(null);

  const skillCategories = [
    {
      title: 'System Engineering',
      icon: 'Settings',
      skills: [
        { name: 'Docker & Containerization', level: 60, experience: '1+ years', projects: 2 },
        { name: 'Kubernetes Orchestration', level: 40, experience: '4+ years', projects: 18 },
        { name: 'System Architecture Design', level: 49, experience: '6+ years', projects: 30 },
        { name: 'Performance Optimization', level: 88, experience: '5+ years', projects: 22 }
      ]
    },
    {
      title: 'DevOps & Automation',
      icon: 'Zap',
      skills: [
        { name: 'CI/CD Pipeline Design', level: 93, experience: '4+ years', projects: 20 },
        { name: 'Infrastructure as Code', level: 87, experience: '3+ years', projects: 15 },
        { name: 'Monitoring & Alerting', level: 91, experience: '5+ years', projects: 28 },
        { name: 'Cloud Platform Management', level: 89, experience: '4+ years', projects: 24 }
      ]
    },
    {
      title: 'Fintech Infrastructure',
      icon: 'DollarSign',
      skills: [
        { name: 'High-Frequency Trading Systems', level: 85, experience: '3+ years', projects: 12 },
        { name: 'Payment Gateway Integration', level: 90, experience: '4+ years', projects: 16 },
        { name: 'Regulatory Compliance Systems', level: 88, experience: '3+ years', projects: 14 },
        { name: 'Real-time Risk Management', level: 86, experience: '3+ years', projects: 11 }
      ]
    },
    {
      title: 'Debugging & Troubleshooting',
      icon: 'Bug',
      skills: [
        { name: 'System Diagnostics', level: 96, experience: '6+ years', projects: 35 },
        { name: 'Performance Profiling', level: 92, experience: '5+ years', projects: 28 },
        { name: 'Root Cause Analysis', level: 94, experience: '6+ years', projects: 32 },
        { name: 'Incident Response', level: 91, experience: '5+ years', projects: 26 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillElements = entry.target.querySelectorAll('[data-skill-id]');
            skillElements.forEach((element, index) => {
              setTimeout(() => {
                setVisibleSkills(prev => new Set([...prev, element.dataset.skillId]));
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getSkillColor = (level) => {
    if (level >= 90) return 'bg-system-healthy';
    if (level >= 80) return 'bg-system-info';
    if (level >= 70) return 'bg-system-warning';
    return 'bg-system-critical';
  };

  return (
    <section ref={sectionRef} className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-accent/10 rounded-technical flex items-center justify-center">
              <Icon name="BarChart3" size={24} className="text-accent" />
            </div>
            <h2 className="text-responsive-lg font-heading font-bold text-primary">
              Technical Expertise Matrix
            </h2>
          </div>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Comprehensive skill assessment across system engineering, DevOps automation, 
            fintech infrastructure, and advanced debugging methodologies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="bg-card rounded-technical shadow-elevation border border-border p-8">
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-command-gradient rounded-technical flex items-center justify-center shadow-command">
                  <Icon name={category.icon} size={20} color="white" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-primary">
                    {category.title}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {category.skills.length} specialized skills
                  </p>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => {
                  const skillId = `${categoryIndex}-${skillIndex}`;
                  const isVisible = visibleSkills.has(skillId);
                  
                  return (
                    <div key={skill.name} data-skill-id={skillId} className="space-y-3">
                      {/* Skill Header */}
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-primary">{skill.name}</h4>
                          <div className="flex items-center space-x-4 text-sm text-text-secondary">
                            <span className="flex items-center space-x-1">
                              <Icon name="Clock" size={14} />
                              <span>{skill.experience}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <Icon name="Briefcase" size={14} />
                              <span>{skill.projects} projects</span>
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-primary">{skill.level}%</span>
                          <p className="text-xs text-text-secondary">Proficiency</p>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="relative">
                        <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                          <div
                            className={`h-full ${getSkillColor(skill.level)} transition-all duration-1000 ease-out ${
                              isVisible ? 'skill-bar animate' : 'skill-bar'
                            }`}
                            style={{
                              width: isVisible ? `${skill.level}%` : '0%'
                            }}
                          ></div>
                        </div>
                        
                        {/* Skill Level Indicator */}
                        <div 
                          className="absolute top-0 h-3 w-1 bg-primary/30 transition-all duration-1000 delay-500"
                          style={{
                            left: isVisible ? `${skill.level}%` : '0%',
                            transform: 'translateX(-50%)'
                          }}
                        ></div>
                      </div>

                      {/* Skill Badges */}
                      <div className="flex flex-wrap gap-2">
                        {skill.level >= 90 && (
                          <span className="px-2 py-1 bg-system-healthy/10 text-system-healthy text-xs rounded-full font-medium">
                            Expert
                          </span>
                        )}
                        {skill.projects >= 20 && (
                          <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium">
                            High Volume
                          </span>
                        )}
                        {skill.experience.includes('5+') && (
                          <span className="px-2 py-1 bg-warning/10 text-warning text-xs rounded-full font-medium">
                            Senior Level
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 bg-command-gradient rounded-technical p-8 text-center">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">6+</div>
              <div className="text-sm opacity-80">Years Experience</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="text-sm opacity-80">Projects Completed</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">16</div>
              <div className="text-sm opacity-80">Core Technologies</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">99.7%</div>
              <div className="text-sm opacity-80">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsMatrix;