'use client';

import React from 'react';
import ScrollStack, { ScrollStackItem } from '@/components/ScrollStack';

const howitworks = () => {
  return (
    <section id='howitworks' className="py-8 sm:py-10 bg-secondary/10 min-h-screen flex items-center justify-center">
        <div className="">
      <div className="max-w-6xl mx-auto text-center mb-6 sm:mb-8">
        <h2 className="text-base sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 outfit">
          <span className="text-charcoal-text sans-bartle">Create and Verify a DID – Simple Steps</span>
        </h2>
        <p className="text-sm sm:text-xl text-charcoal-text/70 outfit">Create a fully verifiable DID in just a few clicks.</p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="relative h-[400px] sm:h-[500px] overflow-hidden outfit flex justify-center">
          <div className="w-full">
            <ScrollStack 
              className="scroll-stack-demo-container"
              itemDistance={150}
              itemStackDistance={25}
              stackPosition="20%"
              baseScale={0.85}
              rotationAmount={0}
              blurAmount={0}
            >
            <ScrollStackItem itemClassName="scroll-stack-card-demo ssc-demo-1 w-full">
              <h3>1. Submit Government Proof</h3>
              <p className="text-sm text-white/80">Upload official documents required for your DID. This includes government-issued identification such as driver&apos;s license, passport, or national ID card. All documents are securely encrypted and processed with bank-level security standards.</p>
            </ScrollStackItem>

            <ScrollStackItem itemClassName="scroll-stack-card-demo ssc-demo-2 w-full">
              <h3>2. Verification in Nautilus</h3>
              <p className="text-sm text-white/80">Documents are authenticated offchain via Nautilus. Our advanced cryptographic verification system processes your documents using zero-knowledge proofs, ensuring authenticity without compromising your privacy. The verification process typically takes 2-5 minutes.</p>
            </ScrollStackItem>

            <ScrollStackItem itemClassName="scroll-stack-card-demo ssc-demo-3 w-full">
              <h3>3. Encryption & Storage</h3>
              <p className="text-sm text-white/80">Verification proof is encrypted using Seal and stored in Walrus. Your verified credentials are encrypted with military-grade AES-256 encryption and stored in our decentralized Walrus network, ensuring maximum security and data sovereignty.</p>
            </ScrollStackItem>

            <ScrollStackItem itemClassName="scroll-stack-card-demo ssc-demo-4 w-full">
              <h3>4. Claim DID</h3>
              <p className="text-sm text-white/80">User claims a unique, verifiable DID - ready to use across the ecosystem. Your DID is minted as a soul-bound NFT that cannot be transferred, ensuring it remains permanently linked to your identity. This DID serves as your universal key across all Sui protocols.</p>
            </ScrollStackItem>

            <ScrollStackItem itemClassName="scroll-stack-card-demo ssc-demo-5 w-full">
              <h3>5. Protocol Signature Check</h3>
              <p className="text-sm text-white/80">Protocols instantly verify DIDs and signatures using the SuiVerify SDK for full compliance and trust. Any protocol in the Sui ecosystem can instantly verify your identity and credentials, enabling seamless access to DeFi, gaming, and other dApps without repeated KYC.</p>
            </ScrollStackItem>
            </ScrollStack>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default howitworks;