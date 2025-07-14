import { logoStyle, sidebarStyle, sideMenuStyle, sideTitleStyle, sideWrapperStyle } from '@/blog/style';
import { NavGroupList } from '@/constant/nav';
import { genRandomSvg } from '@/utils/genRandomSvg';
import { startCase, upperCase } from 'lodash-es';
import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

const SideBar: FC = memo(() => {
  return (
    <div css={sidebarStyle}>
      <Link css={logoStyle} to={import.meta.env.BASE_URL}>
        @{import.meta.env.LYNNE_AUTHOR}
      </Link>
      {NavGroupList.map(group => (
        <div css={sideWrapperStyle} key={group.groupKey}>
          <div css={sideTitleStyle}>{upperCase(group.groupName)}</div>
          <div css={sideMenuStyle}>
            {group.items.map(item => (
              <Link key={item.name} to={`/${group.groupKey}${item.path}`}>
                <div dangerouslySetInnerHTML={{ __html: genRandomSvg() }} />
                {startCase(item.name)}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
});

export default SideBar;
