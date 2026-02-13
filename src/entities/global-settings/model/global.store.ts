import { create } from 'zustand/react';

import { ThemeVariants, UserSettings } from './global.types';

export const useGlobalStore = create<UserSettings>((set) => ({
  theme: 'light',
  changeTheme: (theme: ThemeVariants) => set(() => ({ theme })),
}));
