import React from 'react';
import './App.css';
import NavBar from './components/Navigation/NavBar';
import AboutSection from './components/AboutSection/AboutSection';
import Projects from './components/Projects/Projects';
import ResumeSection from './components/ResumeSection/ResumeSection';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path='/' component={Projects} />
      <Route exact path='/about' component={AboutSection} />
      <Route exact path='/resume' component={ResumeSection} />
    </div>
  );
}

export default App;
