import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    base: '/',
    envPrefix: 'LYNNE_',
    plugins: [
      react({
        jsxImportSource: '@emotion/react',
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      hmr: {
        overlay: true, // 打开 Vite 默认的错误覆盖层
      },
    },
  };
});
