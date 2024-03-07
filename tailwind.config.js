/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        mainBG: "EFF2F5",
        mainBorder: "rgba(222, 223, 226, 1)",
        textNav: "rgba(15, 22, 41, 1)",
        textMain: "rgba(11, 20, 38, 1)",
        textGrey : "rgba(62, 66, 74, 1)",
        textFade : "rgba(62, 87, 101, 1)",
        textSubHead : "rgba(68, 71, 91, 1)",
        textFade2 : "rgba(118, 131, 150, 1)",
        textFade3 : "rgba(93, 102, 123, 1)",
        bgGrey : "rgba(128, 138, 157, 1)",
        trueGreen : "rgba(20, 176, 121, 1)",
        bgGreen : "rgba(235, 249, 244, 1)",
        bgBlueLeft : "rgba(40, 112, 234, 1)",
        bgBlueRight : "rgba(27, 74, 239, 1)",
        textBlue : "rgba(1, 65, 207, 1)",
        bgBlueMain : "rgba(0, 82, 254, 1)",
      },
      boxShadow: {
        default: "0px 0px 12px 0px rgba(16, 38, 73, 0.06)",
      },
      fontSize:{
        "2.5xl": "28px",
      }
    },
  },
  plugins: [],
};
