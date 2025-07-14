import {
  headerStyle,
  searchBarStyle,
  themeSwitchStyle,
  userImgStyle,
  userNameStyle,
  userStyle,
} from '@/blog/style';
import { Hotkey } from '@/constant/hotkey';
import { OpenTypeConfig } from '@/interface/modalOpenConfig';
import { useModalOpen } from '@/store/useModalOpenConfigModel';
import ThemeSwitch from '@/ui/themeSwitch';
import { GithubOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { Divider } from 'antd';
import { FC, memo } from 'react';

const Header: FC = memo(() => {
  const { onShow } = useModalOpen(OpenTypeConfig.CommandOpen);

  return (
    <div css={headerStyle}>
      <div css={searchBarStyle}>
        <input
          type="text"
          readOnly
          placeholder={`Search    [ ${Hotkey.Meta} + ${Hotkey.S} / ${Hotkey.F} ]`}
          onFocus={onShow}
        />
      </div>

      <div css={userStyle}>
        <img css={userImgStyle} src={import.meta.env.LYNNE_AVATAR} alt="" />

        <div className="flex cursor-pointer">
          <div css={userNameStyle}>{import.meta.env.LYNNE_AUTHOR}</div>
        </div>

        <Divider type="vertical" css={css({ background: 'var(--color-secondary-bg)' })} />

        <GithubOutlined
          className="cursor-pointer"
          onClick={() => window.open(import.meta.env.LYNNE_GITHUB)}
        />

        <ThemeSwitch style={themeSwitchStyle} />
      </div>
    </div>
  );
});

export default Header;
