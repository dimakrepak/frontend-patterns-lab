/* eslint-disable @typescript-eslint/no-explicit-any */
import { debounce } from "@/utils/debounce";
import { useEffect, useRef } from "react";

export const useDebounce = (fn: (...args: any[]) => void, delay: number) => {
  const debouncedRef = useRef<{
    (...args: any[]): void;
    cancel(): void;
  }>(null);

  useEffect(() => {
    debouncedRef.current = debounce(fn, delay);
    return () => debouncedRef.current?.cancel();
  }, [delay, fn]);

  return debouncedRef.current;
};
