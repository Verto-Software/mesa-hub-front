import { Expand, Shrink } from 'lucide-react';
import { Button } from './button';
import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip';
import { useFullscreen } from '@/_shared/hooks/use-full-screen';
import { useTranslations } from 'next-intl';

export function ButtonFullScreen() {
   const t = useTranslations();
   const { isFullscreen, toggleFullscreen } = useFullscreen();

   return (
      <Tooltip>
         <TooltipTrigger asChild>
            <Button
               className='cursor-pointer w-6 h-6'
               onClick={toggleFullscreen}
            >
               {isFullscreen ? <Shrink /> : <Expand />}
            </Button>
         </TooltipTrigger>
         <TooltipContent side='right'>
            <p>{isFullscreen ? t('ExitFullScreenMode') : t('EnableFullScreenMode')}</p>
         </TooltipContent>
      </Tooltip>
   );
}
