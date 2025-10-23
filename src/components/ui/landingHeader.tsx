"use client";

import Image from "next/image";
import GlassSurface from "../GlassSurface";
import { Button } from "./button";

interface LandingHeaderProps {
  onWaitlistClick?: () => void;
}

const LandingHeader: React.FC<LandingHeaderProps> = ({ onWaitlistClick }) => {
  const handleWaitlistClick = () => {
    if (onWaitlistClick) {
      onWaitlistClick();
    }
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
                className="h-auto rounded-lg sm:w-[50px] sm:h-[40px]"
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
              <Button onClick={handleWaitlistClick} variant="default" size="sm" className="text-xs sm:text-sm px-3 sm:px-4 py-2">
                Join Waitlist
              </Button>

              {/* Mobile Menu Button */}
              <button className="sm:hidden p-2">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </GlassSurface>
      </div>
    </div>
  );
};

export default LandingHeader;
