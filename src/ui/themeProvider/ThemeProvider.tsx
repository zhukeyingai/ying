import useTheme from '@/ui/themeProvider/hooks/useTheme';
import { globalStyle } from '@/ui/themeProvider/styles/global';
import Theme from '@/ui/themeProvider/Theme';
import { Global, SerializedStyles } from '@emotion/react';
import { ConfigProvider, theme as antdTheme } from 'antd';
import { FC, memo, PropsWithChildren } from 'react';

export type ThemeProviderProps = PropsWithChildren<{
  rootStyle?: SerializedStyles;
}>;

const ThemeProvider: FC<ThemeProviderProps> = memo(({ children, rootStyle }) => {
  const {
    theme,
    typography: { fontFamily },
  } = useTheme();
  return (
    <div className={theme} css={rootStyle}>
      <ConfigProvider
        theme={{
          token: {
            fontFamily,
          },
          algorithm: theme === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
        }}
      >
        <Global styles={globalStyle} />
        <Theme />
        {children}
      </ConfigProvider>
    </div>
  );
});

export default ThemeProvider;
