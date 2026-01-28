import { lazy, Suspense, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero3DModel = lazy(() => import('./Hero3DModel'));

// Lightweight fallback skeleton
const SkeletonLoader = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)',
      borderRadius: '8px',
      animation: 'pulse 2s ease-in-out infinite',
    }}
  >
    <style>{`
      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.7; }
      }
    `}</style>
  </div>
);

export default function LazyHero3DModel() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia('(min-width: 1024px)');

    const handleChange = (event) => {
      setIsDesktop(event.matches);
    };

    setIsDesktop(mediaQuery.matches);

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handleChange);
    } else if (typeof mediaQuery.addListener === 'function') {
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (typeof mediaQuery.removeEventListener === 'function') {
        mediaQuery.removeEventListener('change', handleChange);
      } else if (typeof mediaQuery.removeListener === 'function') {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      style={{ width: '100%', height: '100%' }}
    >
      {/* Render 3D on desktop only (mobile falls back to skeleton) */}
      {isDesktop ? (
        <Suspense fallback={<SkeletonLoader />}>
          <Hero3DModel />
        </Suspense>
      ) : (
        <SkeletonLoader />
      )}
    </motion.div>
  );
}
