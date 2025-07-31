import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    {
      name: 'Command Center',
      path: '/homepage-system-engineering-command-center',
      icon: 'Monitor'
    },
    {
      name: 'Technical Expertise',
      path: '/technical-expertise-interactive-skill-showcase',
      icon: 'Code'
    },
    {
      name: 'Project Showcase',
      path: '/project-showcase-fintech-case-studies',
      icon: 'FolderOpen'
    },
    {
      name: 'Professional Services',
      path: '/professional-services-consulting-collaboration',
      icon: 'Users'
    },
    {
      name: 'About',
      path: '/about-the-digital-detective-story',
      icon: 'User'
    },
    {
      name: 'Contact',
      path: '/contact-multi-channel-connection-hub',
      icon: 'MessageSquare'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-header transition-all duration-300 ${
        isScrolled 
          ? 'bg-card/95 backdrop-blur-md shadow-elevation border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-6 lg:px-8">
          {/* Logo Section */}
          <Link 
            to="/homepage-system-engineering-command-center" 
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200"
            onClick={closeMenu}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-command-gradient rounded-technical flex items-center justify-center shadow-command">
                <Icon name="Terminal" size={20} color="white" strokeWidth={2.5} />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-system-healthy rounded-full animate-pulse-system"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-heading font-bold text-primary">
                SojibTech
              </h1>
              <p className="text-xs text-text-secondary font-mono">
                Digital Detective
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-technical text-sm font-medium transition-all duration-200 hover:bg-surface ${
                  isActivePath(item.path)
                    ? 'bg-accent/10 text-accent border border-accent/20' :'text-text-secondary hover:text-primary'
                }`}
              >
                <Icon name={item.icon} size={16} />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              iconName="Calendar"
              iconPosition="left"
              className="cta-text"
              onClick={() => window.location.href = '/contact-multi-channel-connection-hub'}
            >
              Schedule Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-technical hover:bg-surface transition-colors duration-200 focus-ring"
            aria-label="Toggle navigation menu"
          >
            <Icon 
              name={isMenuOpen ? "X" : "Menu"} 
              size={24} 
              className="text-primary"
            />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'max-h-screen opacity-100 visible' :'max-h-0 opacity-0 invisible'
          }`}
        >
          <div className="bg-card border-t border-border shadow-elevation">
            <nav className="px-6 py-4 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-technical text-base font-medium transition-all duration-200 ${
                    isActivePath(item.path)
                      ? 'bg-accent/10 text-accent border border-accent/20' :'text-text-secondary hover:text-primary hover:bg-surface'
                  }`}
                >
                  <Icon name={item.icon} size={20} />
                  <span>{item.name}</span>
                </Link>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-border mt-4">
                <Button
                  variant="default"
                  size="default"
                  iconName="Calendar"
                  iconPosition="left"
                  fullWidth
                  className="cta-text"
                  onClick={() => {
                    closeMenu();
                    window.location.href = '/contact-multi-channel-connection-hub';
                  }}
                >
                  Schedule Technical Consultation
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* System Status Indicator */}
      <div className="absolute top-full left-6 transform -translate-y-1/2 hidden lg:block">
        <div className="flex items-center space-x-2 bg-card px-3 py-1 rounded-full shadow-command border border-border">
          <div className="w-2 h-2 bg-system-healthy rounded-full animate-pulse-system"></div>
          <span className="text-xs font-mono text-text-secondary">
            All Systems Operational
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;