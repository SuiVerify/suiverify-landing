'use client';

import React from "react";
import CardSwap, { Card } from "@/components/CardSwap";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="min-h-screen w-full bg-[#f8fafc] relative overflow-hidden">
      {/* Top Fade Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
          linear-gradient(to right, #e2e8f0 1px, transparent 1px),
          linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
        `,
          backgroundSize: "20px 30px",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
        }}
      />
      
      {/* Main Content */}
      <div className="w-full max-w-7xl flex justify-center items-center mx-auto z-50 px-6 pt-[10%]">
        {/* Left Content */}
        <div className="mx-auto outfit text-center z-50">
          <p className="text-7xl font-bold bg-gradient-to-r from-primary via-primary to-primary text-transparent bg-clip-text pb-4">Your Digital Identity.</p>
          <p className="text-5xl">The Master Key for the Sui Ecosystem</p>
        </div>        
      </div>
        <div className="flex justify-end w-fit">
          <CardSwap
            width={400}
            height={300}
            cardDistance={50}
            verticalDistance={60}
            delay={3000}
            pauseOnHover={true}
            skewAmount={8}
            easing="elastic"
            onCardClick={() => {}}
          >
            <Card customClass="bg-gradient-to-br from-primary to-secondary text-white p-6">
              <h3 className="text-xl font-bold mb-3">Nautilus Verification</h3>
              <p className="text-sm opacity-90">Offchain Verifiable Computation of DID's in Nautilus</p>
            </Card>
            <Card customClass="bg-gradient-to-br from-secondary to-primary text-white p-6">
              <h3 className="text-xl font-bold mb-3">SoulBound NFT</h3>
              <p className="text-sm opacity-90">Receive your verified identity as a DID NFT</p>
            </Card>
            <Card customClass="bg-gradient-to-br from-primary to-accent text-white p-6">
              <h3 className="text-xl font-bold mb-3">Privacy First</h3>
              <p className="text-sm opacity-90">Your data is encrypted and stored securely in Walrus</p>
            </Card>
          </CardSwap>
        </div>
    </div>
  );
};

export default Hero;
