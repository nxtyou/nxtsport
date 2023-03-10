/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        'eurostar-black-extended': ['Eurostar Black Extended', 'sans-serif']
      },
      colors: {
        black: '#040617',
        'prussian-blue': '#002347',
        'international-orange': '#FF5003',
        'regal-blue': '#003F7D',
        iron: '#D8D8D8'
      },
      screens: {
        'sm-height': { raw: '(max-height: 900px)' },
        'xs-height': { raw: '(max-height: 740px)' },
        '2xs-height': { raw: '(max-height: 640px)' },
        '2xs': { raw: '(min-width: 400px)' }
      }
    }
  },
  plugins: []
};
