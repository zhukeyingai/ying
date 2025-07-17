import Article from '@/blog/homePage/article';
import { FC, memo } from 'react';
import README from '@/md/README.mdx';

const HomePage: FC = memo(() => {
  return (
    <Article>
      <README />
    </Article>
  );
});

export default HomePage;
