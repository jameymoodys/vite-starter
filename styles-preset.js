module.exports = {
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        black: "#333333",
        blue: {
          // Hover table rows
          "button-hover": "#d6e6fe",
          // primary dark blue, Header component, SubMenu, Dialog/Table Header
          dark: "#135e82",
          // sm buttons
          "light-opacity": "rgba(19, 94, 130, 0.1)",
          focus: "#4084f8",
        },
        grey: {
          // icons, small text
          icons: "#8295a5",
          "input-label": "#8295a5",
          // footer
          background: "#efefef",
        },
        green: {
          // success
          success: "#69A74B",
        },
        orange: {
          // Confirm buttons
          ki: "#E98C05",
        },
        red: {
          error: "#b82121",
        },
      },
    },
  },
};
