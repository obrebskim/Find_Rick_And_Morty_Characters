import { useState, useEffect, useRef } from "react";

type Output = string;

export const useDebounce = (value: string, milliseconds: number): Output => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const timeoutIdRef = useRef<number | null>(null);

  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedValue(value);
    }, milliseconds);
    if (timeoutIdRef.current !== null) {
      clearTimeout(timeoutIdRef.current);
    }
    timeoutIdRef.current = id;
    return () => {
      if (timeoutIdRef.current !== null) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, [value, milliseconds]);

  return debouncedValue;
};
