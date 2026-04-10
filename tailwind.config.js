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
        '23': '23deg',
      },
      colors:{
        light:{
          primary: '#A7C7E7',
          secondary:'#7FB3D5',
          background: '#EAF4FB',
          text: '#2E3A59',
          gray: '#9AAFC3',
          accent: '#B8E1FF'

        },
        dark:{
          primary: '#6CA6CD',
          secondary: '#4F7FA8',   // deeper muted blue
          background: '#0F172A',  // dark navy base
          text: '#E6F0FA',        // soft light blue-white
          gray: '#7A8FA6',
          accent: '#89C2D9'
        },
        'primary':'#30DFC4',
        'darkblue':'#EAF4FF',
        'darkgreen':'#1D8676',
        'lightblue': '#EAF4FF',
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

