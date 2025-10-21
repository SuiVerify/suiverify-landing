import LandingHeader from "@/components/ui/landingHeader";
import Hero from "@/components/subs/Hero";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="">
      <div className="pt-6 fixed top-0 left-0 right-0 z-50">
        <LandingHeader />
      </div>
      <Hero />
    </div>
  );
};

export default page;
