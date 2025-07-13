'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/_shared/components/ui/avatar';
import { Button } from '@/_shared/components/ui/button';
import { SidebarHeader, SidebarGroup, SidebarGroupLabel, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, useSidebar, Sidebar, SidebarFooter } from '@/_shared/components/ui/sidebar';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/_shared/components/ui/tooltip';
import { useFullscreen } from '@/_shared/hooks/use-full-screen';
import { Routes } from '@/_shared/routes/routes';
import { CreditCard, Expand, MessageSquareMore, Package, Settings, Shrink, SquareMenu, StickyNote } from 'lucide-react';
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
            <SquareMenu
               size={15}
               strokeWidth={2}
            />
         ),
      },
      {
         title: t('Stock'),
         url: '/stock',
         icon: (
            <Package
               size={15}
               strokeWidth={2}
            />
         ),
      },
      {
         title: t('Settings'),
         url: '/settings',
         icon: (
            <Settings
               size={15}
               strokeWidth={2}
            />
         ),
      },
   ];

   const buttonMenuItems = [
      {
         title: t('Support'),
         url: 'https://web.whatsapp.com/send?phone=5522997823207&text=',
         icon: (
            <MessageSquareMore
               size={15}
               strokeWidth={2}
            />
         ),
      },
      {
         title: t('Plans'),
         url: Routes.Plans,
         icon: (
            <CreditCard
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
               <SidebarMenu className='flex gap-3'>
                  {menuItems.map((menuItem) => (
                     <SidebarMenuItem key={menuItem.title}>
                        <SidebarMenuButton
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
                  <p>{isFullscreen ? t('ExitFullScreenMode') : t('EnableFullScreenMode')}</p>
               </TooltipContent>
            </Tooltip>

            <SidebarGroup>
               <SidebarMenu>
                  {buttonMenuItems.map((buttonMenuItem) => {
                     const isExternal = buttonMenuItem.url.startsWith('http');

                     return (
                        <SidebarMenuItem key={buttonMenuItem.title}>
                           <SidebarMenuButton
                              asChild
                              className='text-gray-800'
                           >
                              {isExternal ? (
                                 <Link
                                    href={buttonMenuItem.url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='flex items-center gap-2'
                                 >
                                    <i>{buttonMenuItem.icon}</i>
                                    <p>{buttonMenuItem.title}</p>
                                 </Link>
                              ) : (
                                 <Link
                                    href={buttonMenuItem.url}
                                    className='flex items-center gap-2 border border-dashed border-gray-400 p-2'
                                 >
                                    <i>{buttonMenuItem.icon}</i>
                                    <p>{buttonMenuItem.title}</p>
                                 </Link>
                              )}
                           </SidebarMenuButton>
                        </SidebarMenuItem>
                     );
                  })}
               </SidebarMenu>
            </SidebarGroup>

            <div className='flex gap-3 items-center justify-center border border-gray-200 rounded-md p-2'>
               <Avatar className='rounded-md w-10 h-10'>
                  <AvatarImage
                     className='rounded-md w-10 h-10'
                     src='https://github.com/shadcn.png'
                  />
                  <AvatarFallback>CN</AvatarFallback>
               </Avatar>
               <div className='text-sm text-gray-800'>
                  <p>ferreira.marlon@live.com</p>
                  <p>Principal</p>
               </div>
            </div>
         </SidebarFooter>
      </Sidebar>
   );
}
