'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { colors } from '@/lib/brand';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      title: "Upload Document",
      description: "Upload your Aadhaar card or government-issued ID for secure verification",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      delay: 0.1
    },
    {
      title: "Face Verification",
      description: "Complete facial recognition to match your identity with the document",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
        </svg>
      ),
      delay: 0.2
    },
    {
      title: "OTP Verification",
      description: "Verify your mobile number with OTP for secure access",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      delay: 0.3
    },
    {
      title: "Receive DID NFT",
      description: "Get your verified digital identity as a DID NFT on SUI blockchain",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      ),
      delay: 0.4
    }
  ];

  return (
    <section id='howitworks' className="py-20 px-6" style={{ backgroundColor: colors.darkNavy }}>
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span style={{ color: colors.primary }}>How It Works</span>
          </h2>
          <p className="text-xl" style={{ color: colors.lightBlue }}>Simple steps to get your verified digital identity</p>
        </div>

        {/* Modern Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: step.delay,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.2 }
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="group"
            >
              <div className="relative p-8 rounded-3xl transition-all duration-300 overflow-hidden" style={{ backgroundColor: colors.darkNavy }}>
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300" style={{ background: `radial-gradient(circle at center, ${colors.primary} 0%, transparent 70%)` }}></div>

                {/* Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: step.delay + 0.2, type: "spring", stiffness: 150 }}
                  className="w-16 h-16 rounded-2xl flex items-center mx-auto justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300"
                  style={{ background: colors.gradients.primary }}
                >
                  <div className="text-white">
                    {step.icon}
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: step.delay + 0.4 }}
                >
                  <h3 className="text-xl font-bold mb-4" style={{ color: colors.white }}>
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: colors.lightBlue }}>
                    {step.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
