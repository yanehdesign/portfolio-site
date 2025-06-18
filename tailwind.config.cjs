/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Lexend Deca', 'sans-serif'],
        'sans': ['Lexend Deca', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#500711', // Deep burgundy for main text
          dark: '#3d050d',
        },
        accent: {
          DEFAULT: '#B0041A', // Bright burgundy for buttons/links
          hover: '#8c0315',
        },
        decorative: {
          DEFAULT: '#ED9BBD', // Rose pink for decorative elements
          light: '#ffc4dd',
        },
        highlight: {
          DEFAULT: '#FFC95F', // Gold for highlights/accents
          light: '#ffd78f',
        },
        cream: '#fff5e6',
      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.15)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

