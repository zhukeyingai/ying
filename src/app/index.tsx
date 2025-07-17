import { FC, memo } from 'react';
import { ThemeProvider } from '@/ui';
import { ScrollRestoration } from 'react-router-dom';
import { App as AppWrapper } from 'antd';
import Blog from '@/blog';
import { css } from '@emotion/react';

const App: FC = memo(() => {
  return (
    <ThemeProvider rootStyle={css({ height: '100%' })}>
      <ScrollRestoration />
      <AppWrapper className="h-full">
        <div className="h-full tw-flex-center">
          <Blog />
          {/* TODO: CMD Modal */}
        </div>
      </AppWrapper>
    </ThemeProvider>
  );
});

export default App;
