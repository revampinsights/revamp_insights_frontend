/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          'serif': ['Poppins', ...defaultTheme.fontFamily.serif],
      },
      fontSize: {
          sm: ['16px', '18px']
      },
      colors: {
          current: '#000714',
          primary: 'rgba(9, 89, 254, 0.4)',
      },
  },
  },
  plugins: [],
}