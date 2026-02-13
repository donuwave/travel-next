import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  name: 'light',
  colors: {
    background: '#ffffff',
    primary: '#131118',
    secondary: '#A4A1AA',
    error: '#f63c3c',
    additional: '#f6f6f6',
  },
};

export const darkTheme: DefaultTheme = {
  name: 'dark',
  colors: {
    background: '#000000',
    primary: '#00b96b',
    secondary: '#A4A1AA',
    error: '#f63c3c',
    additional: '#e4e4e4',
  },
};

export const getStylesTheme = (themeName: DefaultTheme['name']) => {
  switch (themeName) {
    case 'light':
      return lightTheme;
    case 'dark':
      return darkTheme;
    default:
      return lightTheme;
  }
};
