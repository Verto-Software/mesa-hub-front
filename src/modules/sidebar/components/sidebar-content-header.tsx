'use client';

import { SidebarHeader, useSidebar } from '@/_shared/components/ui/sidebar';

export function SidebarContentHeader() {
   const { state } = useSidebar();
   const isCollapsed = state === 'collapsed';

   return <SidebarHeader className='border-b'>{!isCollapsed && <h2 className='text-lg font-bold text-sidebar-primary overflow-hidden text-ellipsis p-4'>Restaurante</h2>}</SidebarHeader>;
}
