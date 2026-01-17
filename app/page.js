'use client';

import SmoothScroll from './Scroll';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/skills';
import TextEffect from '../components/TextEffect';
import CrowdFooter from '../components/CrowdFooter';
import Connect from '../components/connect';
import RightClickMenu from '../components/Click';

export default function Home() {
  return (
    <>
      <RightClickMenu />
      <SmoothScroll>
        <main style={{ background: '#000000' }}>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <TextEffect />
          <Connect />
          <CrowdFooter />
        </main>
      </SmoothScroll>
    </>
  );

}
