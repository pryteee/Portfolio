'use client';
import { useRef, useEffect, useState } from 'react';

export default function OptimizedCharacter() {
  const characterRef = useRef(null);
  const overlayRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const imageCache = useRef({});
  
  const animationPhases = [
    {
      name: 'Face',
      finalImage: '/IMG B.png',
      images: ['/IMGF1.png', '/IMGF2.png', '/IMGF3.png', '/IMGF4.png', '/IMGF5.png', '/IMGF6.png', '/IMGF7.png', '/IMGF8.png']
    },
    {
      name: 'Glass',
      finalImage: '/IMG A.png',
      images: ['/IMGG1.png', '/IMGG2.png', '/IMGG3.png', '/IMGG4.png', '/IMGG5.png', '/IMGG6.png', '/IMGG7.png', '/IMGG8.png']
    },
    {
      name: 'Outfit',
      finalImage: '/IMG C.png',
      images: ['/IMGD1.png', '/IMGD2.png', '/IMGD3.png', '/IMGD4.png', '/IMGD5.png', '/IMGD6.png', '/IMGD7.png', '/IMGD8.png']
    },
    {
      name: 'Hair',
      finalImage: '/IMG D.png',
      images: ['/IMGH1.png', '/IMGH2.png', '/IMGH3.png', '/IMGH4.png', '/IMGH5.png', '/IMGH6.png', '/IMGH7.png']
    }
  ];

  useEffect(() => {
    let loadedCount = 0;
    const totalImages = animationPhases.reduce((total, phase) => 
      total + phase.images.length + 1, 0
    );
    
    const loadImage = (src) => {
      return new Promise((resolve) => {
        
        if (imageCache.current[src]) {
          loadedCount++;
          resolve();
          return;
        }
        
        const img = new Image();
        img.onload = () => {
          
          imageCache.current[src] = img;
          loadedCount++;
          if (loadedCount === totalImages) {
            setImagesLoaded(true);
          }
          resolve();
        };
        img.onerror = () => {
          loadedCount++;
          if (loadedCount === totalImages) {
            setImagesLoaded(true);
          }
          resolve();
        };
        img.src = src;
      });
    };
    
    const preloadAllImages = async () => {
      const promises = [];
      
      animationPhases.forEach(phase => {
        
        promises.push(loadImage(phase.finalImage));
        
        phase.images.forEach(imgSrc => {
          promises.push(loadImage(imgSrc));
        });
      });
      
      await Promise.all(promises);
      console.log('All images preloaded and cached');
      
      if (characterRef.current && overlayRef.current) {
        characterRef.current.src = animationPhases[0].images[0];
        overlayRef.current.src = animationPhases[0].finalImage;
      }
    };
    
    preloadAllImages();
 
    if (characterRef.current && overlayRef.current) {
      characterRef.current.src = animationPhases[0].images[0];
      overlayRef.current.src = animationPhases[0].finalImage;
    }
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;
    
    let phaseIndex = 0;
    let frameIndex = 0;
    let animationId;
    let lastFrameTime = 0;
    const frameInterval = 280; 
    
    const animate = (timestamp) => {
      if (!characterRef.current || !overlayRef.current) return;
      
      if (timestamp - lastFrameTime < frameInterval) {
        animationId = requestAnimationFrame(animate);
        return;
      }
      
      lastFrameTime = timestamp;
      
      const currentPhase = animationPhases[phaseIndex];
      
      const overlaySrc = currentPhase.finalImage;
      const characterSrc = currentPhase.images[frameIndex];
      
      if (overlayRef.current.src !== overlaySrc) {
        overlayRef.current.src = overlaySrc;
      }
      
      if (characterRef.current.src !== characterSrc) {
        characterRef.current.src = characterSrc;
      }
      
      frameIndex++;
      
      if (frameIndex >= currentPhase.images.length) {
        frameIndex = 0;
        phaseIndex = (phaseIndex + 1) % animationPhases.length;
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [imagesLoaded]);

  return (
    <div style={{
      height: 'calc(100vh - 80px)',
      minHeight: '500px',
      background: '#0f0f0f',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '45px',
      fontFamily: "'Ink Free', 'Segoe Script', 'Brush Script MT', cursive",
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '80px',
        maxWidth: '1300px',
        width: '100%',
        flexWrap: 'wrap'
      }}>
        
        {/* LEFT TEXT */}
        <div style={{ maxWidth: '900px', color: 'white', flex: 1 }}>
          <h1 style={{
            fontSize: '5rem',
            fontWeight: 'normal',
            marginBottom: '10px',
            lineHeight: 1.1
          }}>
            <span style={{
              color: '#a8a8a8',
              fontSize: '2.3rem',
              display: 'block',
              marginBottom: '20px',
              fontFamily: "'Bradley Hand ITC', 'Segoe Script', 'Brush Script MT', cursive",
              fontWeight: '300'
            }}>
              Hi, I'm
            </span>
            <span style={{ 
              color: 'white',
              fontSize: '3.4rem',
              display: 'block',
              fontWeight: 'bold',
              marginBottom: '25px',
              fontFamily: '"Book Antiqua", serif',
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}>
              Pritirekha Panda
            </span>
          </h1>

          <p style={{
            fontSize: '1.6rem',
            lineHeight: 1.4,
            color: 'rgba(255,255,255,0.85)',
            marginBottom: '40px',
            fontFamily: "'Bradley Hand ITC', 'Segoe Script', 'Brush Script MT', cursive",
            fontWeight: '300'
          }}>
          I'm a Data Science student passionate about AI/ML and Cyber Security.  
          I work with data-driven approaches to understand intelligent systems, with a growing focus on secure and reliable networked solutions.
          </p>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <button 
              className="social-hover-button"
              onClick={() => window.open('/Prytee.pdf', '_blank')}
              style={{
                height: '4em',
                width: '15em',
                border: 'none',
                borderRadius: '40px',
                backgroundColor: '#fff',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <span style={{
                zIndex: 1,
                display: 'inline-block',
                backgroundColor: 'black',
                height: '3em',
                width: '11.5em',
                borderRadius: '25px',
                color: '#fff',
                lineHeight: '55px',
                fontSize: '18px',
                letterSpacing: '3px',
                transition: 'all 0.5s'
              }}>
                RESUME
              </span>
              <div className="icon-container" style={{
                zIndex: -1,
                width: 0,
                position: 'absolute',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                top: '50%', 
                left: '50%',
                transform: 'translate(-50%, -50%)',
                transition: 'all 0.4s'
              }}>
                <svg viewBox="0 0 24 24" fill="black" width="35" height="35" style={{ padding: '0 10px' }}>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                  <path d="M8 12h8v2H8zm0 4h8v2H8zm0-8h5v2H8z"/>
                </svg>
              </div>
            </button>

            <button 
              className="social-hover-button"
              onClick={() => window.open('https://www.linkedin.com/in/pritirekha-panda-9b894a324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', '_blank')}
              style={{
                height: '4em',
                width: '15em',
                border: 'none',
                borderRadius: '40px',
                backgroundColor: '#fff',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <span style={{
                zIndex: 1,
                display: 'inline-block',
                backgroundColor: 'black',
                height: '3em',
                width: '11.5em',
                borderRadius: '25px',
                color: '#fff',
                lineHeight: '55px',
                fontSize: '18px',
                letterSpacing: '3px',
                transition: 'all 0.5s'
              }}>
                LINKEDIN
              </span>
              <div className="icon-container" style={{
                zIndex: -1,
                width: 0,
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transform: 'translateY(-50px)',
                transition: 'all 0.4s'
              }}>
                <svg viewBox="0 0 24 24" fill="black" width="35" height="35" style={{ padding: '0 10px' }}>
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* RIGHT CHARACTER */}
        <div style={{
          position: 'relative',
          width: '500px',
          height: '500px',
          flexShrink: 0
        }}>
          
          <div style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'float 4s ease-in-out infinite'
          }}>
            
            <div style={{
              position: 'absolute',
              width: '70%',
              height: '70%',
              background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 80%, transparent 100%)',
              borderRadius: '50%',
              filter: 'blur(70px)',
              zIndex: 1,
              animation: 'pulseGlow 4s ease-in-out infinite'
            }} />
            
            <div style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2
            }}>
              
              <img
                ref={characterRef}
                src={animationPhases[0].images[0]}
                alt="Character"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  position: 'absolute',
                  zIndex: 2,
                  pointerEvents: 'none',
                  filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.2))'
                }}
              />

              <img
                ref={overlayRef}
                src="/IMG B.png"
                alt="Overlay"
                style={{
                  width: '110%',
                  height: '110%',
                  objectFit: 'contain',
                  position: 'absolute',
                  zIndex: 3,
                  pointerEvents: 'none',
                  mixBlendMode: 'normal',
                  opacity: 1,
                  top: '-11%',
                  left: '-8%',
                  filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.3))'
                }}
              />
              
            </div>

          </div>

        </div>

      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-10px) rotate(1deg); 
          }
        }
        
        @keyframes pulseGlow {
          0%, 100% { 
            opacity: 0.8;
            transform: scale(1);
          }
          50% { 
            opacity: 1;
            transform: scale(1.05);
          }
        }

        .social-hover-button:hover span {
          width: 0 !important;
        }

        .social-hover-button:hover .icon-container {
          z-index: 2 !important;
          width: 100% !important;
        }
      `}</style>
    </div>
  );
}


