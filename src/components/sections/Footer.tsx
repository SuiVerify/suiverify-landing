'use client';

import React from 'react';
import { colors } from '@/lib/brand';

const Footer: React.FC = () => {
  return (
    <footer className="p-2 px-6 border-t" style={{ backgroundColor: colors.darkerNavy, borderColor: colors.lightBlue }}>
      <div className="text-center">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">
            <span style={{ color: colors.primary }}>Sui</span>
            <span style={{ color: colors.white }}>Verify</span>
          </h3>
          <p className="text-center flex-1 text-gray-500">All rights reserved</p>
          <a 
            href="https://kiran-4.gitbook.io/suiverify/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="transition-colors hover:opacity-80" 
            style={{ color: colors.lightBlue }}
          >
            Docs
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
