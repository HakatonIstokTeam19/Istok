import { useRef, useEffect, useState } from 'react';

export function useHorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = (e: WheelEvent) => {
      if (window.innerWidth <= 768 || !isScrolling) return;

      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };

    container.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleScroll);
    };
  }, [isScrolling]);

  return { containerRef, setIsScrolling };
}