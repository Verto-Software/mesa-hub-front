'use client';

import { DialogContent, DialogHeader, DialogTitle } from '@/_shared/components/ui/dialog';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { FooterOrderAction } from './footer-order-action';
import { Textarea } from '@/_shared/components/ui/textarea';
import { OrderNumber } from './input-order-number';
import { InputOrderName } from './input-order-name';

export function FormOrder() {
   const t = useTranslations();
   const [typedLetters, setTypedLetters] = useState('');

   return (
      <DialogContent className='select-none'>
         <form className='space-y-4'>
            <DialogHeader>
               <DialogTitle>{t('AddNewOrder')}</DialogTitle>
            </DialogHeader>

            <div className='flex gap-2 flex-col md:flex-row'>
               <OrderNumber />
               <InputOrderName />
            </div>

            <div>
               <Textarea
                  className='break-all'
                  placeholder={t('ObservationOfTheOrder')}
                  maxLength={200}
                  value={typedLetters}
                  onChange={(e) => setTypedLetters(e.target.value)}
               />
               <p className='text-right text-xs text-gray-400 mt-1'>
                  {typedLetters.length}/{200}
               </p>
            </div>

            <FooterOrderAction />
         </form>
      </DialogContent>
   );
}
