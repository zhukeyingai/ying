import useTheme from '@/ui/themeProvider/hooks/useTheme';
import { SerializedStyles } from '@emotion/react';
import { FC, memo, PropsWithChildren } from 'react';

export type ThemeWrapperProps = PropsWithChildren<{ style?: SerializedStyles }>;

const ThemeWrapper: FC<ThemeWrapperProps> = memo(({ children, style }) => {
  const { theme } = useTheme();

  return (
    <div className={theme} css={style}>
      {children}
    </div>
  );
});

export default ThemeWrapper;
