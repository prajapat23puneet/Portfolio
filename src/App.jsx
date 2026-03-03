import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LoadingSpinner from './components/LoadingSpinner';
import LazySection from './components/LazySection';
import AvailabilityBanner from './components/AvailabilityBanner';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';

import ErrorBoundary from './components/ErrorBoundary';

// Lazy load non-critical components
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <div className="ambient-blob blob-1"></div>
        <div className="ambient-blob blob-2"></div>
        <Navbar />
        <Hero />
        <AvailabilityBanner />
        <Suspense fallback={<LoadingSpinner />}>
          <ErrorBoundary>
            <LazySection fallback={null}>
              <About />
            </LazySection>
          </ErrorBoundary>
          <ErrorBoundary>
            <LazySection fallback={null}>
              <Skills />
            </LazySection>
          </ErrorBoundary>
          <ErrorBoundary>
            <LazySection fallback={null}>
              <Projects />
            </LazySection>
          </ErrorBoundary>
          <ErrorBoundary>
            <LazySection fallback={null}>
              <Contact />
            </LazySection>
          </ErrorBoundary>
        </Suspense>
        <SpeedInsights />
        <Analytics />
      </div>
    </ThemeProvider>
  );
}

export default App;
