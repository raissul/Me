import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SkillCategory = ({ category, isExpanded, onToggle }) => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const getProficiencyColor = (level) => {
    switch (level) {
      case 'Expert': return 'bg-system-healthy';
      case 'Advanced': return 'bg-accent';
      case 'Intermediate': return 'bg-system-warning';
      default: return 'bg-muted';
    }
  };

  const getProficiencyWidth = (level) => {
    switch (level) {
      case 'Expert': return 'w-full';
      case 'Advanced': return 'w-4/5';
      case 'Intermediate': return 'w-3/5';
      default: return 'w-2/5';
    }
  };

  return (
    <div className="bg-card rounded-technical border border-border shadow-elevation hover:shadow-command transition-all duration-300">
      <div 
        className="p-6 cursor-pointer"
        onClick={onToggle}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className={`w-12 h-12 rounded-technical flex items-center justify-center ${category.bgColor}`}>
              <Icon name={category.icon} size={24} color="white" strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-xl font-heading font-bold text-primary">
                {category.title}
              </h3>
              <p className="text-text-secondary text-sm">
                {category.skills.length} Technologies • {category.yearsExperience} Years Experience
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <div className="text-2xl font-bold text-accent">
                {category.proficiencyScore}%
              </div>
              <div className="text-xs text-text-secondary font-mono">
                Overall Proficiency
              </div>
            </div>
            <Icon 
              name={isExpanded ? "ChevronUp" : "ChevronDown"} 
              size={20} 
              className="text-text-secondary transition-transform duration-200"
            />
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="border-t border-border">
          <div className="p-6 space-y-6">
            <p className="text-text-secondary leading-relaxed">
              {category.description}
            </p>

            <div className="grid gap-4">
              {category.skills.map((skill, index) => (
                <div 
                  key={index}
                  className="group relative"
                  onMouseEnter={() => setHoveredSkill(index)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <span className="font-medium text-primary">
                        {skill.name}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        skill.level === 'Expert' ? 'bg-system-healthy/10 text-system-healthy' :
                        skill.level === 'Advanced' ? 'bg-accent/10 text-accent' :
                        skill.level === 'Intermediate'? 'bg-system-warning/10 text-system-warning' : 'bg-muted text-text-secondary'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                    <span className="text-sm text-text-secondary font-mono">
                      {skill.experience}
                    </span>
                  </div>

                  <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${getProficiencyColor(skill.level)} ${getProficiencyWidth(skill.level)} transition-all duration-1000 ease-out skill-bar ${isExpanded ? 'animate' : ''}`}
                    />
                  </div>

                  {hoveredSkill === index && (
                    <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-surface rounded-technical border border-border shadow-modal z-10">
                      <div className="space-y-3">
                        <div>
                          <h5 className="font-medium text-primary mb-1">Real-world Applications:</h5>
                          <ul className="text-sm text-text-secondary space-y-1">
                            {skill.applications.map((app, appIndex) => (
                              <li key={appIndex} className="flex items-start space-x-2">
                                <Icon name="CheckCircle" size={14} className="text-system-healthy mt-0.5 flex-shrink-0" />
                                <span>{app}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {skill.tools && (
                          <div>
                            <h5 className="font-medium text-primary mb-2">Tools & Frameworks:</h5>
                            <div className="flex flex-wrap gap-2">
                              {skill.tools.map((tool, toolIndex) => (
                                <span 
                                  key={toolIndex}
                                  className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full font-mono"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {category.codeExample && (
              <div className="mt-6">
                <h4 className="font-medium text-primary mb-3 flex items-center space-x-2">
                  <Icon name="Code" size={16} />
                  <span>Implementation Example</span>
                </h4>
                <div className="bg-command-primary rounded-technical p-4 overflow-x-auto">
                  <pre className="text-sm text-white font-mono">
                    <code>{category.codeExample}</code>
                  </pre>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="flex items-center space-x-4">
                <div className="text-sm text-text-secondary">
                  <span className="font-medium">Last Updated:</span> {category.lastUpdated}
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="TrendingUp" size={14} className="text-system-healthy" />
                  <span className="text-sm text-system-healthy font-medium">
                    Actively Learning
                  </span>
                </div>
              </div>
              
              {category.relatedProjects && (
                <Button
                  variant="outline"
                  size="sm"
                  iconName="ExternalLink"
                  iconPosition="right"
                  onClick={() => window.location.href = '/project-showcase-fintech-case-studies'}
                >
                  View Projects
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillCategory;