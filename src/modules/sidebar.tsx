'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/_shared/components/ui/avatar';
import { SidebarHeader, SidebarGroup, SidebarGroupLabel, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, useSidebar, Sidebar, SidebarFooter } from '@/_shared/components/ui/sidebar';
import { Routes } from '@/_shared/routes/routes';
import { CreditCard, MessageSquareMore, Package, Settings, SquareMenu, StickyNote } from 'lucide-react';
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
      <Sidebar className='border-r border-sidebar-border select-none md:block hidden'>
         <SidebarHeader className='border-b'>
            {!isCollapsed && <h2 className='text-lg font-bold text-sidebar-primary overflow-hidden text-ellipsis p-4'>RestauranteAppkkkkkkkkkkkkkkkk</h2>}
         </SidebarHeader>
         <SidebarGroupLabel className='text-sm mt-2 justify-center'>
            <p>Menu</p>
         </SidebarGroupLabel>
         <SidebarContent>
            <SidebarGroup>
               <SidebarMenu className='flex gap-3'>
                  {menuItems.map((menuItem) => (
                     <SidebarMenuItem key={menuItem.title}>
                        <SidebarMenuButton
                           className='text-gray-600 h-10 font-medium'
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
            <SidebarGroup>
               <SidebarMenu>
                  {buttonMenuItems.map((buttonMenuItem) => {
                     const isExternal = buttonMenuItem.url.startsWith('http');

                     return (
                        <SidebarMenuItem key={buttonMenuItem.title}>
                           <SidebarMenuButton
                              asChild
                              className='text-gray-500 font-medium'
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
                                    className='flex items-center gap-2 border border-dashed border-gray-250 p-2'
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

            <div className='flex gap-3 items-center justify-center border border-gray-200 rounded-md py-2 hover:bg-gray-100'>
               <Avatar className='rounded-md  w-12 h-12'>
                  <AvatarImage
                     className='rounded-md w-12 h-12'
                     src='https://github.com/shadcn.png'
                  />
                  <AvatarFallback>CN</AvatarFallback>
               </Avatar>
               <div className='text-xs text-gray-800 '>
                  <p>ferreira.marlon@live.com</p>
                  <p>Principal</p>
               </div>
            </div>
         </SidebarFooter>
      </Sidebar>
   );
}
