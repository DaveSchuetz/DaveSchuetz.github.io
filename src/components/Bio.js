import React, { Component } from "react";
import "./Bio.css"

class Bio extends Component {
    render() {
      return (
        <div className="info section">
            <h3 className="project-title">Who I Am</h3>
            <p className="indent">My name is Dave and I am a web developer with an international perspective, able to communicate details and methodologies to stakeholders in more understandable terms. My ardor for learning, coupled with my aptitude for problem solving, make me an asset to any team or project.</p>
            <p className="indent">I recently completed a Web Development Immersive course at General Assembly. The course was 12 weeks long, 40 hours a week. The class was fast-paced and detailed, which I feel means that I can work great in any work environment.  The course required completion of four projects, that are linked in the projects page.</p>
            <p className="indent">I am transitioning from being a system administrator with more than 8 years of experience working in a datacenter/NOC environment. This work consisted of performing low level system administrative tasks, and high level customer service with people from all around the globe. In these years I have worked closely on projects with other teams, and I have taken that work to train my team mates and supervisors.</p>
            <p className="indent">I will bring my desire to create quality products that I can be proud of to all the work that I do. I hope you will check out my projects, and you can review the code on my <a href="https://github.com/DaveSchuetz" className="sentence-link" target="_blank" rel="noopener noreferrer">GitHub</a>. To find out more about me, please go to my <a href="https://www.linkedin.com/in/daveschuetz/" className="sentence-link" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        </div>
      );
    }
  }
  
  export default Bio;