import GradientBackground from './components/GradientBackground.jsx';
import Navbar from './components/Navbar.jsx';
import StarsCanvas from './components/StarsCanvas.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <main className="max-w-7xl mx-auto" >
      <StarsCanvas />
      <GradientBackground />
      <Navbar />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}

export default App;