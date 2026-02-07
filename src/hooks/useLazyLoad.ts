import { useState, useRef, useEffect } from "react";

interface UseLazyLoadOptions {
  rootMargin?: string;
  threshold?: number;
}

export const useLazyLoad = (options: UseLazyLoadOptions = {}) => {
  const { rootMargin = "200px", threshold = 0.01 } = options;
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return { ref, isInView };
};
