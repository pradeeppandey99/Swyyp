/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-lato)', 'sans-serif'],
      },
      colors: {
        teal: {
          DEFAULT: '#008080',
          '100': '#E0F7F6',
          '500': '#008080',
          '600': '#006666',
        },
        navy: {
          DEFAULT: '#002B5B',
          '600': '#002B5B',
        },
        coral: {
          DEFAULT: '#FF6F61',
          '500': '#FF6F61',
          '600': '#FF5A4D',
        },
        'lime-green': {
          DEFAULT: '#A8E6CF',
          '50': '#F2FBF8',
          '500': '#A8E6CF',
          '600': '#8AE0C1',
        },
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
}