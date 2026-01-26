'use client';
import { useRef, useEffect, useState } from 'react';

export default function OptimizedCharacter() {
  const characterRef = useRef(null);
  const overlayRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);
  
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
    const allImages = [];
    
    animationPhases.forEach(phase => {
      allImages.push(phase.finalImage);
      allImages.push(...phase.images);
    });
    
    const totalImages = allImages.length;
    
    const preloadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          loadedCount++;
          setLoadingProgress(Math.round((loadedCount / totalImages) * 100));
          resolve();
        };
        img.onerror = () => {
          loadedCount++;
          setLoadingProgress(Math.round((loadedCount / totalImages) * 100));
          resolve();
        };
        img.src = src;
      });
    };
    
    Promise.all(allImages.map(src => preloadImage(src)))
      .then(() => {
        if (characterRef.current && overlayRef.current) {
          characterRef.current.src = animationPhases[0].images[0];
          overlayRef.current.src = '/IMG B.png';
        }
        setTimeout(() => {
          setImagesLoaded(true);
          setTimeout(() => setStartAnimation(true), 100);
        }, 100);
      });
  }, []);

  // Character animation
  useEffect(() => {
    if (!imagesLoaded) return;
    
    let phaseIndex = 0;
    let frameIndex = 0;
    let animationId;
    
    const animate = () => {
      if (!characterRef.current || !overlayRef.current) return;
      
      const currentPhase = animationPhases[phaseIndex];
      
      overlayRef.current.src = currentPhase.finalImage;
      characterRef.current.src = currentPhase.images[frameIndex];
      
      frameIndex++;
      
      if (frameIndex >= currentPhase.images.length) {
        frameIndex = 0;
        phaseIndex = (phaseIndex + 1) % animationPhases.length;
      }
      
      animationId = setTimeout(animate, 300);
    };
    
    animate();
    
    return () => {
      if (animationId) clearTimeout(animationId);
    };
  }, [imagesLoaded]);

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0f0f0f',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'clamp(20px, 5vw, 45px)',
      fontFamily: "'Ink Free', 'Segoe Script', 'Brush Script MT', cursive",
      position: 'relative',
      overflow: 'hidden'
    }}>
      

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'clamp(20px, 5vw, 80px)',
        maxWidth: '1300px',
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
       
        <div 
          className="slide-in-left"
          style={{ 
            maxWidth: '900px', 
            color: 'white', 
            flex: 1,
            minWidth: '280px',
            textAlign: 'left',
            transform: startAnimation ? 'translateX(0)' : 'translateX(-100px)',
            opacity: startAnimation ? 1 : 0,
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
          
          
          <h1 style={{
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
            fontWeight: 'normal',
            marginBottom: '10px',
            lineHeight: 1.1
          }}>
            <span style={{
              color: '#a8a8a8',
              fontSize: 'clamp(1.5rem, 4vw, 2.3rem)',
              display: 'block',
              marginBottom: 'clamp(10px, 2vw, 20px)',
              fontFamily: "'Bradley Hand ITC', 'Segoe Script', 'Brush Script MT', cursive",
              fontWeight: '300',
              transform: startAnimation ? 'translateX(0)' : 'translateX(-80px)',
              opacity: startAnimation ? 1 : 0,
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
            }}>
              Hi, I'm
            </span>
            
          
            <span style={{ 
              color: 'white',
              fontSize: 'clamp(2rem, 6vw, 3.4rem)',
              display: 'block',
              fontWeight: 'bold',
              marginBottom: 'clamp(15px, 3vw, 25px)',
              fontFamily: '"Book Antiqua", serif',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              transform: startAnimation ? 'translateX(0)' : 'translateX(-80px)',
              opacity: startAnimation ? 1 : 0,
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
            }}>
              Pritirekha Panda
            </span>
          </h1>

          
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.6rem)',
            lineHeight: 1.4,
            color: 'rgba(255,255,255,0.85)',
            marginBottom: 'clamp(20px, 4vw, 40px)',
            fontFamily: "'Bradley Hand ITC', 'Segoe Script', 'Brush Script MT', cursive",
            fontWeight: '300',
            transform: startAnimation ? 'translateX(0)' : 'translateX(-80px)',
            opacity: startAnimation ? 1 : 0,
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s'
          }}>
          I'm a Data Science student passionate about AI/ML and Cyber Security.  
          I work with data-driven approaches to understand intelligent systems, with a growing focus on secure and reliable networked solutions.
          </p>

          {/* Buttons */}
          <div style={{ 
            display: 'flex', 
            gap: '30px', 
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            transform: startAnimation ? 'translateX(0)' : 'translateX(-80px)',
            opacity: startAnimation ? 1 : 0,
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.8s'
          }}>
            <button 
              className="social-hover-button"
              onClick={() => window.open('/Resume.pdf', '_blank')}
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
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* RIGHT CHARACTER */}
        <div style={{
          position: 'relative',
          width: 'clamp(300px, 40vw, 500px)',
          height: 'clamp(300px, 40vw, 500px)',
          flexShrink: 0,
          margin: '0 auto',
          opacity: startAnimation ? 1 : 0,
          transform: startAnimation ? 'scale(1)' : 'scale(0.8)',
          transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.5s'
        }}>
          
          <div style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: imagesLoaded ? 'float 4s ease-in-out infinite' : 'none'
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

        @media (max-width: 768px) {
          .slide-in-left {
            text-align: center !important;
          }
        }
      `}</style>
    </div>
  );
}
