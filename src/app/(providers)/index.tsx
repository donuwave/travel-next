import React, { FC, PropsWithChildren } from 'react';

import { AntdDesignProvider } from './AntdDesignProvider';
import { StyledComponentsRegistry } from './StyledComponentsProvider';
import { ThemeConfigProvider } from './ThemeConfigProvider';

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyledComponentsRegistry>
      <AntdDesignProvider>
        <ThemeConfigProvider>{children}</ThemeConfigProvider>
      </AntdDesignProvider>
    </StyledComponentsRegistry>
  );
};
