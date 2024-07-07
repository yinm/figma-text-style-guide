/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/ui/**/*.tsx"],
  theme: {
    backgroundColor: {
      primary: "#18a0fb",
      "switch-thumb": "#ffffff",
      "switch-track-off": "#808080",
    },
    textColor: {
      "on-primary": "#ffffff",
    },
    borderRadius: {
      lg: "0.5rem",
      full: "9999px",
    },
    extend: {},
  },
  plugins: [],
};
