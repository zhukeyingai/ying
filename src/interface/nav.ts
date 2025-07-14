import { ReactNode } from 'react';

export interface NavItem {
  name?: string;
  path: string;
  icon?: ReactNode;
  element: ReactNode;
}

export interface NavGroupItem {
  groupKey: string;
  groupName: string;
  items: NavItem[];
}
