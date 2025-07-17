import { switchStyle } from '@/ui/switch/styles';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { SerializedStyles } from '@emotion/react';
import { FC, memo, useState } from 'react';

export type SwitchProps = {
  disabled?: boolean;
  style?: SerializedStyles;
  value?: boolean;
  onChange?: (value: boolean) => void;
};

const Switch: FC<SwitchProps> = memo(({ disabled, value = false, onChange, style }) => {
  const [check, setCheck] = useState<boolean>(value);
  const iconStyles = {
    fontSize: '4vw',
    opacity: 0,
  };

  return (
    <div css={switchStyle} className={`${check ? 'check' : 'uncheck'}`}>
      <div className="switch" css={style}>
        <button
          type="button"
          id="switch"
          className={`${disabled ? 'cursor-not-allowed!' : ''}`}
          disabled={disabled}
          onClick={() => {
            setCheck(pre => {
              onChange?.(!pre);
              return !pre;
            });
          }}
        >
          <CheckOutlined style={iconStyles} />

          <span className="btn-switch">
            {check ? <CheckOutlined style={iconStyles} /> : <CloseOutlined style={iconStyles} />}
          </span>

          <CloseOutlined style={iconStyles} />
        </button>
      </div>
    </div>
  );
});

export default Switch;
