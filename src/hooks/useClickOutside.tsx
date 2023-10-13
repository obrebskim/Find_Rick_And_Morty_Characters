import { useEffect, RefObject } from 'react';

export const useClickOutside = (ref: RefObject<HTMLElement>, toggle: (value: boolean) => void): void => {
  useEffect(() => {
    const handleClick = (e: MouseEvent): void => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        toggle(false);
      }
    };

    const handleClickEvent = (e: Event): void => {
      handleClick(e as MouseEvent);
    };

    document.addEventListener("click", handleClickEvent);

    return () => {
      document.removeEventListener("click", handleClickEvent);
    };
  }, [ref, toggle]);
}