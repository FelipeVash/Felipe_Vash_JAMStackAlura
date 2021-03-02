/* eslint-disable linebreak-style */
import { typographyVariants } from './typographyVariants';

export const colors = {
  background: {
    primary: {
      color: '#090909',
      contrastText: '#FFFFFF',
    },
    secondary: {
      color: '#191919',
      contrastText: '#FFFFFF',
    },
    tertiary: {
      color: '#000000',
      ontrastText: '#FFFFFF',
    },
  },
  borders: {
    primary: {
      color: '#4dffff',
    },
    secondary: {
      color: '#ff0066',
    },
  },
  button: {
    primary: {
      color: '#4DFFFF',
      contrastText: '#000000',
    },
    secondary: {
      color: '#FF0066',
      contrastText: '#FFFFFF',
    },
    tertiary: {
      color: '#FFFFFF',
      contrastText: '#000000',
    },
  },
  primary: {
    main: {
      color: '#FFFFFF',
      contrastText: '#000000',
    },
  },
  secondary: {
    main: {
      color: '#4dffff',
      contrastText: '#000000',
    },
  },
  tertiary: {
    main: {
      color: '#ff0066',
      contrastText: '#FFFFFF',
    },
    light: {
      color: '#88989E',
      contrastText: '#fff',
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
