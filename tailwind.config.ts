import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      transformOrigin: {
        '0': '0%',
        '100': '100%',
      },
      fontFamily: {
        sans: ['var(--font-montserrat)'],
        mono: ['var(--font-source-code-pro)'],
      },
      colors: {
        white: '#F8F4F0',
        black: '#222222',
        gray: '#A2A09E',
        gray2: 'rgba(162, 160, 158, 0.2)',
      },
    },
  },
  plugins: [],
}
export default config
