import { useState, useEffect, useRef } from "react";

type Output = string;

export const useDebounce = (
  value: string,
  milliseconds: number = 500
): Output => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const timeoutIdRef = useRef<number | null>(null);

  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedValue(value);
    }, milliseconds);

    return () => clearTimeout(id);
  }, [value, milliseconds]);

  return debouncedValue;
};
