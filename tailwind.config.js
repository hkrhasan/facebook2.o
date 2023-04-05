/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit", // just in time compiler
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
