/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', './src/**/*.{vue,ts,js}'],
  theme: {
    extend: {
      colors: {
        'primary': '#388370',
        'primary-light-1': '#B9C6C3',
        'primary-light-2': '#BFBFBF',
        'secondary': '#839F98',
      },
    },
  },
}
