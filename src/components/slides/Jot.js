import React, { Component } from 'react';
import jot from "../../images/jotpad.png"
import "./Jot.css"

class Jot extends Component {
    render() {
      return (
        <div className="proj-vis">
            <img src={jot} alt="Jotpad" className="project-img" />
            <h4>Jotpad</h4>
            <p className="proj-desc">Notepad application built using React and Google Firebase.</p>
        </div>
      );
    }
  }
  
  export default Jot;