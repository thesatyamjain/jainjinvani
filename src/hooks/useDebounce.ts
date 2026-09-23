import { useState, useEffect } from 'react';

/**
 * A hook that delays updating the state until after a specified delay
 * has passed since the last time it was called.
 * Useful for preventing expensive operations (like filtering or API calls)
 * from running on every keystroke.
 *
 * @param value The value to debounce
 * @param delay The delay in milliseconds (default: 300)
 * @returns The debounced value
 */
export function useDebounce<T>(value: T, delay: number = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Set debouncedValue to value after the specified delay
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cancel the timeout if value changes, or if the component unmounts
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
