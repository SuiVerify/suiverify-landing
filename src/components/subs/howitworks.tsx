'use client';

import React from 'react';
import ScrollStack, { ScrollStackItem } from '@/components/ScrollStack';

type Props = {};

const howitworks = (props: Props) => {
  return (
    <section id='howitworks' className="py-10 px-6 bg-primary/20">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-5xl font-bold mb-4 outfit">
          <span className="text-primary">How SuiVerify Works</span>
        </h2>
        <p className="text-xl text-charcoal-text/70 outfit">Simple steps to get your verified digital identity</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative h-[500px] overflow-hidden">
          <ScrollStack 
            className="scroll-stack-demo-container"
            itemDistance={200}
            itemStackDistance={30}
            stackPosition="20%"
            baseScale={0.85}
            rotationAmount={0}
            blurAmount={0}
          >
            <ScrollStackItem itemClassName="scroll-stack-card-demo ssc-demo-1">
              <h3>Identity Verification</h3>
              <div className="stack-img-container">
                <span className="text-6xl">🔐</span>
              </div>
            </ScrollStackItem>

            <ScrollStackItem itemClassName="scroll-stack-card-demo ssc-demo-2">
              <h3>Document Encryption</h3>
              <div className="stack-img-container">
                <span className="text-6xl">🛡️</span>
              </div>
            </ScrollStackItem>

            <ScrollStackItem itemClassName="scroll-stack-card-demo ssc-demo-3">
              <h3>Blockchain Storage</h3>
              <div className="stack-img-container">
                <span className="text-6xl">⛓️</span>
              </div>
            </ScrollStackItem>

            <ScrollStackItem itemClassName="scroll-stack-card-demo ssc-demo-4">
              <h3>DID NFT Minting</h3>
              <div className="stack-img-container">
                <span className="text-6xl">🎫</span>
              </div>
            </ScrollStackItem>

            <ScrollStackItem itemClassName="scroll-stack-card-demo ssc-demo-5">
              <h3>All on SuiVerify!</h3>
            </ScrollStackItem>
          </ScrollStack>
        </div>
      </div>
    </section>
  );
};

export default howitworks;