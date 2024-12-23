/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  daisyUi: {
    themes: ["light"],
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};
