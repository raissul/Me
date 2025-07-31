import React, { useState } from 'react';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const LatestInsights = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', icon: 'FileText' },
    { id: 'debugging', name: 'Debugging', icon: 'Bug' },
    { id: 'optimization', name: 'Optimization', icon: 'Zap' },
    { id: 'architecture', name: 'Architecture', icon: 'Layers' },
    { id: 'fintech', name: 'Fintech', icon: 'DollarSign' }
  ];

  const blogPosts = [
    {
      id: 'microservices-debugging-strategies',
      title: 'Advanced Debugging Strategies for Microservices Architecture',
      excerpt: `Comprehensive guide to debugging distributed systems with practical techniques for tracing, logging, and monitoring across service boundaries in production environments.`,
      category: 'debugging',
      readTime: '12 min read',
      publishDate: '2025-01-15',
      author: 'Sojib Hossain',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
      tags: ['Microservices', 'Debugging', 'Distributed Systems', 'Monitoring'],
      engagement: {
        views: '2.4K',
        comments: 18,
        shares: 45
      },
      featured: true
    },
    {
      id: 'docker-performance-optimization',
      title: 'Docker Container Performance Optimization in Production',
      excerpt: `Deep dive into container optimization techniques that reduced our fintech platform's response time by 60% and improved resource utilization across the infrastructure.`,category: 'optimization',readTime: '8 min read',publishDate: '2025-01-10',author: 'Sojib Hossain',image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=600&h=400&fit=crop',
      tags: ['Docker', 'Performance', 'Containers', 'DevOps'],
      engagement: {
        views: '1.8K',
        comments: 12,
        shares: 32
      },
      featured: false
    },
    {
      id: 'fintech-system-reliability',title: 'Building Fault-Tolerant Systems for High-Frequency Trading',excerpt: `Lessons learned from designing resilient trading systems that process millions of transactions daily with 99.99% uptime requirements and sub-millisecond latency.`,category: 'fintech',readTime: '15 min read',publishDate: '2025-01-05',author: 'Sojib Hossain',image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop',
      tags: ['Fintech', 'Trading Systems', 'Reliability', 'Architecture'],
      engagement: {
        views: '3.1K',
        comments: 24,
        shares: 67
      },
      featured: true
    },
    {
      id: 'kubernetes-scaling-patterns',title: 'Kubernetes Scaling Patterns for Financial Applications',
      excerpt: `Practical implementation of horizontal and vertical scaling strategies in Kubernetes for financial services, including cost optimization and performance considerations.`,
      category: 'architecture',readTime: '10 min read',publishDate: '2024-12-28',author: 'Sojib Hossain',image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop',
      tags: ['Kubernetes', 'Scaling', 'Architecture', 'Cloud'],
      engagement: {
        views: '1.5K',
        comments: 9,
        shares: 28
      },
      featured: false
    },
    {
      id: 'database-optimization-techniques',title: 'Database Query Optimization for Real-Time Analytics',
      excerpt: `Advanced techniques for optimizing database performance in real-time analytics systems, including indexing strategies, query optimization, and caching mechanisms.`,
      category: 'optimization',readTime: '11 min read',publishDate: '2024-12-20',author: 'Sojib Hossain',image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&h=400&fit=crop',
      tags: ['Database', 'Optimization', 'Analytics', 'Performance'],
      engagement: {
        views: '2.2K',
        comments: 15,
        shares: 41
      },
      featured: false
    },
    {
      id: 'incident-response-playbook',title: 'Building an Effective Incident Response Playbook for Fintech',
      excerpt: `Step-by-step guide to creating comprehensive incident response procedures that minimize downtime and ensure rapid recovery in financial technology environments.`,
      category: 'debugging',readTime: '14 min read',publishDate: '2024-12-15',author: 'Sojib Hossain',image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tags: ['Incident Response', 'Fintech', 'Operations', 'Best Practices'],
      engagement: {
        views: '1.9K',
        comments: 13,
        shares: 35
      },
      featured: false
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured).slice(0, 5);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-accent/10 rounded-technical flex items-center justify-center">
              <Icon name="BookOpen" size={24} className="text-accent" />
            </div>
            <h2 className="text-responsive-lg font-heading font-bold text-primary">
              Latest Technical Insights
            </h2>
          </div>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Deep technical insights, debugging strategies, and system optimization techniques 
            from real-world fintech engineering challenges.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-technical text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-accent text-white shadow-command'
                  : 'bg-card text-text-secondary hover:bg-background border border-border'
              }`}
            >
              <Icon name={category.icon} size={16} />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === 'all' && (
          <div className="mb-16">
            <div className="bg-card rounded-technical shadow-elevation border border-border overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Featured Image */}
                <div className="relative aspect-video lg:aspect-square overflow-hidden">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-medium text-primary">{featuredPost.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Featured Content */}
                <div className="p-8 flex flex-col justify-between">
                  <div className="space-y-4">
                    {/* Meta Info */}
                    <div className="flex items-center space-x-4 text-sm text-text-secondary">
                      <span className="flex items-center space-x-1">
                        <Icon name="Calendar" size={14} />
                        <span>{formatDate(featuredPost.publishDate)}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Icon name="User" size={14} />
                        <span>{featuredPost.author}</span>
                      </span>
                    </div>

                    {/* Title & Excerpt */}
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-primary mb-3 leading-tight">
                        {featuredPost.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {featuredPost.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Engagement & CTA */}
                  <div className="flex items-center justify-between pt-6 border-t border-border">
                    <div className="flex items-center space-x-4 text-sm text-text-secondary">
                      <span className="flex items-center space-x-1">
                        <Icon name="Eye" size={14} />
                        <span>{featuredPost.engagement.views}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Icon name="MessageCircle" size={14} />
                        <span>{featuredPost.engagement.comments}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Icon name="Share2" size={14} />
                        <span>{featuredPost.engagement.shares}</span>
                      </span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="ArrowRight"
                      iconPosition="right"
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <article key={post.id} className="bg-card rounded-technical shadow-elevation border border-border overflow-hidden hover:shadow-modal transition-shadow duration-300">
              {/* Post Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-primary/80 text-white px-2 py-1 rounded-full text-xs font-medium capitalize">
                    {post.category}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <div className="bg-card/90 backdrop-blur-sm px-2 py-1 rounded-full">
                    <span className="text-xs font-medium text-primary">{post.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6 space-y-4">
                {/* Meta Info */}
                <div className="flex items-center space-x-3 text-xs text-text-secondary">
                  <span className="flex items-center space-x-1">
                    <Icon name="Calendar" size={12} />
                    <span>{formatDate(post.publishDate)}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Icon name="Eye" size={12} />
                    <span>{post.engagement.views}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-heading font-semibold text-primary leading-tight hover:text-accent transition-colors duration-200 cursor-pointer">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-text-secondary leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-surface text-text-secondary text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-3 text-xs text-text-secondary">
                    <span className="flex items-center space-x-1">
                      <Icon name="MessageCircle" size={12} />
                      <span>{post.engagement.comments}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Icon name="Share2" size={12} />
                      <span>{post.engagement.shares}</span>
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="ArrowRight"
                    iconPosition="right"
                    className="text-accent hover:text-accent/80"
                  >
                    Read
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-command-gradient rounded-technical p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <Icon name="Mail" size={48} className="mx-auto mb-4 text-accent" />
            <h3 className="text-2xl font-heading font-bold text-white mb-4">
              Stay Updated with Technical Insights
            </h3>
            <p className="text-white/80 mb-6">
              Get weekly deep-dives into system engineering, debugging strategies, and fintech infrastructure insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-technical border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button
                variant="default"
                className="bg-accent hover:bg-accent/90 text-primary cta-text"
                iconName="Send"
                iconPosition="right"
              >
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-white/60 mt-3">
              No spam, unsubscribe anytime. Join 2,400+ engineers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestInsights;