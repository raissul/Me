import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PersonalElements = () => {
  const learningActivities = [
    {
      category: "Continuous Learning",
      items: [
        "AWS Solutions Architect Professional (2023)",
        "Kubernetes Certified Administrator (2022)",
        "Docker Certified Associate (2021)",
        "MongoDB Certified Developer (2020)"
      ],
      icon: "GraduationCap"
    },
    {
      category: "Conference Speaking",
      items: [
        "DevOps Days Dhaka 2023: \'Debugging in Production'",
        "FinTech Summit 2022: \'Building Resilient Payment Systems'",
        "Docker Meetup 2021: \'Container Security Best Practices'",
        "AWS User Group 2020: \'Infrastructure as Code'"
      ],
      icon: "Mic"
    },
    {
      category: "Mentorship",
      items: [
        "Mentored 12+ junior engineers in system design",
        "Led weekly debugging workshops for team",
        "Created internal training materials on incident response",
        "Volunteer mentor at local coding bootcamp"
      ],
      icon: "Users"
    },
    {
      category: "Community Contributions",
      items: [
        "Open source contributor to monitoring tools",
        "Technical blog with 50K+ monthly readers",
        "Stack Overflow top 5% contributor",
        "Local tech meetup organizer"
      ],
      icon: "Globe"
    }
  ];

  const personalInterests = [
    {
      title: "System Architecture Books",
      description: "Always reading the latest on distributed systems and scalability patterns",
      icon: "BookOpen"
    },
    {
      title: "Home Lab Experiments",
      description: "Running a personal Kubernetes cluster to test new technologies",
      icon: "Server"
    },
    {
      title: "Photography",
      description: "Capturing the beauty of technology and urban landscapes",
      icon: "Camera"
    },
    {
      title: "Chess",
      description: "Strategic thinking that translates well to system design",
      icon: "Brain"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-responsive-lg font-heading font-bold text-primary mb-4">
            Beyond the Code
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            My commitment to growth extends beyond technical skills to community building, knowledge sharing, and continuous learning.
          </p>
        </div>

        {/* Professional Development */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {learningActivities.map((activity, index) => (
            <div key={index} className="bg-surface p-8 rounded-technical shadow-elevation">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-technical flex items-center justify-center">
                  <Icon name={activity.icon} size={24} className="text-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary">
                  {activity.category}
                </h3>
              </div>
              <ul className="space-y-3">
                {activity.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-3">
                    <Icon name="CheckCircle" size={16} className="text-system-healthy mt-1 flex-shrink-0" />
                    <span className="text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Personal Interests */}
        <div className="bg-surface p-8 rounded-technical shadow-elevation mb-16">
          <h3 className="text-2xl font-heading font-bold text-primary mb-8 text-center">
            Personal Interests & Hobbies
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {personalInterests.map((interest, index) => (
              <div key={index} className="bg-card p-6 rounded-technical text-center hover-lift">
                <div className="w-16 h-16 bg-accent/10 rounded-technical flex items-center justify-center mx-auto mb-4">
                  <Icon name={interest.icon} size={28} className="text-accent" />
                </div>
                <h4 className="font-heading font-semibold text-primary mb-2">
                  {interest.title}
                </h4>
                <p className="text-sm text-text-secondary">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Environment Photos */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="relative group overflow-hidden rounded-technical">
            <Image
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop"
              alt="Sojib working in server room"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
              <p className="text-white text-sm">Server room diagnostics</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-technical">
            <Image
              src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=300&fit=crop"
              alt="Sojib at monitoring dashboard"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
              <p className="text-white text-sm">System monitoring & analysis</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-technical">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
              alt="Sojib presenting at conference"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
              <p className="text-white text-sm">Conference presentation</p>
            </div>
          </div>
        </div>

        {/* Philosophy Quote */}
        <div className="text-center">
          <div className="bg-accent/5 p-8 rounded-technical border-l-4 border-accent max-w-4xl mx-auto">
            <Icon name="Quote" size={32} className="text-accent mx-auto mb-4" />
            <blockquote className="text-xl font-heading text-primary italic mb-4">
              "Technology is best when it brings people together. In fintech, we're not just building systems—we're building trust, enabling dreams, and creating the financial infrastructure that powers human progress."
            </blockquote>
            <p className="text-text-secondary">
              — Sojib Hossain, on the intersection of technology and human impact
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalElements;