import { Avatar, AvatarFallback, AvatarImage } from '@/_shared/components/ui/avatar';

export function SidebarCardProfile() {
   return (
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
   );
}
