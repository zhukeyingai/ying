import useTheme from '@/ui/themeProvider/hooks/useTheme';
import { themeSwitchStyle } from '@/ui/themeSwitch/styles';
import ThemeWrapper from '@/ui/themeWrapper';
import { MoonFilled, SunFilled } from '@ant-design/icons';
import { SerializedStyles } from '@emotion/react';
import { FC, memo } from 'react';

export type ThemeSwitchProps = {
  style?: SerializedStyles;
};

const ThemeSwitch: FC<ThemeSwitchProps> = memo(({ style }) => {
  const { followSystem, isDark, toggleTheme } = useTheme();
  const iconStyles = {
    fontSize: '4vw',
    color: isDark() ? '#FFF' : '#000',
  };

  return (
    <ThemeWrapper style={themeSwitchStyle}>
      <div className="theme-switch" css={style}>
        <button
          type="button"
          id="switch"
          className={`${followSystem ? 'cursor-not-allowed!' : ''}`}
          disabled={followSystem}
          onClick={() => toggleTheme()}
        >
          <SunFilled style={{ ...iconStyles, opacity: isDark() ? 100 : 0 }} />

          <span className="btn-switch">
            {isDark() ? <MoonFilled style={iconStyles} /> : <SunFilled style={iconStyles} />}
          </span>

          <MoonFilled style={{ ...iconStyles, opacity: isDark() ? 0 : 100 }} />
        </button>
      </div>
    </ThemeWrapper>
  );
});

export default ThemeSwitch;
