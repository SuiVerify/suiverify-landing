'use client';

import React from 'react';
import { colors } from '@/lib/brand';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 px-6 border-t" style={{ backgroundColor: colors.darkerNavy, borderColor: colors.lightBlue }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <h3 className="text-xl font-bold">
            <span style={{ color: colors.primary }}>Sui</span>
            <span style={{ color: colors.white }}>Verify</span>
          </h3>

          {/* Copyright */}
          <p className="text-center text-gray-500">© 2025 SuiVerify. All rights reserved</p>

          {/* Links */}
          <div className="flex items-center space-x-6">
            {/* Documentation */}
            <a 
              href="https://suiverify.gitbook.io/suiverify/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="transition-colors hover:opacity-80 flex items-center space-x-1" 
              style={{ color: colors.lightBlue }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
              <span>Docs</span>
            </a>

            {/* X (Twitter) */}
            <a 
              href="https://x.com/SuiVer1fy" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="transition-colors hover:opacity-80 flex items-center space-x-1" 
              style={{ color: colors.lightBlue }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Gmail */}
            <a 
              href="mailto:suiverify.sui@gmail.com" 
              className="transition-colors hover:opacity-80 flex items-center space-x-1" 
              style={{ color: colors.lightBlue }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>Mail</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
