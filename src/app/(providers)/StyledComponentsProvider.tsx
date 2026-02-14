'use client';

import { getStylesTheme } from '@/shared/config';
import { FC, PropsWithChildren } from 'react';
import { useGlobalStore } from '@/entities/global-settings';
import { ThemeProvider } from 'styled-components';

export const StyledComponentsProvider: FC<PropsWithChildren> = ({ children }) => {
  const { theme } = useGlobalStore();

  const themeStyles = getStylesTheme(theme);

  return <ThemeProvider theme={themeStyles}>{children}</ThemeProvider>;
};
