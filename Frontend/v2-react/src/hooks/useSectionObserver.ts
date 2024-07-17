import { useEffect, useRef } from "react";

interface UseSectionObserverProps {
    setActiveSectionId: (id: string) => void;
    threshold?: number;
    rootMargin?: string;
  }

export function useSectionObserver({
  setActiveSectionId,
  threshold = 0.5,
  rootMargin = '0px',
}: UseSectionObserverProps) {
    const observerRef = useRef<IntersectionObserver | null>(null);
    useEffect(() => {
        const handleIntersect = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
                setActiveSectionId(entry.target.id);
              }
            });
          };
          const root = document.querySelector('[data-h-container]');
          observerRef.current = new IntersectionObserver(handleIntersect, {
            threshold,
            rootMargin,
            root
          });

          const sections = document.querySelectorAll('*[data-h-slide]');
          sections.forEach((section) => {
            observerRef.current?.observe(section);
          });

          return () => {
            if (observerRef.current) {
              observerRef.current.disconnect();
            }
          };



        }, [setActiveSectionId, threshold, rootMargin]);
    }





//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         setActiveSectionId(entry.target.id);
//                     }
//                 });
//             },
//             { threshold: 0.5 }
//         );
//         document.querySelectorAll('*[data-h-slide]').forEach((section) => {
//             observer.observe(section);
//         });

//     }, [setActiveSectionId]);

// }