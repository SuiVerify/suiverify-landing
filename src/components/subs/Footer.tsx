'use client';

import React from 'react';
import Image from 'next/image';
import { Github, Twitter, Linkedin, Mail, ExternalLink } from 'lucide-react';

type Props = {};

const Footer = (props: Props) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'How It Works', href: '#howitworks' },
    { name: 'Features', href: '#features' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Documentation', href: 'https://suiverify.gitbook.io/suiverify/', external: true },
  ];

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/suiver1fy', icon: Twitter },
    { name: 'GitHub', href: 'https://github.com/suiverify', icon: Github },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/suiverify', icon: Linkedin },
    { name: 'Email', href: 'mailto:hello@suiverify.xyz', icon: Mail },
  ];

  return (
    <footer className="bg-primary text-white outfit max-w-[100%] md:max-w-[80%] mx-auto rounded-t-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Logo & Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
              <Image
                src="/head_logo.png"
                alt="SuiVerify"
                width={40}
                height={32}
                className="h-auto rounded-lg sm:w-[50px] sm:h-[40px]"
              />
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white sans-bartle">SuiVerify</h3>
                <p className="text-xs sm:text-sm text-white/70">Digital Identity Infrastructure</p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-md mb-4 sm:mb-6">
              Secure, private, and decentralized identity verification on the Sui blockchain. 
              Verify once, trusted everywhere across the entire ecosystem.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                    rel={social.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-200 group"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : '_self'}
                    rel={link.external ? 'noopener noreferrer' : ''}
                    className="text-sm sm:text-base text-white/70 hover:text-secondary transition-colors duration-200 flex items-center group"
                  >
                    {link.name}
                    {link.external && (
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">Get in Touch</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/70 text-xs sm:text-sm">Email us</p>
                  <a 
                    href="mailto:hello@suiverify.xyz" 
                    className="text-sm sm:text-base text-white hover:text-secondary transition-colors duration-200 break-all"
                  >
                    hello@suiverify.xyz
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-secondary rounded-full mt-0.5 flex-shrink-0"></div>
                <div>
                  <p className="text-white/70 text-xs sm:text-sm">Built on</p>
                  <p className="text-sm sm:text-base text-white font-medium">Sui Blockchain</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <div className="text-white/60 text-xs sm:text-sm text-center sm:text-left">
              © {currentYear} SuiVerify. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6 text-xs sm:text-sm">
              <a 
                href="#" 
                className="text-white/60 hover:text-secondary transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-white/60 hover:text-secondary transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a 
                href="https://suiverify.gitbook.io/suiverify/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-primary transition-colors duration-200 flex items-center"
              >
                Documentation
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
