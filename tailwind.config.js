/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        //색상 설정
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
