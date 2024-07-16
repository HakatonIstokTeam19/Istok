import { useRef, useEffect, useCallback } from 'react';


// export function useHorizontalScroll() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [isNormalScroll, setIsNormalScroll] = useState(false);
//   const [isScrollingEnabled, setIsScrollingEnabled] = useState(true);

//   const checkScreenWidth = useCallback(() => {
//     setIsNormalScroll(window.innerWidth <= 768);
//   }, []);

//   useEffect(() => {
//     checkScreenWidth();
//     window.addEventListener('resize', checkScreenWidth);

//     return () => {
//       window.removeEventListener('resize', checkScreenWidth);
//     };
//   }, [checkScreenWidth]);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const handleScroll = (e: WheelEvent) => {
//       if (isNormalScroll || !isScrollingEnabled) return;

//       e.preventDefault();
//       container.scrollLeft += e.deltaY;
//     };

//     container.addEventListener('wheel', handleScroll, { passive: false });

//     return () => {
//       container.removeEventListener('wheel', handleScroll);
//     };
//   }, [isNormalScroll, isScrollingEnabled]);

//   const setIsScrolling = useCallback((value: boolean) => {
//     setIsScrollingEnabled(value);
//   }, []);

//   return { containerRef, isNormalScroll, setIsScrolling };
// }


import { useWindowWidth } from './useWindowWidth';
import { breakpoints } from 'src/configs';

type UseHorizontalScrollOptions = {
  breakpoint?: number;
  enabled?: boolean;
};

export function useHorizontalScroll({ 
  breakpoint = breakpoints.md, 
  enabled = true 
}: UseHorizontalScrollOptions = {}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const windowWidth = useWindowWidth();

  const handleScroll = useCallback(
    (e: WheelEvent) => {
      if (windowWidth <= breakpoint || !enabled) return;

      const container = containerRef.current;
      if (!container) return;

      e.preventDefault();
      container.scrollLeft += e.deltaY;
    },
    [windowWidth, breakpoint, enabled]
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleScroll);
    };
  }, [handleScroll]);

  return containerRef;
}

