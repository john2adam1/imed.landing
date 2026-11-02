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
