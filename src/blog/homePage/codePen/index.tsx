import { ThemeProvider } from '@/ui';
import { FC, memo } from 'react';

type CodePenProps = {
  id: string;
};

const CodePen: FC<CodePenProps> = memo(({ id }) => {
  const { theme } = ThemeProvider.useTheme();

  return (
    <iframe
      src={`https://codepen.io/graphilla/embed/${id}?%2Cresult&editable=true&theme-id=${theme}`}
      className="h-[500px] w-full overflow-hidden rounded-sm border-0"
      title="codepen"
      loading="lazy"
    />
  );
});

export default CodePen;
