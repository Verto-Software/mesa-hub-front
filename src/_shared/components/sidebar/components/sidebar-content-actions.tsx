'use client';

import {
   SidebarContent,
   SidebarGroup,
   SidebarMenu,
   SidebarMenuButton,
   SidebarMenuItem,
   useSidebar,
} from '@/_shared/components/ui/sidebar';
import { Package, Settings, SquareMenu, StickyNote } from 'lucide-react';
import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export function SidebarContentActions() {
   const t = useTranslations();

   const { state } = useSidebar();
   const isCollapsed = state === 'collapsed';

   const ICONS = {
      Order: (
         <StickyNote
            size={15}
            strokeWidth={2}
         />
      ),
      Menu: (
         <SquareMenu
            size={15}
            strokeWidth={2}
         />
      ),
      Stock: (
         <Package
            size={15}
            strokeWidth={2}
         />
      ),
      Settings: (
         <Settings
            size={15}
            strokeWidth={2}
         />
      ),
   };

   const menuItems = useMemo(
      () => [
         {
            title: t('Order'),
            url: '/order',
            icon: ICONS.Order,
         },
         {
            title: t('Menu'),
            url: '/menu',
            icon: ICONS.Menu,
         },
         {
            title: t('Stock'),
            url: '/stock',
            icon: ICONS.Stock,
         },
         {
            title: t('Settings'),
            url: '/settings',
            icon: ICONS.Settings,
         },
      ],
      [t]
   );

   return (
      <SidebarContent>
         <SidebarGroup>
            <SidebarMenu className='flex gap-3'>
               {menuItems.map((menuItem) => (
                  <SidebarMenuItem key={menuItem.title}>
                     <SidebarMenuButton
                        className='text-gray-600 h-10 font-medium text-base'
                        variant='outline'
                        asChild
                        tooltip={isCollapsed ? menuItem.title : undefined}
                     >
                        <Link
                           className='focus:bg-[#8347eb] focus:text-white'
                           href={menuItem.url}
                        >
                           <i>{menuItem.icon}</i>
                           <p className='mt-0.5'>{menuItem.title}</p>
                        </Link>
                     </SidebarMenuButton>
                  </SidebarMenuItem>
               ))}
            </SidebarMenu>
         </SidebarGroup>
      </SidebarContent>
   );
}
