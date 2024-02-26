/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          'very-dark': '#2b2b2b',
          dark: '#969696'
        }
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif']
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')]
}
