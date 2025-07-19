import { Input } from '@/_shared/components/ui/input';
import { TInputQuantity } from '../../interface';

export function InputItemQuantity({ register, errors }: TInputQuantity) {
   return (
      <div>
         <Input
            type='text'
            placeholder='Quantidade'
            {...register('itemquantity')}
         />
         {errors.itemquantity?.message && <p className='text-red-500 text-xs mt-1'>{errors.itemquantity.message}</p>}
      </div>
   );
}
