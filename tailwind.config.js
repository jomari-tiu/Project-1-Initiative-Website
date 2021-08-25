module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'openSans': ['Open Sans', 'sans-serif'],
     },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#3490dc',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
      'darkTransparent':'rgba(0, 0, 0, 0.514)'
     }),
    borderRadius: {
      '100pxSide':'100px 0 0 100px',
      '100pxUp':'100px 100px 0px 0',
      '70%':'0 0 70% 0',
      'none': '0',
      'sm': '0.125rem',
      '50%': '50%',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
    },
    screens: {
      'xs':'300px',
      'mobile':'400px',
      'mobile2':'600px',
      'tablet': '900px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {

      colors:{
        'pink':'#fc506b'
      },
      width:{
        '70rem':'70rem'
      },
      boxShadow:{
        'boxShadow':'0 10px 15px 0 rgb(168, 168, 168)',
        'arrowShadow':'15px 10px 15px 0 rgba(87, 87, 87, 0.514)',
        '2ndbox':'0 10px 15px 0 rgb(92, 92, 92, 0.404)',
        'pageSpeed':'15px 15px 10px 0px rgba(99, 99, 99, 0.459)'
      },
      height:{
        '22vh':'22vh',
        '78vh':'78vh',
        '25vh':'25vh',
        '75vh':'75vh',
        '600px':'600px',
        '500px':'500px',
        '300px':'300px',
        '200px':'200px',
        '400px':'400px',
        '95%':'95%'
      },
      width:{
        '400px':'400px',
        '90%':'90%',
        '300px':'300px'
      },
      fontSize:{
        '9px':'9px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
