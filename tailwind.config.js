/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{ts,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./lib/**/*.{ts,tsx}", // optional
];

export const theme = {
  extend: {
    fontFamily: {
      inter: ["var(--font-inter)", "sans-serif"],
      anton: ["var(--font-anton)", "sans-serif"],
    },
  },
};

export const plugins = [];
