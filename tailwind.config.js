/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Patrick Hand', 'Oswald', 'ui-sans-serif', 'system-ui']
    },
    extend: {}
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography'), require('daisyui')]
}
