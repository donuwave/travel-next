'use client';

import { ConfigProvider } from 'antd';
import React, { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

import { getAntdTheme, getStylesTheme } from '@/shared/config';

import { useGlobalStore } from '../../entities/global-settings';

export const ThemeConfigProvider: FC<PropsWithChildren> = ({ children }) => {
  const { theme } = useGlobalStore();
  const themeStyles = getStylesTheme(theme);
  const themeAntd = getAntdTheme(themeStyles);

  return (
    <ThemeProvider theme={themeStyles}>
      <ConfigProvider theme={themeAntd}>{children}</ConfigProvider>
    </ThemeProvider>
  );
};
