/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        ink: {
          50: '#f6f5f2',
          100: '#ece9e2',
          200: '#d8d2c5',
          300: '#b8af9b',
          400: '#8f8770',
          500: '#6b6451',
          600: '#4d4738',
          700: '#332f25',
          800: '#1f1c15',
          900: '#121009',
        },
        cream: {
          50: '#fdfbf7',
          100: '#faf6ee',
          200: '#f3ecdf',
        },
        ember: {
          400: '#f4a261',
          500: '#e76f3c',
          600: '#d4541f',
        },
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 18s linear infinite',
      },
    },
  },
  plugins: [],
};
