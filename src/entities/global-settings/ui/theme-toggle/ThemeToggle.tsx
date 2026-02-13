import { Select } from 'antd';
import React from 'react';

import { ThemeVariants, useGlobalStore } from '@/entities/global-settings';

import { SInfo, SThemeToggle, STitle } from './themeToggle.styles';

export const ThemeToggle = () => {
  const { theme, changeTheme } = useGlobalStore();

  const themeList = [
    { value: 'dark', label: 'Dark Theme' },
    { value: 'light', label: 'Light Theme' },
  ];

  const handleChange = (value: ThemeVariants) => {
    changeTheme(value);
  };

  return (
    <SThemeToggle>
      <SInfo>
        <STitle>Appearance</STitle>
        <span>Customization how your theme looks on your device</span>
      </SInfo>

      <Select
        placeholder="Select theme"
        value={theme}
        onSelect={handleChange}
        options={themeList}
      />
    </SThemeToggle>
  );
};
