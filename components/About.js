'use client';
import { useRef } from 'react';
import VariableProximity from './VariableProximity';
import './VariableProximity.css';

export default function About() {
  const containerRef = useRef(null);

  return (
    <section id="about" style={{
      background: 'linear-gradient(180deg, #0a0a0a 0%, #111 100%)',
      padding: '100px 20px',
      color: 'white',
      fontFamily: "'Ink Free', 'Segoe Script', 'Brush Script MT', cursive",
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '60px'
      }}>
        
        {/* About heading */}
        <h2 style={{
          fontSize: '4rem',
          fontWeight: 'normal',
          color: 'white',
          fontFamily: "'Ink Free', 'Segoe Script', 'Brush Script MT', cursive",
          letterSpacing: '1px',
          textAlign: 'left',
          width: '100%',
          paddingLeft: '10px'
        }}>
          About
        </h2>

        {/* Full width left-aligned paragraph with VariableProximity */}
        <div 
          ref={containerRef}
          style={{
            position: 'relative',
            fontSize: '1.9rem',
            lineHeight: '1.8',
            color: 'rgba(255,255,255,0.9)',
            fontFamily: '"Roboto Flex", sans-serif',
            letterSpacing: '0.5px',
            fontWeight: '300',
            textAlign: 'left',
            padding: '10px',
            width: '100%'
          }}
        >
          <VariableProximity
            label="Driven by curiosity around data and intelligent systems, engages in analyzing patterns, exploring machine learning concepts, and understanding real-world applications. Builds knowledge of network security principles that help create secure, reliable, and responsible systems. Approaches problem-solving with curiosity and structure across data, intelligence, and security domains. Applies these interests through academic projects and hands-on practice. Beyond academics, enjoys gaming and photography, with a preference for visual composition and capturing meaningful moments."
            fromFontVariationSettings="'wght' 300, 'wdth' 100, 'opsz' 14"
            toFontVariationSettings="'wght' 700, 'wdth' 125, 'opsz' 48"
            containerRef={containerRef}
            radius={80}
            falloff="gaussian"
          />
        </div>

      </div>
    </section>
  );

}
