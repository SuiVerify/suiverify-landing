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
    <div>
      {/* Navigation Bar */}
      <div className="flex justify-center px-6">
        <GlassSurface
          width={800}
          height={80}
          borderRadius={50}
          opacity={0.2}
          brightness={90}
          blur={20}
          displace={1}
          backgroundOpacity={0.1}
          saturation={1.3}
          distortionScale={-80}
          redOffset={2}
          greenOffset={6}
          blueOffset={10}
          mixBlendMode="normal"
          className="manrope bg-secondary"
        >
          <div className=" w-full mx-auto flex items-center justify-between px-6 py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Image src="/logo.svg" alt="SuiVerify" width={96} height={40} className="h-auto" />
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#howitworks" className="text-charcoal-text hover:text-[#4DA2FF] font-semibold transition-colors">How It Works</a>
              <a href="#features" className="text-charcoal-text hover:text-[#4DA2FF] font-semibold transition-colors">Features</a>
            </div>

            {/* Right Side - Balance and Connect Wallet */}
            <div className="flex items-center space-x-4">
              {/* Waitlist Button */}
              <button onClick={handleWaitlistClick} className="cursor-pointer bg-secondary hover:bg-secondary/80 text-white font-semibold px-6 py-2 rounded-lg transition-colors">
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
