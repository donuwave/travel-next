import { AntdRegistry } from '@ant-design/nextjs-registry';
import React, { FC, PropsWithChildren } from 'react';

export const AntdDesignProvider: FC<PropsWithChildren> = ({ children }) => {
  return <AntdRegistry>{children}</AntdRegistry>;
};
