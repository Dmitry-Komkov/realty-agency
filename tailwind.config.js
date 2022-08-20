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
      primaryDarker: '#0061bb',
      primaryDark: '#0a142f',
      primaryGradient: 'linear-gradient(126deg, rgba(0,129,254,1) 30%, rgba(0,97,187,1) 100%)',
      secondary: '#244a83',
      secondaryDarker: '#213e6a',
      accent: '#ff3f01',
      accentTransparent: 'rgba(255,63,1,0.3)',
      accentDarker: '#e23400',
      white: '#ffffff',
      whiteTransparent: 'rgba(255,255,255,0.5)',
      black: '#000000',
      textDark: '#1f2937',
      gray: '#848484',
      grayLight: '#e5e5e5',
      grayLighter: '#ededed',
      grayLightest: "#f4f5f9",
      success: "#2eb211",
      error: "#d11515"
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
