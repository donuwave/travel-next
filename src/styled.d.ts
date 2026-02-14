import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: 'light' | 'dark';
    colors: {
      primary: {
        main: string;
        high: string;
        highest: string;
        onPrimary: string;
      };
      secondary: {
        main: string;
        high: string;
        highest: string;
        onSecondary: string;
      };
      disabled: {
        main: string;
        onDisabled: string;
      };
      container: {
        neutral: string;
        neutralHigh: string;
        neutralHighest: string;
        onNeutral: string;
      };
      surface: {
        default: string;
        bright: string;
        containerLowest: string;
        containerLow: string;
        container: string;
        containerHigh: string;
        containerHighest: string;
        onSurface: string;
        onSurfaceVariant: string;
        opacity: string;
      };
    };
  }
}
