import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(350, 75%, 45%)',
          50: 'hsl(350, 75%, 95%)',
          100: 'hsl(350, 75%, 85%)',
          600: 'hsl(350, 75%, 38%)',
        },
        tibmentor: {
          DEFAULT: '#1e56d6',
          dark: '#0b1d4f',
          ink: '#05173a',
          light: '#31d0fc',
          violet: '#6a4cf0',
          50: '#eaf2fe',
          100: '#d3e4fd',
        },
        tibnoma: {
          DEFAULT: '#7a0a18',
          dark: '#5a0711',
          light: '#d96a78',
          50: '#fbeff1',
          100: '#f3d3d8',
        },
        maqola: {
          DEFAULT: '#1d6142',
          dark: '#164a33',
          light: '#4fae7c',
          50: '#eef7f2',
          100: '#d6ecdf',
        },
      },
      boxShadow: {
        soft: '0 4px 12px rgba(0,0,0,0.03)',
        card: '0 10px 25px rgba(0,0,0,0.04)',
      },
    },
  },
  plugins: [],
}

export default config
