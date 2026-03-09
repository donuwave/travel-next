import { RefObject, useEffect } from 'react';

type UseClickOutsideOptions = {
  enabled?: boolean;
  ignore?: Array<RefObject<HTMLElement | null>>;
};

export const useClickOutside = <T extends HTMLElement>(
  ref: RefObject<T | null>,
  onOutsideClick: () => void,
  options: UseClickOutsideOptions = {}
) => {
  const { enabled = true, ignore = [] } = options;

  useEffect(() => {
    if (!enabled) return;

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (!target) return;

      if (ref.current?.contains(target)) return;
      if (ignore.some((ignoredRef) => ignoredRef.current?.contains(target))) return;

      onOutsideClick();
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
    };
  }, [enabled, ignore, onOutsideClick, ref]);
};
