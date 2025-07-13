'use client';

import { SidebarHeader, SidebarGroup, SidebarGroupLabel, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarTrigger, useSidebar, Sidebar } from '@/_shared/components/ui/sidebar';
import { LayoutDashboard, Package } from 'lucide-react';
import Link from 'next/link';

export function SidebarTemplate() {
   const { state } = useSidebar();
   const isCollapsed = state === 'collapsed';

   const menuItems = [
      {
         title: 'Mesas',
         url: '/service',
         icon: <LayoutDashboard />,
      },
      {
         title: 'Cardápios',
         url: '/menu',
         icon: <Package />,
      },
   ];

   return (
      <Sidebar className='border-r border-sidebar-border'>
         <SidebarHeader className='border-b'>
            <div className='flex items-center p-4'>
               {!isCollapsed && (
                  <div>
                     <h2 className='text-lg font-bold text-sidebar-primary'>RestauranteApp</h2>
                     <p className='text-xs text-sidebar-foreground/70'>Sistema de Gestão</p>
                  </div>
               )}
            </div>
         </SidebarHeader>
         <SidebarGroup>
            <SidebarGroupLabel>Menu</SidebarGroupLabel>
            <SidebarContent>
               <SidebarMenu>
                  {menuItems.map((menuItem) => (
                     <SidebarMenuItem key={menuItem.title}>
                        <SidebarMenuButton
                           asChild
                           tooltip={isCollapsed ? menuItem.title : undefined}
                        >
                           <Link href={menuItem.url}>
                              {menuItem.icon}
                              <p>{menuItem.title}</p>
                           </Link>
                        </SidebarMenuButton>
                     </SidebarMenuItem>
                  ))}
               </SidebarMenu>
            </SidebarContent>
         </SidebarGroup>
      </Sidebar>
   );
}
