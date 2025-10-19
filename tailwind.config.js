// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
    // This tells Tailwind where to look for your class names
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          // Your Custom Primary Colors
          'sky-blue': '#6FBDF0',
          'brand-teal': '#14B8A6',
  
          // Your Custom Neutral Colors
          'ghost-white': '#F8F9FA',
          'charcoal-text': '#212225', // Slightly adjusted for better naming
          'light-gray-border': '#DEE2E6',
  
          // Your Custom Status Colors
          'success-green': '#10B981',
          'warning-yellow': '#F59E0B',
          'error-red': '#EF4444',
        },
      },
    },
    plugins: [],
  };