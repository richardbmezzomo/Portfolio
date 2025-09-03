import rocketseat from '@rocketseat/eslint-config/next.js'
import eslintPluginTailwindCSS from 'eslint-plugin-tailwindcss'

export default [
  ...rocketseat,
  {
    plugins: {
      tailwindcss: eslintPluginTailwindCSS,
    },
    rules: {
      'tailwindcss/classnames-order': 'warn',
    },
  },
]
