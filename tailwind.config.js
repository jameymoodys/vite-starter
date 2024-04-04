const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-button-hover": "#d6e6fe",
        "blue-text": "#135e82",
        "grey-icons": "#8295a5",
        "green-success": "#69A74B",
        "orange-ki": "#E98C05",
        "red-error": "#b82121",
      },
    },
  },
  plugins: [],
});
