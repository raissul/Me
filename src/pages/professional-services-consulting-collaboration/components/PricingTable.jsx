import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingTable = ({ onSelectPackage }) => {
  const packages = [
    {
      id: 'consultation',
      name: 'Technical Consultation',
      price: '$200',
      unit: 'per hour',
      description: 'Perfect for quick technical discussions and problem-solving sessions',
      features: [
        'Video/phone consultation',
        'Technical problem analysis',
        'Immediate recommendations',
        'Follow-up documentation',
        'Email support for 48 hours'
      ],
      popular: false,
      color: 'border-border'
    },
    {
      id: 'diagnostic',
      name: 'System Diagnostic',
      price: '$2,500',
      unit: 'per project',
      description: 'Comprehensive system analysis with detailed improvement roadmap',
      features: [
        'Complete system audit',
        'Performance bottleneck analysis',
        'Security vulnerability assessment',
        'Detailed improvement roadmap',
        'Implementation priority matrix',
        '2 weeks of email support'
      ],
      popular: true,
      color: 'border-accent'
    },
    {
      id: 'optimization',
      name: 'Performance Optimization',
      price: '$1,500',
      unit: 'per day',
      description: 'Hands-on optimization work with measurable performance improvements',
      features: [
        'Direct system optimization',
        'Code review and refactoring',
        'Database query optimization',
        'Infrastructure tuning',
        'Performance monitoring setup',
        'Knowledge transfer session'
      ],
      popular: false,
      color: 'border-border'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {packages.map((pkg) => (
        <div
          key={pkg.id}
          className={`bg-card rounded-technical border-2 ${pkg.color} shadow-elevation hover:shadow-command transition-all duration-300 relative ${
            pkg.popular ? 'transform scale-105' : ''
          }`}
        >
          {pkg.popular && (
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-xs font-medium">
                Most Popular
              </div>
            </div>
          )}

          <div className="p-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                {pkg.name}
              </h3>
              <div className="mb-3">
                <span className="text-3xl font-heading font-bold text-primary">
                  {pkg.price}
                </span>
                <span className="text-text-secondary ml-1">
                  {pkg.unit}
                </span>
              </div>
              <p className="text-sm text-text-secondary">
                {pkg.description}
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {pkg.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <Icon name="CheckCircle" size={16} className="text-system-healthy mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-text-secondary">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              variant={pkg.popular ? "default" : "outline"}
              fullWidth
              iconName="ArrowRight"
              iconPosition="right"
              onClick={() => onSelectPackage(pkg)}
            >
              Select {pkg.name}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingTable;