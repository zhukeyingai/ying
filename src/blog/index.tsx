import Header from '@/blog/header';
import SideBar from '@/blog/sideBar';
import { containerStyle } from '@/blog/style';
import { FC, memo } from 'react';

const Blog: FC = memo(() => {
  return (
    <div css={containerStyle}>
      <SideBar />
      <div className="flex flex-1 flex-col">
        <Header />
        blog
      </div>
    </div>
  );
});

export default Blog;
