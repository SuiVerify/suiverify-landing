'use client';

import Link from 'next/link';

const LandingHeader = () => {
  const handleLaunchApp = () => {
    // For now, we'll just link to the main app
    window.open('http://localhost:5173', '_blank');
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="bg-transparent backdrop-blur-sm border border-gray-200/20 px-6 py-4 max-w-[60%] mx-auto rounded-full">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/logo.svg" alt="SuiVerify" className="h-auto w-24" />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#howitworks" className="text-white hover:text-[#4DA2FF] font-semibold transition-colors">How It Works</a>
            <a href="#features" className="text-white hover:text-[#4DA2FF] font-semibold transition-colors">Features</a>
          </div>

          {/* Right Side - Balance and Connect Wallet */}
          <div className="flex items-center space-x-4">
            {/* Connect Wallet Button */}
            <button onClick={handleLaunchApp} className="cursor-pointer bg-[#2d9eff] hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors">
              Launch App
            </button>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default LandingHeader;
