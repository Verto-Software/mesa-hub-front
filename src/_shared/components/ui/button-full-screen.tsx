import { Expand, Shrink } from 'lucide-react';
import { Button } from './button';
import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip';
import { useFullscreen } from '@/_shared/hooks/use-full-screen';
import { useTranslations } from 'next-intl';

export function ButtonFullScreen({ className }: any) {
   const t = useTranslations();
   const { isFullscreen, toggleFullscreen } = useFullscreen();

   return (
      <Tooltip>
         <TooltipTrigger asChild>
            <Button
               className={className}
               variant='secondary'
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
