import React from 'react';
import Icon from '../../../components/AppIcon';

const OriginStory = () => {
  const milestones = [
    {
      year: "2016",
      title: "The Spark",
      description: "Discovered the thrill of system optimization during my first internship when I reduced server response time by 60% through database query optimization.",
      icon: "Zap"
    },
    {
      year: "2018",
      title: "First Major Debug",
      description: "Spent 72 hours straight debugging a critical production issue that was causing intermittent payment failures. The root cause was a race condition in concurrent transactions.",
      icon: "Bug"
    },
    {
      year: "2020",
      title: "Fintech Calling",
      description: "Joined my first fintech startup and fell in love with the intersection of technology and finance. Every line of code directly impacted people\'s financial lives.",
      icon: "TrendingUp"
    },
    {
      year: "2022",
      title: "The Detective Emerges",
      description: "Earned the nickname \'Digital Detective\' after solving a series of complex infrastructure mysteries that had stumped multiple teams for months.",
      icon: "Search"
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-responsive-lg font-heading font-bold text-primary mb-4">
            The Origin Story
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Every great detective has an origin story. Mine began with curiosity, was shaped by challenges, and continues to evolve with each complex problem I solve.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent/20 hidden lg:block"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Content */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="bg-card p-8 rounded-technical shadow-elevation hover-lift">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-technical flex items-center justify-center">
                        <Icon name={milestone.icon} size={24} className="text-accent" />
                      </div>
                      <div>
                        <span className="text-2xl font-heading font-bold text-accent">{milestone.year}</span>
                        <h3 className="text-xl font-heading font-semibold text-primary">{milestone.title}</h3>
                      </div>
                    </div>
                    <p className="text-text-secondary leading-relaxed">{milestone.description}</p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:flex w-2/12 justify-center">
                  <div className="w-6 h-6 bg-accent rounded-full border-4 border-surface shadow-command"></div>
                </div>

                {/* Spacer */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OriginStory;