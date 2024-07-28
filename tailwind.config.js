/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, rgba(41, 38, 33, 0) 0%, #292621 100%)',
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'clicker-script': ['"clicker-script"', 'cursive'],
        'jost': ['"jost"', 'sans-serif']
      },
      boxShadow: {
        'custom': '0px 3px 31px 2px rgba(207, 207, 207, 0.7)',
        'custom-shadow': '0px 10px 20px 0px rgba(221, 221, 221, 0.3)'
      }
    },
  },
  plugins: [],
};
