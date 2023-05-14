/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  darkMode: "class", // or 'class' or 'media'
  theme: {
    extend: {
      fontFamily: {
        jose: "Josefin Sans, sans-serif",
      },
      colors: {
        //---------LIGHT THEME
        // Very Light Gray
        vlg: "hsl(0, 0%, 98%)",
        // Very Light Grayish Blue
        vlgb: "hsl(236, 33%, 92%)",
        // Light Grayish Blue
        lgb: "hsl(233, 11%, 84%)",
        // Dark Grayish Blue
        dgb: "hsl(236, 9%, 61%)",
        // Very Dark Grayish Blue
        vdgb: "hsl(235, 19%, 35%)",

        //---------DARK THEME
        //  Very Dark Blue
        darkvdb: "hsl(235, 21%, 11%)",
        //  Very Dark Desaturated Blue
        darkvddb: "hsl(235, 24%, 19%)",
        // Light Grayish Blue
        darklgb: "hsl(234, 39%, 85%)",
        // Light Grayish Blue (hover)
        darklgbh: "hsl(236, 33%, 92%)",
        // Dark Grayish Blue
        darkdgb: "hsl(234, 11%, 52%)",
        // Very Dark Grayish Blue
        darkvdgb: "hsl(233, 14%, 35%)",
        // Very Dark Grayish Blue
        darkvdgb2: "hsl(237, 14%, 26%)",

        // PRIMARY COLORS
        "bright-blue": "hsl(220, 98%, 61%)",
        "Check-gradient-1": " hsl(192, 100%, 67%)",
        "Check-gradient-2": "hsl(280, 87%, 65%)",
      },
      backgroundImage: {
        "dark-mobile": "url('../images/bg-mobile-dark.jpg')",
        mobile: 'url("../images/bg-mobile-light.jpg")',
        "dark-desktop": "url('../images/bg-desktop-dark.jpg')",
        desktop: 'url("../images/bg-desktop-light.jpg")',
      },
    },
  },
  plugins: [],
};
