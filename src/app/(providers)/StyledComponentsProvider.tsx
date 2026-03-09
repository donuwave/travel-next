'use client';

import { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

import { useGlobalStore } from '@/entities/global-settings';
import { getStylesTheme } from '@/shared/config';

export const StyledComponentsProvider: FC<PropsWithChildren> = ({ children }) => {
  const { theme } = useGlobalStore();

  const themeStyles = getStylesTheme(theme);

  return <ThemeProvider theme={themeStyles}>{children}</ThemeProvider>;
};
