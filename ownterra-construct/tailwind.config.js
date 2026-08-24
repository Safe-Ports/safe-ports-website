/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#fffbea",
          100: "#fff3c4",
          200: "#ffe58a",
          300: "#ffd54a",
          400: "#f9c519",
          500: "#f2b900",
          600: "#c99700",
          700: "#9c7500",
          800: "#755700",
          900: "#4d3900",
          950: "#2b1f00",
        },
        graphite: {
          50: "#f6f6f6",
          100: "#ede9e4",
          200: "#d8d5cf",
          300: "#b7b3ac",
          400: "#8d9396",
          500: "#747a7f",
          600: "#5b6165",
          700: "#4a4f55",
          800: "#343639",
          900: "#242527",
          950: "#1f2022",
        },
      },
      boxShadow: {
        "soft-xl": "0 24px 80px rgba(31, 32, 34, 0.16)",
        "panel": "0 28px 90px rgba(31, 32, 34, 0.24)",
        "glow": "0 20px 70px rgba(242, 185, 0, 0.28)",
      },
      backgroundImage: {
        "grid-soft":
          "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
        "radial-gold": "radial-gradient(circle at 20% 20%, rgba(242,185,0,0.28), transparent 34%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -10px, 0)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.48", transform: "scale(1)" },
          "50%": { opacity: "0.84", transform: "scale(1.06)" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(22px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        scan: {
          "0%": { transform: "translateX(-45%)" },
          "100%": { transform: "translateX(145%)" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        "pulse-soft": "pulseSoft 4s ease-in-out infinite",
        "slide-up": "slideUp 700ms ease both",
        scan: "scan 6s linear infinite",
      },
    },
  },
  plugins: [],
};
