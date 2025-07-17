import { Assets, Switch, ThemeProvider, ThemeSwitch } from '@/ui';
import { css } from '@emotion/react';
import { Divider, Image, Slider } from 'antd';
import { FC, memo, PropsWithChildren, ReactNode } from 'react';
import { CheckCard } from '@ant-design/pro-components';
import { fonts } from '@/constant/font';

type BlockItemProps = PropsWithChildren<{
  label: ReactNode;
  showBottomLine?: boolean;
}>;

const BlockItem: FC<BlockItemProps> = memo(({ children, label, showBottomLine = false }) => {
  return (
    <div>
      <div className="flex justify-between pt-2">
        <div className="w-[40%]">{label}</div>
        <div className="flex-1 flex justify-end">{children}</div>
      </div>
      {showBottomLine && <Divider className="mb-4 mt-6" />}
    </div>
  );
});

const Appearance: FC = memo(() => {
  const { typography, updateTypography, followSystem, updateIsFollowSystem } = ThemeProvider.useTheme();

  return (
    <div className="flex flex-col gap-2">
      <BlockItem label="Theme" showBottomLine>
        <ThemeSwitch
          style={css({
            margin: '0 20px 0 0',
            height: '16px !important',
            width: '16px !important',
            scale: 0.2,
          })}
        />
      </BlockItem>

      <BlockItem label="Follow the system theme" showBottomLine>
        <Switch
          style={css({
            margin: '0 20px 0 0',
            height: '16px !important',
            width: '16px !important',
            scale: 0.2,
          })}
          value={followSystem}
          onChange={updateIsFollowSystem}
        />
      </BlockItem>

      <BlockItem label="Opacity" showBottomLine>
        <Slider
          className="w-full"
          min={50}
          value={typography.opacity}
          onChange={opacity => updateTypography({ opacity })}
        />
      </BlockItem>

      <BlockItem label="Background" showBottomLine>
        <Image src={Assets.Bg1} className="rounded-xl shadow dark:shadow-white" />
      </BlockItem>

      <BlockItem label="Font">
        <CheckCard.Group
          className="w-full"
          value={typography.fontFamily}
          onChange={fontFamily => updateTypography({ fontFamily: fontFamily as string })}
        >
          {fonts.map(font => (
            <CheckCard
              key={font}
              style={{ fontFamily: font }}
              css={css({ width: '100%' })}
              title={font}
              description="Your limitation - it's only your imagination."
              value={font}
            />
          ))}
        </CheckCard.Group>
      </BlockItem>
    </div>
  );
});

export default Appearance;
