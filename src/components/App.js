import React, { Component } from 'react';
import profImage from '../images/profile.jpg'
import './App.css';
import Bio from './Bio'
import Skill from './Skills'
import Projects from './Projects'
import More from './More'
import Contact from './Contact'

class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <img src={profImage} alt="profile pic" className="profPic" />
          <h1 className="intro">Dave Schuetz</h1>
          <h2 className="intro">Web Developer</h2>
        </header>
        <div className="nav-lock">
            <nav>
              <a className="nav-link" href="#bio">About</a>
              <a className="nav-link" href="#skills">Skills</a>
              <a className="nav-link" href="#projects">Projects</a>
              <a className="nav-link" href="#more">More</a>
              <a className="nav-link" href="#contact">Contact</a>
            </nav>
          </div>
        <div id="bio">
          <Bio />
        </div>
        <div id="skills">
          <Skill />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="more">
          <More />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
