import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'Do you work with remote teams exclusively?',
      answer: `I work with both remote and on-site teams, with a preference for remote collaboration due to its efficiency and flexibility. My remote work setup includes secure VPN access, screen sharing capabilities, and real-time collaboration tools. For critical projects, I can arrange on-site visits when necessary, particularly for initial discovery phases or complex system migrations.`
    },
    {
      id: 2,
      question: 'How do you handle confidentiality and data security?',
      answer: `All client engagements begin with a comprehensive NDA and security agreement. I maintain SOC 2 Type II compliance standards, use encrypted communication channels, and follow strict data handling procedures. Your code and sensitive information never leaves your secure environment - I work within your existing security protocols and can provide additional security certifications upon request.`
    },
    {
      id: 3,
      question: 'What is your typical project scope and duration?',
      answer: `Project scopes vary from 1-week diagnostic assessments to 6-month comprehensive system overhauls. Most engagements fall into three categories: Quick consultations (1-5 days), System optimization projects (2-8 weeks), and Long-term architectural partnerships (3-12 months). Each project includes clear milestones, deliverables, and success metrics defined upfront.`
    },
    {
      id: 4,
      question: 'How do you integrate with existing development teams?',
      answer: `I follow your existing development workflows, coding standards, and communication protocols. This includes participating in daily standups, code reviews, and sprint planning as needed. I provide knowledge transfer throughout the engagement, ensuring your team can maintain and extend any solutions implemented. Documentation and training are integral parts of every project.`
    },
    {
      id: 5,
      question: 'What technologies and platforms do you specialize in?',
      answer: `My expertise spans modern web technologies (React, Node.js, Python), cloud platforms (AWS, GCP, Azure), containerization (Docker, Kubernetes), and database systems (PostgreSQL, MongoDB, Redis). I specialize in fintech-specific challenges including high-frequency trading systems, payment processing, and regulatory compliance requirements.`
    },
    {
      id: 6,
      question: 'How do you handle project changes and scope adjustments?',
      answer: `All projects include a structured change management process. Minor adjustments within the original scope are handled seamlessly. For significant changes, I provide impact assessments including timeline and cost implications within 24 hours. This ensures transparency and allows for informed decision-making without project delays.`
    },
    {
      id: 7,
      question: 'What support do you provide after project completion?',
      answer: `Every project includes a post-completion support period (typically 2-4 weeks) for questions and minor adjustments. I also offer ongoing maintenance retainers for critical systems, emergency support packages, and periodic health checks. Long-term partnerships include quarterly system reviews and proactive optimization recommendations.`
    },
    {
      id: 8,
      question: 'How do you measure and report project success?',
      answer: `Success metrics are defined at project initiation and tracked throughout the engagement. These typically include performance improvements (response times, throughput), system reliability metrics (uptime, error rates), and business impact measures (cost savings, efficiency gains). Regular progress reports and final success summaries are provided for all stakeholders.`
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-heading font-bold text-primary mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Common questions about my consulting approach, processes, and collaboration methods.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="bg-card rounded-technical border border-border shadow-elevation overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-surface transition-colors duration-200 focus-ring"
            >
              <h3 className="text-lg font-medium text-primary pr-4">
                {faq.question}
              </h3>
              <Icon
                name={openFAQ === faq.id ? "ChevronUp" : "ChevronDown"}
                size={20}
                className="text-text-secondary flex-shrink-0"
              />
            </button>
            
            <div
              className={`transition-all duration-300 ease-in-out ${
                openFAQ === faq.id
                  ? 'max-h-96 opacity-100' :'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              <div className="px-6 pb-4 border-t border-border">
                <p className="text-text-secondary leading-relaxed pt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-surface rounded-technical p-6 text-center">
        <Icon name="MessageCircle" size={32} className="text-accent mx-auto mb-3" />
        <h3 className="text-lg font-heading font-semibold text-primary mb-2">
          Still have questions?
        </h3>
        <p className="text-text-secondary mb-4">
          I'm happy to discuss your specific needs and answer any additional questions.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="mailto:sojib@sojibtech.com"
            className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors duration-200"
          >
            <Icon name="Mail" size={16} />
            <span>sojib@sojibtech.com</span>
          </a>
          <a
            href="https://linkedin.com/in/sojibhossain"
            className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors duration-200"
          >
            <Icon name="Linkedin" size={16} />
            <span>LinkedIn Message</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;