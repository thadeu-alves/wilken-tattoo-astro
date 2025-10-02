import { useEffect, useRef, useState } from "react";

export function useScroll({
    threshold = 0.1,
    rootMargin = "0px",
    triggerOnce = true,
}: {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
}) {
    const [visible, setVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setVisible(entry.isIntersecting);

                if (entry.isIntersecting && triggerOnce) {
                    observer.unobserve(element);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [threshold, rootMargin, triggerOnce]);

    return { visible, elementRef };
}
