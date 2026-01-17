'use client';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

export default function Connect() {
  return (
    <section
      style={{
        background: 'transparent',
        minHeight: '10vh',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingBottom: '45vh',
        position: 'relative',
        zIndex: 20,
        color: 'white',
        marginTop: '-50px',
      }}
    >
      <div
        style={{
          width: '100%',
          textAlign: 'center',
          padding: '30px 20px',
          background: 'transparent',
        }}
      >
        {/* Heading */}
        <h2
          style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '14px',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)',
          }}
        >
          Let&apos;s <span style={{ color: '#ffffff' }}>Connect</span>
        </h2>

        {/* Sub text */}
        <p
          style={{
            fontSize: '1.1rem',
            color: 'rgba(255,255,255,0.9)',
            marginBottom: '40px',
            textShadow: '0 1px 5px rgba(0, 0, 0, 0.8)',
          }}
        >
          Feel free to reach out for collaborations or just a friendly chat!
        </p>

        {/* Social icons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginBottom: '30px'
          }}
        >
          <a 
            href="https://github.com/pryteee" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
              color: 'white',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#a0a0a0'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            <Github style={{ filter: 'drop-shadow(0 1px 3px rgba(0, 0, 0, 0.8))' }} />
          </a>
          
          <a 
            href="https://www.linkedin.com/in/pritirekha-panda-9b894a324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
              color: 'white',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#a0a0a0'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            <Linkedin style={{ filter: 'drop-shadow(0 1px 3px rgba(0, 0, 0, 0.8))' }} />
          </a>
          
          <a 
            href="https://x.com/Pritirekha_06" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
              color: 'white',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#a0a0a0'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            {/* X Logo SVG */}
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24"
              style={{ filter: 'drop-shadow(0 1px 3px rgba(0, 0, 0, 0.8))' }}
            >
              <path 
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" 
                fill="currentColor"
              />
            </svg>
          </a>
          
          <a 
            href="https://www.instagram.com/priti_rekha_panda?igsh=MWRwNzQzcTViMzNndQ==" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
              color: 'white',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#a0a0a0'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            <Instagram style={{ filter: 'drop-shadow(0 1px 3px rgba(0, 0, 0, 0.8))' }} />
          </a>
          
          <a 
            href="mailto:pritirekhapanda@gmail.com"
            style={{
              color: 'white',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#a0a0a0'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            <Mail style={{ filter: 'drop-shadow(0 1px 3px rgba(0, 0, 0, 0.8))' }} />
          </a>
        </div>

        {/* Footer */}
        <p
          style={{
            fontSize: '0.85rem',
            color: 'rgba(255,255,255,0.7)',
            textShadow: '0 1px 3px rgba(0, 0, 0, 0.8)',
            marginTop: '20px',
          }}
        >
          © 2026 Prytee. Made with ❤️, ☕, and a sprinkle of chaos
        </p>
      </div>
    </section>
  );

}
