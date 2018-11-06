import React, { Component } from 'react';
import hanoi from "../images/Hanoi.png"
import jot from "../images/jotpad.png"
import bc from "../images/bookclub.png"
import chef from "../images/silhouette.png"

class Projects extends Component {
    render() {
      return (
        <div className="info proj">
            <h3 className="project-title">Projects</h3>
            <p className="lead indent">The projects I have created along the way.</p>
            <div className="scroll">
                <div className="show-proj">
                    <img src={jot} alt="Jotpad Image" className="project-img" />
                    <img src={hanoi} alt="Towers of Hanoi Image" className="project-img"/>
                    <img src={chef} alt="Community Kitchen Image" className="project-img"/>
                    <img src={bc} alt="Bookclub Image" className="project-img"/>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Projects;