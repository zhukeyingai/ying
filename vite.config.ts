import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import mdxMermaid from 'mdx-mermaid';
import mdx from '@mdx-js/rollup';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import rehypeHighlight from 'rehype-highlight';
import rehypeMdxCodeProps from 'rehype-mdx-code-props';

const baseUrl = '/ying/';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: mode === 'preview' ? '/' : baseUrl,
    envPrefix: 'LYNNE_',
    build: {
      commonjsOptions: {
        transformMixedEsModules: true,
      },
      target: 'ESNext',
    },
    plugins: [
      mdx({
        jsxImportSource: '@emotion/react',
        providerImportSource: '@mdx-js/react',
        remarkPlugins: [remarkGfm, remarkFrontmatter, remarkMdxFrontmatter, mdxMermaid],
        rehypePlugins: [rehypeHighlight, rehypeMdxCodeProps],
      }),
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
