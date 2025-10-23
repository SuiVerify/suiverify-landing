'use client';

import React, { useState } from 'react';
import { BadgeCheckIcon, UserCheckIcon } from 'lucide-react';
import CurvedLoop from '../CurvedLoop';
import { Button } from '@/components/ui/button';
import WaitlistDialog from '@/components/ui/WaitlistDialog';

type Props = {};

const Features = (props: Props) => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const handleWaitlistClick = () => {
    setIsWaitlistOpen(true);
  };

  const handleWaitlistClose = () => {
    setIsWaitlistOpen(false);
  };

  return (
    <section id="features" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-ghost-white outfit ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-base sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-charcoal-text sans-bartle">
            What Powers SuiVerify Under the Hood
          </h2>
          <p className="text-sm sm:text-xl text-charcoal-text/70 max-w-4xl mx-auto mb-6 sm:mb-8">
            Every feature in SuiVerify is built to do one thing: ensure identity security, regulatory compliance, and seamless verifiability.
          </p>
          <Button 
          variant="default" 
          size="lg" 
          onClick={handleWaitlistClick}
          className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
        >
          Join Waitlist
        </Button>
        </div>

     {/* Bento Grid Layout - 2x2 with varied sizes */}
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {/* Row 1: Small + Large */}
          {/* Card 01 - Nautilus (Small) */}
          <div className="sm:col-span-1 lg:col-span-1 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-[0.1em_0.1em_0_0_rgb(124_58_237)] hover:shadow-[0.15em_0.15em_0_0_rgb(124_58_237)] hover:-translate-x-[0.05em] hover:-translate-y-[0.05em] border border-primary/20 transition-all duration-300 group">
            <div className="flex gap-2 sm:gap-3 items-center mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary/20 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:bg-primary/30 transition-colors">
              <UserCheckIcon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary" />
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-bold text-primary">01</span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-charcoal-text">Nautilus</h3>
              </div>
            </div>
            <p className="text-charcoal-text/80 leading-relaxed text-sm sm:text-base lg:text-xl mb-3 sm:mb-4">
              Nautilus acts as the off-chain computation and verifiability layer. User KYC documents are verified off-chain within Nautilus, with status and proofs recorded on-chain for seamless protocol trust.
            </p>
            <div className="flex items-center text-xs sm:text-sm text-primary font-medium">
              <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
              Off-chain Verification
            </div>
          </div>

          {/* Card 02 - Seal (Large) */}
          <div className="sm:col-span-2 lg:col-span-2 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-[0.1em_0.1em_0_0_rgb(20_184_166)] hover:shadow-[0.15em_0.15em_0_0_rgb(20_184_166)] hover:-translate-x-[0.05em] hover:-translate-y-[0.05em] border border-secondary/20 transition-all duration-300 group">
            <div className="flex flex-col sm:flex-row items-start mb-4 sm:mb-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-secondary/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 group-hover:bg-secondary/30 transition-colors">
                <svg className="w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                </svg>
              </div>
              <div>
                <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary">02</span>
                <h3 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-charcoal-text sm:ml-2">Seal</h3>
              </div>
            </div>
            <p className="text-charcoal-text/80 leading-relaxed text-base sm:text-lg lg:text-3xl mb-3 sm:mb-4">
              Seal acts as the Encryption and Decryption layer. KYC documents are encrypted using Seal and access controls are provided via Smart contracts.
            </p>
            <div className="flex items-center text-xs sm:text-sm text-secondary font-medium">
              <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
              Encryption Layer
            </div>
          </div>

          {/* Row 2: Large + Small */}
          {/* Card 03 - Walrus (Large) */}
          <div className="sm:col-span-2 lg:col-span-2 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-[0.1em_0.1em_0_0_rgb(124_58_237)] hover:shadow-[0.15em_0.15em_0_0_rgb(124_58_237)] hover:-translate-x-[0.05em] hover:-translate-y-[0.05em] border border-primary/20 transition-all duration-300 group">
            <div className="flex flex-col sm:flex-row items-start mb-4 sm:mb-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-primary/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 group-hover:bg-primary/30 transition-colors">
                <svg className="w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/>
                </svg>
              </div>
              <div>
                <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary">03</span>
                <h3 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-charcoal-text sm:ml-2">Walrus</h3>
              </div>
            </div>
            <p className="text-charcoal-text/80 leading-relaxed text-base sm:text-lg lg:text-3xl mb-3 sm:mb-4">
              The encrypted documents (post verification, attestation) are stored in Walrus via our Walrus Publisher and Aggregator.
            </p>
            <div className="flex items-center text-xs sm:text-sm text-primary font-medium">
              <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
              Document Storage
            </div>
          </div>

          {/* Card 04 - SuiVerify-sdk (Small) */}
          <div className="sm:col-span-1 lg:col-span-1 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-[0.1em_0.1em_0_0_rgb(20_184_166)] hover:shadow-[0.15em_0.15em_0_0_rgb(20_184_166)] hover:-translate-x-[0.05em] hover:-translate-y-[0.05em] border border-secondary/20 transition-all duration-300 group">
            <div className="flex gap-2 sm:gap-3 items-center mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-secondary/20 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
              <BadgeCheckIcon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-secondary" />
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-bold text-secondary">04</span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-charcoal-text">SuiVerify-sdk</h3>
              </div>
            </div>
            <p className="text-charcoal-text/80 leading-relaxed text-sm sm:text-base lg:text-xl mb-3 sm:mb-4">
              Validates signatures against the latest Nautilus enclave, verifies offchain attestations, and checks PCR integrity—delivering reproducible builds and trusted compliance for protocols and government.
            </p>
            <div className="flex items-center text-xs sm:text-sm text-secondary font-medium">
              <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
              Signature Validation & Compliance
            </div>
          </div>
        </div>
      </div>

      {/* Waitlist Dialog */}
      <WaitlistDialog 
        isOpen={isWaitlistOpen} 
        onClose={handleWaitlistClose} 
      />

      <CurvedLoop marqueeText="• Powered by the SuiStack" className='outfit'/>
    </section>
  );
};

export default Features;