import { useRef, useEffect, useState, useCallback } from 'react';


export function useHorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isNormalScroll, setIsNormalScroll] = useState(false);
  const [isScrollingEnabled, setIsScrollingEnabled] = useState(true);

  const checkScreenWidth = useCallback(() => {
    setIsNormalScroll(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);

    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, [checkScreenWidth]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = (e: WheelEvent) => {
      if (isNormalScroll || !isScrollingEnabled) return;

      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };

    container.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleScroll);
    };
  }, [isNormalScroll, isScrollingEnabled]);

  const setIsScrolling = useCallback((value: boolean) => {
    setIsScrollingEnabled(value);
  }, []);

  return { containerRef, isNormalScroll, setIsScrolling };
}