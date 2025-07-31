import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CodeShowcase = () => {
  const [selectedExample, setSelectedExample] = useState(0);

  const codeExamples = [
    {
      title: 'Kubernetes Deployment Automation',
      description: 'Production-ready Kubernetes deployment with health checks, resource limits, and rolling updates for fintech applications.',
      language: 'yaml',
      category: 'DevOps',
      complexity: 'Advanced',
      useCase: 'Payment Processing Service',
      code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: payment-processor
  namespace: fintech-prod
  labels:
    app: payment-processor
    version: v2.1.0
    tier: backend
spec:
  replicas: 5
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 2
      maxUnavailable: 1
  selector:
    matchLabels:
      app: payment-processor
  template:
    metadata:
      labels:
        app: payment-processor
        version: v2.1.0
    spec:
      containers:
      - name: payment-processor
        image: fintech/payment-processor:v2.1.0
        ports:
        - containerPort: 8080
          name: http
        - containerPort: 9090
          name: metrics
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: db-credentials
              key: url
        - name: REDIS_URL
          valueFrom:
            configMapKeyRef:
              name: cache-config
              key: redis-url
        resources:
          requests:
            memory: "512Mi" cpu:"500m"
          limits:
            memory: "1Gi" cpu:"1000m"
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
          periodSeconds: 5
        securityContext:
          runAsNonRoot: true
          runAsUser: 1000
          allowPrivilegeEscalation: false
---
apiVersion: v1
kind: Service
metadata:
  name: payment-processor-service
  namespace: fintech-prod
spec:
  selector:
    app: payment-processor
  ports:
  - name: http
    port: 80
    targetPort: 8080
  - name: metrics
    port: 9090
    targetPort: 9090
  type: ClusterIP`
    },
    {
      title: 'Docker Multi-Stage Build Optimization',
      description: 'Optimized Docker build for Node.js fintech applications with security scanning and minimal attack surface.',
      language: 'dockerfile',
      category: 'Containerization',
      complexity: 'Intermediate',
      useCase: 'Trading API Service',
      code: `# Multi-stage build for Node.js trading API
FROM node:18-alpine AS dependencies
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build && npm run test

FROM node:18-alpine AS security-scan
WORKDIR /app
COPY --from=build /app .
RUN npm audit --audit-level=high
RUN npm run security:scan

FROM node:18-alpine AS production
# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S trading -u 1001

WORKDIR /app

# Copy production dependencies
COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./

# Set ownership and permissions
RUN chown -R trading:nodejs /app
USER trading

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/health || exit 1

# Security hardening
ENV NODE_ENV=production
ENV NODE_OPTIONS="--max-old-space-size=512"

EXPOSE 3000

CMD ["node", "dist/server.js"]`
    },
    {
      title: 'Terraform Infrastructure as Code',
      description: 'Multi-region AWS infrastructure setup for high-availability fintech applications with disaster recovery.',
      language: 'hcl',
      category: 'Infrastructure',
      complexity: 'Expert',
      useCase: 'Multi-Region Banking Platform',
      code: `# Multi-region fintech infrastructure
terraform {
  required_version = ">= 1.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  backend "s3" {
    bucket         = "fintech-terraform-state"
    key            = "infrastructure/terraform.tfstate"
    region         = "us-east-1"
    encrypt        = true
    dynamodb_table = "terraform-locks"
  }
}

# Primary region configuration
provider "aws" {
  alias  = "primary"
  region = var.primary_region
  
  default_tags {
    tags = {
      Environment = var.environment
      Project     = "fintech-platform"
      ManagedBy   = "terraform"
      CostCenter  = "engineering"
    }
  }
}

# Disaster recovery region
provider "aws" {
  alias  = "dr"
  region = var.dr_region
}

# VPC for primary region
module "vpc_primary" {
  source = "./modules/vpc"
  providers = {
    aws = aws.primary
  }
  
  cidr_block           = "10.0.0.0/16"
  availability_zones   = ["us-east-1a", "us-east-1b", "us-east-1c"]
  private_subnets      = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
  public_subnets       = ["10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"]
  database_subnets     = ["10.0.201.0/24", "10.0.202.0/24", "10.0.203.0/24"]
  
  enable_nat_gateway   = true
  enable_vpn_gateway   = false
  enable_dns_hostnames = true
  enable_dns_support   = true
  
  tags = {
    Name = "fintech-vpc-primary"
    Type = "primary"
  }
}

# EKS cluster for container orchestration
module "eks_primary" {
  source = "./modules/eks"
  providers = {
    aws = aws.primary
  }
  
  cluster_name    = "fintech-\${var.environment}"
  cluster_version = "1.27"
  
  vpc_id          = module.vpc_primary.vpc_id
  subnet_ids      = module.vpc_primary.private_subnets
  
  node_groups = {
    general = {
      desired_capacity = 3
      max_capacity     = 10
      min_capacity     = 3
      
      instance_types = ["t3.large"]
      capacity_type  = "ON_DEMAND"
      
      k8s_labels = {
        Environment = var.environment
        NodeGroup   = "general"
      }
      
      k8s_taints = []
    }
    
    compute_optimized = {
      desired_capacity = 2
      max_capacity     = 5
      min_capacity     = 0
      
      instance_types = ["c5.xlarge"]
      capacity_type  = "SPOT"
      
      k8s_labels = {
        Environment = var.environment
        NodeGroup   = "compute-optimized"
        WorkloadType = "trading"
      }
      
      k8s_taints = [
        {
          key    = "trading-workload"
          value  = "true"
          effect = "NO_SCHEDULE"
        }
      ]
    }
  }
  
  tags = {
    Environment = var.environment
    Type        = "primary"
  }
}

# RDS for primary database
module "rds_primary" {
  source = "./modules/rds"
  providers = {
    aws = aws.primary
  }
  
  identifier = "fintech-\${var.environment}-primary"
  
  engine         = "postgres"
  engine_version = "15.3"
  instance_class = "db.r6g.xlarge"
  
  allocated_storage     = 100
  max_allocated_storage = 1000
  storage_encrypted     = true
  
  db_name  = "fintech"
  username = "dbadmin"
  
  vpc_security_group_ids = [module.security_groups.rds_sg_id]
  db_subnet_group_name   = module.vpc_primary.database_subnet_group
  
  backup_retention_period = 30
  backup_window          = "03:00-04:00"
  maintenance_window     = "sun:04:00-sun:05:00"
  
  enabled_cloudwatch_logs_exports = ["postgresql"]
  
  # Cross-region backup for DR
  copy_tags_to_snapshot = true
  
  tags = {
    Environment = var.environment
    Type        = "primary"
    Backup      = "required"
  }
}`
    },
    {
      title: 'Monitoring & Alerting Configuration',
      description: 'Comprehensive Prometheus monitoring setup with custom metrics and alerting rules for fintech SLA compliance.',
      language: 'yaml',
      category: 'Monitoring',
      complexity: 'Advanced',
      useCase: 'SLA Monitoring & Alerting',
      code: `# Prometheus configuration for fintech monitoring
global:
  scrape_interval: 15s
  evaluation_interval: 15s
  external_labels:
    cluster: 'fintech-prod' region:'us-east-1'

rule_files:
  - "fintech_alerts.yml" -"sla_rules.yml"

alerting:
  alertmanagers:
    - static_configs:
        - targets:
          - alertmanager:9093

scrape_configs:
  # Application metrics
  - job_name: 'payment-processor'
    static_configs:
      - targets: ['payment-processor:9090']
    metrics_path: /metrics
    scrape_interval: 10s
    scrape_timeout: 5s
    params:
      format: ['prometheus']
    relabel_configs:
      - source_labels: [__address__]
        target_label: __param_target
      - source_labels: [__param_target]
        target_label: instance
      - target_label: __address__
        replacement: payment-processor:9090

  # Trading system metrics
  - job_name: 'trading-engine'
    kubernetes_sd_configs:
      - role: pod
        namespaces:
          names:
            - trading
    relabel_configs:
      - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_scrape]
        action: keep
        regex: true
      - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_path]
        action: replace
        target_label: __metrics_path__
        regex: (.+)
      - source_labels: [__address__, __meta_kubernetes_pod_annotation_prometheus_io_port]
        action: replace
        regex: ([^:]+)(?::\d+)?;(\d+)
        replacement: $1:$2
        target_label: __address__

  # Infrastructure metrics
  - job_name: 'node-exporter'
    kubernetes_sd_configs:
      - role: node
    relabel_configs:
      - action: labelmap
        regex: __meta_kubernetes_node_label_(.+)
      - target_label: __address__
        replacement: kubernetes.default.svc:443
      - source_labels: [__meta_kubernetes_node_name]
        regex: (.+)
        target_label: __metrics_path__
        replacement: /api/v1/nodes/${1}/proxy/metrics

