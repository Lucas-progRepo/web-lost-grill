/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#14110d',
        surface: '#1c1815',
        ink: '#f2ece2',
        inkSoft: '#a89e8e',
        accent: '#c2562b',
        accentSoft: '#3a201a',
        line: '#2a2520'
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'serif'],
        body: ['var(--font-manrope)', 'sans-serif']
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.23, 1, 0.32, 1)'
      }
    }
  },
  plugins: []
};
