import { Input } from '@/_shared/components/ui/input';
import { TInputMinimumStock } from '../../interface';

export function InputMinimumStock({ register, errors }: TInputMinimumStock) {
   return (
      <div className='w-full'>
         <Input
            type='text'
            placeholder='Estoque mínimo'
            {...register('minimumstock')}
         />
         {errors.minimumstock?.message && <p className='text-red-500 text-xs mt-1'>{errors.minimumstock.message}</p>}
      </div>
   );
}
