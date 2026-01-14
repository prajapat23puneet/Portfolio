import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LoadingSpinner from './components/LoadingSpinner';
import LazySection from './components/LazySection';

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
        <Suspense fallback={<LoadingSpinner />}>
          <LazySection fallback={null}>
            <About />
          </LazySection>
          <LazySection fallback={null}>
            <Skills />
          </LazySection>
          <LazySection fallback={null}>
            <Projects />
          </LazySection>
          <LazySection fallback={null}>
            <Contact />
          </LazySection>
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;
