'use client';

import LandingHeader from "@/components/ui/landingHeader";
import Hero from "@/components/subs/Hero";
import React, { useState } from "react";
import HowItWorks from "@/components/subs/howitworks";
import Features from "@/components/subs/Features";
import FAQs from "@/components/subs/FAQs";
import Footer from "@/components/subs/Footer";

const HomePage = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const handleWaitlistClick = () => {
    setIsWaitlistOpen(true);
  };

  return (
    <div className="">
      <div className="pt-6 fixed top-0 left-0 right-0 z-9999">
        <LandingHeader onWaitlistClick={handleWaitlistClick} />
      </div>
      <Hero 
        isWaitlistOpen={isWaitlistOpen} 
        onWaitlistClose={() => setIsWaitlistOpen(false)}
        onWaitlistClick={handleWaitlistClick}
      />
      <Features />
      <HowItWorks />
      <FAQs />
      <Footer />
    </div>
  );
};

export default HomePage;
