import Content from '@/blog/content';
import Header from '@/blog/header';
import HomePage from '@/blog/homePage';
import SideBar from '@/blog/sideBar';
import { containerStyle } from '@/blog/style';
import { FC, memo } from 'react';
import { useLocation } from 'react-router-dom';

const Blog: FC = memo(() => {
  const location = useLocation();

  const renderContent = () => {
    if (location.pathname === import.meta.env.BASE_URL) {
      return (
        <div className="flex justify-center overflow-auto">
          <HomePage />
        </div>
      );
    }

    return <Content />;
  };

  return (
    <div css={containerStyle}>
      <SideBar />
      <div className="flex flex-1 flex-col">
        <Header />
        {renderContent()}
      </div>
    </div>
  );
});

export default Blog;
