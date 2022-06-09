import { useMediaQuery } from 'react-responsive';

/**
 * Check is a media query is valid.
 * @param query A string containing any integer followed by 'px'.
 * @returns A boolean. `true` if the current screen width matches the query. `false` if the current screen width does not match the query.
 */
export const useMediaBreakpoint = (query: string): boolean => useMediaQuery({'query': `(max-width: ${query})`});