import { useEffect, useRef } from 'react';
import './InfiniteMovingCards.css';

export default function InfiniteMovingCards({ items = [], speed = 50 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;

    container.style.setProperty('--scroll-width', `${scrollWidth}px`);
    container.style.setProperty('--animation-duration', `${speed}s`);
  }, [speed]);

  return (
    <div className="infinite-moving-cards-wrapper">
      <div ref={containerRef} className="infinite-moving-cards">
        {items.map((item, i) => (
          <div key={i} className="moving-card">
            {item}
          </div>
        ))}
        {items.map((item, i) => (
          <div key={`clone-${i}`} className="moving-card">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
