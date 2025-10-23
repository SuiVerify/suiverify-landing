'use client';

import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQs = () => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqData: FAQItem[] = [
    {
      question: "What is SuiVerify?",
      answer: "SuiVerify is a decentralized digital identity (DID) platform built on the Sui blockchain. It allows you to verify your real-world identity once, mint a private Soul-Bound NFT (SBT) as proof, and then use that 'all-access pass' to interact seamlessly with both Web2 and Web3 applications—bridging traditional user experiences with decentralized trust, all without ever re‑submitting your personal data.",
      category: "General"
    },
    {
      question: "How is this different from a normal NFT?",
      answer: "A normal NFT can be bought, sold, or traded. The SuiVerify identity pass is a Soul-Bound Token (SBT), which means it is permanently and non-transferably bound to your wallet. You can't sell it, send it, or lose it. It is uniquely yours and serves as your permanent proof of verification.",
      category: "General"
    },
    {
      question: "What is the point of SuiVerify?",
      answer: "The point is to solve two major problems in Web3:\n\nFor Users: It eliminates the need to perform KYC (Know Your Customer) for every new dApp you want to use. You verify once and are trusted everywhere.\n\nFor Protocols: It provides a simple, secure way to verify user status (e.g., \"is this user government authorized\") to meet compliance and prevent fraud, without the security risk of handling or storing users' sensitive personal data.",
      category: "General"
    },
    {
      question: "What does \"Verify Once, Trusted Everywhere\" mean?",
      answer: "\"Verify Once, Trusted Everywhere\" means that a user completes the government-grade identity verification process one single time by submitting official documents (e.g., Aadhaar or driver's license) through SuiVerify. After approval and minting their Soul-Bound Token (SBT), any decentralized (Web3) or traditional (Web2) protocol integrated with SuiVerify can instantly verify the user's status without requiring repeated verifications or document uploads.\n\nThis cross-platform interoperability enables protocols—whether dApps on Sui blockchain, other blockchains, or even Web2 applications—to check verification status efficiently via SuiVerify's SDK or smart contract. Because verification happens once and is reusable, the fee charged for integration and verification is significantly lower compared to traditional centralized KYC providers, which charge for each re-verification instance. This results in major cost savings for protocols integrating SuiVerify for one-time DID verification versus continually paying high fees to centralized KYC services.",
      category: "General"
    },
    {
      question: "Is my personal data (like my passport) stored on the blockchain?",
      answer: "Absolutely not. This is the most important part of our design. Your personal documents are:\n\n• Encrypted using Seal and stored in Walrus for later compliance to only government and the verified entities that the users allow to actually view their privacy document for any further verification using Seal's special capability like giving access to only for some certain time\n\n• The government document is also verified offchain using Nautilus - we make it the offchain computation verifiable onchain in Sui",
      category: "Security & Privacy"
    },
    {
      question: "If my data isn't on-chain, what does a dApp see when I use my pass?",
      answer: "The protocols which integrate SuiVerify SDK sees only the cryptographic attestations we did onchain for each DID in the metadata, not the data behind it. Using Nautilus we make it verifiable and also even can be compliant with verified entities.",
      category: "Security & Privacy"
    },
    {
      question: "What is a Soul-Bound Token (SBT) and why is it non-transferable?",
      answer: "A Soul-Bound Token is an NFT that is permanently tied to a specific wallet. It cannot be sold or transferred. We use this model because your identity is not for sale. It ensures that only you can use your verification pass and that no one can steal or buy your on-chain identity.",
      category: "Security & Privacy"
    },
    {
      question: "How do I get verified?",
      answer: "The process is simple:\n\n1. Connect Wallet: Go to the SuiVerify app and connect your Sui wallet, or use Google auth to create wallet\n2. Select DID Type: Choose the verification you need (e.g., \"18+ Age Verification\")\n3. Submit Documents: Securely upload your documents through our portal\n4. Mint Your Pass: Once our system verifies you (usually in minutes), you will be able to mint your Soul-Bound NFT",
      category: "For Users"
    },
    {
      question: "What documents do you accept?",
      answer: "We are launching with support for key identity documents like Aadhaar (for Indian citizenship and age verification) and plan to rapidly expand to include international passports, driver's licenses, and other government-issued IDs.",
      category: "For Users"
    },
    {
      question: "How much does it cost?",
      answer: "There will be a one-time fee to cover the on-chain verification costs and DID approval process one time per DID being passed into the protocol - very less compared to centralized KYC's and the on-chain gas fees for minting your SBT. For Web2 protocols integration we provide the template for the initial verification without any Web3 components involved in UI side so user can easily verify and use our decentralized infra. This one-time fee gives you a permanent, reusable pass for the entire ecosystem in Web2 and Web3.",
      category: "For Users"
    },
    {
      question: "How do protocols integrate with SuiVerify?",
      answer: "Protocols can integrate SuiVerify using our simple SDK or by calling our smart contract. They just need to check if a user's wallet holds a valid SuiVerify SBT and what verification status it contains. Integration is designed to be straightforward for developers.",
      category: "For Protocols"
    },
    {
      question: "What verification types will be available?",
      answer: "We're starting with age verification (18+) and citizenship verification, with plans to expand to include various compliance requirements like KYC, AML, and other regulatory needs as we grow.",
      category: "For Protocols"
    }
  ];

  const categories = Array.from(new Set(faqData.map(item => item.category)));
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredFAQs = selectedCategory === 'All' 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory);

  return (
    <section id="faqs" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-ghost-white outfit">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-charcoal-text sans-bartle">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl text-charcoal-text/70 max-w-3xl mx-auto">
            Everything you need to know about SuiVerify&apos;s decentralized identity platform
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
              selectedCategory === 'All'
                ? 'bg-primary text-white shadow-lg'
                : 'bg-white text-charcoal-text border-2 border-primary/20 hover:border-primary/40'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-charcoal-text border-2 border-primary/20 hover:border-primary/40'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.map((item, index) => {
            const isOpen = openItems.has(index);
            return (
              <div
                key={index}
                className={`rounded-xl sm:rounded-2xl border-2 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  index % 2 === 0 
                    ? 'bg-primary/10 text-charcoal-text border-primary/30 shadow-[0.1em_0.1em_0_0_rgb(124_58_237)] hover:shadow-[0.15em_0.15em_0_0_rgb(124_58_237)] hover:bg-primary/20' 
                    : 'bg-secondary/10 text-charcoal-text border-secondary/30 shadow-[0.1em_0.1em_0_0_rgb(20_184_166)] hover:shadow-[0.15em_0.15em_0_0_rgb(20_184_166)] hover:bg-secondary/20'
                }`}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-left flex items-center justify-between hover:bg-white/20 transition-colors duration-200"
                >
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-charcoal-text pr-3 sm:pr-4">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {isOpen ? (
                      <ChevronUpIcon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    ) : (
                      <ChevronDownIcon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    )}
                  </div>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6">
                    <div className="border-t border-charcoal-text/20 pt-3 sm:pt-4">
                      <p className="text-sm sm:text-base text-charcoal-text/80 leading-relaxed whitespace-pre-line">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-base sm:text-lg text-charcoal-text/70 mb-4 sm:mb-6">
            Still have questions? Check out our comprehensive documentation.
          </p>
          <a
            href="https://suiverify.gitbook.io/suiverify/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white font-semibold rounded-lg sm:rounded-xl hover:bg-primary-dark transition-colors duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base"
          >
            View Documentation
            <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQs;