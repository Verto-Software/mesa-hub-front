import { Avatar, AvatarFallback, AvatarImage } from '@/_shared/components/ui/avatar';
import { Card, CardContent } from '../../ui/card';

export function SidebarCardProfile() {
   return (
      <Card className='!p-2'>
         <CardContent className='flex gap-2 items-center justify-center'>
            <Avatar className='rounded-md  w-12 h-12'>
               <AvatarImage
                  className='rounded-md w-12 h-12'
                  src='https://github.com/shadcn.png'
               />
               <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className='text-xs text-gray-500 font-medium'>
               <p>ferreira.marlon@live.com</p>
               <p>Principal</p>
            </div>
         </CardContent>
      </Card>
   );
}
