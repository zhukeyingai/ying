import { FC, memo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH_MAP } from '@/constant/nav';
import { Empty } from '@douyinfe/semi-ui';
import { IllustrationNotFound, IllustrationNotFoundDark } from '@douyinfe/semi-illustrations';

const NotFound: FC = memo(() => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(PATH_MAP.HOME);
  }, []);

  return (
    <div className="tw-full tw-flex-center">
      <Empty
        image={<IllustrationNotFound style={{ width: 150, height: 150 }} />}
        darkModeImage={<IllustrationNotFoundDark style={{ width: 150, height: 150 }} />}
        description="404 PAGE NOT FOUND"
      />
    </div>
  );
});

export default NotFound;
