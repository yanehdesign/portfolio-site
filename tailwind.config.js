/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html"
  ],
  theme: {

    extend: {
      colors: {
        pink: {
          50:  '#ffc1cc',
          100: '#f9b4b8',
          200: '#eb9596',
          300: '#ff6670',
          400: '#d32c4f',
          500: '#d32c4f',
          600: '#d32c4f',
          700: '#d32c4f',
          800: '#d32c4f',
          900: '#d32c4f',
        },
      },
      animation: {
        gradient: "gradientBG 8s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
      },
      keyframes: {
        gradientBG: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-30px)" },
        },
      },
    },
  },
  plugins: [],
};