import { createBrowserRouter, redirect, RouteObject } from 'react-router-dom';
import { NavGroupList } from '@/constant/nav';
import App from '@/app';

const routeList: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: NavGroupList.flatMap(group =>
      group.items.map(i => ({ path: `/${group.groupKey}${i.path}`, element: i.element })),
    ),
  },
  {
    path: '*',
    loader: () => redirect('/'),
  },
];

const router = createBrowserRouter(routeList);

export default router;
