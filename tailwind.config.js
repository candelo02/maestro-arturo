/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // ← incluye también TypeScript por compatibilidad
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#0b0b0b",
        accent: "#f97316", // naranja espiritual
        dark: {
          bg: '#121212',
          surface: '#1E1E1E',
          text: '#E1E1E1'
        }
      },
      boxShadow: {
        glow: "0 6px 30px rgba(249,115,22,0.18)",
      },
    },
  },
  plugins: [],
};
