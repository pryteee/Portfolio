'use client';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.5,
      effects: true,
      normalizeScroll: true,
    });

    return () => smoother?.kill();
  }, []);

  return (
    <div id="smooth-wrapper" style={{ width: '100%', overflow: 'hidden' }}>
      <div
        id="smooth-content"
        style={{
          width: '100%',
          minHeight: '100vh',
        }}
      >
        {children}
      </div>
    </div>
  );
}

