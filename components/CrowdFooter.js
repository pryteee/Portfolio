'use client';
import CrowdCanvas from './CrowdCanvas';

export default function CrowdFooter() {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '42vh',
      zIndex: 10,
      pointerEvents: 'none',
      marginTop: '-40vh',
    }}>
      <CrowdCanvas src="/all-peeps.png" rows={15} cols={7} />
    </div>
  );
}
