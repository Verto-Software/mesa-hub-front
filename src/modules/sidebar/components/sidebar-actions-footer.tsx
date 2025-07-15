import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/_shared/components/ui/sidebar';
import { Routes } from '@/_shared/routes/routes';
import { CreditCard, MessageSquareMore } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useMemo } from 'react';

export function SidebarActionsFooter() {
   const t = useTranslations();

   const ICONS = {
      Support: (
         <MessageSquareMore
            size={15}
            strokeWidth={2}
         />
      ),
      Plans: (
         <CreditCard
            size={15}
            strokeWidth={2}
         />
      ),
   };

   const buttonMenuItems = useMemo(
      () => [
         {
            title: t('Support'),
            url: 'https://web.whatsapp.com/send?phone=5522997823207&text=',
            icon: ICONS.Support,
         },
         {
            title: t('Plans'),
            url: Routes.Plans,
            icon: ICONS.Plans,
         },
      ],
      [t]
   );

   return (
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
   );
}
