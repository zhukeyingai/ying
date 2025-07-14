import useTheme from './hooks/useTheme';
import InternalThemeProvider from './ThemeProvider';

export type { ThemeProviderProps } from './ThemeProvider';

type InternalThemeProviderType = typeof InternalThemeProvider;
type CompoundedComponent = InternalThemeProviderType & {
  useTheme: typeof useTheme;
};

const ThemeProvider = InternalThemeProvider as CompoundedComponent;
ThemeProvider.useTheme = useTheme;

export default ThemeProvider;
