import { DefaultTheme } from 'styled-components';

export type ThemeVariants = DefaultTheme['name'];

export interface UserSettings {
  theme: ThemeVariants;
  changeTheme: (theme: ThemeVariants) => void;
}
