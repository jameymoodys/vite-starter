/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-button-hover": "#d6e6fe",
        "blue-text": "#135e82",
        "grey-icons": "#8295a5",
      },
    },
  },
  plugins: [],
};
