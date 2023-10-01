/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "neutral-400": "#a2a2a2",
        "neutral-50": "#f9f9f9",
        "neutral-1000": "#000",
        "gray": "rgba(255, 255, 255, 0.12)",
        "neutral-950": "#0a0a0a",
        "neutral-900": "# 171717",
        "neutral-800": "#262626",
        "neutral-700": "#404040",
        "neutral-600": "#525252",
        "neutral-500": "#737373",
        "neutral-300": "#d3d3d3",
        "neutral-200": "#e4e4e4",
        "neutral-100": "#f4f4f4",
        "red-error": "#8b141a",
        "green-success": "#00be74",
        "card-fill": "#16181c",
        "searchbar-fill": "#212327",
        "blue-wash": "rgba(117, 190, 239, 0.2)",
        "twitter-blue": "#1d9bf0",
        "twtr-blue-hover": "#1871CA",
        "twtr-blue-disabled": "#1E5D87",
        "twitter-white-100": "#fff"
      },
      spacing: {},
      fontFamily: {
        "px-regular": "Inter"
      },
    },
    // fontSize: {
    //   base: "1rem",
    //   "xl": "1.25rem",
    //   "5xl": "1.5rem",
    //   inherit: "inherit",
    // }
  },
  plugins: [],
}

