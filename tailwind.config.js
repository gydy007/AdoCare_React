/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      colors: {
        navy: '#0b2a3b',
        teal: {
          DEFAULT: '#1b7b8a',
          dark: '#13616e',
          darker: '#0a4a5f',
          pale: '#e6f4f1',
          mist: '#f0f7f9',
          light: '#81d3c6',
        },
        brand: {
          bg: '#f8fbfd',
          cream: '#fff8ef',
        },
        rose: {
          DEFAULT: '#b13e3e',
          dark: '#9b3434',
          soft: '#fff0ed',
        },
        emergency: {
          DEFAULT: '#dc3545',
          dark: '#c82333',
        },
        amber: {
          DEFAULT: '#f0a261',
          dark: '#d78346',
        },
        ink: {
          900: '#0b2a3b',
          700: '#2c4b5a',
          600: '#48657a',
          500: '#597084',
          400: '#79939d',
          300: '#a8c0ca',
        },
        blog: {
          900: '#2C3E35',
          700: '#334155',
          500: '#475569',
          400: '#64748b',
          bg: '#F6F9F8',
        },
      },
      keyframes: {
        carouselFade: {
          '0%': { opacity: 1, transform: 'scale(1)' },
          '16.66%': { opacity: 1, transform: 'scale(1)' },
          '20%': { opacity: 0, transform: 'scale(1.05)' },
          '83.33%': { opacity: 0, transform: 'scale(1.05)' },
          '86.66%': { opacity: 1, transform: 'scale(1)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        wireTravel: { to: { strokeDashoffset: '-150' } },
      },
      animation: {
        carouselFade: 'carouselFade 120s infinite',
        wireTravel: 'wireTravel 5s linear infinite',
      },
      boxShadow: {
        card: '0 8px 40px rgba(0,0,0,0.04)',
        soft: '0 12px 40px rgba(11,42,59,0.08)',
        lift: '0 20px 60px rgba(11,42,59,0.12)',
      },
      borderRadius: {
        '2xl': '28px',
        '3xl': '40px',
      },
    },
  },
  plugins: [],
}
