import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <div className="ambient-blob blob-1"></div>
      <div className="ambient-blob blob-2"></div>
      <Navbar />
      <Hero />
      <div id="about"><About /></div> {/* Added IDs for navigation */}
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
}

export default App;
