import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SuiVerify - Decentralised Identity Layer",
  description: "One Identity Layer to Bridge Old and New Internets",
  keywords: ["digital identity", "blockchain", "verification", "Aadhaar", "DID", "NFT", "Sui", "KYC", "government"],
  authors: [{ name: "SuiVerify" }],
  robots: "index, follow",
  icons: {
    icon: "/head_logo.png",
  },
  openGraph: {
    type: "website",
    url: "https://suiverify.xyz/",
    title: "SuiVerify - Digital Identity Infrastructure",
    description: "Secure identity verification powered by blockchain technology. Verify your identity using Aadhaar documents and claim DID NFTs on the Sui blockchain.",
    images: [
      {
        url: "/logo_with_fill.png",
        width: 1200,
        height: 630,
        alt: "SuiVerify - Digital Identity Infrastructure",
      },
    ],
    siteName: "SuiVerify",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@suiverify",
    creator: "@suiverify",
    title: "SuiVerify - Digital Identity Infrastructure",
    description: "Secure identity verification powered by blockchain technology. Verify your identity using Aadhaar documents and claim DID NFTs on the Sui blockchain.",
    images: [
      {
        url: "/logo_with_fill.png",
        alt: "SuiVerify - Digital Identity Infrastructure",
      },
    ],
  },
  other: {
    "theme-color": "#7C3AED",
    "msapplication-TileColor": "#7C3AED",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "SuiVerify",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
