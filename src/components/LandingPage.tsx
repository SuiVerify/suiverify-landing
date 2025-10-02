'use client';

import React from 'react';
import { colors } from '@/lib/brand';
import HeroSection from './sections/HeroSection';
import HowItWorksSection from './sections/HowItWorksSection';
import FeaturesSection from './sections/FeaturesSection';
import Footer from './sections/Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.darkerNavy }}>
      {/* Hero Section with Light Rays */}
      <HeroSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
