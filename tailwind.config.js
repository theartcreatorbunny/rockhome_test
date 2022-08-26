/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {  
      silver: '#f2f4f7',
      lowdark: '#091c38',
      lightblue: '#00d1f0',
      darkblue: '#091c38',
      Kwhite: '#ffffff',
      linkblue: '#00d1f0'
      },
      fontFamily:{
        cabin: "Cabin, sans-serif",
        sourceSansPro: "Source Sans Pro, sans-serif"
      },
      lineHeight:{
        leading11: "2.625rem", //42px
        leading12: "3.375rem", //54px
        leading75: "1.875" //30px
      },
      letterSpacing:{
        trackingwideM: "0.0125em",
        trackingwideL: "0.0275em",
        trackingwideXL: "0.0375em"
      },
      spacing: {
        px30: "7.5rem",
        px26: "6.5rem",
        ml100p: "40rem"
      },
      fontSize: {
        text45: "2.7rem",
        text28: "1.75rem"
      },
      height: {
        h375: "37.5rem"
      },
      width: {
        w965: "23.8em"
      },
      backgroundImage: {
        'cards1': "url('/image/Rectangle.png')",
        'cards2': "url('/image/Rectangle_2.png')",
        'cards3': "url('/image/Rectangle_3.png')",
      },
      container: {
        center: true,
      }
    },
  },
  variants:{
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
}
