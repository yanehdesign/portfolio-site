/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: {
          50:  '#ffc1cc', // lightest
          100: '#f9b4b8',
          200: '#eb9596',
          300: '#ff6670',
          400: '#d32c4f', // darkest
          500: '#d32c4f', // repeat for mid/dark shades if you want
          600: '#d32c4f',
          700: '#d32c4f',
          800: '#d32c4f',
          900: '#d32c4f',
        },
      },
      fontFamily: {
        sans: [
          'Tahoma',
          'system-ui',
         '-apple-system',
         'BlinkMacSystemFont',
         'Segoe UI',
         'Roboto',
         'Helvetica Neue',
         'Arial',
         'sans-serif',
        ]
      },
      spacing: {
        '8': '8px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '40': '40px',
        '48': '48px',
        '56': '56px',
        '64': '64px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};