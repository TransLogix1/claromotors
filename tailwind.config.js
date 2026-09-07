/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#0F1012',
        container: '#16181B',
        input: '#1F2226',
        border: '#2B2F35',
        'text-primary': '#FFFFFF',
        'text-light': '#F0F2F5',
        'text-muted': '#9AA0A6',
        'btn-primary': '#FFFFFF',
        'btn-primary-text': '#0F1012',
        'btn-primary-hover': '#E0E2E5',
        'btn-secondary': '#1F2226',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
};
