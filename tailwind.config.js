/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  experimental: {
    images: {
      unoptimized: true
    }
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
