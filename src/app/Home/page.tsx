'use client';

import LandingHeader from "@/components/ui/landingHeader";
import Hero from "@/components/subs/Hero";
import React from "react";
import HowItWorks from "@/components/subs/howitworks";
import Features from "@/components/subs/Features";
import FAQs from "@/components/subs/FAQs";
import Footer from "@/components/subs/Footer";

const HomePage = () => {
  return (
    <div className="">
      <div className="pt-6 fixed top-0 left-0 right-0 z-9999">
        <LandingHeader />
      </div>
      <Hero />
      <Features />
      <HowItWorks />
      <FAQs />
      <Footer />
    </div>
  );
};

export default HomePage;
