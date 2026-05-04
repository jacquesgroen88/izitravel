import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scrolls to the element matching the URL hash after React finishes rendering.
 * Needed because in an SPA the DOM isn't ready when the browser first tries to
 * honour the hash on a full-page load or client-side navigation.
 */
export default function ScrollToHash() {
    const { hash, pathname } = useLocation();

    useEffect(() => {
        if (!hash) {
            // No hash — scroll to top on every route change
            window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
            return;
        }

        // Give React one tick to finish rendering, then scroll
        const id = hash.replace('#', '');
        const attempt = (tries: number) => {
            const el = document.getElementById(id);
            if (el) {
                // Account for the fixed 80px header
                const offset = 90;
                const top = el.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            } else if (tries > 0) {
                setTimeout(() => attempt(tries - 1), 80);
            }
        };
        attempt(5); // retry up to 5 times × 80ms = 400ms window
    }, [hash, pathname]);

    return null;
}
