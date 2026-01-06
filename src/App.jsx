import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="App">
      <div className="ambient-blob blob-1"></div>
      <div className="ambient-blob blob-2"></div>
      <ThemeToggle />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
