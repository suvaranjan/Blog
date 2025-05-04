/* eslint-disable @typescript-eslint/no-require-imports */
// @ts-check
/** @type {import("tailwindcss").Config } */
module.exports = {
  theme: {
    extend: {
      colors: {
        neutral: {
          50: 'oklch(var(--color-neutral-50))',
          100: 'oklch(var(--color-neutral-100))',
          200: 'oklch(var(--color-neutral-200))',
          300: 'oklch(var(--color-neutral-300))',
          400: 'oklch(var(--color-neutral-400))',
          500: 'oklch(var(--color-neutral-500))',
          600: 'oklch(var(--color-neutral-600))',
          700: 'oklch(var(--color-neutral-700))',
          800: 'oklch(var(--color-neutral-800))',
          900: 'oklch(var(--color-neutral-900))',
          950: 'oklch(var(--color-neutral-950))',
        },
        primary: {
          500: 'oklch(var(--color-primary-500))',
          600: 'oklch(var(--color-primary-600))',
          400: 'oklch(var(--color-primary-400))',
        },
        pink: {
          500: 'oklch(var(--color-pink-500))',
        },
        indigo: {
          500: 'oklch(var(--color-indigo-500))',
        },
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: theme('colors.primary.600'),
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2': {
              fontWeight: '500',
              letterSpacing: theme('letterSpacing.tight'),
            },
            h3: {
              fontWeight: '500',
            },
            code: {
              color: theme('colors.indigo.500'),
            },
          },
        },
        invert: {
          css: {
            a: {
              color: theme('colors.primary.400'),
              '&:hover': {
                color: theme('colors.primary.400'),
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.neutral.100'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
