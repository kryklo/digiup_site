/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'heading': ['MuseoModerno', 'cursive'],
        'body': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
