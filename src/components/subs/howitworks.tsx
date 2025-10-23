'use client';

import React from 'react';
import ScrollStack, { ScrollStackItem } from '@/components/ScrollStack';

type Props = {};

const howitworks = (props: Props) => {
  return (
    <section id='howitworks' className="py-10 px-6 bg-ghost-white min-h-screen flex items-center justify-center">
        <div className="">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-5xl font-bold mb-4 outfit">
          <span className="text-primary sans-bartle">Get Your All-Access Pass in 3 Simple Steps</span>
        </h2>
        <p className="text-xl text-charcoal-text/70 outfit">Your gateway to compliant DeFi and exclusive dApps on Sui</p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="relative h-[500px] overflow-hidden outfit">
          <ScrollStack 
            className="scroll-stack-demo-container"
            itemDistance={200}
            itemStackDistance={30}
            stackPosition="20%"
            baseScale={0.85}
            rotationAmount={0}
            blurAmount={0}
          >
            <ScrollStackItem itemClassName="scroll-stack-card-demo ssc-demo-1 w-full max-w-4xl">
              <h3>Select & Submit</h3>
              <p className="text-sm text-white/80">Choose your verification type (e.g., 18+, Citizenship) and securely submit your documents. Your data is encrypted from the start.</p>
            </ScrollStackItem>

            <ScrollStackItem itemClassName="scroll-stack-card-demo ssc-demo-2 w-full max-w-4xl">
              <h3>Get Verified</h3>
             
              <p className="text-sm text-white/80">Our secure off-chain system verifies your credentials in minutes. Your personal information is never stored on-chain.</p>
            </ScrollStackItem>

            <ScrollStackItem itemClassName="scroll-stack-card-demo ssc-demo-3 w-full max-w-4xl">
              <h3>Mint & Access</h3>
            
              <p className="text-sm text-white/80">Mint your private, soul-bound NFT. This pass is now your key to access compliant DeFi, exclusive drops, and trusted dApps across Sui.</p>
            </ScrollStackItem>
          </ScrollStack>
        </div>
      </div>
      </div>
    </section>
  );
};

export default howitworks;