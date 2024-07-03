/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/ui/**/*.tsx"],
  theme: {
    backgroundColor: {
      primary: "#18a0fb",
    },
    textColor: {
      "on-primary": "#ffffff",
    },
    borderRadius: { lg: "0.5rem" },
    extend: {},
  },
  plugins: [],
};
