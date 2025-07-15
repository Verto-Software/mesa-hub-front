import { Input } from '@/_shared/components/ui/input';
import { TInputSupplier } from '../../interface';

export function InputSupplier({ register, errors }: TInputSupplier) {
   return (
      <div>
         <Input
            type='text'
            placeholder='Fornecedor'
            {...register('supplier')}
         />
         {errors.supplier?.message && <p className='text-red-500 text-xs mt-1'>{errors.supplier.message}</p>}
      </div>
   );
}
