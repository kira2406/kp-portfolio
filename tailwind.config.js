/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      rotate: {
        '17': '23deg',
      },
      colors:{
        light:{
          primary: '#009FB7',
          secondary:'#0D3B66',
          background: '#F4F4F8',
          text: '#242038',
          gray: '#6E7E85'

        },
        dark:{
          primary: '#009FB7',
          secondary:'#0D3B66',
          background: '#12130F',
          text: '#F4F4F8',
          gray: '#6E7E85'

        },
        'primary':'#30DFC4',
        'darkblue':'#100842',
        'darkgreen':'#1D8676',
        'lightgrey': '#6E7E85',
        'mintwhite':'#E6FDFF',
        'night':'#12130F',
        'ghostwhite':'#FFFAFF'
      },
      fontFamily:{
        jura: "'Jura', sans-serif",
        epilogue: "'Epilogue', sans-serif",
        righteous: "'Righteous', sans-serif"
      }
    },
  },
  plugins: [],
}

