import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: 'light' | 'dark';
    colors: {
      background: string;
      primary: string;
      secondary: string;
      error: string;
      additional: string;
    };
  }
}
