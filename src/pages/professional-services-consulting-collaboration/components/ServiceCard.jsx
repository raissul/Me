import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceCard = ({ service, onLearnMore }) => {
  return (
    <div className="bg-card rounded-technical border border-border shadow-elevation hover:shadow-command transition-all duration-300 hover-lift">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 rounded-technical flex items-center justify-center ${service.iconBg}`}>
              <Icon name={service.icon} size={24} color="white" strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-lg font-heading font-semibold text-primary">
                {service.title}
              </h3>
              <p className="text-sm text-text-secondary">
                {service.duration}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-heading font-bold text-primary">
              {service.price}
            </p>
            <p className="text-xs text-text-secondary">
              {service.priceUnit}
            </p>
          </div>
        </div>

        <p className="text-text-secondary mb-4 leading-relaxed">
          {service.description}
        </p>

        <div className="space-y-3 mb-6">
          <h4 className="text-sm font-medium text-primary">Key Deliverables:</h4>
          <ul className="space-y-2">
            {service.deliverables.map((deliverable, index) => (
              <li key={index} className="flex items-start space-x-2">
                <Icon name="CheckCircle" size={16} className="text-system-healthy mt-0.5 flex-shrink-0" />
                <span className="text-sm text-text-secondary">{deliverable}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center space-x-2">
            <Icon name="Clock" size={16} className="text-text-muted" />
            <span className="text-sm text-text-secondary">
              Typical Timeline: {service.timeline}
            </span>
          </div>
          <Button
            variant="outline"
            size="sm"
            iconName="ArrowRight"
            iconPosition="right"
            onClick={() => onLearnMore(service)}
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;