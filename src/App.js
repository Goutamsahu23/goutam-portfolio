import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Experience/>
      <Skills/>
    </div>
  );
}

export default App;
