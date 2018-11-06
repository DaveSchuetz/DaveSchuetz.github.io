import React, { Component } from 'react';
import profImage from '../images/profile.jpg'
import './App.css';
import Bio from './Bio'
import Skill from './Skills'
import Projects from './Projects'

class App extends Component {
  render() {
    return (
      <div className="app">
        <header id="top">
          <img src={profImage} alt="profile pic" className="profPic" />
          <h1 className="intro">Dave Schuetz</h1>
          <h2 className="intro">Web Developer</h2>
          <nav>
            <a href="#top">Home</a>
            <a href="#bio">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#bio">More</a>
            <a href="#bio">Contact</a>
          </nav>
        </header>
        <div id="bio">
          <Bio />
        </div>
        <div id="skills">
          <Skill />
        </div>
        <div id="projects">
          <Projects />
        </div>
      </div>
    );
  }
}

export default App;
