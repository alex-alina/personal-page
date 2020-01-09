import React from 'react';
import './App.css';
import NavBar from './components/Navigation/NavBar';
import AboutSection from './components/AboutSection/AboutSection';
import Home from './components/Home/Home';
import ResumeSection from './components/ResumeSection/ResumeSection';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={AboutSection} />
      <Route exact path='/resume' component={ResumeSection} />
      </main>
    </div>
  );
}

export default App;
