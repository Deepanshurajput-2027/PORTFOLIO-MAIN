import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ParallaxSection, { SmoothScroll } from './components/ui/ParallaxSection';
import Footer from './components/Footer';
import ClickSpark from './components/ui/ClickSpark';
import TargetCursor from './components/ui/TargetCursor';

// Lazy load below-the-fold components for performance
const Services = React.lazy(() => import('./components/Services'));
const Work = React.lazy(() => import('./components/Work'));
const TechStack = React.lazy(() => import('./components/TechStack'));
const GithubActivity = React.lazy(() => import('./components/GithubActivity'));
const Contact = React.lazy(() => import('./components/Contact'));
const Certificates = React.lazy(() => import('./components/Certificates'));

function App() {
  return (
    <ClickSpark sparkColor="#eab308" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
      <TargetCursor
        targetSelector="a, button, input, textarea, .work-card, .service-card, .tech-item"
        spinDuration={4}
      />
      <SmoothScroll>
        <div className="App">
          <Navbar />

          {/* Hero section is eager loaded for LCP (Largest Contentful Paint) */}
          <ParallaxSection speed={0.2}>
            <Hero />
          </ParallaxSection>

          {/* Wrap lazy loaded sections with Suspense */}
          <Suspense fallback={<div className="h-screen w-full flex items-center justify-center text-[#333] tracking-widest uppercase font-mono text-sm">Loading Experience...</div>}>
            <ParallaxSection speed={0.5}>
              <TechStack />
            </ParallaxSection>

            <ParallaxSection>
              <GithubActivity />
            </ParallaxSection>

            <ParallaxSection speed={0.4}>
              <Work />
            </ParallaxSection>

            <Certificates />

            <ParallaxSection speed={0.3}>
              <Services />
            </ParallaxSection>

            <Contact />
          </Suspense>

          <Footer />
        </div>
      </SmoothScroll>
    </ClickSpark>
  )
}

export default App
