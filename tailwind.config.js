/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        // BLACK
        black: "#333333",
        // *BLUE*
        // Hover table rows
        "blue-button-hover": "#d6e6fe",
        // SubMenu, Dialog/Table Header
        "blue-text": "#135e82",
        // primary dark blue, Header component
        "blue-dark": "#135e82",
        // sm buttons
        "blue-light-opacity": "rgba(19, 94, 130, 0.1)",
        // *GREY*
        // icons, small text
        "grey-icons": "#8295a5",
        // footer
        "grey-background": "#efefef",
        // *GREEN*
        "green-success": "#69A74B",
        // *RED*
        // Confirm buttons
        "orange-ki": "#E98C05",
        "red-error": "#b82121",
      },
    },
  },
  plugins: [],
};
