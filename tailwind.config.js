module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'lava': "url('/img/bg_lava.jpg')",
        'paper': "url('/img/bg_paper.jpg')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
