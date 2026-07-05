import { useEffect, useRef } from 'react';

/* Fade-up reveal when the section scrolls into view (CSS handles reduced-motion) */
function useReveal() {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('reveal-visible');
                    io.disconnect();
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
        );

        io.observe(el);
        return () => io.disconnect();
    }, []);

    return ref;
}

export default function Section({ id, title, children }) {
    const ref = useReveal();

    return (
        <section id={id} ref={ref} className="section-spacer border-t reveal">
            <div className="grid-cols-2">
                <h2 className="text-subtle text-sm uppercase tracking-wide mb-4 md:mb-0">{title}</h2>
                <div>{children}</div>
            </div>
        </section>
    );
}
