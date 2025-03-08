/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./src/**/*.{js,jsx,ts,tsx}", './public/index.html'
  ],
  theme: {
    extend: {
      zIndex:{
        '1000':'1000',
      }
    },
    fontFamily:{
      'hero-font':'Sriracha'
    }
  },
  variants:{},
  plugins: [],
}

