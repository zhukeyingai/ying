import { NavGroupItem } from '@/interface/nav';
import Appearance from '@/pages/appearance';
import Blog from '@/pages/blog';
import Climate from '@/pages/climate';
import Keyboard from '@/pages/keyboard';
import Lion from '@/pages/lion';
import MemorialDay from '@/pages/memorialDay';
import Music from '@/pages/music';
import Navigation from '@/pages/navigation';
import Puppy from '@/pages/puppy';
import Switch from '@/pages/switch';
import VscodeConfig from '@/pages/vscodeConfig';

export const PATH_MAP = {
  APPEARANCE: '/appearance',
  VSCODE_CONFIG: '/vscode-config',
  BLOG: '/blog',
  MEMORIAL_DAY: '/memorial-day',
  MUSIC: '/music',
  CLIMATE: '/climate',
  KEYBOARD: '/keyboard',
  LION: '/lion',
  NAVIGATION: '/navigation',
  PUPPY: '/puppy',
  SWITCH: '/switch',
};

export const NavGroupList: NavGroupItem[] = [
  {
    groupKey: 'settings',
    groupName: 'SETTINGS',
    items: [
      {
        name: 'Appearance',
        path: PATH_MAP.APPEARANCE,
        element: <Appearance />,
      },
      {
        name: 'Vscode Config',
        path: PATH_MAP.VSCODE_CONFIG,
        element: <VscodeConfig />,
      },
    ],
  },
  {
    groupKey: 'me',
    groupName: 'ME',
    items: [
      {
        name: 'Blog',
        path: PATH_MAP.BLOG,
        element: <Blog />,
      },
      {
        name: 'Memorial Day',
        path: PATH_MAP.MEMORIAL_DAY,
        element: <MemorialDay />,
      },
      {
        name: 'Music',
        path: PATH_MAP.MUSIC,
        element: <Music />,
      },
    ],
  },
  {
    groupKey: 'demo',
    groupName: 'DEMO',
    items: [
      {
        name: 'Climate',
        path: PATH_MAP.CLIMATE,
        element: <Climate />,
      },
      {
        name: 'Keyboard',
        path: PATH_MAP.KEYBOARD,
        element: <Keyboard />,
      },
      {
        name: 'Lion',
        path: PATH_MAP.LION,
        element: <Lion />,
      },
      {
        name: 'Navigation',
        path: PATH_MAP.NAVIGATION,
        element: <Navigation />,
      },
      {
        name: 'Puppy',
        path: PATH_MAP.PUPPY,
        element: <Puppy />,
      },
      {
        name: 'Switch',
        path: PATH_MAP.SWITCH,
        element: <Switch />,
      },
    ],
  },
];
