import { Sidebar, SidebarFooter, SidebarGroupLabel } from '@/_shared/components/ui/sidebar';
import { SidebarActionsFooter } from './components/sidebar-actions-footer';
import { SidebarCardProfile } from './components/sidebar-card-profile';
import { SidebarContentActions } from './components/sidebar-content-actions';
import { SidebarContentHeader } from './components/sidebar-content-header';

export function SidebarTemplate() {
   return (
      <Sidebar className='border-r border-sidebar-border select-none md:block hidden z-50'>
         <SidebarContentHeader />
         <SidebarGroupLabel className='text-sm mt-2 justify-center'>
            <p>Menu</p>
         </SidebarGroupLabel>
         <SidebarContentActions />
         <SidebarFooter>
            <SidebarActionsFooter />
            <SidebarCardProfile />
         </SidebarFooter>
      </Sidebar>
   );
}
