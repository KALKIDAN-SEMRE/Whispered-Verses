import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Crimson Pro', 'Georgia', 'serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        poem: {
          DEFAULT: "hsl(var(--poem-bg))",
          border: "hsl(var(--poem-border))",
          shadow: "hsl(var(--poem-shadow))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "quill-float": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "25%": { transform: "translateY(-8px) rotate(-2deg)" },
          "50%": { transform: "translateY(-12px) rotate(0deg)" },
          "75%": { transform: "translateY(-8px) rotate(2deg)" },
        },
        "quill-write": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-3px) rotate(-3deg)" },
        },
        "slide-in-bottom": {
          from: { opacity: "0", transform: "translateY(30px) scale(0.95)" },
          to: { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "slide-in-top": {
          from: { opacity: "0", transform: "translateY(-30px) scale(0.95)" },
          to: { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.9)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "gentle-glow": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(var(--primary) / 0.1)" },
          "50%": { boxShadow: "0 0 30px hsl(var(--primary) / 0.2)" },
        },
        "rotate-in": {
          from: { opacity: "0", transform: "rotate(-180deg) scale(0.8)" },
          to: { opacity: "1", transform: "rotate(0deg) scale(1)" },
        },
        "text-reveal": {
          from: { opacity: "0", transform: "translateY(10px)", clipPath: "inset(0 0 100% 0)" },
          to: { opacity: "1", transform: "translateY(0)", clipPath: "inset(0 0 0% 0)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "ripple": {
          "0%": { transform: "scale(0)", opacity: "1" },
          "100%": { transform: "scale(4)", opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.4s ease-out forwards",
        "quill-float": "quill-float 3s ease-in-out infinite",
        "quill-write": "quill-write 2s ease-in-out infinite",
        "slide-in-bottom": "slide-in-bottom 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-in-top": "slide-in-top 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "scale-in": "scale-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "shimmer": "shimmer 2s infinite linear",
        "float": "float 6s ease-in-out infinite",
        "gentle-glow": "gentle-glow 3s ease-in-out infinite",
        "rotate-in": "rotate-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "text-reveal": "text-reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "ripple": "ripple 0.6s ease-out",
      },
      boxShadow: {
        'poem': '0 4px 20px -4px hsl(var(--poem-shadow) / 0.15)',
        'poem-hover': '0 8px 30px -4px hsl(var(--poem-shadow) / 0.2)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
