import { codeBlockStyle, codeBtnStyle, codeFilename, useCodeStyle } from '@/blog/homePage/article/style';
import { css } from '@emotion/react';
import { MDXProvider } from '@mdx-js/react';
import { Image } from 'antd';
import { FC, memo, PropsWithChildren } from 'react';
import { Mermaid } from 'mdx-mermaid/Mermaid';
import CodeSandbox from '@/blog/homePage/codeSandbox';
import CodePen from '@/blog/homePage/codePen';
import SequenceChart from '@/blog/homePage/sequenceChart';

type ArticleProps = PropsWithChildren<{ className?: string }>;

const Article: FC<ArticleProps> = memo(({ children, className = '' }) => {
  const codeStyle = useCodeStyle();

  return (
    <div
      className={`prose prose-slate dark:prose-invert no-scrollbar max-w-[45vw] overflow-auto px-8 pb-8 select-text ${className}`}
    >
      <MDXProvider
        components={{
          a: props => <a target="_blank" {...props} className="italic" />,
          pre: (props: any) => {
            return (
              <div className="not-prose" css={codeStyle}>
                <figure css={codeBlockStyle}>
                  <figcaption>
                    <span css={codeBtnStyle} />
                    <span css={codeBtnStyle} />
                    <span css={codeBtnStyle} />
                    <span css={codeFilename}>
                      {props.filename ?? props?.children?.props?.className?.split('-').at(-1)}
                    </span>
                  </figcaption>
                  <pre
                    {...props}
                    css={css({
                      code: { fontFamily: `var(--code-font)` },
                    })}
                  />
                </figure>
              </div>
            );
          },
          img: props => <Image src={props.src} />,
          mermaid: Mermaid,
          Mermaid,
          Codesandbox: props => <CodeSandbox {...props} />,
          Codepen: props => <CodePen {...props} />,
          SequenceChart: props => <SequenceChart {...props} />,
        }}
      >
        {children}
      </MDXProvider>
    </div>
  );
});

export default Article;
