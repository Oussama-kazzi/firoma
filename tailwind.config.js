/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sand: "#f4efe8",
        ink: "#312a25",
        wood: "#b58e68",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        body: ["Manrope", "sans-serif"],
      },
      boxShadow: {
        soft: "0 12px 35px -20px rgba(60, 45, 30, 0.35)",
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.8), transparent 45%), radial-gradient(circle at 80% 0%, rgba(210,188,162,0.25), transparent 40%)",
      },
    },
  },
  plugins: [],
};
