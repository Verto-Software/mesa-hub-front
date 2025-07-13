'use client';

import { SidebarHeader, SidebarGroup, SidebarGroupLabel, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarTrigger, useSidebar, Sidebar } from '@/_shared/components/ui/sidebar';
import { LayoutGrid, Package, StickyNote } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export function SidebarTemplate() {
   const t = useTranslations();
   const { state } = useSidebar();
   const isCollapsed = state === 'collapsed';

   const menuItems = [
      {
         title: t('Order'),
         url: '/order',
         icon: (
            <StickyNote
               size={16}
               strokeWidth={2}
            />
         ),
      },
   ];

   return (
      <Sidebar className='border-r border-sidebar-border select-none'>
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
                              <i>{menuItem.icon}</i>
                              <span className='p-0 text-base font-medium'>{menuItem.title}</span>
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
