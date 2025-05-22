/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{ts,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./lib/**/*.{ts,tsx}", // optional
];
export const theme = {
  extend: {},
};
export const plugins = [require("tailwindcss-animate")];

// // DaisyUI configuration
// export const daisyui = {
//   themes: false, // Disable all DaisyUI themes
// };

// // Combine everything into a default export for DaisyUI compatibility
// export default {
//   content,
//   theme,
//   plugins,
//   daisyui,
// };
