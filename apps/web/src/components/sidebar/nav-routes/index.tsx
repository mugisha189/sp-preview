import { Icons } from '@/components/icons';
import React from 'react';
import { admin_routes } from './admin.routes';
import { student_routes } from './student.routes';

export type Route = {
  title: string;
  url: string;
  icon?: React.ElementType;
  isActive?: boolean;
  badge?: React.ReactNode;
  // permissions?: PermissionName[];
};

export type RouteGroup = {
  icon?: React.ElementType;
  title: string;
  isActive?: boolean;
} & (
  | {
      /**
       * For grouping routes
       */
      routes: Route[];
      route?: never; // Ensures route cannot be used with routes
    }
  | {
      /**
       * Use this to make a route without a group
       */
      route: Route;
      routes?: never; // Ensures routes cannot be used with route
    }
);

export type UserRoute = {
  links: RouteGroup[];
  role: string;
};

const routes: RouteGroup[] = [
  {
    title: 'Dashboard',
    icon: Icons.LayoutGrid,
    route: {
      title: 'Dashboard',
      url: '/dashboard',
      icon: Icons.LayoutGrid,
    },
  },
  ...student_routes,
  ...admin_routes,
  {
    title: 'Notification',
    icon: Icons.Bell,
    route: {
      title: 'Notification',
      url: '/dashboard/notifications',
      icon: Icons.Bell,
      badge: (
        <div className="bg-primary text-primary-foreground text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
          12
        </div>
      ),
    },
  },
];

export default routes;
