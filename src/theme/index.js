/* eslint-disable linebreak-style */
import { typographyVariants } from './typographyVariants';

export const colors = {
  background: {
    primary: {
      color: '#09090B',
      contrastText: '#ffffff',
    },
    secondary: {
      color: 'radial-gradient(#FFFFFF5E 6%, #272730CC 120%)',
      contrastText: '#ffffff',
    },
    tertiary: {
      color: '#272730',
      contrastText: '#ffffff',
    },
  },
  borders: {
    primary: {
      color: '#00cbcc',
    },
    secondary: {
      color: '#ff006e',
    },
    tertiary: {
      color: '#FFFFFF',
    },
  },
  button: {
    primary: {
      color: '#00cbcc',
      contrastText: '#000002',
    },
    secondary: {
      color: '#ff006e',
      contrastText: '#ffffff',
    },
    tertiary: {
      color: 'transparent',
      contrastText: '#FFFFFF',
      borderColor: '#FFFFFF',
    },
  },
  card: {
    primary: {
      color: '#FFFFFFE6',
      contrastText: '#000002',
      boxShadow: '#000002',
    },
    secondary: {
      color: '#272730E6',
      contrastText: '#FFFFFF',
    },
  },
  primary: {
    main: {
      color: '#ffffff',
      contrastText: '#000002',
    },
  },
  secondary: {
    main: {
      color: '#00cbcc',
      contrastText: '#000002',
    },
  },
  tertiary: {
    main: {
      color: '#ff006e',
      contrastText: '#ffffff',
    },
    light: {
      color: '#88989E',
      contrastText: '#ffffff',
    },
  },
};

export default {
  colors,
  typographyVariants,
  breakpoints: {
    xs: 0, // extra small
    sm: 480, // small
    md: 768, // medium
    lg: 992, // large
    xl: 1200, // extra large
    xxl: 1620,
    uhd: 2200, // 4k tv
  },
  borderRadius: '15px',
  transition: '200ms ease-in-out',
  fontFamily: '\'Rubik\', sans-serif',
};
