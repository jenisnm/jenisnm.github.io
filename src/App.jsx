import '/src/styles/App.css';
import Navbar from '/src/components/Navbar'
import Home from '/src/pages/Home';
import About from '/src/pages/About';
import Skills from '/src/pages/Skills';
import Project from '/src/pages/Project';
import Contact from '/src/pages/Contact';
import Footer from '/src/components/Footer';
import Qualifications from './pages/Qualifications';
import Hobbies from './pages/Hobbies';
import Gallery from './pages/Gallery';
import Achievements from './pages/Achievements';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <About />
      <Qualifications />
      <Achievements />
      <Hobbies />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
