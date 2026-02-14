import { DefaultTheme } from 'styled-components';
import { ThemeConfig } from 'antd';

export const getAntdTheme = (theme: DefaultTheme): ThemeConfig => {
  return {
    token: {
      colorPrimary: theme.colors.primary.main,
    },
    components: {
      Input: {
        controlHeightLG: 50,
        borderRadiusLG: 9999,
        colorBorder: '#E5E5E5',
        hoverBorderColor: '#A3A3A3',
        activeBorderColor: '#A3A3A3',
        activeShadow: '#D4D4D4FF',
      },
      Checkbox: {
        controlInteractiveSize: 20,
        fontFamily: 'Inter, serif',
        fontSize: 12,
        colorText: '#808080',
      },
      Button: {
        controlHeightLG: 50,
        borderRadiusLG: 9999,
        fontFamily: 'Fira Sans, serif',
        fontSize: 16,
        fontWeight: 500,
      },
      Menu: {},
    },
  };
};
