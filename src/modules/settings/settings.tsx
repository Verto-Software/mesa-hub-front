import { Button } from '@/_shared/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/_shared/components/ui/card';
import { Input } from '@/_shared/components/ui/input';
import { Upload } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function Settings() {
   const t = useTranslations();

   return (
      <section className='p-6'>
         <Card>
            <CardHeader>
               <CardTitle>Dados do Restaurante</CardTitle>
            </CardHeader>
            <CardContent>
               <form>
                  <div className='flex gap-3 flex-col sm:flex-row items-center'>
                     <div className='border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors border-gray-300 hover:border-gray-400 w-56 h-fit space-y-2'>
                        <Upload
                           className='mx-auto text-gray-400'
                           size={18}
                        />
                        <p className='text-xs text-gray-600'>{t('ClickToAddAnImage')}</p>
                        <p className='text-xs text-gray-400'>PNG, JPG {t('until')} 5MB</p>
                     </div>
                     <input
                        className='hidden'
                        type='file'
                        accept='image/jpeg,image/jpg,image/png'
                     />

                     <div className='flex flex-col gap-4 w-full'>
                        <div className='flex flex-col md:flex-row gap-3 w-full'>
                           <Input
                              type='text'
                              placeholder='CNPJ'
                           />
                           <Input
                              type='text'
                              placeholder='Nome do restaurante'
                           />
                           <Input
                              type='text'
                              placeholder='Telefone'
                           />
                        </div>

                        <div className='flex flex-col md:flex-row gap-3 w-full'>
                           <Input
                              type='text'
                              placeholder='CEP'
                           />
                           <Input
                              type='text'
                              placeholder='Rua'
                           />
                           <Input
                              type='text'
                              placeholder='nº'
                           />
                        </div>

                        <div className='flex flex-col md:flex-row gap-3 w-full'>
                           <Input
                              type='text'
                              placeholder='Bairro'
                           />
                           <Input
                              type='text'
                              placeholder='Cidade'
                           />
                           <Input
                              type='text'
                              placeholder='Estado'
                           />
                        </div>
                     </div>
                  </div>
                  <div className='text-right mt-6'>
                     <Button className='w-32 cursor-pointer'>Salvar</Button>
                  </div>
               </form>
            </CardContent>
         </Card>
      </section>
   );
}
