import type { Config } from "tailwindcss";
const colors = require("./src/styles/utilities/colors");

const config: Config = {
  content: [
    "./src//**/*.{js,ts,jsx,tsx,mdx}",
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
    require("./src/styles/classes/msc-buttons"),
    require("./src/styles/classes/msc-checkbox"),
    require("./src/styles/classes/msc-dropdown"),
    require("./src/styles/classes/msc-inputs"),
    require("./src/styles/classes/msc-modals"),
    require("./src/styles/classes/msc-radio"),
    require("./src/styles/classes/msc-toggle"),
    require("./src/styles/classes/msc-icons"),
    require("./src/styles/classes/msc-dividers"),
    require("./src/styles/classes/msc-spinner"),
    require("./src/styles/classes/msc-link"),
    require("./src/styles/classes/msc-typography"),
    require("./src/styles/classes/msc-pager"),
    require("./src/styles/classes/msc-filter"),
    require("./src/styles/classes/msc-dialog"),
    require("./src/styles/classes/msc-grey-button"),
    require("./src/styles/classes/msc-tabs"),
    require("./src/styles/classes/msc-cart-action-bar"),
    require("./src/styles/classes/msc-index"),
    require("./src/styles/classes/msc-breadcrumb"),
    require("./src/styles/classes/msc-alert"),
    require("./src/styles/classes/msc-pagination"),
  ],
};
export default config;
