import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  name: 'light',
  colors: {
    primary: {
      main: '#F16F33',
      high: '#EB5611',
      highest: '#DA4601',
      onPrimary: '#DA4601',
    },
    secondary: {
      main: '#FFD6C0',
      high: '#FFC2A2',
      highest: '#FFB48C',
      onSecondary: '#FA742D',
    },
    disabled: {
      main: '#DFDFDF',
      onDisabled: '#A3A3A3',
    },
    container: {
      neutral: '#EEF2F5',
      neutralHigh: '#DFE3E5',
      neutralHighest: '#CED4D7',
      onNeutral: '#303030',
    },
    surface: {
      default: '#FAF6EF',
      bright: '#FFFFFF',
      containerLowest: '#FFFBF5',
      containerLow: '#FAF6EF',
      container: '#F5F0E8',
      containerHigh: '#EEE8DF',
      containerHighest: '#E5DDD1',
      onSurface: '#E5DDD1',
      onSurfaceVariant: '#7A7B7A',
      opacity: '#FFFFFFCC',
    },
  },
};

export const darkTheme: DefaultTheme = {
  name: 'dark',
  colors: {
    primary: {
      main: '#F16F33',
      high: '#EB5611',
      highest: '#DA4601',
      onPrimary: '#DA4601',
    },
    secondary: {
      main: '#FFD6C0',
      high: '#FFC2A2',
      highest: '#FFB48C',
      onSecondary: '#FA742D',
    },
    disabled: {
      main: '#DFDFDF',
      onDisabled: '#A3A3A3',
    },
    container: {
      neutral: '#EEF2F5',
      neutralHigh: '#DFE3E5',
      neutralHighest: '#CED4D7',
      onNeutral: '#303030',
    },
    surface: {
      default: '#FAF6EF',
      bright: '#FFFFFF',
      containerLowest: '#FFFBF5',
      containerLow: '#FAF6EF',
      container: '#F5F0E8',
      containerHigh: '#EEE8DF',
      containerHighest: '#E5DDD1',
      onSurface: '#E5DDD1',
      onSurfaceVariant: '#7A7B7A',
      opacity: '#FFFFFFCC',
    },
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
