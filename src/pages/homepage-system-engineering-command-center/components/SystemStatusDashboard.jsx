import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const SystemStatusDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [systemMetrics, setSystemMetrics] = useState({
    cpu: 23,
    memory: 67,
    network: 45,
    storage: 34
  });

  const systemServices = [
    {
      name: 'Trading Engine',
      status: 'operational',
      uptime: '99.97%',
      responseTime: '12ms',
      lastCheck: '30s ago',
      icon: 'TrendingUp'
    },
    {
      name: 'Payment Gateway',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '45ms',
      lastCheck: '1m ago',
      icon: 'CreditCard'
    },
    {
      name: 'Risk Management',
      status: 'warning',
      uptime: '99.89%',
      responseTime: '78ms',
      lastCheck: '2m ago',
      icon: 'Shield'
    },
    {
      name: 'Data Analytics',
      status: 'operational',
      uptime: '99.92%',
      responseTime: '156ms',
      lastCheck: '45s ago',
      icon: 'BarChart3'
    },
    {
      name: 'User Authentication',
      status: 'operational',
      uptime: '99.98%',
      responseTime: '23ms',
      lastCheck: '15s ago',
      icon: 'Lock'
    },
    {
      name: 'Notification Service',
      status: 'maintenance',
      uptime: '99.85%',
      responseTime: '234ms',
      lastCheck: '5m ago',
      icon: 'Bell'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'deployment',
      message: 'Trading Engine v2.4.1 deployed successfully',
      timestamp: new Date(Date.now() - 300000),
      severity: 'success'
    },
    {
      id: 2,
      type: 'alert',
      message: 'Risk Management service response time increased',
      timestamp: new Date(Date.now() - 600000),
      severity: 'warning'
    },
    {
      id: 3,
      type: 'maintenance',
      message: 'Notification Service scheduled maintenance started',
      timestamp: new Date(Date.now() - 900000),
      severity: 'info'
    },
    {
      id: 4,
      type: 'recovery',
      message: 'Database connection pool optimized',
      timestamp: new Date(Date.now() - 1200000),
      severity: 'success'
    },
    {
      id: 5,
      type: 'security',
      message: 'Security scan completed - no vulnerabilities found',
      timestamp: new Date(Date.now() - 1800000),
      severity: 'success'
    }
  ];

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const metricsInterval = setInterval(() => {
      setSystemMetrics(prev => ({
        cpu: Math.max(15, Math.min(85, prev.cpu + (Math.random() - 0.5) * 10)),
        memory: Math.max(20, Math.min(90, prev.memory + (Math.random() - 0.5) * 8)),
        network: Math.max(10, Math.min(80, prev.network + (Math.random() - 0.5) * 12)),
        storage: Math.max(15, Math.min(75, prev.storage + (Math.random() - 0.5) * 6))
      }));
    }, 3000);

    return () => {
      clearInterval(timeInterval);
      clearInterval(metricsInterval);
    };
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'operational': return 'text-system-healthy';
      case 'warning': return 'text-system-warning';
      case 'maintenance': return 'text-system-info';
      case 'critical': return 'text-system-critical';
      default: return 'text-text-secondary';
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case 'operational': return 'bg-system-healthy/10 border-system-healthy/20';
      case 'warning': return 'bg-system-warning/10 border-system-warning/20';
      case 'maintenance': return 'bg-system-info/10 border-system-info/20';
      case 'critical': return 'bg-system-critical/10 border-system-critical/20';
      default: return 'bg-muted border-border';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'success': return 'text-system-healthy';
      case 'warning': return 'text-system-warning';
      case 'info': return 'text-system-info';
      case 'error': return 'text-system-critical';
      default: return 'text-text-secondary';
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatRelativeTime = (date) => {
    const now = new Date();
    const diff = Math.floor((now - date) / 1000);
    
    if (diff < 60) return `${diff}s ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    return `${Math.floor(diff / 3600)}h ago`;
  };

  const getMetricColor = (value) => {
    if (value < 30) return 'text-system-healthy';
    if (value < 70) return 'text-system-warning';
    return 'text-system-critical';
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-accent/10 rounded-technical flex items-center justify-center">
              <Icon name="Monitor" size={24} className="text-accent" />
            </div>
            <h2 className="text-responsive-lg font-heading font-bold text-primary">
              System Status Dashboard
            </h2>
          </div>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Real-time monitoring of critical fintech infrastructure components with live metrics, 
            service health status, and system performance indicators.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - System Metrics */}
          <div className="lg:col-span-1 space-y-6">
            {/* Current Time & Status */}
            <div className="bg-command-gradient rounded-technical p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">System Time</h3>
                <div className="w-3 h-3 bg-system-healthy rounded-full animate-pulse-system"></div>
              </div>
              <div className="text-3xl font-mono font-bold mb-2">
                {formatTime(currentTime)}
              </div>
              <div className="text-sm opacity-80">
                {currentTime.toLocaleDateString('en-US', { 
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </div>

            {/* Resource Metrics */}
            <div className="bg-card rounded-technical shadow-elevation border border-border p-6">
              <h3 className="text-lg font-semibold text-primary mb-6">Resource Usage</h3>
              <div className="space-y-4">
                {Object.entries(systemMetrics).map(([metric, value]) => (
                  <div key={metric} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-text-secondary capitalize">
                        {metric === 'cpu' ? 'CPU' : metric}
                      </span>
                      <span className={`text-sm font-bold ${getMetricColor(value)}`}>
                        {Math.round(value)}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-1000 ease-out ${
                          value < 30 ? 'bg-system-healthy' :
                          value < 70 ? 'bg-system-warning' : 'bg-system-critical'
                        }`}
                        style={{ width: `${value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Overall System Health */}
            <div className="bg-card rounded-technical shadow-elevation border border-border p-6">
              <h3 className="text-lg font-semibold text-primary mb-4">System Health</h3>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 relative">
                  <div className="w-full h-full rounded-full bg-system-healthy/20 flex items-center justify-center">
                    <Icon name="CheckCircle" size={32} className="text-system-healthy" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-system-healthy rounded-full flex items-center justify-center">
                    <Icon name="Check" size={12} color="white" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-system-healthy mb-2">Operational</div>
                <div className="text-sm text-text-secondary">All systems running normally</div>
              </div>
            </div>
          </div>

          {/* Middle Column - Service Status */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-technical shadow-elevation border border-border p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-primary">Service Status</h3>
                <div className="flex items-center space-x-2 text-sm text-text-secondary">
                  <Icon name="RefreshCw" size={14} />
                  <span>Auto-refresh</span>
                </div>
              </div>

              <div className="space-y-4">
                {systemServices.map((service) => (
                  <div
                    key={service.name}
                    className={`p-4 rounded-technical border transition-all duration-300 ${getStatusBg(service.status)}`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <Icon name={service.icon} size={20} className={getStatusColor(service.status)} />
                        <div>
                          <h4 className="font-semibold text-primary">{service.name}</h4>
                          <p className="text-xs text-text-secondary">{service.lastCheck}</p>
                        </div>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${
                        service.status === 'operational' ? 'bg-system-healthy/20 text-system-healthy' :
                        service.status === 'warning' ? 'bg-system-warning/20 text-system-warning' :
                        service.status === 'maintenance'? 'bg-system-info/20 text-system-info' : 'bg-system-critical/20 text-system-critical'
                      }`}>
                        {service.status}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-text-secondary">Uptime</span>
                        <div className="font-mono font-semibold text-primary">{service.uptime}</div>
                      </div>
                      <div>
                        <span className="text-text-secondary">Response</span>
                        <div className="font-mono font-semibold text-primary">{service.responseTime}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Activity Feed */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-technical shadow-elevation border border-border p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-primary">Recent Activity</h3>
                <Icon name="Activity" size={20} className="text-accent" />
              </div>

              <div className="space-y-4 max-h-96 overflow-y-auto">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-technical hover:bg-surface transition-colors duration-200">
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                      activity.severity === 'success' ? 'bg-system-healthy' :
                      activity.severity === 'warning' ? 'bg-system-warning' :
                      activity.severity === 'info'? 'bg-system-info' : 'bg-system-critical'
                    }`}></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-primary leading-relaxed">
                        {activity.message}
                      </p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className={`text-xs font-medium capitalize ${getSeverityColor(activity.severity)}`}>
                          {activity.type}
                        </span>
                        <span className="text-xs text-text-secondary">
                          {formatRelativeTime(activity.timestamp)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <button className="w-full text-sm text-accent hover:text-accent/80 font-medium transition-colors duration-200">
                  View All Activities
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 grid md:grid-cols-4 gap-6">
          <div className="bg-card rounded-technical shadow-elevation border border-border p-6 text-center">
            <Icon name="Zap" size={32} className="mx-auto mb-3 text-system-healthy" />
            <div className="text-2xl font-bold text-primary mb-1">99.97%</div>
            <div className="text-sm text-text-secondary">Overall Uptime</div>
          </div>
          <div className="bg-card rounded-technical shadow-elevation border border-border p-6 text-center">
            <Icon name="Clock" size={32} className="mx-auto mb-3 text-system-info" />
            <div className="text-2xl font-bold text-primary mb-1">23ms</div>
            <div className="text-sm text-text-secondary">Avg Response Time</div>
          </div>
          <div className="bg-card rounded-technical shadow-elevation border border-border p-6 text-center">
            <Icon name="TrendingUp" size={32} className="mx-auto mb-3 text-accent" />
            <div className="text-2xl font-bold text-primary mb-1">2.4M</div>
            <div className="text-sm text-text-secondary">Daily Transactions</div>
          </div>
          <div className="bg-card rounded-technical shadow-elevation border border-border p-6 text-center">
            <Icon name="Shield" size={32} className="mx-auto mb-3 text-system-warning" />
            <div className="text-2xl font-bold text-primary mb-1">0</div>
            <div className="text-sm text-text-secondary">Security Incidents</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemStatusDashboard;