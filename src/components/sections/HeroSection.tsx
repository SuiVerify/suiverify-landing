'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LightRays from '../ui/lightRays';
import LandingHeader from '../ui/landingHeader';
import AuthDialog from '../ui/AuthDialog';
import { colors } from '@/lib/brand';

const HeroSection: React.FC = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const handleAuthClick = () => {
    setIsAuthOpen(true);
  };

  const handleAuthSuccess = () => {
    console.log('Authentication successful');
  };

  return (
    <div className="w-full h-screen relative" style={{ background: colors.gradients.hero }}>
      <div className="absolute top-5 w-full z-20">
        <LandingHeader onWaitlistClick={handleAuthClick} />
      </div>

      <LightRays
        raysOrigin="top-center"
        raysColor={colors.primary}
        raysSpeed={1.2}
        lightSpread={1.0}
        rayLength={1.4}
        followMouse={true}
        mouseInfluence={0.12}
        noiseAmount={0.08}
        distortion={0.03}
        className="custom-rays"
      />

      {/* Hero Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center px-6">
        <div className="text-center text-white z-10 max-w-6xl mx-auto">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-2"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="drop-shadow-2xl"
                style={{ color: colors.primary }}
              >
                Sui
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="drop-shadow-2xl"
                style={{ color: colors.white }}
              >
                Verify
              </motion.span>
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="w-32 h-1 mx-auto rounded-full origin-center"
              style={{ background: colors.gradients.primary }}
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 drop-shadow-lg"
            style={{ color: colors.lightBlue }}
          >
            Digital Identity Infrastructure
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-lg md:text-xl lg:text-2xl mb-3 max-w-4xl mx-auto leading-relaxed"
            style={{ color: colors.lightBlue }}
          >
            Secure, Private, and Blockchain-Powered Identity Verification on Sui Ecosystem
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAuthClick}
              className="font-bold px-12 py-3 cursor-pointer rounded-xl transition-all duration-300"
              style={{
                background: colors.primary,
                color: colors.white,
                border: `2px solid ${colors.primary}`
              }}
            >
              Access Dashboard
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://suiverify.gitbook.io/suiverify/" target="_blank" rel="noopener noreferrer"
              className="font-bold px-12 py-3 cursor-pointer rounded-xl transition-all duration-300"
              style={{
                border: `2px solid ${colors.lightBlue}`,
                color: colors.lightBlue,
                backgroundColor: 'transparent',
                textDecoration: 'none'
              }}
            >
              Learn More
            </motion.a>
          </motion.div>

          {/* Feature Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {[
              {
                title: "Nautilus Verification",
                description: "Offchain Verifiable Computation of DID's in Nautilus",
                icon: (
                  <svg className="w-8 h-8" style={{ color: colors.primary }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                ),
                delay: 0.1
              },
              {
                title: "SoulBound NFT",
                description: "Receive your verified identity as a DID NFT",
                icon: (
                  <svg className="w-8 h-8" style={{ color: colors.primary }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                ),
                delay: 0.2
              },
              {
                title: "Privacy First",
                description: "Your data is encrypted and stored securely in Walrus",
                icon: (
                  <svg className="w-8 h-8" style={{ color: colors.primary }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                ),
                delay: 0.3
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: 1.8 + feature.delay, type: "spring", stiffness: 100 }}
                whileHover={{ 
                  y: -12, 
                  rotateX: 5,
                  transition: { duration: 0.3 }
                }}
                className="group perspective-1000"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="relative overflow-hidden rounded-3xl p-8 transition-all duration-500 transform-gpu" 
                     style={{ 
                       background: `linear-gradient(135deg, ${colors.darkNavy} 0%, ${colors.darkerNavy} 100%)`,
                       border: `1px solid ${colors.primary}40`
                     }}>
                  
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500" 
                       style={{ 
                         background: `radial-gradient(circle at 50% 50%, ${colors.primary}60 0%, transparent 70%)` 
                       }}></div>
                  
                  {/* Floating Particles Effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full opacity-30"
                        style={{ backgroundColor: colors.primary, left: `${20 + i * 15}%`, top: `${30 + i * 10}%` }}
                        animate={{
                          x: [0, 100, 0],
                          y: [0, -50, 0],
                          opacity: [0.3, 0.8, 0.3],
                          scale: [0.5, 1.2, 0.5]
                        }}
                        transition={{
                          duration: 4 + i * 0.5,
                          repeat: Infinity,
                          delay: i * 0.3,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>

                  <div className="relative z-10">
                    {/* Icon with Glow Effect */}
                    <motion.div 
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.8, delay: 2.0 + feature.delay, type: "spring", stiffness: 150 }}
                      className="relative mb-6"
                    >
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto relative overflow-hidden"
                           style={{ 
                             background: `linear-gradient(135deg, ${colors.primary}20, ${colors.primary}40)`,
                             boxShadow: `0 0 30px ${colors.primary}40`
                           }}>
                        <motion.div
                          className="absolute inset-0 rounded-2xl"
                          style={{ background: `linear-gradient(135deg, ${colors.primary}60, transparent)` }}
                          animate={{ 
                            opacity: [0.3, 0.8, 0.3],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        <div className="relative z-10" style={{ color: colors.primary }}>
                          {feature.icon}
                        </div>
                      </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.2 + feature.delay, duration: 0.6 }}
                    >
                      <h3 className="text-xl font-bold mb-3 text-center bg-gradient-to-r bg-clip-text text-transparent"
                          style={{ 
                            backgroundImage: `linear-gradient(135deg, ${colors.white}, ${colors.lightBlue})`
                          }}>
                        {feature.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-center opacity-80" style={{ color: colors.lightBlue }}>
                        {feature.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-4 right-4 w-8 h-8 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                    <div className="w-full h-full border-2 border-r-0 border-b-0 rounded-tl-lg" style={{ borderColor: colors.primary }}></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 border-2 rounded-full flex justify-center"
              style={{ borderColor: colors.lightBlue }}
            >
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-3 rounded-full mt-2"
                style={{ backgroundColor: colors.lightBlue }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Auth Dialog */}
      <AuthDialog 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        onSuccess={handleAuthSuccess}
      />
    </div>
  );
};

export default HeroSection;
