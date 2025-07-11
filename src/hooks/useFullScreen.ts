import { useEffect, useState } from 'react';

export function useFullscreen(element?: HTMLElement | null) {
   const [isFullscreen, setIsFullscreen] = useState(false);

   const toggleFullscreen = () => {
      const el = element || document.documentElement;
      if (!document.fullscreenElement) {
         el.requestFullscreen();
      } else {
         document.exitFullscreen();
      }
   };

   useEffect(() => {
      const handler = () => setIsFullscreen(!!document.fullscreenElement);
      document.addEventListener('fullscreenchange', handler);
      return () => document.removeEventListener('fullscreenchange', handler);
   }, []);

   return { isFullscreen, toggleFullscreen };
}
