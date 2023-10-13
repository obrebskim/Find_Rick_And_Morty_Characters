import { RefObject, useEffect } from "react";

export function useFocusOnActive(
  isActive: boolean,
  ref: RefObject<HTMLElement>
) {
  useEffect(() => {
    if (isActive) {
      ref.current?.focus();
    }
  }, [isActive]);
}
