'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CardSwap, { Card } from "@/components/CardSwap";
import { Button } from "@/components/ui/button";
import WaitlistDialog from "@/components/ui/WaitlistDialog";

type Props = {
  isWaitlistOpen?: boolean;
  onWaitlistClose?: () => void;
  onWaitlistClick?: () => void;
};

const Hero = ({ isWaitlistOpen = false, onWaitlistClose, onWaitlistClick }: Props) => {
  const [isAccessOpen, setIsAccessOpen] = useState(false);

  const handleWaitlistClick = () => {
    if (onWaitlistClick) {
      onWaitlistClick();
    }
  };

  const handleAccessClick = () => {
    setIsAccessOpen(true);
  };

  const handleAccessSubmit = () => {
    // Clear any existing auth data to prevent redirect loops
    if (typeof window !== 'undefined') {
      localStorage.removeItem('suiverify_auth');
      localStorage.removeItem('suiverify_login_attempts');
    }
    // Route to auth page on same domain (via Vercel rewrite)
    window.location.href = '/auth';
  };

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
          <p className="text-sm sm:text-3xl md:text-4xl text-charcoal-text font-light sans-bartle pt-2">The Master Key for the Sui Ecosystem</p>
          <p className="text-sm sm:text-lg text-charcoal-text font-light pt-4 sm:pt-6">Verify once, mint your private soul-bound DID, and unlock seamless access to protocols and dApps across the entire ecosystem. No more repeated KYC.</p>
          
          {/* Action Buttons */}
          <div className="hidden md:flex flex-col sm:flex-row gap-4 pt-6 sm:pt-8 justify-center lg:justify-start ">
            <Button variant="default" size="lg" onClick={handleWaitlistClick} className="w-full sm:w-auto">
              Request Access
            </Button>
            <Button variant="outline" size="lg" onClick={handleAccessClick} className="w-full sm:w-auto">
              I Have Access
            </Button>
          </div>
          <div className="md:hidden flex flex-col sm:flex-row gap-4 pt-6 sm:pt-8 justify-center lg:justify-start ">
          <Button variant="outline" size="sm" onClick={handleAccessClick} className="w-full sm:w-auto">
              I Have Access
            </Button>
            <Button variant="default" size="sm" onClick={handleWaitlistClick} className="w-full sm:w-auto">
              Request Access
            </Button>
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
                Offchain Verifiable Computation of DID&apos;s in Nautilus. Advanced cryptographic proofs ensure your identity is verified without compromising privacy.
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
                Receive your verified identity as a non-transferable DID NFT. Your digital identity is permanently bound to your wallet, ensuring authenticity.
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

      {/* Waitlist Dialog */}
      <WaitlistDialog 
        isOpen={isWaitlistOpen} 
        onClose={onWaitlistClose || (() => {})} 
      />

      {/* Access Modal */}
      <AnimatePresence>
        {isAccessOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setIsAccessOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full mx-4 shadow-2xl relative border-[3px] border-primary outfit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsAccessOpen(false)}
                className="absolute top-4 right-4 text-charcoal-text/60 hover:text-charcoal-text transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Header */}
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2 text-charcoal-text">
                  Access <span className="text-primary">SuiVerify</span>
                </h2>
                <p className="text-sm text-charcoal-text/70">
                  You already have access to our platform
                </p>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div className="text-center">
                  <p className="mb-4 text-charcoal-text/80">
                    Great! You already have access to SuiVerify. Click below to proceed to the authentication page and start using our digital identity infrastructure.
                  </p>
                </div>

                {/* Access Button */}
                <div className="flex justify-center">
                  <Button 
                    variant="default" 
                    size="lg" 
                    onClick={handleAccessSubmit}
                    className="w-full"
                  >
                    Proceed to Authentication
                  </Button>
                </div>

                {/* Footer Note */}
                <div className="text-center pt-4 border-t border-primary/40">
                  <p className="text-xs text-charcoal-text/60">
                    You&apos;ll be redirected to our secure authentication system
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </div>
  );
};

export default Hero;
