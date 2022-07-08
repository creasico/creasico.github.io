import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['index.html', './src/**/*.{vue,ts,js}'],
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
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

export default { config }
