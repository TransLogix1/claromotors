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
        accent: '#C9A469',
        'accent-hover': '#DCC08C',
        'accent-dark': '#8C6F3F',
        'accent-muted': 'rgba(201, 164, 105, 0.12)',
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
      boxShadow: {
        accent: '0 8px 30px -8px rgba(201, 164, 105, 0.35)',
      },
    },
  },
  plugins: [],
};
