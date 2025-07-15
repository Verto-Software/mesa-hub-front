import { Upload } from 'lucide-react';
import { TUploadImage } from '../../interface';
import { useTranslations } from 'next-intl';

export function UploadImage({ register }: TUploadImage) {
   const t = useTranslations();

   return (
      <div className='space-y-2'>
         <div className='border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors border-gray-300 hover:border-gray-400'>
            <Upload className='mx-auto h-8 w-8 text-gray-400 mb-2' />
            <p className='text-sm text-gray-600'>{t('ClickToAddAnImage')}</p>
            <p className='text-xs text-gray-400 mt-1'>PNG, JPG {t('until')} 5MB</p>
         </div>
         <input
            className='hidden'
            type='file'
            accept='image/jpeg,image/jpg,image/png'
            {...register('image')}
         />
      </div>
   );
}
