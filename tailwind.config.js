/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/app/app.component.html", "src/app/home/home.component.html"],
  theme: {
    extend: {
      colors: {
        "desaturated-red": "hsl(0, 36%, 70%)",
        "soft-red": "hsl(0, 93%, 68%)",
        "dark-red": "hsl(0, 6%, 24%)",
      },
      width: {
        "90vw": "90vw",
      },
      height: {
        "90vw": "90vw",
      },
    },
  },
  plugins: [],
};
