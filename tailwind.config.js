//  @type {import('tailwindcss').Config} 
module.exports = {
  content: ["./public//*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        "body-bg": "#ECECEC",
      },
      textColor:{
        "text-orange": "#F3761B",
        "text-dark": "#000",
        "text-green": "#007F00",
        "text-white": "#fff",
      }
    },
  },
  plugins: [],
}
