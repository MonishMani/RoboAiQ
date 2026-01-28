/**
 * useIntersectionObserver Hook
 * 
 * PURPOSE: Lazy load images and components based on viewport visibility
 * 
 * USAGE:
 * const ref = useIntersectionObserver(isVisible => {
 *   if (isVisible) loadImage();
 * });
 * 
 * <img ref={ref} loading="lazy" src="image.jpg" />
 */

import { useEffect, useRef } from 'react';

export function useIntersectionObserver(callback, options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
      // Fallback: immediately call callback for older browsers
      callback(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback(true);
        observer.unobserve(entry.target);
      }
    }, {
      rootMargin: '50px', // Start loading 50px before entering viewport
      threshold: 0.01,
      ...options,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [callback, options]);

  return ref;
}

/**
 * useLazyImage Hook
 * 
 * PURPOSE: Implement native lazy loading with fallback
 * 
 * USAGE:
 * const { src, isLoading } = useLazyImage('https://example.com/image.jpg');
 * 
 * <img src={src} />
 */

export function useLazyImage(imageSrc) {
  const [src, setSrc] = useRef(null);
  const [isLoading, setIsLoading] = useRef(true);

  useEffect(() => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      setSrc(imageSrc);
      setIsLoading(false);
    };
  }, [imageSrc]);

  return {
    src: src.current || imageSrc,
    isLoading: isLoading.current,
  };
}
