'use client';

import * as React from 'react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { useMemo } from 'react';
import { Icons } from '../icons';
import routes from './nav-routes';
import SideLink from './side-link';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { open, setOpen } = useSidebar();

  // TODO: Add user routes based on user role
  const user_routes = useMemo(() => routes, []);

  return (
    <Sidebar variant="sidebar" collapsible="icon" className="border-none" {...props}>
      <SidebarHeader className={cn('flex flex-col gap-2 py-8 px-6', !open && 'px-0')}>
        <div className="flex items-center justify-between w-full">
          <h1 className={cn('text-2xl  font-bold', !open && 'hidden')}>
            Dual <span className="text-primary">Training</span>
          </h1>
          <img src="/logortb.jpg" alt="RTB Rwanda TVET Board" className={cn('w-10 w-auto ml-2 hidden', !open && 'flex')} />
        </div>
        {open && (
          <>
            <hr className="my-4 border-gray-200 w-full" />
            <div className="flex items-center justify-between w-full">
              <span className="text-muted-foreground text-sm">System owned by:</span>
              <img src="/logortb.jpg" alt="RTB Rwanda TVET Board" className="h-8 w-auto" />
            </div>
          </>
        )}
      </SidebarHeader>
      <SidebarContent className={cn('p-4', !open && 'flex flex-col items-center ')}>
        {user_routes?.map((grp) => (
          <SidebarGroup
            key={grp.title}
            className={cn('!py-0 px-0', !open && 'flex justify-center items-center w-9 overflow-hidden')}
          >
            {grp.routes ? (
              <SideLink {...grp} />
            ) : (
              <SidebarMenu>
                <SideLink {...grp} />
              </SidebarMenu>
            )}
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter className="mt-auto pt-2">
        <SidebarGroup className={cn('!py-0 px-0', !open && 'flex justify-center items-center w-9 overflow-hidden')}>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                className={cn('h-auto duration-300 transition-all hover:text-primary hover:bg-primary/10')}
                onClick={() => setOpen(!open)}
                tooltip="Toggle Sidebar"
              >
                <Icons.ToggleSidebar className="!size-5" />
                <span>Toggle sidebar</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SideLink
              title="Settings"
              icon={Icons.Settings}
              route={{
                title: 'Settings',
                url: '/dashboard/settings',
                icon: Icons.Settings,
              }}
            />
          </SidebarMenu>
        </SidebarGroup>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
