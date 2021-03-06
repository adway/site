import { base } from '@theme-ui/presets';
import { merge } from 'lodash';

export const breakpoints = [32, 48, 64, 96, 128].map((w) => `${w}em`);

const heading = {
  // fontFamily: 'heading',
  lineHeight: 'heading',
  fontWeight: 'heading',
  letterSpacing: 'heading',
};

const textStyles = {
  color: 'text',
  fontFamily: '"IBM Plex Serif", "Gentium Basic", serif',
  fontSize: 1,
  fontWeight: 'body',
  lineHeight: 'body',
  h1: {
    ...heading,
    fontSize: 3,
  },
  h2: {
    ...heading,
    fontSize: 2,
  },
  h3: {
    ...heading,
    fontSize: 1,
  },
  h4: {
    ...heading,
    fontSize: 1,
  },
  a: {
    color: 'text',
    cursor: 'pointer',
    WebkitTextUnderlinePosition: 'under',
    ':hover,:focus': {
      color: 'primary',
    },
  },
  img: {
    maxWidth: '100%',
    height: 'auto',
  },
  ul: { listStyle: 'square' },
  'li > p': { my: 0 },
  p: {
    textAlign: 'justify',
  },
};

export const palette = {
  darker: '#090909',
  dark: '#121217',
  darkless: '#252525',
  black: '#000',
  smoke: '#eee',
  snow: '#fafafa',
  white: '#ffffff',
  sand: '#f5efe6',
  primary: '#128BD2',
  muted: '#504c52',
  mutedLight: '#ccb',
  border: 'rgba(0,0,0,0.1)',
  cream: '#EFE3D5',
  coffee: '#1c140a',
};

const theme = merge(base, {
  breakpoints,
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [13, 16, 20, 28, 47, 63, 95, 127],
  //
  useColorSchemeMediaQuery: true,
  colors: {
    ...palette,
    text: palette.coffee,
    background: palette.cream,
    elevated: palette.white,
    sunken: palette.smoke,
    border: palette.border,
    primary: palette.primary,
    muted: palette.muted,
    modes: {
      dark: {
        text: palette.cream,
        background: palette.coffee,
        primary: palette.primary,
        elevated: palette.darkless,
        sunken: palette.darker,
        border: palette.darkless,
        muted: palette.mutedLight,
      },
    },
  },
  fonts: {
    body: '"sans-serif"',
  },
  lineHeights: {
    title: 1,
    heading: 1.125,
    subheading: 1.25,
    body: 1.75,
  },
  fontWeights: {
    body: 400,
    bold: 700,
    heading: 700,
  },
  letterSpacings: {
    title: '-0.009em',
    heading: '0.009em',
  },
  sizes: {
    ultrawide: 2048,
    wide: 1536,
    container: 900,
    subcontainer: 1024,
    narrowplus: 768,
    narrow: 512,
  },
  radii: {
    default: 6,
    extra: 9,
    circle: 99999,
  },
  shadows: {
    small: '0 1px 2px rgba(0, 0, 0, 0.0625), 0 2px 4px rgba(0, 0, 0, 0.0625)',
    card: '0 4px 8px rgba(0, 0, 0, 0.125)',
    elevated:
      '0 1px 2px rgba(0, 0, 0, 0.0625), 0 8px 12px rgba(0, 0, 0, 0.125)',
  },
  text: {
    heading: {
      fontWeight: 'bold',
      lineHeight: 'heading',
    },
    title: {
      fontWeight: 'bold',
      lineHeight: 'title',
      letterSpacing: 'title',
      fontSize: [4, 5, 6],
    },
    subtitle: {
      fontSize: [2, 3, null, null, 4],
      fontWeight: 'body',
      letterSpacing: 'heading',
      lineHeight: 'subheading',
    },
    headline: {
      fontWeight: 'bold',
      lineHeight: 'heading',
      letterSpacing: 'heading',
      fontSize: 4,
      mt: 3,
      mb: 3,
    },
    caption: {
      color: 'muted',
      fontWeight: 'medium',
      letterSpacing: 'heading',
    },
    description: {
      pb: 2,
    },
  },
  buttons: {
    primary: {
      bg: 'primary',
      color: 'background',
      cursor: 'pointer',
      lineHeight: 'body',
      svg: { ml: -1, mr: 2 },
    },
    muted: {
      cursor: 'pointer',
      bg: 'transparent',
      color: 'text',
      px: 0,
      fontWeight: 'body',
      display: 'flex',
      alignItems: 'center',
      svg: { ml: -1, mr: 2 },
    },
  },
  cards: {
    primary: {
      bg: 'elevated',
      color: 'text',
      p: [3, 4],
      borderRadius: 'extra',
      boxShadow: 'card',
      input: { boxShadow: 'none !important' },
    },
    sunken: {
      bg: 'sunken',
      p: [3, 4],
      borderRadius: 'extra',
      'input, a': { bg: 'header', boxShadow: 'none !important' },
    },
  },
  layout: {
    container: {
      // width: '100%',
      maxWidth: ['container'],
      mx: 'auto',
      px: 3,
      ...textStyles,
      ol: {
        paddingLeft: 3,
      },
      ul: {
        paddingLeft: 3
      }
    },
    copy: {
      width: '100%',
      maxWidth: ['narrowplus', null, null, null, 'container'],
      mx: 'auto',
      px: 3,
      ...textStyles,
    },
    wide: {
      width: '100%',
      maxWidth: ['wide', null, null, null, 'ultrawide'],
      mx: 'auto',
      px: 3,
    },
    narrow: {
      width: '100%',
      maxWidth: ['narrow', null, null, null, 'container'],
      mx: 'auto',
      px: 3,
    },
  }
});

export const root = (theme) => ({
  backgroundColor: theme.colors.background,
  margin: 0,
  transitionProperty: 'background-color',
  transitionTimingFunction: 'ease-out',
  transitionDuration: '.4s',

});

export default theme;
