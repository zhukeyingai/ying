import { ThemeProvider } from '@/ui';
import { FC, memo } from 'react';

type CodeSandboxProps = {
  id: string;
};

const CodeSandbox: FC<CodeSandboxProps> = memo(({ id }) => {
  const { theme } = ThemeProvider.useTheme();

  return (
    <iframe
      src={`https://codesandbox.io/embed/${id}?autoresize=1&fontsize=14&hidenavigation=1&theme=${theme}`}
      className="h-[500px] w-full overflow-hidden rounded-sm border-0"
      title={id}
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  );
});

export default CodeSandbox;
