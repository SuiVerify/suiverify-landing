'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { colors } from '@/lib/brand';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: "Nautilus",
      description: "Nautilus for offchain computation and verifiability onchain - enabling secure identity verification processing",
      icon: (
        <img src="/nautilus.png" alt="Nautilus" className="w-8 h-8 object-contain" />
      ),
      gradient: colors.gradients.primary
    },
    {
      title: "Seal",
      description: "Seal for encrypting user KYC documents and can be then decrypted only by Government addresses using SEAL protocol",
      icon: (
        <img src="/Seal_logo.png" alt="Seal" className="w-8 h-8 object-contain rounded-full" />
      ),
      backgroundColor: colors.lightBlue
    },
    {
      title: "Walrus",
      description: "Walrus for storage of the documents to have our programmability of the data intact with decentralized storage",
      icon: (
        <img src="/walrus.svg" alt="Walrus" className="w-8 h-8 object-contain" />
      ),
      gradient: colors.gradients.primary
    }
  ];

  return (
    <section id='features' className="py-20 px-6" style={{ backgroundColor: colors.darkerNavy }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: colors.white }}>SuiVerify Makes Identity Verification Seamless</h2>
          <p className="text-xl" style={{ color: colors.lightBlue }}>Secure, Private, and Blockchain-Powered</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 justify-center items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="group relative backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden" style={{ backgroundColor: `${colors.darkNavy}E6` }}>
                <div className="absolute inset-0 rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-300" style={{ background: colors.gradients.primary }}></div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-3xl flex items-center justify-center shadow-xl" style={{ 
                      background: feature.gradient || feature.backgroundColor,
                      backgroundColor: feature.backgroundColor 
                    }}>
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold" style={{ color: colors.white }}>{feature.title}</h3>
                  </div>
                  <p className="text-lg leading-relaxed" style={{ color: colors.lightBlue }}>
                    {feature.description}
                  </p>
                </div>
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" style={{ background: `radial-gradient(circle at center, ${colors.primary}20 0%, transparent 70%)` }}></div>
              </div>
            ))}
          </div>

          {/* Right Content - SuiVerify Ecosystem Architecture */}
          <div className="flex justify-center relative">
            <div className="w-[500px] h-[500px] relative">
              {/* SUI Logo in Center */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
                <div className="w-24 h-24 rounded-full flex items-center justify-center shadow-xl border-2" style={{ background: colors.gradients.primary, borderColor: colors.white }}>
                  <img src="/suilogo.svg" alt="SUI" className="w-12 h-12 filter brightness-0 invert" />
                </div>
                <p className="text-sm font-semibold mt-2" style={{ color: colors.white }}>Sui</p>
              </div>

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {/* Line to Walrus */}
                <line
                  x1="250" y1="250"
                  x2="150" y2="350"
                  stroke={colors.primary}
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  opacity="0.6"
                />
                {/* Line to Seal */}
                <line
                  x1="250" y1="250"
                  x2="350" y2="350"
                  stroke={colors.primary}
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  opacity="0.6"
                />
                {/* Line to Nautilus */}
                <line
                  x1="250" y1="250"
                  x2="250" y2="120"
                  stroke={colors.primary}
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  opacity="0.6"
                />
              </svg>

              {/* Walrus - Storage Layer */}
              <div className="absolute bottom-8 left-8">
                <div className="backdrop-blur-sm rounded-2xl p-4 border shadow-lg max-w-[140px]" style={{ backgroundColor: colors.darkNavy, borderColor: colors.primary }}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: colors.primary }}>
                      <img src="/walrus.svg" alt="Walrus" className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-sm mb-1" style={{ color: colors.white }}>Walrus</h4>
                    <p className="text-xs" style={{ color: colors.lightBlue }}>Decentralized Storage</p>
                  </div>
                </div>
              </div>

              {/* Seal - Encryption Layer */}
              <div className="absolute bottom-8 right-8">
                <div className="backdrop-blur-sm rounded-2xl p-4 border shadow-lg max-w-[140px]" style={{ backgroundColor: colors.darkNavy, borderColor: colors.primary }}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: colors.lightBlue }}>
                      <img src="/Seal_logo.png" alt="Seal" className="w-8 h-8 object-contain rounded-full" />
                    </div>
                    <h4 className="font-bold text-sm mb-1" style={{ color: colors.white }}>Seal</h4>
                    <p className="text-xs" style={{ color: colors.lightBlue }}>Document Encryption & Decryption</p>
                  </div>
                </div>
              </div>

              {/* Nautilus - Computation Layer */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                <div className="backdrop-blur-sm rounded-2xl p-4 border shadow-lg max-w-[140px]" style={{ backgroundColor: colors.darkNavy, borderColor: colors.primary }}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: colors.primary }}>
                      <img src="/nautilus.png" alt="Nautilus" className="w-8 h-8 object-contain" />
                    </div>
                    <h4 className="font-bold text-sm mb-1" style={{ color: colors.white }}>Nautilus</h4>
                    <p className="text-xs" style={{ color: colors.lightBlue }}>Off-chain Computation</p>
                  </div>
                </div>
              </div>

              {/* Data Flow Indicators */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: colors.primary }}></div>
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: colors.lightBlue, animationDelay: '0.5s' }}></div>
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: colors.primary, animationDelay: '1s' }}></div>
                </div>
              </div>

              {/* Ecosystem Label */}
              <div className="absolute top-0 left-0 right-0 text-center">
                <div className="inline-block backdrop-blur-sm rounded-full px-4 py-2 border" style={{ backgroundColor: colors.darkNavy, borderColor: colors.primary }}>
                  <p className="text-sm font-semibold" style={{ color: colors.lightBlue }}>SuiVerify Ecosystem</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
