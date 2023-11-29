/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.html",
    "./src/**/*.vue",
    "./src/**/*.jsx",
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      colors:{
        "button-color": "#2F80ED",
        "logo-color": "#1B1F2D",
        "links-color":"#333",
        "overlay-bg": "rgba(0,0,0,0.3)",
        "input-bg": "#F2F2F2",
        "place-holder" : "#4F4F4F",
        "danger": "#FCEFCA",
        "footer-color": "#181818",
        "sub-footer": "#EBEBEB",
        "hotel-name": "#1A1A1A",
        "hotel-badge": "#EB5757",
        "filter-input": "#E0E0E0",
        "overview-bg": "#F4F4F4"
      },
      height: {
        '128': '32rem',
      },
      width: {
        '128': '1130px'
      }
    },
    container:{
      padding: "6rem",
      center: true
    }
  },
  plugins: [],
}

