import { defineConfig } from '@pandacss/dev';
import { cssPicons } from '@css-picons/config';
import { pformReset } from 'pform-reset';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },
  globalCss: {
    html: {
      lineHeight: 1.5,
      textRendering: 'optimizeLegibility',
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      WebkitTextSizeAdjust: '100%',
      height: '100%',
    },
    body: {
      fontFamily: 'var(--font-inter), sans-serif',
      display: 'flex',
      flexDirection: 'column',
      minHeight: 'full',
      height: 'fit-content',
      maxHeight: '100%',
      _dark: {
        colorScheme: 'dark',
      },
    },
    '*, *::before, *::after': {
      borderColor: 'gray.300',
      borderStyle: 'solid',
    },
  },
  presets: [
    '@pandacss/dev/presets',
    pformReset({
      strategy: 'base',
    }),
    cssPicons({
      // Specify all the icon sets you'll be using
      collections: ['game-icons', 'mdi'],
      jsx: ['AppIcon', 'Navbar'],
    }),
  ],
  strictTokens: false,
  jsxFramework: 'react',
  // The output directory for your css system
  outdir: 'styled-system',
});
