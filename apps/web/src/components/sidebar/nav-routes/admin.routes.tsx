import { Icons } from '@/components/icons';
import { RouteGroup } from '.';

export const admin_routes: RouteGroup[] = [
  {
    title: 'Students',
    icon: Icons.GraduationCap,
    route: {
      title: 'Students',
      url: '/dashboard/students',
      icon: Icons.GraduationCap,
    },
  },
  {
    title: 'Teachers',
    icon: Icons.LucideUsers,
    route: {
      title: 'Teachers',
      url: '/dashboard/teachers',
      icon: Icons.LucideUsers,
    },
  },
  {
    title: 'Industries',
    icon: Icons.FolderKanban,
    route: {
      title: 'Industries',
      url: '/dashboard/industries/recommended',
      icon: Icons.FolderKanban,
    },
  },
  {
    title: 'Contract',
    icon: Icons.FileText,
    route: {
      title: 'Contract',
      url: '/dashboard/contract',
      icon: Icons.FileText,
    },
  },
  {
    title: 'School Profile',
    icon: Icons.School,
    route: {
      title: 'School Profile',
      url: '/dashboard/school-profile',
      icon: Icons.School,
    },
  },
  {
    title: 'Sectors & Trades',
    icon: Icons.Briefcase,
    route: {
      title: 'Sectors & Trades',
      url: '/dashboard/sectors-trades',
      icon: Icons.Briefcase,
    },
  },
];
