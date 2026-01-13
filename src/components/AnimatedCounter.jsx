import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedCounter({ end = 100, duration = 2, suffix = '', prefix = '' }) {
  const counterRef = useRef(null);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const el = counterRef.current;
    if (!el || isAnimated) return;

    const counter = { value: 0 };

    ScrollTrigger.create({
      trigger: el,
      onEnter: () => {
        gsap.to(counter, {
          value: end,
          duration: duration,
          onUpdate: () => {
            el.textContent = `${prefix}${Math.floor(counter.value)}${suffix}`;
          }
        });
        setIsAnimated(true);
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [end, duration, suffix, prefix, isAnimated]);

  return <span ref={counterRef}>0{suffix}</span>;
}
