import { theme } from './src/lib/config/general'
// @ts-ignore Could not find a declaration file for module '@tailwindcss/typography'.
import typography from '@tailwindcss/typography'
// @ts-ignore Could not find a declaration file for module 'daisyui'.
import daisyui from 'daisyui'

export default {
  content: ['./src/**/*.{html,md,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        //hungary flag colors
        primary: '#008000',
        secondary: '#D00000'
      }
    }
  },
  plugins: [typography, daisyui],
  daisyui: { themes: theme.map(({ name }) => name) }
}
