import { NavItem } from '@/interface/nav';
import Home from '@/pages/Home';

const basePath = '/ying';

export const PATH_MAP = {
  HOME: `${basePath}/home`,
};

export const NavList: NavItem[] = [
  {
    path: PATH_MAP.HOME,
    element: <Home />,
  },
];
