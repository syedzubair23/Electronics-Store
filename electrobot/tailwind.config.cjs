const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      ...defaultTheme.screens,
      'xs': '439px',
      '2xs': '348px',
      '3xs': '270px',
    },
    extend: {
      boxShadow: {
        "custom": '0 0 0 2px #06b6d4',
        "search": '0 2px 0 0 #e5e7eb',
        "search_focus": '0 2px 0 0 #22d3ee',
      }
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}

