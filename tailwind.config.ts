import type { Config } from "tailwindcss";
const colors = require("./tw/utilities/colors");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors,
      keyframes: {
        dotFlashing1: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        dotFlashing2: {
          "0%": { opacity: "0.6" },
          "50%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        dotFlashing3: {
          "0%": { opacity: "0.3" },
          "50%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        unplugLeft: {
          "0%": { right: "-2.2rem" },
          "50%": { right: "0" },
          "100%": { right: "-2.2rem" },
        },
        unplugRight: {
          "0%": { left: "0" },
          "50%": { left: "2rem" },
          "100%": { left: "0" },
        },
      },
      animation: {
        unplugLeft: "unplugLeft 4s infinite",
        unplugRight: "unplugRight 4s infinite",
        dotFlashing1: "dotFlashing1 2s infinite linear alternate",
        dotFlashing2: "dotFlashing2 2s infinite linear alternate 0.4s",
        dotFlashing3: "dotFlashing3 2s infinite linear alternate 0.6s",
      },
    },
  },
  plugins: [
    require("./tw/classes/msc-buttons"),
    require("./tw/classes/msc-checkbox"),
    require("./tw/classes/msc-dropdown"),
    require("./tw/classes/msc-inputs"),
    require("./tw/classes/msc-modals"),
    require("./tw/classes/msc-radio"),
    require("./tw/classes/msc-toggle"),
    require("./tw/classes/msc-icons"),
    require("./tw/classes/msc-dividers"),
    require("./tw/classes/msc-spinner"),
    require("./tw/classes/msc-link"),
    require("./tw/classes/msc-typography"),
    require("./tw/classes/msc-pager"),
    require("./tw/classes/msc-filter"),
    require("./tw/classes/msc-dialog"),
    require("./tw/classes/msc-grey-button"),
    require("./tw/classes/msc-tabs"),
    require("./tw/classes/msc-cart-action-bar"),
    require("./tw/classes/msc-index"),
    require("./tw/classes/msc-breadcrumb"),
    require("./tw/classes/msc-alert"),
    require("./tw/classes/msc-pagination"),
    require("./tw/classes/msc-page-down"),
  ],
};
export default config;
