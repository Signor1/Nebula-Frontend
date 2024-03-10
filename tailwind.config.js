/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bodyBg: "#101018",
        navBg: "0f161b",
        myBlack: "#201f2a",
        myGreen: "#45f882",
        myYellow: "#ffbe18",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
      },
      screens: {
        "2xl": {
          min: "1500px",
          max: "1800px",
        },
        xxl: {
          min: "1400px",
          max: "1500px",
        }, //only for xxl
        xl: {
          min: "1200px",
          max: "1499.98px",
        },
        lg: {
          min: "992px",
          max: "1199.98px",
        },
        md: {
          min: "768px",
          max: "991.98px",
        },
        sm: {
          min: "576px",
          max: "767.98px",
        },
        xsm: {
          max: "575.98px",
        },
      },
    },
  },
  plugins: [],
};
