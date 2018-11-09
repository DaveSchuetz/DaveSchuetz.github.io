import React, { Component } from 'react';
import jot from "../../images/jotpad.png"
import "./Jot.css"

class Jot extends Component {
  constructor(){
    super()
    this.state = {
      visible: false,
      more: true
    }
    this.showText = this.showText.bind(this)
  }
    showText (){
      this.setState({
        visible: !this.state.visible,
        more: !this.state.more
      })
    }
    render() {
      let visibility = this.state.visible ? "proj-visible" : "proj-hidden"
      let more = this.state.more ? "more-btn" : "less-btn"
      return (
        <div>
            <img src={jot} alt="Jotpad" className="project-img" />
            <h4>Jotpad</h4>
            <p className="proj-desc">Notepad application built using React and Google Firebase. Firebase was used as the database, deployment, and authentication.</p><strong className={more} onClick={this.showText}>MORE</strong>
            <div className={visibility}>
              <p>Jotpad is a notepad application. Anyone can sign-up and start keeping notes, and access them anywhere on the web. A user will be able to get an e-mail in case they forgot their password. The site is responsive to mobile web viewing.</p>
              <p>When someone signs in they will only be able to see the notes that they have created. This was the most straining part of the project. To start, I had to set it up so that when a note was created, it associated the user ID with it as the creator. Next it involved passing the authentication props through to the notes, and when querying the database, only searching based on the ID. -- View <a href="https://jot-pad-notes.firebaseapp.com/" className="sentence-link" target="_blank" rel="noopener noreferrer">here</a>. See the code on <a href="https://github.com/DaveSchuetz/jotpad" className="sentence-link" target="_blank" rel="noopener noreferrer">Github</a>.</p><strong onClick={this.showText}>LESS</strong>
            </div>
        </div>
      );
    }
  }
  
  export default Jot;