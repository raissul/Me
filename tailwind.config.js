/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", // gray-200
        input: "var(--color-input)", // white
        ring: "var(--color-ring)", // cyan-400
        background: "var(--color-background)", // gray-50
        foreground: "var(--color-foreground)", // gray-900
        primary: {
          DEFAULT: "var(--color-primary)", // slate-900
          foreground: "var(--color-primary-foreground)", // white
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", // gray-700
          foreground: "var(--color-secondary-foreground)", // white
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", // red-500
          foreground: "var(--color-destructive-foreground)", // white
        },
        muted: {
          DEFAULT: "var(--color-muted)", // gray-50
          foreground: "var(--color-muted-foreground)", // gray-600
        },
        accent: {
          DEFAULT: "var(--color-accent)", // cyan-400
          foreground: "var(--color-accent-foreground)", // gray-900
        },
        popover: {
          DEFAULT: "var(--color-popover)", // white
          foreground: "var(--color-popover-foreground)", // gray-900
        },
        card: {
          DEFAULT: "var(--color-card)", // white
          foreground: "var(--color-card-foreground)", // gray-900
        },
        success: {
          DEFAULT: "var(--color-success)", // emerald-500
          foreground: "var(--color-success-foreground)", // white
        },
        warning: {
          DEFAULT: "var(--color-warning)", // amber-500
          foreground: "var(--color-warning-foreground)", // gray-900
        },
        error: {
          DEFAULT: "var(--color-error)", // red-500
          foreground: "var(--color-error-foreground)", // white
        },
        // Technical Command Center Colors
        'command-primary': "var(--color-command-primary)", // slate-900
        'command-secondary': "var(--color-command-secondary)", // gray-700
        'electric-blue': "var(--color-electric-blue)", // cyan-400
        'warm-gold': "var(--color-warm-gold)", // orange-400
        'energetic-orange': "var(--color-energetic-orange)", // orange-500
        'surface': "var(--color-surface)", // gray-100
        // Typography Colors
        'text-primary': "var(--color-text-primary)", // gray-900
        'text-secondary': "var(--color-text-secondary)", // gray-600
        'text-muted': "var(--color-text-muted)", // gray-500
        // System Status Colors
        'system-healthy': "var(--color-system-healthy)", // emerald-500
        'system-warning': "var(--color-system-warning)", // amber-500
        'system-critical': "var(--color-system-critical)", // red-500
        'system-info': "var(--color-system-info)", // cyan-400
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'source': ['Source Sans Pro', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
        'sans': ['Source Sans Pro', 'sans-serif'],
        'heading': ['Inter', 'sans-serif'],
        'cta': ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'responsive-xl': 'clamp(2.5rem, 5vw, 4rem)',
        'responsive-lg': 'clamp(1.5rem, 3vw, 2.5rem)',
        'responsive-md': 'clamp(1.125rem, 2vw, 1.5rem)',
      },
      spacing: {
        'grid-1': '0.5rem', // 8px
        'grid-2': '1rem',   // 16px
        'grid-3': '1.5rem', // 24px
        'grid-4': '2rem',   // 32px
        'grid-6': '3rem',   // 48px
        'grid-8': '4rem',   // 64px
        'grid-12': '6rem',  // 96px
        'grid-16': '8rem',  // 128px
      },
      borderRadius: {
        'technical': '8px',
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'command': '0 4px 20px rgba(0, 212, 255, 0.1)',
        'elevation': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'modal': '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'hover-lift': '0 8px 32px rgba(0, 212, 255, 0.3)',
      },
      animation: {
        'pulse-system': 'pulse-system 2s infinite',
        'typewriter': 'typewriter 2s steps(40) forwards',
        'blink-caret': 'blink-caret 1s step-end infinite',
        'count-up': 'countUp 2s ease-out forwards',
        'skill-reveal': 'skillReveal 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
      },
      keyframes: {
        'pulse-system': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'typewriter': {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: 'var(--color-accent)' },
        },
        'countUp': {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'skillReveal': {
          'from': { transform: 'scaleX(0)' },
          'to': { transform: 'scaleX(1)' },
        },
      },
      transitionDuration: {
        '300': '300ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      backdropBlur: {
        'glass': '10px',
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(280px, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(300px, 1fr))',
        'hero-split': '40% 60%',
        'feature-grid': 'repeat(auto-fit, minmax(300px, 1fr))',
      },
      aspectRatio: {
        'video': '16 / 9',
        'square': '1 / 1',
        'portrait': '3 / 4',
      },
      zIndex: {
        'header': '50',
        'sidebar': '40',
        'modal': '100',
        'tooltip': '60',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}