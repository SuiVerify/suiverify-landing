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
  keywords: ["digital identity", "blockchain", "verification", "Aadhaar", "DID", "NFT", "Sui", "KYC", "government", "CKYC"],
  authors: [{ name: "SuiVerify" }],
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/head_logo.png", sizes: "any", type: "image/png" },
      { url: "/head_logo.png", sizes: "32x32", type: "image/png" },
      { url: "/head_logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/head_logo.png",
    shortcut: "/head_logo.png",
  },
  openGraph: {
    type: "website",
    url: "https://suiverify.xyz/",
    title: "SuiVerify - Digital Identity Infrastructure",
    description: "One Identity Layer to Bridge Old and New Internets.",
    images: [
      {
        url: "/cover.png",
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
    description: "One Identity Layer to Bridge Old and New Internets.",
    images: [
      {
        url: "/cover.png",
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
