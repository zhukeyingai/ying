import { createBrowserRouter, redirect, RouteObject } from 'react-router-dom';
import { NavGroupList } from '@/constant/nav';
import App from '@/app';

const routeList: RouteObject[] = [
  {
    path: import.meta.env.BASE_URL,
    element: <App />,
    children: NavGroupList.flatMap(group =>
      group.items.map(i => ({
        path: `${import.meta.env.BASE_URL}${group.groupKey}${i.path}`,
        element: i.element,
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
