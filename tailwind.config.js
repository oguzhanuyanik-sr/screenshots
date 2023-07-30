/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      'green-100': '#5ca17c',
      'green-300': '#112d4e',
      'blues-200': '#3f72af',
      'orange-100': 'rgba(241, 142, 6, 0.81)',
      'white-100': '#dbe2ef',
      'white-200': '#e7ecf2',
      'purple-100': '#9c88ff',
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      logo: ['Amatic SC', 'cursive'],
    },
    extend: {},
  },
  plugins: [],
};
