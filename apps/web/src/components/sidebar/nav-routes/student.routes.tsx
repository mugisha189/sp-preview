import { Icons } from '@/components/icons';
import { ScrollText } from 'lucide-react';
import { RouteGroup } from '.';

export const student_routes: RouteGroup[] = [
  {
    title: 'Training',
    icon: Icons.Wrench,
    route: {
      title: 'Training',
      url: '/dashboard/training',
      icon: Icons.Wrench,
    },
  },
  {
    title: 'Activities',
    icon: ScrollText,
    route: {
      title: 'Activities',
      url: '/dashboard/activities',
      icon: ScrollText,
    },
  },
  {
    title: 'Logbook',
    icon: Icons.LogBook,
    route: {
      title: 'Logbook',
      url: '/dashboard/logbook',
      icon: Icons.LogBook,
    },
  },
  {
    title: 'Report',
    icon: Icons.Report,
    route: {
      title: 'Report',
      url: '/dashboard/reports',
      icon: Icons.Report,
    },
  },
  {
    title: 'Complaints',
    icon: Icons.LogBook,
    route: {
      title: 'Complaints',
      url: '/dashboard/complaints',
      icon: Icons.Complaints,
    },
  },
];
