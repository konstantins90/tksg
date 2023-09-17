module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
        center: true,
        padding: '1rem',
        screens: {
            sm: "100%",
            md: "100%",
            lg: "1280px",
        }  
    },
    height: {
       '1/4': '25vh',
       '1/2': '50vh',
       '3/4': '65vh',
       'full': '100%'
    },
    maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
    },
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#F4F3EF',
      'black': '#353434',
      'yellow': '#FEBD2F',
      'orange': '#F86D56',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
