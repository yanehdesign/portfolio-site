/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        color1: '#b24256',
        color2: '#c4424d',
        color3: '#f7f7f7',
        color4: '#2e2e2e',
        color5: '#a77f7f',
        color6: '#9e2f47', // <-- comma here
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

