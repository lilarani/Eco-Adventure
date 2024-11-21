/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgColor: '#1A1A1D',
      },
    },
  },
  plugins: [require('daisyui')],
};
