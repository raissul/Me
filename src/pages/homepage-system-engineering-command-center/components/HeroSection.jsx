import React, { useState, useEffect } from 'react';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentMetric, setCurrentMetric] = useState(0);
  const [systemStatus, setSystemStatus] = useState('operational');

  const liveMetrics = [
    { label: 'System Uptime', value: '99.97%', icon: 'Activity', color: 'text-system-healthy' },
    { label: 'Avg Response Time', value: '12ms', icon: 'Zap', color: 'text-system-info' },
    { label: 'Daily Transactions', value: '2.4M', icon: 'TrendingUp', color: 'text-system-healthy' },
    { label: 'Active Connections', value: '15.2K', icon: 'Users', color: 'text-accent' }
  ];

  const architectureComponents = [
    {
      id: 'load-balancer',
      name: 'Load Balancer',
      position: { top: '20%', left: '10%' },
      insight: 'Nginx-based load balancing with health checks reduces response time by 40%'
    },
    {
      id: 'api-gateway',
      name: 'API Gateway',
      position: { top: '20%', left: '45%' },
      insight: 'Rate limiting and authentication layer prevents 99.8% of malicious requests'
    },
    {
      id: 'microservices',
      name: 'Microservices',
      position: { top: '50%', left: '25%' },
      insight: 'Docker containerization enables 5-second deployment cycles'
    },
    {
      id: 'database',
      name: 'Database Cluster',
      position: { top: '75%', left: '60%' },
      insight: 'Redis caching layer improves query performance by 85%'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % liveMetrics.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [liveMetrics.length]);

  return (
    <section className="relative min-h-screen bg-command-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-primary/30"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2300d4ff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Status Indicator */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 bg-card/10 backdrop-blur-sm px-4 py-2 rounded-full border border-accent/20">
                <div className="w-2 h-2 bg-system-healthy rounded-full animate-pulse-system"></div>
                <span className="text-sm font-mono text-white/90">System Engineer • Online</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-responsive-xl font-heading font-bold text-white leading-tight">
                Systems that scale,
                <span className="block text-accent">solutions that last</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-lg">
                Precision engineering meets financial innovation. I debug complex problems in high-stakes fintech environments where milliseconds matter and downtime costs millions.
              </p>
            </div>

            {/* Live Metrics */}
            <div className="bg-card/10 backdrop-blur-sm rounded-technical p-6 border border-accent/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Live System Metrics</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-system-healthy rounded-full animate-pulse-system"></div>
                  <span className="text-sm font-mono text-white/70">Real-time</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {liveMetrics.map((metric, index) => (
                  <div 
                    key={metric.label}
                    className={`p-4 rounded-technical border transition-all duration-300 ${
                      index === currentMetric 
                        ? 'bg-accent/10 border-accent/40 shadow-command' 
                        : 'bg-card/5 border-white/10'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon 
                        name={metric.icon} 
                        size={20} 
                        className={index === currentMetric ? metric.color : 'text-white/60'} 
                      />
                      <div>
                        <p className="text-2xl font-bold text-white">{metric.value}</p>
                        <p className="text-sm text-white/70">{metric.label}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                iconName="Code"
                iconPosition="left"
                className="bg-accent hover:bg-accent/90 text-primary cta-text"
                onClick={() => window.location.href = '/technical-expertise-interactive-skill-showcase'}
              >
                Explore Technical Expertise
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="FolderOpen"
                iconPosition="left"
                className="border-white/30 text-white hover:bg-white/10 cta-text"
                onClick={() => window.location.href = '/project-showcase-fintech-case-studies'}
              >
                View Case Studies
              </Button>
            </div>
          </div>

          {/* Right Column - Professional Image & Architecture */}
          <div className="space-y-8">
            {/* Professional Headshot */}
            <div className="relative">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-accent/30 shadow-command">
                  <Image
                    src="/IMG_20250729_172536_599.webp"
                    alt="Sojib Hossain - System Engineering Expert"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Status Ring */}
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-system-healthy rounded-full flex items-center justify-center border-4 border-primary shadow-command">
                  <Icon name="CheckCircle" size={24} color="white" />
                </div>
              </div>
            </div>

            {/* Interactive System Architecture */}
            <div className="bg-card/10 backdrop-blur-sm rounded-technical p-6 border border-accent/20">
              <h3 className="text-lg font-semibold text-white mb-4">System Architecture Overview</h3>
              <div className="relative h-64 bg-primary/20 rounded-technical border border-accent/20 overflow-hidden">
                {architectureComponents.map((component) => (
                  <div
                    key={component.id}
                    className="absolute group cursor-pointer"
                    style={component.position}
                  >
                    <div className="w-4 h-4 bg-accent rounded-full shadow-command animate-pulse-system group-hover:scale-150 transition-transform duration-300"></div>
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <div className="bg-card/95 backdrop-blur-sm p-3 rounded-technical border border-accent/30 shadow-modal min-w-48">
                        <p className="font-semibold text-primary text-sm">{component.name}</p>
                        <p className="text-xs text-text-secondary mt-1">{component.insight}</p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 10% 20% Q 30% 10% 45% 20%"
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5,5"
                    className="animate-pulse"
                  />
                  <path
                    d="M 45% 20% Q 35% 35% 25% 50%"
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5,5"
                    className="animate-pulse"
                  />
                  <path
                    d="M 25% 50% Q 45% 65% 60% 75%"
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5,5"
                    className="animate-pulse"
                  />
                </svg>
              </div>
              <p className="text-sm text-white/70 mt-3">
                Hover over components to see optimization insights
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <span className="text-sm text-white/70 font-mono">Explore More</span>
          <Icon name="ChevronDown" size={20} className="text-accent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;