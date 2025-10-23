'use client';

import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

type Props = {};

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQs = (props: Props) => {
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
      answer: "SuiVerify is a decentralized digital identity (DID) platform built on the Sui blockchain. It allows you to verify your real-world identity once, mint a private Soul-Bound NFT (SBT) as proof, and then use that \"all-access pass\" to interact with dApps across the entire Sui ecosystem without repeatedly sharing your personal data.",
      category: "General"
    },
    {
      question: "How is this different from a normal NFT?",
      answer: "A normal NFT can be bought, sold, or traded. The SuiVerify identity pass is a Soul-Bound Token (SBT), which means it is permanently and non-transferably bound to your wallet. You can't sell it, send it, or lose it. It is uniquely yours and serves as your permanent proof of verification.",
      category: "General"
    },
    {
      question: "What is the point of SuiVerify?",
      answer: "The point is to solve two major problems in Web3:\n\nFor Users: It eliminates the need to perform KYC (Know Your Customer) for every new dApp you want to use. You verify once and are trusted everywhere.\n\nFor Protocols: It provides a simple, secure way to verify user status (e.g., \"is this user 18+\") to meet compliance and prevent fraud, without the security risk of handling or storing users' sensitive personal data.",
      category: "General"
    },
    {
      question: "What does \"Verify Once, Trusted Everywhere\" mean?",
      answer: "It means you go through the verification process (e.g., submit your Aadhar or driver's license) just one time with SuiVerify. After you are approved and mint your SBT, any dApp on Sui that has integrated SuiVerify will instantly recognize your verified status without you having to do anything else.",
      category: "General"
    },
    {
      question: "Is my personal data (like my passport) stored on the blockchain?",
      answer: "Absolutely not. This is the most important part of our design. Your personal documents are:\n\n• Encrypted on your device before you even submit them.\n• Sent to a secure, off-chain service for verification.\n• Never, ever stored on the Sui blockchain.\n• Only a simple cryptographic proof (e.g., \"Status: Verified\") is pushed on-chain and linked to your NFT.",
      category: "Security & Privacy"
    },
    {
      question: "If my data isn't on-chain, what does a dApp see when I use my pass?",
      answer: "The dApp sees only the status of your verification, not the data behind it. When you connect your wallet, the dApp's smart contract simply asks the SuiVerify contract, \"Does this wallet hold a valid DID_AGE_VERIFY pass?\" The SuiVerify contract just answers \"Yes\" or \"No.\"\n\nThe dApp learns that you are \"Verified 18+\" but learns nothing else about you—not your name, your date of birth, or your document ID.",
      category: "Security & Privacy"
    },
    {
      question: "What is a Soul-Bound Token (SBT) and why is it non-transferable?",
      answer: "A Soul-Bound Token is an NFT that is permanently tied to a specific wallet. It cannot be sold or transferred. We use this model because your identity is not for sale. It ensures that only you can use your verification pass and that no one can steal or buy your on-chain identity.",
      category: "Security & Privacy"
    },
    {
      question: "What happens if I lose access to my wallet?",
      answer: "This is a critical area of decentralized identity. We are developing a secure social recovery or guardian-based mechanism to help you revoke your old SBT and re-issue a new one to a new, verified wallet. Your original identity documents would be required to prove ownership.",
      category: "Security & Privacy"
    },
    {
      question: "How do I get verified?",
      answer: "The process is simple:\n\n1. Connect Wallet: Go to the SuiVerify app and connect your Sui wallet.\n2. Select DID Type: Choose the verification you need (e.g., \"18+ Age Verification\").\n3. Submit Documents: Securely upload your documents through our encrypted portal.\n4. Mint Your Pass: Once our system verifies you (usually in a few minutes), you will be able to mint your Soul-Bound NFT.",
      category: "For Users"
    },
    {
      question: "What documents do you accept?",
      answer: "We are launching with support for key identity documents like Aadhar (for Indian citizenship and age verification) and plan to rapidly expand to include international passports, driver's licenses, and other government-issued IDs.",
      category: "For Users"
    },
    {
      question: "How much does it cost?",
      answer: "There will be a one-time fee to cover the off-chain verification costs and the on-chain gas fees for minting your SBT. This one-time fee gives you a permanent, reusable pass for the entire ecosystem.",
      category: "For Users"
    },
    {
      question: "How can my dApp integrate SuiVerify?",
      answer: "We provide a simple SDK and a few lines of Move code. Your smart contract can call a single, public function (verify_did_for_protocol) on our registry contract to instantly check if a user's wallet holds a valid verification pass.",
      category: "For Protocols"
    },
    {
      question: "What's the benefit for my protocol?",
      answer: "• Frictionless Compliance: Instantly verify users for legal requirements (e.g., age-gated content, DeFi regulations) with zero onboarding friction.\n• Sybil Resistance: Ensure your users are unique humans, which is perfect for preventing fraud in airdrops, DAO voting, and community whitelists.\n• Zero Data Liability: You get the benefit of a verified user base without the massive security and legal liability of storing sensitive KYC data yourself.\n• Build Trust: Signal to your users that you value security and are building a safe, compliant platform.",
      category: "For Protocols"
    }
  ];

  const categories = Array.from(new Set(faqData.map(item => item.category)));
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredFAQs = selectedCategory === 'All' 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory);

  return (
    <section id="faqs" className="py-20 px-6 bg-ghost-white outfit">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-charcoal-text sans-bartle">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-charcoal-text/70 max-w-3xl mx-auto">
            Everything you need to know about SuiVerify's decentralized identity platform
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
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
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
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
                className="bg-white rounded-2xl border border-primary/20 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-primary/5 transition-colors duration-200"
                >
                  <h3 className="text-xl font-semibold text-charcoal-text pr-4">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {isOpen ? (
                      <ChevronUpIcon className="w-6 h-6 text-primary" />
                    ) : (
                      <ChevronDownIcon className="w-6 h-6 text-primary" />
                    )}
                  </div>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-6">
                    <div className="border-t border-primary/10 pt-4">
                      <p className="text-charcoal-text/80 leading-relaxed whitespace-pre-line">
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
        <div className="text-center mt-16">
          <p className="text-lg text-charcoal-text/70 mb-6">
            Still have questions? Check out our comprehensive documentation.
          </p>
          <a
            href="https://suiverify.gitbook.io/suiverify/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            View Documentation
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQs;