import { Input } from '@/_ui/input';
import { Label } from '@/_ui/label';
import { Mail } from 'lucide-react';
import { TInputEmail } from './interface';

export function InputEmail({ register, errors }: TInputEmail) {
   return (
      <div className='space-y-2'>
         <Label
            className='text-gray-800'
            htmlFor='email'
         >
            Email
         </Label>
         <div className='relative'>
            <Mail
               className='absolute top-2.5 left-3 text-gray-400'
               size={16}
            />
            <Input
               className='pl-10 text-gray-800 autofill:none'
               id='email'
               type='email'
               placeholder='Digite o seu e-mail'
               {...register('email')}
            />
            {errors.email?.message && <p className='text-xs text-red-500 mt-0.5'>{errors.email?.message}</p>}
         </div>
      </div>
   );
}
