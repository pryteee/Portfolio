// TextEffect.jsx
'use client';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TextEffect() {
  useEffect(() => {
    const textElements = gsap.utils.toArray('.text');
    
    textElements.forEach(text => {
      gsap.to(text, {
        backgroundSize: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: text,
          start: 'Top 100%',
          end: 'center 20%',
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <section style={{
      minHeight: '190vh',
      backgroundColor: '#000000',
      padding: '10%',
      fontFamily: "'Poppins', sans-serif"
    }}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: '190vh'
      }}>
        <h1 className="text">I BUILD<span>SKILL</span></h1>
        <h1 className="text">LEARN<span>BY DOING</span></h1>
        <h1 className="text">FAIL<span>GROW</span></h1>
        <h1 className="text">KEEP STRIVING<span><a href="https://stacksorted.com/text-effects/minh-pham" target="_blank" rel="noopener noreferrer">FORWARD</a></span></h1>
        <h1 className="text">STILL<span><a href="https://twitter.com/juxtopposed" target="_blank" rel="noopener noreferrer">EVOLVING</a></span></h1>
      </div>
      
      <style jsx>{`
        .text {
          font-size: 10vw;
          letter-spacing: -.01em;
          line-height: 100%;
          margin: 0;
          width: 100%;
          color: rgba(182, 182, 182, 0.2);
          background: linear-gradient(to right, #b6b6b6, #b6b6b6) no-repeat;
          -webkit-background-clip: text;
          background-clip: text;
          background-size: 0%;
          transition: background-size cubic-bezier(.1,.5,.5,1) 0.5s;
          border-bottom: 1px solid #2F2B28;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          position: relative;
        }
        
        .text span {
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: #4246ce;
          color: #0D0D0D;
          clip-path: polygon(0 50%, 100% 50%, 100% 50%, 0 50%);
          transform-origin: center;
          transition: all cubic-bezier(.1,.5,.5,1) 0.4s;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        .text:hover > span {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        }
        
        a {
          text-decoration: none;
          color: inherit;
        }
      `}</style>
    </section>
  );
}