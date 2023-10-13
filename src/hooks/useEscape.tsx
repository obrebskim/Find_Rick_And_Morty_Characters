import { useEffect, RefObject } from 'react';

export const useEscape = (toggle: (value: boolean) => void): void => {
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent): void => {
          if (e.key === 'Escape') {
            toggle(false);
          }
        };
    
        document.addEventListener('keydown', handleKeyPress);
    
        return () => {
          document.removeEventListener('keydown', handleKeyPress);
        };
      }, [toggle]);
}