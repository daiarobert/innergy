/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}", // optional
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require("tailwindcss-animate")],
};
