'use client';
import { useEffect, useState } from 'react';
import CrowdCanvas from './CrowdCanvas';

export default function CrowdFooter() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return (
      <footer style={{
        background: 'black',
        color: 'white',
        textAlign: 'center',
        padding: '40px 20px',
        marginTop: '50px'
      }}>
        <p style={{ 
          fontSize: '0.9rem', 
          opacity: 0.7,
          marginBottom: '10px'
        }}>
          © 2026 Prytee
        </p>
        <p style={{ 
          fontSize: '0.8rem', 
          opacity: 0.5 
        }}>
          Made with ❤️, ☕, and a sprinkle of chaos
        </p>
      </footer>
    );
  }
  return <CrowdCanvas src="/all-peeps.png" rows={15} cols={7} />;
}
