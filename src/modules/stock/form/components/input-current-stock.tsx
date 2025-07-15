import { Input } from '@/_shared/components/ui/input';
import { TInputCurrentStock } from '../../interface';

export function InputCurrentStock({ register, errors }: TInputCurrentStock) {
   return (
      <div>
         <Input
            type='text'
            placeholder='Estoque atual'
            {...register('currentstock')}
         />
         {errors.currentstock?.message && <p className='text-red-500 text-xs mt-1'>{errors.currentstock.message}</p>}
      </div>
   );
}
