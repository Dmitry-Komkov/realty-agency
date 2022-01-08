module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    container: {
      center: true,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#0081fe',
      primaryDarker: '#0076e5',
      primaryDark: '#0a142f',
      secondary: '#ff3f01',
      secondaryDarker: '#e23400',
      white: '#ffffff',
      black: '#000000',
      textDark: '#1f2937',
      grayLight: '#e5e5e5',
      grayLighter: '#ededed',
      grayLightest: "#f4f5f9"
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
      'serif': ['Roboto', 'serif'],
      'body': ['Roboto', 'sans-serif'],
      'display': ['Roboto', 'sans-serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
