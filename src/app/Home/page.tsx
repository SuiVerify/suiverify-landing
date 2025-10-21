'use client';

import LandingHeader from "@/components/ui/landingHeader";
import Hero from "@/components/subs/Hero";
import React, { useState } from "react";

type Props = {};

const page = (props: Props) => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const handleWaitlistClick = () => {
    setIsWaitlistOpen(true);
  };

  return (
    <div className="">
      <div className="pt-6 fixed top-0 left-0 right-0 z-50">
        <LandingHeader onWaitlistClick={handleWaitlistClick} />
      </div>
      <Hero 
        isWaitlistOpen={isWaitlistOpen} 
        onWaitlistClose={() => setIsWaitlistOpen(false)}
        onWaitlistClick={handleWaitlistClick}
      />
    </div>
  );
};

export default page;
