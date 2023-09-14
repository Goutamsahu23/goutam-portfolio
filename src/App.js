import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer';
import {themeContext} from './Context'
import { useContext } from 'react';
function App() {
  const theme=useContext(themeContext)

  const darkmode=theme.state.darkmode;
  return (
    <div className="App"
      style={{
        background : darkmode ? 'black':'',
        color : darkmode ? 'white' : ''
        
      }}
    
    
    >
      <Navbar/>
      <Intro/>
      <About/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
