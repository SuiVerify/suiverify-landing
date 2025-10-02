# SuiVerify Landing Page

A modern, responsive landing page for SuiVerify - Digital Identity Infrastructure on the SUI blockchain.

## 🚀 Features

- **Modern Design**: Clean, professional UI with SuiVerify branding
- **Interactive Animations**: Powered by Framer Motion for smooth user experience
- **WebGL Effects**: Custom light rays animation using OGL
- **Responsive Layout**: Optimized for desktop and mobile devices
- **Microservice Architecture**: Standalone landing page separate from main application

## 🛠️ Tech Stack

- **Next.js 15.5.4** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **OGL** - WebGL library for light effects

## 📦 Project Structure

```
src/
├── components/
│   ├── LandingPage.tsx          # Main landing page component
│   ├── sections/
│   │   ├── HeroSection.tsx      # Hero section with animations
│   │   ├── HowItWorksSection.tsx # Step-by-step process
│   │   ├── FeaturesSection.tsx   # SuiVerify ecosystem features
│   │   └── Footer.tsx           # Footer component
│   └── ui/
│       ├── lightRays.tsx        # WebGL light effects
│       └── landingHeader.tsx    # Navigation header
├── lib/
│   └── brand.ts                 # Brand colors and styling
└── app/
    └── page.tsx                 # Next.js app entry point
```

## 🎨 Brand Colors

- **Primary Blue**: `#4DA2FF`
- **Dark Navy**: `#011829`
- **Light Blue**: `#c0e6ff`
- **Darker Navy**: `#030f1c`
- **White**: `#ffffff`

## 🚦 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Sections

### Hero Section
- Animated SuiVerify logo
- Interactive light rays background
- Call-to-action buttons
- Feature highlight cards

### How It Works
- 4-step verification process
- Animated icons and cards
- Responsive grid layout

### Features Section
- Nautilus, Seal, and Walrus integration
- SuiVerify ecosystem diagram
- Interactive hover effects

### Footer
- Simple branding and documentation link

## 🔗 Integration

The landing page is designed as a microservice that can:
- Link to the main SuiVerify application
- Redirect users to documentation
- Serve as a standalone marketing page

## 🚀 Deployment

This Next.js application can be deployed to:
- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- Any static hosting provider

## 📄 License

Part of the SuiVerify project - Digital Identity Infrastructure on SUI blockchain.
