export type ThemeMode = 'light' | 'dark';

export type ThemeConfig = {
  [key: string]: string;
  colorPrimaryBg: string;
  colorSecondaryBg: string;
  colorInverseBg: string;
  colorPrimaryBgHover: string;
  colorPrimaryText: string;
  colorActive: string;
};

export type Typography = {
  fontFamily: string;
  codeFontFamily: string;
  opacity: number;
};

const light: ThemeConfig = {
  colorPrimaryBg: '#e0e5ec',
  colorSecondaryBg: '#fff',
  colorInverseBg: '#000',
  colorPrimaryBgHover: '#fafafa',
  colorPrimaryText: '#16171a',
  colorActive: '#bae0ff',
};
const dark: ThemeConfig = {
  colorPrimaryBg: '#16171a',
  colorSecondaryBg: '#000',
  colorInverseBg: '#fff',
  colorPrimaryBgHover: '#303133',
  colorPrimaryText: '#c7c7c7',
  colorActive: '#bae0ff',
};
export const themeConfig: Record<ThemeMode, ThemeConfig> = {
  light,
  dark,
};

const fontFamily = 'Oswald';
const codeFontFamily = 'Fira Code';
const opacity = 90;
export const typography: Typography = {
  fontFamily,
  codeFontFamily,
  opacity,
};
