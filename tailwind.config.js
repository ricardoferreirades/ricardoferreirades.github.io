/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
			fontFamily: {
				roboto: ["var(--font-roboto)"],
        robotoCondensed: ["--var(--font-roboto-condensed)"]
			},
      colors: {
        "dark-gray": {
          1: 'var(--dark-gray)',
          2: 'var(--dark-gray-2)',
          3: 'var(--dark-gray-3)',
          4: 'var(--dark-gray-4)',
          5: 'var(--dark-gray-5)',
        },
        "medium-gray": {
          1: "var(--medium-gray)",
          2: "var(--medium-gray-2)",
        },
        "light-gray":  "var(--light-gray)",
      }
    }
  },
  plugins: [],
}

