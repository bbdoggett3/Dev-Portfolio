import React from 'react';
import "./styles/App.scss"
import Welcome from './components/Welcome';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Welcome/>
      <Skills/>
      <Projects/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
