/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["outfit", "sans-serif"],
        "young-serif": ["young-serif", "sans-serif"],
      },
      colors: {
        charcol: "#312E2C",
        rasberry: "#7A284E",
        "brandy-red": "#854632",
        "custom-brown": "#5F564D",
        "egg-shell": "#F3E5D7",
        "white-coffee": "#E3DDD7",
        "snow-white": "#FFF7FB",
      },
    },
  },
  plugins: [],
};
