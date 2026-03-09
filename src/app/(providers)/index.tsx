import React, { FC, PropsWithChildren } from 'react';

import { RootStyleRegistry } from './RootStyleRegistery';
import { StyledComponentsProvider } from './StyledComponentsProvider';
import { StyledComponentsRegistry } from './StyledComponentsRegistry';
import { ThemeProvider } from './ThemeProvider';

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
