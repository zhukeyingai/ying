import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom';
import { NavList, PATH_MAP } from '@/constant/nav';
import NotFound from '@/routes/NotFound';

const routeList: RouteObject[] = [
  ...NavList.map(item => ({ path: item.path, element: item.element })),
  {
    path: '/',
    element: <Navigate to={PATH_MAP.HOME} replace />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

const router = createBrowserRouter(routeList);

export default router;
