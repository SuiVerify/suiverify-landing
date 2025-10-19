'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface WaitlistDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistDialog: React.FC<WaitlistDialogProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-charcoal-text rounded-2xl p-8 max-w-md w-full shadow-2xl relative border-2 border-sky-blue"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2 text-ghost-white">
                Join the <span className="text-sky-blue">SuiVerify</span> Waitlist
              </h2>
              <p className="text-sm text-sky-blue">
                Be the first to test our Digital Identity Infrastructure
              </p>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="text-center">
                <p className="mb-4 text-sky-blue">
                  Ready to experience the future of identity verification? 
                  Contact our team to get early access and help us test our infrastructure.
                </p>
              </div>

              {/* Contact Options */}
              <div className="space-y-4">
                {/* Email */}
                <motion.a
                  href="mailto:suiverify.sui@gmail.com?subject=SuiVerify Waitlist - Early Access Request&body=Hi SuiVerify Team,%0A%0AI'm interested in joining the waitlist to test your digital identity infrastructure.%0A%0APlease let me know the next steps.%0A%0AThank you!"
                  className="flex items-center justify-center space-x-3 p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-lg border-sky-blue bg-transparent"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-5 h-5 text-sky-blue" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="font-semibold text-ghost-white">
                    Email Our Team
                  </span>
                </motion.a>

                {/* X (Twitter) */}
                <motion.a
                  href="https://x.com/SuiVer1fy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-lg border-sky-blue bg-transparent"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-5 h-5 text-sky-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span className="font-semibold text-ghost-white">
                    Follow us on X
                  </span>
                </motion.a>
              </div>

              {/* Footer Note */}
              <div className="text-center pt-4 border-t border-sky-blue/40">
                <p className="text-xs text-sky-blue/80">
                  We&apos;ll reach out with exclusive early access and testing opportunities
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WaitlistDialog;
