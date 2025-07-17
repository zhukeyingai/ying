import { createBrowserRouter, redirect, RouteObject } from 'react-router-dom';
import { NavGroupList } from '@/constant/nav';
import App from '@/app';
import { css } from '@emotion/react';
import { startCase } from 'lodash-es';

export const routeList: RouteObject[] = [
  {
    path: import.meta.env.BASE_URL,
    element: <App />,
    children: NavGroupList.flatMap(group =>
      group.items.map(i => ({
        path: `${import.meta.env.BASE_URL}${group.groupKey}${i.path}`,
        element: (
          <div>
            <div
              css={css({
                background: 'var(--color-primary-bg)',
                fontSize: '30px',
                fontWeight: 700,
                paddingBottom: '20px',
                position: 'sticky',
                top: 0,
                left: 0,
                zIndex: 999,
              })}
            >
              {startCase(i.name)}
            </div>
            {i.element}
          </div>
        ),
      })),
    ),
  },
  {
    path: '*',
    loader: () => redirect(import.meta.env.BASE_URL),
  },
];

const router = createBrowserRouter(routeList);

export default router;
