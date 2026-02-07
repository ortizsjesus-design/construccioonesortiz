import { useState, useRef, useEffect, ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface LazyImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string;
  alt: string;
  /** Root margin for IntersectionObserver (default: "200px" - starts loading 200px before entering viewport) */
  rootMargin?: string;
  /** Show skeleton placeholder while loading */
  showPlaceholder?: boolean;
  /** Additional wrapper className */
  wrapperClassName?: string;
}

const LazyImage = ({
  src,
  alt,
  className,
  wrapperClassName,
  rootMargin = "200px",
  showPlaceholder = true,
  ...props
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin,
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={imgRef} className={cn("relative overflow-hidden", wrapperClassName)}>
      {/* Skeleton placeholder */}
      {showPlaceholder && !isLoaded && (
        <div 
          className="absolute inset-0 bg-muted animate-pulse"
          style={{ minHeight: '200px' }}
        />
      )}
      
      {/* Only render img when in view */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={cn(
            "transition-opacity duration-300",
            isLoaded ? "opacity-100" : "opacity-0",
            className
          )}
          {...props}
        />
      )}
    </div>
  );
};

export default LazyImage;
