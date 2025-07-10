import { Input } from '@/_ui/input';
import { Label } from '@/_ui/label';
import { Mail, User } from 'lucide-react';
import { TInputFirstName } from './interface';

export function InputFirstName({ register, errors }: TInputFirstName) {
   return (
      <div className='space-y-2 animated-right'>
         <Label
            className='text-gray-500'
            htmlFor='firstname'
         >
            Nome
         </Label>
         <div className='relative'>
            <User
               className='absolute top-2.5 left-3 text-gray-400'
               size={16}
            />
            <Input
               className='pl-10 text-gray-500 autofill:none'
               id='firstname'
               type='text'
               placeholder='Digite o seu nome'
               {...register('firstname')}
            />
            {errors.firstname?.message && <p className='text-xs text-red-500 mt-0.5'>{errors.firstname?.message}</p>}
         </div>
      </div>
   );
}
