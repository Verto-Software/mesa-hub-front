'use client';

import { Button } from '@/_shared/components/ui/button';
import { SidebarHeader, SidebarGroup, SidebarGroupLabel, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, useSidebar, Sidebar, SidebarFooter } from '@/_shared/components/ui/sidebar';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/_shared/components/ui/tooltip';
import { useFullscreen } from '@/_shared/hooks/use-full-screen';
import { Expand, Shrink, StickyNote } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export function SidebarTemplate() {
   const t = useTranslations();
   const { state } = useSidebar();
   const isCollapsed = state === 'collapsed';

   const { isFullscreen, toggleFullscreen } = useFullscreen();

   const menuItems = [
      {
         title: t('Order'),
         url: '/order',
         icon: (
            <StickyNote
               size={15}
               strokeWidth={2}
            />
         ),
      },
      {
         title: t('Menu'),
         url: '/menu',
         icon: (
            <StickyNote
               size={15}
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
         <SidebarGroupLabel className='px-4 mt-2'>Menu</SidebarGroupLabel>
         <SidebarContent>
            <SidebarGroup>
               <SidebarMenu className='flex gap-2'>
                  {menuItems.map((menuItem) => (
                     <SidebarMenuItem key={menuItem.title}>
                        <SidebarMenuButton
                           variant='outline'
                           asChild
                           tooltip={isCollapsed ? menuItem.title : undefined}
                        >
                           <Link href={menuItem.url}>
                              <i>{menuItem.icon}</i>
                              <p className='mt-0.5'>{menuItem.title}</p>
                           </Link>
                        </SidebarMenuButton>
                     </SidebarMenuItem>
                  ))}
               </SidebarMenu>
            </SidebarGroup>
         </SidebarContent>
         <SidebarFooter>
            <Tooltip>
               <TooltipTrigger asChild>
                  <Button
                     className='cursor-pointer w-fit'
                     onClick={toggleFullscreen}
                  >
                     {isFullscreen ? <Shrink /> : <Expand />}
                  </Button>
               </TooltipTrigger>
               <TooltipContent side='right'>
                  <p>{isFullscreen ? 'Sair do modo tela cheia' : 'Ativar modo tela cheia'}</p>
               </TooltipContent>
            </Tooltip>
         </SidebarFooter>
      </Sidebar>
   );
}
