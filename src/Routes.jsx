import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import HomepageSystemEngineeringCommandCenter from "pages/homepage-system-engineering-command-center";
import AboutTheDigitalDetectiveStory from "pages/about-the-digital-detective-story";
import ProfessionalServicesConsultingCollaboration from "pages/professional-services-consulting-collaboration";
import TechnicalExpertiseInteractiveSkillShowcase from "pages/technical-expertise-interactive-skill-showcase";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<HomepageSystemEngineeringCommandCenter />} />
        <Route path="/homepage-system-engineering-command-center" element={<HomepageSystemEngineeringCommandCenter />} />
        <Route path="/about-the-digital-detective-story" element={<AboutTheDigitalDetectiveStory />} />
        <Route path="/professional-services-consulting-collaboration" element={<ProfessionalServicesConsultingCollaboration />} />
        <Route path="/technical-expertise-interactive-skill-showcase" element={<TechnicalExpertiseInteractiveSkillShowcase />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;