"use client";

import Image from "next/image";
import GlassSurface from "../GlassSurface";
import { Button } from "./button";
import { useState } from "react";

interface LandingHeaderProps {
  onWaitlistClick?: () => void;
}

const LandingHeader: React.FC<LandingHeaderProps> = ({ onWaitlistClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleWaitlistClick = () => {
    if (onWaitlistClick) {
      onWaitlistClick();
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative">
      {/* Navigation Bar */}
      <div className="flex justify-center px-4 sm:px-6 outfit font-bold relative z-50">
        <GlassSurface
          width={1000}
          height={80}
          borderRadius={20}
          opacity={0.3}
          brightness={95}
          blur={25}
          displace={1.5}
          backgroundOpacity={0.15}
          saturation={1.5}
          distortionScale={-100}
          redOffset={3}
          greenOffset={8}
          blueOffset={12}
          mixBlendMode="normal"
          className="shadow-lg"
        >
          <div className="w-full mx-auto flex items-center justify-between px-3 sm:px-6 py-3 sm:py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Image
                src="/head_logo.png"
                alt="SuiVerify"
                width={40}
                height={32}
                className="h-auto rounded-lg"
              />
            </div>

            {/* Navigation Links */}
            <div className="hidden sm:flex items-center space-x-4 lg:space-x-8">
              <a
                href="#howitworks"
                className="text-sm lg:text-base text-charcoal-text hover:text-primary transition-colors"
              >
                How It Works
              </a>
              <a
                href="#features"
                className="text-sm lg:text-base text-charcoal-text hover:text-primary transition-colors"
              >
                Features
              </a>
              <a
                href="https://suiverify.gitbook.io/suiverify/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm lg:text-base text-charcoal-text hover:text-primary transition-colors"
              >
                Documentation
              </a>
            </div>

            {/* Right Side - Balance and Connect Wallet */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Waitlist Button */}
              <Button onClick={handleWaitlistClick} variant="default" size="sm" className="text-xs sm:text-sm px-3 sm:px-4 py-2 hidden md:block">
                Join Waitlist
              </Button>

              {/* Mobile Menu Button */}
              <button 
                onClick={toggleMobileMenu}
                className="sm:hidden p-2 text-charcoal-text hover:text-primary transition-colors"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>
          </div>
        </GlassSurface>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 right-0 z-40 bg-white/95 backdrop-blur-md border border-white/30 rounded-b-2xl shadow-lg mx-4 mt-2 outfit">
          <div className="px-4 py-6 space-y-4">
            <a
              href="#howitworks"
              className="block text-base text-charcoal-text hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#features"
              className="block text-base text-charcoal-text hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="https://suiverify.gitbook.io/suiverify/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-base text-charcoal-text hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Documentation
            </a>
            <div className="pt-4 border-t border-primary/20">
              <Button 
                onClick={() => {
                  handleWaitlistClick();
                  setIsMobileMenuOpen(false);
                }} 
                variant="default" 
                size="sm" 
                className="w-full justify-center"
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingHeader;
