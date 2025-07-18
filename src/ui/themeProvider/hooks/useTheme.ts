import { themeConfig, ThemeConfig, ThemeMode, typography, Typography } from '@/ui/themeProvider/types/theme';
import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type ModelType = {
  theme: ThemeMode;
  themeConfig: Record<ThemeMode, ThemeConfig>;
  followSystem: boolean;
  typography: Typography;
  isDark: () => boolean;
  isLight: () => boolean;
  getInverseTheme: () => ThemeMode;
  toggleTheme: (theme?: ThemeMode) => void;
  updateThemeConfig: (themeConfig: Record<ThemeMode, ThemeConfig>) => void;
  updateTypography: (typography: Partial<Typography>) => void;
  updateIsFollowSystem: (isFollowSystem: boolean) => void;
};

const useTheme = create<ModelType>()(
  devtools(
    immer(
      persist(
        (set, get) => ({
          theme: 'light',
          themeConfig,
          followSystem: false,
          typography,
          isDark: () => get().theme === 'dark',
          isLight: () => get().theme === 'light',
          getInverseTheme: () => (get().theme === 'dark' ? 'light' : 'dark'),
          toggleTheme: theme => {
            set(state => {
              state.theme = theme ?? (state.theme === 'dark' ? 'light' : 'dark');
            });
          },
          updateThemeConfig: themeConfig => {
            set(state => {
              state.themeConfig = themeConfig;
            });
          },
          updateTypography: typography => {
            set(state => {
              state.typography = { ...get().typography, ...typography };
            });
          },
          updateIsFollowSystem: isFollowSystem => {
            set(state => {
              state.followSystem = isFollowSystem;
            });
          },
        }),
        {
          name: 'lynne-blog-theme',
          storage: createJSONStorage(() => localStorage),
          partialize: state => ({
            theme: state.theme,
            themeConfig: state.themeConfig,
            followSystem: state.followSystem,
            typography: state.typography,
          }),
        },
      ),
    ),
  ),
);

export default useTheme;
