/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        //색상 설정
        'dh-black': '#1E1E1E',
        'dh-black-800': '#04021B',
        'dh-gray': '#D9D9D9',
        'dh-gray-200': '#F7F7F7',
        'dh-purple': '#B1B2FF',
        'dh-blue': '#5355FB',
      },
      width: {
        7.5: '1.875rem', //30px
      },
      height: {
        7.5: '1.875rem', //30px
      },
    },
  },
  plugins: [],
}
