import { useState, useEffect } from 'react';

export default function useMediaQuery(query: string) {
    const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query);
        const listener = (e) => setMatches(e.matches);

        mediaQueryList.addEventListener('change', listener);

        return () => mediaQueryList.removeEventListener('change', listener);
    }, [query]);

    return matches;
};