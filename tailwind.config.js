/* eslint-disable @typescript-eslint/no-unsafe-call */
/** @type {import('tailwindcss').Config} */
import '@tailwindcss/typography'
import '@tailwindcss/aspect-ratio'

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
      },
      padding: {
        btn: '1.5rem',
        input: '1rem'
      },
      height: {
        banner: '30rem'
      }
    }
  },
  plugins: []
}
