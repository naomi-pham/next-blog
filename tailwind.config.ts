import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        neutral: {
          black: '#263238',
          darkGrey: '#444444',
          grey: '#666666',
          lightGrey: '#999999',
          greyBlue: '#E7E7E7',
          silver: '#F9F9F9',
          white: '#FFFFFF',
        },
      },
    },
    fontSize: {
      'heading-1': [
        '2.25rem',
        {
          lineHeight: '2.75rem',
          fontWeight: '500',
        },
      ],
      'heading-2': [
        '1.5rem',
        {
          lineHeight: '2rem',
          fontWeight: '500',
        },
      ],
      'heading-3': [
        '1.125rem',
        {
          lineHeight: '1.75rem',
          fontWeight: '500',
        },
      ],
      'heading-4': [
        '1rem',
        {
          lineHeight: '1.5rem',
          fontWeight: '500',
        },
      ],
      'body-1': [
        '1.125rem',
        {
          lineHeight: '1.75rem',
          fontWeight: '400',
        },
      ],
      'body-2': [
        '1rem',
        {
          lineHeight: '1.6rem',
          fontWeight: '400',
        },
      ],
      'body-3': [
        '0.875rem',
        {
          lineHeight: '1.25rem',
          fontWeight: '400',
        },
      ],
      'body-4': [
        '0.75rem',
        {
          lineHeight: '1rem',
          fontWeight: '400',
        },
      ],
    },
  },
  plugins: [],
}
export default config
