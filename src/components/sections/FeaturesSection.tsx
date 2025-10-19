'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { colors } from '@/lib/brand';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: "Nautilus",
      description: "Nautilus for offchain computation and verifiability onchain - enabling secure identity verification processing",
      icon: (
        <Image src="/nautilus.png" alt="Nautilus" width={32} height={32} className="object-contain" />
      ),
      gradient: "bg-gradient-to-r from-sky-blue to-brand-teal"
    },
    {
      title: "Seal",
      description: "Seal for encrypting user KYC documents and can be then decrypted only by Government addresses using SEAL protocol",
      icon: (
        <Image src="/Seal_logo.png" alt="Seal" width={32} height={32} className="object-contain rounded-full" />
      ),
      backgroundColor: "bg-sky-blue"
    },
    {
      title: "Walrus",
      description: "Walrus for storage of the documents to have our programmability of the data intact with decentralized storage",
      icon: (
        <Image src="/walrus.svg" alt="Walrus" width={32} height={32} className="object-contain" />
      ),
      gradient: "bg-gradient-to-r from-sky-blue to-brand-teal"
    }
  ];

  return (
    <section id='features' className="py-20 px-6 bg-charcoal-text">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl font-bold mb-4 text-ghost-white"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            SuiVerify Makes Identity Verification Seamless
          </motion.h2>
          <motion.p 
            className="text-xl text-sky-blue"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Secure, Private, and Blockchain-Powered
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 justify-center items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="group relative backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden bg-charcoal-text/90"
                initial={{ opacity: 0, x: -50, rotateY: -15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{
                  scale: 1.02,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="absolute inset-0 rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-sky-blue to-brand-teal"></div>
                
                {/* Floating Particles Effect */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 rounded-full opacity-20 bg-sky-blue"
                      style={{ 
                        left: `${20 + i * 20}%`, 
                        top: `${30 + i * 15}%` 
                      }}
                      animate={{
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                        opacity: [0.2, 0.6, 0.2],
                        scale: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.4,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <motion.div 
                      className={`w-16 h-16 rounded-3xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 ${feature.gradient || feature.backgroundColor}`}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.6 + index * 0.2,
                        type: "spring",
                        stiffness: 150
                      }}
                      whileHover={{ 
                        scale: 1.15, 
                        rotate: 360,
                        boxShadow: `0 0 30px rgba(111,189,240,0.6)`,
                        transition: { duration: 0.4 }
                      }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        whileHover={{ 
                          scale: 1.2,
                          rotate: -360,
                          transition: { duration: 0.4 }
                        }}
                      >
                        {feature.icon}
                      </motion.div>
                    </motion.div>
                    <motion.h3 
                      className="text-2xl font-bold text-ghost-white"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      {feature.title}
                    </motion.h3>
                  </div>
                  <motion.p 
                    className="text-lg leading-relaxed text-sky-blue"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 + index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    {feature.description}
                  </motion.p>
                </div>
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none bg-radial-gradient from-sky-blue/20 to-transparent"></div>
              </motion.div>
            ))}
          </div>
          {/* Right Content - SuiVerify Ecosystem Architecture */}
          <motion.div 
            className="flex justify-center relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="w-[500px] h-[500px] relative">
              {/* SUI Logo in Center */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
                <motion.div 
                  className="w-24 h-24 rounded-full flex items-center justify-center shadow-xl border-2 cursor-pointer bg-gradient-to-r from-sky-blue to-brand-teal border-ghost-white"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.8,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    boxShadow: `0 0 50px rgba(111,189,240,0.8)`,
                    transition: { duration: 0.6 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: -360,
                      transition: { duration: 0.8 }
                    }}
                  >
                    <Image src="/suilogo.svg" alt="SUI" width={48} height={48} className="filter brightness-0 invert" />
                  </motion.div>
                </motion.div>
                <motion.p 
                  className="text-sm font-semibold mt-2 text-ghost-white"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                >
                  Sui
                </motion.p>
              </div>

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {/* Line to Walrus */}
                <motion.line
                  x1="250" y1="250"
                  x2="150" y2="350"
                  stroke="#6FBDF0"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  opacity="0.6"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1.0 }}
                  viewport={{ once: true }}
                />
                {/* Line to Seal */}
                <motion.line
                  x1="250" y1="250"
                  x2="350" y2="350"
                  stroke="#6FBDF0"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  opacity="0.6"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1.2 }}
                  viewport={{ once: true }}
                />
                {/* Line to Nautilus */}
                <motion.line
                  x1="250" y1="250"
                  x2="250" y2="120"
                  stroke="#6FBDF0"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  opacity="0.6"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1.4 }}
                  viewport={{ once: true }}
                />
              </svg>

              {/* Walrus - Storage Layer */}
              <div className="absolute bottom-8 left-8">
                <motion.div 
                  className="backdrop-blur-sm rounded-2xl p-4 border shadow-lg max-w-[140px] cursor-pointer group bg-charcoal-text border-sky-blue"
                  initial={{ opacity: 0, y: 50, rotateX: -30 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 1.6,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    boxShadow: `0 20px 40px rgba(111,189,240,0.4)`,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col items-center text-center">
                    <motion.div 
                      className="w-12 h-12 rounded-full flex items-center justify-center mb-2 bg-sky-blue"
                      whileHover={{
                        rotate: 360,
                        scale: 1.2,
                        transition: { duration: 0.6 }
                      }}
                    >
                      <Image src="/walrus.svg" alt="Walrus" width={32} height={32} />
                    </motion.div>
                    <h4 className="font-bold text-sm mb-1 text-ghost-white">Walrus</h4>
                    <p className="text-xs text-sky-blue">Decentralized Storage</p>
                  </div>
                </motion.div>
              </div>

              {/* Seal - Encryption Layer */}
              <div className="absolute bottom-8 right-8">
                <motion.div 
                  className="backdrop-blur-sm rounded-2xl p-4 border shadow-lg max-w-[140px] cursor-pointer group bg-charcoal-text border-sky-blue"
                  initial={{ opacity: 0, y: 50, rotateX: -30 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 1.8,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: -5,
                    y: -10,
                    boxShadow: `0 20px 40px rgba(192,230,255,0.4)`,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col items-center text-center">
                    <motion.div 
                      className="w-12 h-12 rounded-full flex items-center justify-center mb-2 bg-sky-blue"
                      whileHover={{
                        scale: [1, 1.3, 1],
                        borderRadius: ["50%", "30%", "50%"],
                        transition: { duration: 0.8, repeat: Infinity }
                      }}
                    >
                      <Image src="/Seal_logo.png" alt="Seal" width={32} height={32} className="object-contain rounded-full" />
                    </motion.div>
                    <h4 className="font-bold text-sm mb-1 text-ghost-white">Seal</h4>
                    <p className="text-xs text-sky-blue">Document Encryption</p>
                  </div>
                </motion.div>
              </div>

              {/* Nautilus - Computation Layer */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                <motion.div 
                  className="backdrop-blur-sm rounded-2xl p-4 border shadow-lg max-w-[140px] cursor-pointer group bg-charcoal-text border-sky-blue"
                  initial={{ opacity: 0, y: -50, rotateX: 30 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 2.0,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotateX: 15,
                    rotateY: 15,
                    boxShadow: `0 20px 40px rgba(111,189,240,0.4)`,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col items-center text-center">
                    <motion.div 
                      className="w-12 h-12 rounded-full flex items-center justify-center mb-2 bg-sky-blue"
                      whileHover={{
                        rotate: [0, 180, 360],
                        scale: [1, 1.1, 1],
                        transition: { duration: 1.2, ease: "easeInOut" }
                      }}
                    >
                      <Image src="/nautilus.png" alt="Nautilus" width={32} height={32} className="object-contain" />
                    </motion.div>
                    <h4 className="font-bold text-sm mb-1 text-ghost-white">Nautilus</h4>
                    <p className="text-xs text-sky-blue">Off-chain Compute</p>
                  </div>
                </motion.div>
              </div>

              {/* Data Flow Indicators */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <motion.div 
                  className="flex items-center justify-center space-x-2"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 2.2 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="w-2 h-2 rounded-full bg-sky-blue"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  />
                  <motion.div 
                    className="w-2 h-2 rounded-full bg-sky-blue"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  />
                  <motion.div 
                    className="w-2 h-2 rounded-full bg-sky-blue"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 1.0
                    }}
                  />
                </motion.div>
              </div>

              {/* Ecosystem Label */}
              <div className="absolute top-0 left-0 right-0 text-center">
                <motion.div 
                  className="inline-block backdrop-blur-sm rounded-full px-4 py-2 border cursor-pointer bg-charcoal-text border-sky-blue"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: `0 10px 30px rgba(111,189,240,0.3)`,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  viewport={{ once: true }}
                >
                  <motion.p 
                    className="text-sm font-semibold text-sky-blue"
                    whileHover={{ 
                      color: "#6FBDF0",
                      transition: { duration: 0.3 }
                    }}
                  >
                    SuiVerify Ecosystem
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;