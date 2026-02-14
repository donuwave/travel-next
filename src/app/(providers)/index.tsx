import React, { FC, PropsWithChildren } from 'react';

import { StyledComponentsProvider } from './StyledComponentsProvider';
import { ThemeProvider } from './ThemeProvider';
import { RootStyleRegistry } from './RootStyleRegistery';
import { StyledComponentsRegistry } from './StyledComponentsRegistry';

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyledComponentsProvider>
      <ThemeProvider>
        <RootStyleRegistry>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </RootStyleRegistry>
      </ThemeProvider>
    </StyledComponentsProvider>
  );
};
