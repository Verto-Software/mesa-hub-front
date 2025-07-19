import { Input } from '@/_shared/components/ui/input';
import { TInputMaximumStock } from '../../interface';

export function InputMaximumStock({ register, errors }: TInputMaximumStock) {
   return (
      <div className='w-full'>
         <Input
            type='text'
            placeholder='Estoque máximo'
            {...register('maximumstock')}
         />
         {errors.maximumstock?.message && <p className='text-red-500 text-xs mt-1'>{errors.maximumstock.message}</p>}
      </div>
   );
}
