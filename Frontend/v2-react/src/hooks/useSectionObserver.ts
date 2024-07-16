import { useEffect } from "react";

type UseSectionObserverProps = {
    setActiveSectionId: (id: string) => void;
}

export function useSectionObserver({ setActiveSectionId}: UseSectionObserverProps) {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSectionId(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );
        document.querySelectorAll('*[data-h-slide]').forEach((section) => {
            observer.observe(section);
        });

    }, [setActiveSectionId]);

}