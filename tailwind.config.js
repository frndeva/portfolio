/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "ef-purple": "#C9BACF",
        "ef-blue": "#B8DFE6",
        "ef-light-bg": "#FAFAFA",
        "ef-light-div": "#FFFFFF",
        "ef-light-text": "#333333",
        "ef-dark-bg": "#181818",
        "ef-dark-div": "#232323",
        "ef-dark-text": "#EDEDED",
      },
      fontFamily: {
        "gugi": ["Gugi"],
        "league-gothic": ["League Gothic"],
        "montserrat": ["Montserrat"],
        "inter": ["Inter"],

        "poppins": ["Poppins"],
        "roboto": ["Roboto"],
        "roboto-condensed": ["Roboto Condensed"],
        "open-sans": ["Open Sans"],
        "frijole": ["Frijole"],
        "short-stack": ["Short Stack"],
        "merriweather": ["Merriweather"],
        "comfortaa": ["Comfortaa"],
        "inria-serif": ["Inria Serif"],
        "inter": ["Inter"],
        "playfair-display": ["Playfair Display"],
        "raleway": ["Raleway"],
      },
    },
  },
  plugins: [],
};
