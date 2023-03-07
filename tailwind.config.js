/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: { inter: ['Inter', 'sans-serif'], poppins: ['Poppins', 'sans-serif'] },
      colors: {
        black: '#040617',
        white: '#F5F5F5',
        'prussian-blue': '#002347',
        'international-orange': '#FF5003',
        'regal-blue': '#003F7D',
        iron: '#DCDCDE'
      }
    }
  },
  plugins: []
};
