/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        terra: {
          50: "#eef8f2",
          100: "#d8efe0",
          200: "#b5dec4",
          300: "#88c69f",
          400: "#5fae7f",
          500: "#3d9363",
          600: "#2e754e",
          700: "#265d40",
          800: "#1f4a34",
          900: "#143224",
          950: "#0b1f16",
        },
        graphite: {
          50: "#f7f8f7",
          100: "#ecefed",
          200: "#d8ddda",
          300: "#b9c2be",
          400: "#93a09a",
          500: "#73827b",
          600: "#5b6761",
          700: "#4a534e",
          800: "#3e4541",
          900: "#222724",
          950: "#111411",
        },
      },
      boxShadow: {
        "soft-xl": "0 24px 80px rgba(17, 20, 17, 0.10)",
        "panel": "0 28px 90px rgba(11, 31, 22, 0.18)",
        "glow": "0 20px 70px rgba(61, 147, 99, 0.26)",
      },
      backgroundImage: {
        "grid-soft":
          "linear-gradient(rgba(20,50,36,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(20,50,36,0.08) 1px, transparent 1px)",
        "radial-mint": "radial-gradient(circle at 20% 20%, rgba(95,174,127,0.28), transparent 34%)",
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