---
# Alert rules for fintech SLA monitoring
apiVersion: monitoring.coreos.com/v1
kind: PrometheusRule
metadata:
  name: fintech-sla-alerts
  namespace: monitoring
spec:
  groups:
  - name: payment.sla
    interval: 30s
    rules:
    - alert: PaymentProcessingLatencyHigh
      expr: histogram_quantile(0.95, payment_processing_duration_seconds_bucket) > 0.5
      for: 2m
      labels:
        severity: critical
        service: payment-processor
        sla: latency
      annotations:
        summary: "Payment processing latency is above SLA threshold" description:"95th percentile latency is {{ $value }}s, exceeding 500ms SLA" runbook_url:"https://runbooks.fintech.com/payment-latency"

    - alert: PaymentErrorRateHigh
      expr: rate(payment_errors_total[5m]) / rate(payment_requests_total[5m]) > 0.01
      for: 1m
      labels:
        severity: critical
        service: payment-processor
        sla: availability
      annotations:
        summary: "Payment error rate exceeds SLA threshold" description:"Error rate is {{ $value | humanizePercentage }}, exceeding 1% SLA" runbook_url:"https://runbooks.fintech.com/payment-errors"

  - name: trading.sla
    interval: 10s
    rules:
    - alert: TradingSystemDown
      expr: up{job="trading-engine"} == 0
      for: 30s
      labels:
        severity: critical
        service: trading-engine
        sla: availability
      annotations:
        summary: "Trading system is down"
        description: "Trading engine {{ $labels.instance }} has been down for more than 30 seconds" runbook_url:"https://runbooks.fintech.com/trading-down"

    - alert: OrderExecutionLatencyHigh
      expr: histogram_quantile(0.99, order_execution_duration_seconds_bucket) > 0.1
      for: 1m
      labels:
        severity: warning
        service: trading-engine
        sla: latency
      annotations:
        summary: "Order execution latency is high" description:"99th percentile order execution time is {{ $value }}s" runbook_url:"https://runbooks.fintech.com/order-latency"

  - name: infrastructure.sla
    interval: 60s
    rules:
    - alert: DatabaseConnectionsHigh
      expr: pg_stat_activity_count / pg_settings_max_connections > 0.8
      for: 5m
      labels:
        severity: warning
        service: postgresql
        sla: capacity
      annotations:
        summary: "Database connection usage is high" description:"Connection usage is at {{ $value | humanizePercentage }} of maximum" runbook_url:"https://runbooks.fintech.com/db-connections"`
    }
  ];

  return (
    <div className="bg-card rounded-technical border border-border shadow-elevation">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-heading font-bold text-primary">
              Code Implementation Showcase
            </h3>
            <p className="text-text-secondary mt-1">
              Production-ready code examples from real fintech projects
            </p>
          </div>
          
          <div className="flex items-center space-x-2">
            <Icon name="Code" size={20} className="text-accent" />
            <span className="text-sm font-mono text-text-secondary">
              {codeExamples?.length} Examples
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        {/* Code Example Selector */}
        <div className="lg:w-1/3 border-b lg:border-b-0 lg:border-r border-border">
          <div className="p-6 space-y-3">
            {codeExamples?.map((example, index) => (
              <div
                key={index}
                onClick={() => setSelectedExample(index)}
                className={`p-4 rounded-technical cursor-pointer transition-all duration-200 ${
                  selectedExample === index
                    ? 'bg-accent/10 border border-accent/20' :'bg-surface hover:bg-muted border border-transparent'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className={`font-heading font-bold text-sm ${
                    selectedExample === index ? 'text-accent' : 'text-primary'
                  }`}>
                    {example?.title}
                  </h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    example?.complexity === 'Expert' ? 'bg-system-healthy/10 text-system-healthy' :
                    example?.complexity === 'Advanced'? 'bg-accent/10 text-accent' : 'bg-system-warning/10 text-system-warning'
                  }`}>
                    {example?.complexity}
                  </span>
                </div>
                
                <p className="text-text-secondary text-sm mb-3 leading-relaxed">
                  {example?.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-primary/5 text-primary text-xs rounded-full font-mono">
                      {example?.category}
                    </span>
                    <span className="px-2 py-1 bg-muted text-text-secondary text-xs rounded-full font-mono">
                      {example?.language}
                    </span>
                  </div>
                  
                  {selectedExample === index && (
                    <Icon name="ChevronRight" size={16} className="text-accent" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Code Display */}
        <div className="lg:w-2/3">
          <div className="p-6">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-lg font-heading font-bold text-primary">
                  {codeExamples?.[selectedExample]?.title}
                </h4>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Copy"
                    iconPosition="left"
                    onClick={() => navigator.clipboard?.writeText(codeExamples?.[selectedExample]?.code)}
                  >
                    Copy Code
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="ExternalLink"
                    iconPosition="left"
                    onClick={() => window.open('/project-showcase-fintech-case-studies', '_blank')}
                  >
                    View Project
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-text-secondary">
                <div className="flex items-center space-x-1">
                  <Icon name="Tag" size={14} />
                  <span>Use Case: {codeExamples?.[selectedExample]?.useCase}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Code" size={14} />
                  <span>Language: {codeExamples?.[selectedExample]?.language?.toUpperCase()}</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-4 right-4 flex items-center space-x-2 z-10">
                <span className="px-2 py-1 bg-command-primary/90 text-white text-xs rounded-full font-mono">
                  {codeExamples?.[selectedExample]?.language}
                </span>
                <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                  codeExamples?.[selectedExample]?.complexity === 'Expert' ? 'bg-system-healthy text-white' :
                  codeExamples?.[selectedExample]?.complexity === 'Advanced' ? 'bg-accent text-white' : 'bg-system-warning text-white'
                }`}>
                  {codeExamples?.[selectedExample]?.complexity}
                </span>
              </div>
              
              <div className="bg-command-primary rounded-technical overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 bg-command-secondary">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-white text-sm font-mono">
                      {codeExamples?.[selectedExample]?.title?.toLowerCase()?.replace(/\s+/g, '-')}.{codeExamples?.[selectedExample]?.language}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 overflow-x-auto max-h-96">
                  <pre className="text-sm text-white font-mono leading-relaxed">
                    <code>{codeExamples?.[selectedExample]?.code}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-surface rounded-technical">
              <div className="flex items-start space-x-3">
                <Icon name="Info" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-medium text-primary mb-1">Implementation Notes</h5>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {codeExamples?.[selectedExample]?.description} This example demonstrates production-ready practices including security hardening, monitoring integration, and scalability considerations specific to fintech environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeShowcase;