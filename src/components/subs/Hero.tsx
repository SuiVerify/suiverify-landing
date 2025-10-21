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
      <div className="w-full max-w-7xl flex justify-center items-center mx-auto z-50 px-6 pt-[15%]">
        {/* Left Content */}
        <div className="mx-auto outfit text-center z-50">
          <p className="text-7xl font-bold bg-gradient-to-r from-primary via-primary to-primary text-transparent bg-clip-text pb-4">Your Digital Identity.</p>
          <p className="text-3xl text-charcoal-text font-light">The Master Key for the Sui Ecosystem</p>
        </div>        
      </div>
        <div className="flex justify-end w-fit">
          <CardSwap
            width={450}
            height={400}
            cardDistance={50}
            verticalDistance={60}
            delay={3000}
            pauseOnHover={true}
            skewAmount={8}
            easing="elastic"
            onCardClick={() => {}}
          >
            <Card customClass="bg-primary text-white p-8 rounded-2xl shadow-2xl border border-primary/20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Nautilus Verification</h3>
              </div>
              <p className="text-base mb-4 opacity-90 leading-relaxed">
                Offchain Verifiable Computation of DID's in Nautilus. Advanced cryptographic proofs ensure your identity is verified without compromising privacy.
              </p>
              <div className="flex items-center text-sm opacity-75">
                <div className="w-2 h-2 bg-white/60 rounded-full mr-2"></div>
                <span>Zero-Knowledge Proofs</span>
              </div>
            </Card>
            
            <Card customClass="bg-primary text-white p-8 rounded-2xl shadow-2xl border border-primary/20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">SoulBound NFT</h3>
              </div>
              <p className="text-base mb-4 opacity-90 leading-relaxed">
                Receive your verified identity as a non-transferable DID NFT. Your digital identity is permanently bound to your wallet, ensuring authenticity.
              </p>
              <div className="flex items-center text-sm opacity-75">
                <div className="w-2 h-2 bg-white/60 rounded-full mr-2"></div>
                <span>Non-Transferable Identity</span>
              </div>
            </Card>
            
            <Card customClass="bg-primary text-white p-8 rounded-2xl shadow-2xl border border-accent/20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Privacy First</h3>
              </div>
              <p className="text-base mb-4 opacity-90 leading-relaxed">
                Your data is encrypted and stored securely in Walrus. End-to-end encryption ensures only you control your personal information.
              </p>
              <div className="flex items-center text-sm opacity-75">
                <div className="w-2 h-2 bg-white/60 rounded-full mr-2"></div>
                <span>End-to-End Encryption</span>
              </div>
            </Card>
          </CardSwap>
        </div>
    </div>
  );
};

export default Hero;
