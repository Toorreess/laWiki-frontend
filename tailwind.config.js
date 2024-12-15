/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js, html}'],
  theme: {
    extend: {
      colors: {
        jaggedIce: {
          50: '#EEF7F5',
          100: '#D9EDEA',
          200: '#B3DCD5',
          300: '#8FCCC1',
          400: '#70BDB0',
          500: '#4FAB9C',
          600: '#3F887C',
          700: '#2F655C',
          800: '#204640',
          900: '#102320',
          950: '#081110',
        },
      },
    },
  },
  plugins: [],
}
