/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // MCPChain Brand Colors
        'mcp': {
          'cyan': '#00f5ff',      // Electric cyan - primary accent
          'cyan-dark': '#00d4e6', // Darker cyan for hover states
          'cyan-light': '#4df8ff', // Lighter cyan for subtle accents
          'navy': '#0a0e1a',      // Deep navy background
          'slate': '#1a1f2e',     // Lighter navy for cards
          'steel': '#2a3441',     // Steel for borders
          'silver': '#9ca3af',    // Silver for text
          'white': '#ffffff',     // Pure white for contrast
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { 
            boxShadow: "0 0 20px rgba(0, 245, 255, 0.3)",
            transform: "scale(1)"
          },
          "50%": { 
            boxShadow: "0 0 40px rgba(0, 245, 255, 0.6)",
            transform: "scale(1.02)"
          },
        },
        "electric-glow": {
          "0%, 100%": { 
            textShadow: "0 0 10px rgba(0, 245, 255, 0.5)"
          },
          "50%": { 
            textShadow: "0 0 20px rgba(0, 245, 255, 0.8), 0 0 30px rgba(0, 245, 255, 0.4)"
          },
        },
      },
      animation: {
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "electric-glow": "electric-glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} 