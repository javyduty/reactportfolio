import './App.css';
import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar';
import WelcomePage from './components/Welcome';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
        <Navbar />
        <WelcomePage />
        <AboutMe />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
