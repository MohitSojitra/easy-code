const {spacing} = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        2: '0 1px 3px 0 rgb(11 17 29 / 98%), 0 1px 2px 0 rgb(9 18 35 / 90%)',
      },
      fontFamily: {
        sans: ['Inter'],
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.yellow.500'),
              '&:hover': {
                color: theme('colors.yellow.700'),
              },
              code: {color: theme('colors.yellow.400')},
            },
            pre: {
              backgroundColor: theme('colors.gray.900'),
              color: theme('colors.gray.50'),
            },
            'h2,h3,h4': {
              'scroll-margin-top': spacing[32],
            },
            code: {color: theme('colors.yellow.500')},
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.50'),
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.600'),
              },
              code: {
                color: theme('colors.blue.400'),
                backgroundColor: theme('colors.yellow.400'),
              },
            },
            blockquote: {
              borderLeftColor: theme('colors.gray.100'),
              color: theme('colors.gray.300'),
            },
            pre: {
              backgroundColor: theme('colors.gray.300'),
              color: theme('colors.gray.900'),
            },
            'h2,h3,h4': {
              color: theme('colors.white'),
              'scroll-margin-top': spacing[32],
            },
            hr: {borderColor: theme('colors.gray.700')},
            ol: {
              li: {
                '&:before': {color: theme('colors.gray.500')},
              },
            },
            ul: {
              li: {
                '&:before': {backgroundColor: theme('colors.gray.500')},
              },
            },
            strong: {color: theme('colors.gray.300')},
            thead: {
              color: theme('colors.gray.100'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ['dark'],
      boxShadow: ['dark'],
    },
  },
  plugins: [
    require('@tailwindcss/typography')({
      modifiers: [],
    }),
  ],
}
