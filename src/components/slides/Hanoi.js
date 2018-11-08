import React, { Component } from 'react';
import hanoi from "../../images/Hanoi.png"
import "./Jot.css"

class Hanoi extends Component {
    render() {
      return (
        <div className="proj-vis">
            <img src={hanoi} alt="Tower of Hanoi" className="project-img" />
            <h4>Tower of Hanoi</h4>
            <p className="proj-desc">Logic puzzle game built with JavaScript and some jQuery.</p>
        </div>
      );
    }
  }
  
  export default Hanoi;