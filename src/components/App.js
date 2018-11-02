import React, { Component } from 'react';
import profImage from '../images/profile.jpg'
import './App.css';
import Bio from './Bio'
import Skill from './Skills'

class App extends Component {
  render() {
    return (
      <div>
        <header id="top">
          <img src={profImage} alt="profile pic" className="profPic" />
          <h1 className="intro">Dave Schuetz</h1>
          <h2 className="intro">Web Developer</h2>
          <nav>
            <a href="#top">Home</a>
            <a href="#bio">About</a>
            <a href="#skills">Skills</a>
            <a href="#bio">Projects</a>
            <a href="#bio">More</a>
            <a href="#bio">Contact</a>
          </nav>
        </header>
        <Bio id="bio"/>
        <Skill id='skills' />
      </div>
    );
  }
}

export default App;
