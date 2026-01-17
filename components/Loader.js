'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Loader({ onComplete }) {
  const containerRef = useRef(null);
  const topBar = useRef(null);
  const middleBar = useRef(null);
  const bottomBar = useRef(null);
  const finalGloriaRef = useRef(null); 
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!topBar.current || !middleBar.current || !bottomBar.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsVisible(false);
          if (onComplete) onComplete();
        }
      });

      // --- 1. INITIAL SETUP ---
      gsap.set([topBar.current, bottomBar.current], { height: '50%', top: 0 });
      gsap.set(bottomBar.current, { top: 'auto', bottom: 0 }); 
      gsap.set(middleBar.current, { height: '0%', top: '50%' });
      gsap.set('.marquee-text', { opacity: 0 });
      gsap.set(finalGloriaRef.current, { opacity: 0, scale: 1.1, filter: 'blur(10px)' });

      // --- 2. THE STRETCH (Opening the Boards) ---
      tl.to(topBar.current, { height: '33.33%', duration: 0.6, ease: 'expo.inOut' }, 0)
        .to(bottomBar.current, { height: '33.33%', duration: 0.6, ease: 'expo.inOut' }, 0)
        .to(middleBar.current, { height: '33.33%', top: '33.33%', duration: 0.6, ease: 'expo.inOut' }, 0);

      // --- 3. THE RUN (Marquee Phase) ---
      tl.to('.marquee-text', { opacity: 1, duration: 0.2 }, "-=0.1")
        .to('.track-left', { x: '-25%', duration: 1.5, ease: 'none' }, "<")
        .to('.track-right', { x: '25%', duration: 1.5, ease: 'none' }, "<");

      // --- PHASE 4: FAST WHITE EXPANSION ---
// This snaps the white board to cover the screen quickly
tl.to('.marquee-text', { opacity: 0, duration: 0.1 }) // Hides the scrolling text
  .to(middleBar.current, { 
    top: 0, 
    height: '100%', 
    duration: 0.25, // VERY FAST: Decrease this to 0.1 for instant snap
    ease: "power4.inOut" 
  }, "-=0.05")
  
  // The central Gloria appears during the snap
  .to(finalGloriaRef.current, { 
    opacity: 0.65, 
    scale: 1, 
    filter: 'blur(0px)',
    duration: 0.3, // FAST: Matches the board stretch
    ease: 'expo.out' 
  }, "-=0.2")

// --- PHASE 5: FAST REMOVAL ---
// This makes the white board and Gloria "erase" away quickly to show the Hero
tl.to([middleBar.current, finalGloriaRef.current], { 
    opacity: 0, 
    filter: 'blur(40px)', 
    scale: 1.1,
    duration: 0.5, // FAST REMOVAL: Lower this to 0.3 if you want it even faster
    ease: 'power2.in' 
}, "+=0.1") // This tiny delay (0.1) allows the eye to see Gloria before it erases



      .to(containerRef.current, { opacity: 0, duration: 0.5 }, "-=0.5");

    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  if (!isVisible) return null;

  const MarqueeRow = ({ direction, color, bgColor }) => (
    <div className={`track-${direction}`} style={{
      display: 'flex', whiteSpace: 'nowrap', alignItems: 'center',
      height: '100%', backgroundColor: bgColor, width: '300%',
      marginLeft: direction === 'right' ? '-100%' : '0'
    }}>
      {[...Array(15)].map((_, i) => (
        <span key={i} className="marquee-text" style={{
          fontSize: 'clamp(4rem, 15vw, 10rem)', fontWeight: '900',
          color: color, padding: '0 50px', fontFamily: 'Impact, sans-serif', textTransform: 'uppercase'
        }}>
          Gloria
        </span>
      ))}
    </div>
  );

  return (
    <div ref={containerRef} style={{
      position: 'fixed', inset: 0, zIndex: 9999, overflow: 'hidden', pointerEvents: 'none'
    }}>
      <div ref={topBar} style={{ position: 'absolute', width: '100%', overflow: 'hidden', zIndex: 1 }}>
        <MarqueeRow direction="left" color="white" bgColor="black" />
      </div>
      <div ref={bottomBar} style={{ position: 'absolute', width: '100%', overflow: 'hidden', zIndex: 1 }}>
        <MarqueeRow direction="left" color="white" bgColor="black" />
      </div>
      <div ref={middleBar} style={{ position: 'absolute', width: '100%', zIndex: 5, background: 'white' }}>
        <MarqueeRow direction="right" color="black" bgColor="white" />
      </div>

      {/* THE FINAL LIGHT GLORIA */}
<div ref={finalGloriaRef} style={{
  position: 'absolute', 
  top: '50%', 
  left: '50%', 
  transform: 'translate(-50%, -50%)',
  
  // CHANGE THIS LINE TO ADJUST THE SIZE
  fontSize: 'clamp(1rem, 15vw, 10rem)', 
  
  fontWeight: '900', 
  color: 'white',
  fontFamily: 'Impact, sans-serif', 
  textTransform: 'uppercase', 
  zIndex: 10,
  textAlign: 'center'
}}>
  Gloria
</div>
    </div>
  );
}