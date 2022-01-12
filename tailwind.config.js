module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      animation: {
        fadeInUpBig: 'fadeInUpBig',
      },
      textColor: theme => theme('colors'),
      textColor: {
        'theme-black': '#585858',
        'primary': '#1d3557',
        'secondary': '#c25251',
        'pink': '#457b9d',
      },
      borderColor: theme => ({
        'theme-black': '#585858',
        'primary': '#1d3557',
        'secondary': '#c25251',
      }),
      borderWidth: {
        1: '1px',
      },
      borderRadius: {
        '4xl': '2.375rem',
        '50': '3.125rem'
      },
      spacing: {
        px: '1px',
        7.5: '30px',
        15: '3.75rem',
      },
      zIndex: {
        n1: '-1',
        99: '99',
        999: '999',
        9999: '9999'
      },
      fontFamily: {
        'maven': ["'Maven Pro', sans-serif"],
        'metro': ["'Metropolis'"],
      },
      fontSize: {
        '7.5xl': ['7.5rem'],
      },
      colors: {
        'theme-black': '#585858',
        'primary': '#1d3557',
        'secondary': '#c25251',
        'pink': '#457b9d',
        'gray-300': '#f9fbf5',
        'gray-400': '#f0fff4',
        'gray-500': '#b3d9db',
        'gray-600': '#f3faef',
        'gray-700': '#e1f3f4',
        'gray-800': '#ebf7f8',
      },
      pseudo: { // defaults to {'before': 'before', 'after': 'after'}
        'before': 'before',
        'after': 'after',
        'not-first': 'not(:first-child)',
      },
      container: {
        center: true,
        padding: {
            DEFAULT: "15px",
            sm: "15px",
            lg: "15px",
            xl: "15px",
            "2xl": "15px"
        },
        screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1200px'
        }
      },
      maxWidth: (theme, { breakpoints }) => ({
        '2xl': '43.125rem',
      }),
      width: (theme) => ({
        '1/38': '38%',
      }),
      lineHeight: {
        12: '3.75rem',
      },
      letterSpacing: {
        wide: '0.02em'
      }
    },
  },
  plugins: [
  ],
}
