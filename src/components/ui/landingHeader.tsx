'use client';

import Image from 'next/image';
import GlassSurface from '../GlassSurface';

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
      <div className="flex justify-center px-6 outfit font-bold relative z-20">
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
          <div className=" w-full mx-auto flex items-center justify-between px-6 py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Image src="/head_logo.png" alt="SuiVerify" width={50} height={40} className="h-auto rounded-lg" />
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#howitworks" className="text-charcoal-text hover:text-primary transition-colors">How It Works</a>
              <a href="#features" className="text-charcoal-text hover:text-primary transition-colors">Features</a>
            </div>

            {/* Right Side - Balance and Connect Wallet */}
            <div className="flex items-center space-x-4">
              {/* Waitlist Button */}
              <button onClick={handleWaitlistClick} className="cursor-pointer bg-primary hover:bg-primary/80 text-white px-6 py-2 rounded-lg transition-colors">
                Waitlist
              </button>

              {/* Mobile Menu Button */}
              <button className="md:hidden p-2">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
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
