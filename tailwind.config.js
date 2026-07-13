  module.exports = {
    theme: {
      extend: {
        colors: {
          kinetic: {
            darkBg:     '#0b0c10',
            darkBgAlt:  '#121212',
            primary:    '#2E7DFF',
            secondary:  '#1A1C1E',
            tertiary:   '#00F5FF',
            neutralBg:  '#25282B',
          },
        },
        fontFamily: {
          headline: ['Lexend', 'sans-serif'],
          body: ['Manrope', 'sans-serif'],
        },
        keyframes: {
          gradientShift: {
            '0%, 100%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
          },
        },
        animation: {
          gradientShift: 'gradientShift 6s ease infinite',
        },
      },
    },
  }