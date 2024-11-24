/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./auth/**/*.{html,js}",
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./js/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        }
      },
      animation: {
        'float': 'float 20s infinite',
        'flight-1': 'flight-path-1 40s linear infinite',
        'flight-2': 'flight-path-2 45s linear infinite 5s',
        'flight-3': 'flight-path-3 50s linear infinite 8s',
        'flight-4': 'flight-path-4 35s linear infinite 4s',
        'flight-5': 'flight-path-5 48s linear infinite 6s',
        'flight-6': 'flight-path-6 44s linear infinite 8s',
        'flight-7': 'flight-path-7 46s linear infinite 9s',
        'flight-8': 'flight-path-8 43s linear infinite 3s',
        'flight-9': 'flight-path-9 47s linear infinite 5s',
        'flight-10': 'flight-path-10 49s linear infinite 3s',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '25%': { transform: 'translateY(-20px) scale(1.1)' },
          '50%': { transform: 'translateY(0) scale(1)' },
          '75%': { transform: 'translateY(20px) scale(0.9)' },
        },
        'flight-path-1': {
          '0%': { transform: 'translate(0, 0) rotate(20deg)', opacity: '0' },
          '5%': { opacity: '1' },
          '95%': { opacity: '1' },
          '100%': { transform: 'translate(calc(100vw + 100px), 20vh) rotate(20deg)', opacity: '0' },
        },
        'flight-path-2': {
          '0%': { transform: 'translate(0, 0) rotate(155deg)', opacity: '0' },
          '5%': { opacity: '1' },
          '95%': { opacity: '1' },
          '100%': { transform: 'translate(calc(-100vw - 100px), 25vh) rotate(155deg)', opacity: '0' },
        },
        'flight-path-3': {
          '0%': { transform: 'translate(0, 0) rotate(12deg)', opacity: '0' },
          '5%': { opacity: '1' },
          '95%': { opacity: '1' },
          '100%': { transform: 'translate(calc(100vw + 100px), -5vh) rotate(12deg)', opacity: '0' },
        },
        'flight-path-4': {
          '0%': { transform: 'translate(0, 0) rotate(195deg)', opacity: '0' },
          '5%': { opacity: '1' },
          '95%': { opacity: '1' },
          '100%': { transform: 'translate(calc(-100vw - 100px), -25vh) rotate(195deg)', opacity: '0' },
        },
        'flight-path-5': {
          '0%': { transform: 'translate(0, 0) rotate(350deg)', opacity: '0' },
          '5%': { opacity: '1' },
          '95%': { opacity: '1' },
          '100%': { transform: 'translate(calc(100vw + 100px), -30vh) rotate(350deg)', opacity: '0' },
        },
        'flight-path-6': {
          '0%': { transform: 'translate(0, 0) rotate(170deg)', opacity: '0' },
          '5%': { opacity: '1' },
          '95%': { opacity: '1' },
          '100%': { transform: 'translate(calc(-100vw - 100px), 15vh) rotate(170deg)', opacity: '0' },
        },
        'flight-path-7': {
          '0%': { transform: 'translate(0, 0) rotate(350deg)', opacity: '0' },
          '5%': { opacity: '1' },
          '95%': { opacity: '1' },
          '100%': { transform: 'translate(calc(100vw + 100px), -15vh) rotate(350deg)', opacity: '0' },
        },
        'flight-path-8': {
          '0%': { transform: 'translate(0, 0) rotate(200deg)', opacity: '0' },
          '5%': { opacity: '1' },
          '95%': { opacity: '1' },
          '100%': { transform: 'translate(calc(-100vw - 100px), -20vh) rotate(200deg)', opacity: '0' },
        },
        'flight-path-9': {
          '0%': { transform: 'translate(0, 0) rotate(350deg)', opacity: '0' },
          '5%': { opacity: '1' },
          '95%': { opacity: '1' },
          '100%': { transform: 'translate(calc(100vw + 100px), -25vh) rotate(350deg)', opacity: '0' },
        },
        'flight-path-10': {
          '0%': { transform: 'translate(0, 0) rotate(155deg)', opacity: '0' },
          '5%': { opacity: '1' },
          '95%': { opacity: '1' },
          '100%': { transform: 'translate(calc(-100vw - 100px), 25vh) rotate(155deg)', opacity: '0' },
        },
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar-hide')
  ],
}
