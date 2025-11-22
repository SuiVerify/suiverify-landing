'use client';

import React from "react";
import CardSwap, { Card } from "@/components/CardSwap";
import { Button } from "@/components/ui/button";

const Hero = () => {


  return (
    <div className="min-h-screen flex items-center justify-center w-full bg-gradient-to-tl from-secondary/40 via-ghost-white to-ghost-white relative overflow-hidden">
      {/* Top Fade Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
          linear-gradient(to right, #DEE2E6 1px, transparent 1px),
          linear-gradient(to bottom, #DEE2E6 1px, transparent 1px)
        `,
          backgroundSize: "20px 30px",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
        }}
      />
      
      {/* Main Content */}
      <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-center items-center mx-auto z-50 px-4 sm:px-6  gap-8 lg:gap-12">
        {/* Left Content */}
        <div className="mx-auto outfit text-center lg:text-left z-10 max-w-3xl lg:max-w-none lg:flex-1">
          <p className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-primary to-primary text-transparent bg-clip-text pb-2 sans-bartle">Your Digital Identity.</p>
          <p className="text-sm sm:text-3xl md:text-4xl text-charcoal-text font-light sans-bartle pt-2">One Identity Layer to Bridge Old and New Internets</p>
          <p className="text-sm sm:text-lg text-charcoal-text font-light pt-4 sm:pt-6">Verify your identity once, claim your private digital identity credential, and unlock seamless access to services and applications across the entire ecosystem. No more repeated verification.</p>
          
          {/* Action Buttons */}
          <div className="hidden md:flex flex-col sm:flex-row gap-4 pt-6 sm:pt-8 justify-center lg:justify-start ">
            <a
              href="https://app.suiverify.xyz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="default" size="lg" className="w-full sm:w-auto">
                Get Started
              </Button>
            </a>
            <a
              href="https://explorer.suiverify.xyz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                View Explorer
              </Button>
            </a>
          </div>
          <div className="md:hidden flex flex-col sm:flex-row gap-4 pt-6 sm:pt-8 justify-center lg:justify-start ">
            <a
              href="https://explorer.suiverify.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="outline" size="sm" className="w-full sm:w-auto">
                View Explorer
              </Button>
            </a>
            <a
              href="https://app.suiverify.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="default" size="sm" className="w-full sm:w-auto">
                Get Started
              </Button>
            </a>
          </div>
        </div>        
        
        {/* Right Content - CardSwap */}
        <div className="flex justify-center lg:justify-end w-full lg:w-auto lg:flex-1">
          <CardSwap
            width={450}
            height={400}
            cardDistance={40}
            verticalDistance={50}
            delay={3000}
            pauseOnHover={true}
            skewAmount={6}
            easing="elastic"
            onCardClick={() => {}}
          >
            <Card customClass="bg-secondary text-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-2xl border border-secondary-dark">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">Nautilus Verification</h3>
              </div>
              <p className="text-sm sm:text-base mb-3 sm:mb-4 opacity-90 leading-relaxed">
                Secure identity verification powered by Nautilus. Advanced cryptographic proofs ensure your identity is verified without compromising privacy.
              </p>
              {/* <div className="flex items-center text-sm opacity-75">
                <div className="w-2 h-2 bg-white/60 rounded-full mr-2"></div>
                <span>Zero-Knowledge Proofs</span>
              </div> */}
            </Card>
            
            <Card customClass="bg-primary text-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-2xl border border-primary-dark">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">SoulBound NFT</h3>
              </div>
              <p className="text-sm sm:text-base mb-3 sm:mb-4 opacity-90 leading-relaxed">
                Receive your verified identity as a secure, non-transferable digital credential. Your identity is permanently linked to your account, ensuring authenticity and preventing fraud.
              </p>
              <div className="flex items-center text-xs sm:text-sm opacity-75">
                <div className="w-2 h-2 bg-white/60 rounded-full mr-2"></div>
                <span>Non-Transferable Identity</span>
              </div>
            </Card>
            
            <Card customClass="bg-secondary text-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-2xl border border-secondary-dark">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">Privacy First</h3>
              </div>
              <p className="text-sm sm:text-base mb-3 sm:mb-4 opacity-90 leading-relaxed">
                Your data is encrypted and stored securely in Walrus. End-to-end encryption ensures only you control your personal information.
              </p>
              <div className="flex items-center text-xs sm:text-sm opacity-75">
                <div className="w-2 h-2 bg-white/60 rounded-full mr-2"></div>
                <span>End-to-End Encryption</span>
              </div>
            </Card>
          </CardSwap>
        </div>

    </div>
    </div>
  );
};

export default Hero;
