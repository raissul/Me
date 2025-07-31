import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO",
      company: "FinanceFlow Technologies",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      content: `Sojib's ability to diagnose complex system issues is unparalleled. When our payment processing system was experiencing intermittent failures that cost us $50K daily, he identified the root cause in 6 hours—a race condition that three other engineers had missed. His methodical approach and deep understanding of distributed systems saved our company and restored client confidence.`,
      project: "Payment System Optimization",
      impact: "99.9% → 99.99% uptime improvement"
    },
    {
      name: "Michael Rodriguez",
      role: "VP Engineering",
      company: "Digital Banking Solutions",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      content: `Working with Sojib was like having a detective on our engineering team. He doesn't just fix problems—he prevents them. His proactive monitoring implementation caught three potential disasters before they impacted our customers. His documentation is so thorough that our entire team learned from his debugging process.`,
      project: "Infrastructure Monitoring Overhaul",
      impact: "85% reduction in critical incidents"
    },
    {
      name: "Dr. Priya Patel",
      role: "Head of Technology",
      company: "SecureFinance Corp",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      content: `Sojib's expertise in regulatory compliance is exceptional. He helped us achieve PCI DSS Level 1 compliance while actually improving system performance. His understanding of both the technical and regulatory aspects of fintech is rare and invaluable. He's the kind of engineer every fintech company needs.`,
      project: "Compliance & Security Implementation",
      impact: "100% regulatory compliance achieved"
    },
    {
      name: "James Thompson",
      role: "Senior DevOps Engineer",
      company: "CloudFirst Financial",
      avatar: "https://randomuser.me/api/portraits/men/56.jpg",
      content: `I've worked with many system engineers, but Sojib stands out for his collaborative approach. He doesn't just solve problems in isolation—he teaches the entire team. His mentorship helped me understand debugging at a deeper level. He's both a technical expert and an excellent teacher.`,
      project: "Team Training & Knowledge Transfer",
      impact: "40% faster incident resolution across team"
    },
    {
      name: "Lisa Wang",
      role: "Startup Founder",
      company: "PaymentBridge",
      avatar: "https://randomuser.me/api/portraits/women/25.jpg",
      content: `As a non-technical founder, I needed someone who could not only build robust systems but also explain complex concepts clearly. Sojib designed our entire payment infrastructure and walked me through every decision. His systems have handled our 10x growth without a single major incident.`,
      project: "Startup Infrastructure Design",
      impact: "Scaled from 1K to 100K+ users seamlessly"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-command-gradient">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-responsive-lg font-heading font-bold text-white mb-4">
            Voices from the Field
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Third-party validation from colleagues, clients, and industry peers who have experienced my collaborative approach and technical expertise firsthand.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-card/10 backdrop-blur-sm p-8 lg:p-12 rounded-technical border border-white/10">
            <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8">
              {/* Avatar and Info */}
              <div className="flex-shrink-0 text-center lg:text-left">
                <div className="w-20 h-20 mx-auto lg:mx-0 mb-4 overflow-hidden rounded-technical">
                  <Image
                    src={testimonials[activeTestimonial].avatar}
                    alt={testimonials[activeTestimonial].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-heading font-semibold text-white">
                  {testimonials[activeTestimonial].name}
                </h4>
                <p className="text-accent text-sm">
                  {testimonials[activeTestimonial].role}
                </p>
                <p className="text-gray-400 text-sm">
                  {testimonials[activeTestimonial].company}
                </p>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1">
                <Icon name="Quote" size={32} className="text-accent mb-4" />
                <blockquote className="text-lg text-gray-300 leading-relaxed mb-6">
                  {testimonials[activeTestimonial].content}
                </blockquote>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-accent/10 p-4 rounded-technical">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="Briefcase" size={16} className="text-accent" />
                      <span className="text-sm font-semibold text-white">Project</span>
                    </div>
                    <p className="text-sm text-gray-300">{testimonials[activeTestimonial].project}</p>
                  </div>
                  <div className="bg-system-healthy/10 p-4 rounded-technical">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="TrendingUp" size={16} className="text-system-healthy" />
                      <span className="text-sm font-semibold text-white">Impact</span>
                    </div>
                    <p className="text-sm text-gray-300">{testimonials[activeTestimonial].impact}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors duration-200"
            aria-label="Previous testimonial"
          >
            <Icon name="ChevronLeft" size={20} className="text-white" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors duration-200"
            aria-label="Next testimonial"
          >
            <Icon name="ChevronRight" size={20} className="text-white" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === activeTestimonial ? 'bg-accent' : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Summary Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-technical flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" size={28} className="text-accent" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <p className="text-gray-400">Colleagues & Clients</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-system-healthy/20 rounded-technical flex items-center justify-center mx-auto mb-4">
              <Icon name="Star" size={28} className="text-system-healthy" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
            <p className="text-gray-400">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-warm-gold/20 rounded-technical flex items-center justify-center mx-auto mb-4">
              <Icon name="Award" size={28} className="text-warm-gold" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <p className="text-gray-400">Project Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;