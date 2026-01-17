'use client';
import { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

export default function RightClickMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const menuRef = useRef(null);

  // Your social links - REPLACE THESE WITH YOUR ACTUAL LINKS
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      url: 'https://github.com/pryteee',
      color: '#333'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: 'https://www.linkedin.com/in/pritirekha-panda-9b894a324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      color: '#0077b5'
    },
    {
      name: 'X',
      icon: (
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      url: 'https://x.com/Pritirekha_06',
      color: '#000000'
    },
    {
      name: 'Instagram',
      icon: <Instagram size={20} />,
      url: 'https://www.instagram.com/priti_rekha_panda?igsh=MWRwNzQzcTViMzNndQ==',
      color: '#E4405F'
    },
    // {
    //   name: 'Email',
    //   icon: <Mail size={20} />,
    //   url: 'mailto:YOUR_EMAIL@example.com',
    //   color: '#EA4335'
    // }
  ];

  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
      
      // Calculate position
      const x = Math.min(e.clientX, window.innerWidth - 220); // Keep menu in viewport
      const y = Math.min(e.clientY, window.innerHeight - 250);
      
      setPosition({ x, y });
      setIsOpen(true);
    };

    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleLinkClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div
          ref={menuRef}
          style={{
            position: 'fixed',
            top: position.y,
            left: position.x,
            zIndex: 9999,
            background: '#111111',
            border: '1px solid #333',
            borderRadius: '8px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
            padding: '8px 0',
            minWidth: '200px',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
          }}
        >
          <div style={{
            padding: '8px 16px',
            color: '#888',
            fontSize: '12px',
            borderBottom: '1px solid #333',
            marginBottom: '8px'
          }}>
            Connect with me!!
          </div>
          
          {socialLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => handleLinkClick(link.url)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 16px',
                background: 'transparent',
                border: 'none',
                color: '#ffffff',
                cursor: 'pointer',
                fontSize: '14px',
                transition: 'all 0.2s ease',
                textAlign: 'left'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#222';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#fff';
              }}
            >
              <div style={{
                filter: 'grayscale(100%) brightness(2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '20px',
                height: '20px'
              }}>
                {link.icon}
              </div>
              <span>{link.name}</span>
            </button>
          ))}
          
          {/* <div style={{
            padding: '8px 16px',
            color: '#666',
            fontSize: '10px',
            borderTop: '1px solid #333',
            marginTop: '8px'
          }}>
            Right-click anywhere to close
          </div> */}
        </div>
      )}
    </>
  );
}