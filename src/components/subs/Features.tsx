"use client";

import React from "react";
import CurvedLoop from "../CurvedLoop";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Features = () => {

  return (
    <section
      id="features"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-ghost-white outfit "
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-base sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-charcoal-text sans-bartle">
            What Powers SuiVerify Under the Hood
          </h2>
          <p className="text-sm sm:text-xl text-charcoal-text/70 max-w-4xl mx-auto mb-6 sm:mb-8">
            Every feature in SuiVerify is built to do one thing: ensure identity
            security, regulatory compliance, and seamless verifiability.
          </p>
          <a
            href="https://app.suiverify.xyz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="default"
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
            >
              Get verified now
            </Button>
          </a>
        </div>

        {/* Bento Grid Layout - 2x2 with varied sizes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {/* Row 1: Small + Large */}
          {/* Card 01 - Nautilus (Small) */}
          <div className="sm:col-span-1 lg:col-span-1 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-[0.1em_0.1em_0_0_rgb(124_58_237)] hover:shadow-[0.15em_0.15em_0_0_rgb(124_58_237)] hover:-translate-x-[0.05em] hover:-translate-y-[0.05em] border border-primary/20 transition-all duration-300 group">
            <div className="flex gap-2 sm:gap-3 items-center mb-4 sm:mb-6">
              <div className=" bg-primary/20 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:bg-primary/30 transition-colors overflow-hidden">
                <Image src="/nautilus.png" alt="Nautilus logo" width={64} height={64} className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-bold text-primary">
                  01
                </span>
                <div className="mt-1 sm:mt-2">
                  <Image src="/nautilus-onlyname.png" alt="Nautilus" width={120} height={32} className="h-5 sm:h-6 lg:h-8 w-auto" />
                </div>
              </div>
            </div>
            <p className="text-charcoal-text/80 leading-relaxed text-sm sm:text-base lg:text-xl mb-3 sm:mb-4">
              Nautilus acts as the off-chain computation and verifiability
              layer. User KYC documents are verified off-chain within Nautilus,
              with status and proofs recorded on-chain for seamless protocol
              trust.
            </p>
            <div className="flex items-center text-xs sm:text-sm text-primary font-medium">
              <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
              Off-chain Verification
            </div>
          </div>

          {/* Card 02 - Seal (Large) */}
          <div className="sm:col-span-2 lg:col-span-2 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-[0.1em_0.1em_0_0_rgb(20_184_166)] hover:shadow-[0.15em_0.15em_0_0_rgb(20_184_166)] hover:-translate-x-[0.05em] hover:-translate-y-[0.05em] border border-secondary/20 transition-all duration-300 group">
            <div className="flex gap-2 md:gap-3 items-start mb-4 sm:mb-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-secondary/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 group-hover:bg-secondary/30 transition-colors overflow-hidden">
                <Image src="/seal.png" alt="Seal logo" width={128} height={128} className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary">
                  02
                </span>
                <div className="mt-2 sm:mt-3">
                  <Image src="/seal-onlyname.png" alt="Seal" width={200} height={56} className="h-8 sm:h-10 lg:h-14 w-auto sm:ml-2" />
                </div>
              </div>
            </div>
            <p className="text-charcoal-text/80 leading-relaxed text-base sm:text-lg lg:text-3xl mb-3 sm:mb-4">
              Seal acts as the Encryption and Decryption layer. KYC documents
              are encrypted using Seal and access controls are provided via
              Smart contracts based on the user allowance for their reusage of issued DID.
            </p>
            <div className="flex items-center text-xs sm:text-sm text-secondary font-medium">
              <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
              Access control 
            </div>
          </div>

          {/* Row 2: Large + Small */}
          {/* Card 03 - Walrus (Large) */}
          <div className="sm:col-span-2 lg:col-span-2 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-[0.1em_0.1em_0_0_rgb(124_58_237)] hover:shadow-[0.15em_0.15em_0_0_rgb(124_58_237)] hover:-translate-x-[0.05em] hover:-translate-y-[0.05em] border border-primary/20 transition-all duration-300 group">
            <div className="flex gap-2 md:gap-3 items-start mb-4 sm:mb-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-primary/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 group-hover:bg-primary/30 transition-colors overflow-hidden">
                <Image src="/walrus.png" alt="Walrus logo" width={128} height={128} className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary">
                  03
                </span>
                <div className="mt-2 sm:mt-3">
                  <Image src="/walrus-onlyname.png" alt="Walrus" width={200} height={56} className="h-8 sm:h-10 lg:h-14 w-auto sm:ml-2" />
                </div>
              </div>
            </div>
            <p className="text-charcoal-text/80 leading-relaxed text-base sm:text-lg lg:text-3xl mb-3 sm:mb-4">
              The encrypted documents are
              stored in Walrus via our Walrus Publisher and Aggregator.
            </p>
            <div className="flex items-center text-xs sm:text-sm text-primary font-medium">
              <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
              Encrypted Document Storage
            </div>
          </div>

          {/* Card 04 - SuiVerify-sdk (Small) */}
          <div className="sm:col-span-1 lg:col-span-1 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-[0.1em_0.1em_0_0_rgb(20_184_166)] hover:shadow-[0.15em_0.15em_0_0_rgb(20_184_166)] hover:-translate-x-[0.05em] hover:-translate-y-[0.05em] border border-secondary/20 transition-all duration-300 group">
            <div className="flex gap-2 sm:gap-3 items-center mb-4 sm:mb-6">
              <div className=" bg-secondary/20 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:bg-secondary/30 transition-colors overflow-hidden">
                <Image src="/head_logo.png" alt="SuiVerify SDK logo" width={64} height={64} className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-bold text-secondary">
                  04
                </span>
                <div className="mt-1 sm:mt-2">
                  <Image src="/suiverify-onlyname.png" alt="SuiVerify SDK" width={120} height={32} className="h-5 sm:h-6 lg:h-8 w-auto" />
                </div>
              </div>
            </div>
            <p className="text-charcoal-text/80 leading-relaxed text-sm sm:text-base lg:text-xl mb-3 sm:mb-4">
              Validates signatures against the latest Nautilus enclave, verifies
              offchain attestations, and checks PCR integrity - delivering
              reproducible builds and trusted compliance for protocols and
              the verified entities.
            </p>
            <div className="flex items-center text-xs sm:text-sm text-secondary font-medium">
              <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
              Signature Validation & Compliance
            </div>
          </div>
        </div>
      </div>

      <CurvedLoop marqueeText="• Powered by the SuiStack" className="outfit" />
    </section>
  );
};

export default Features;
