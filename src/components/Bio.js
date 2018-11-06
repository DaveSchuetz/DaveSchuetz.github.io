import React, { Component } from 'react';

class Bio extends Component {
    render() {
      return (
        <div className="info section">
            <h3 className="project-title">Who I Am</h3>
            <p className="indent lead">My name is Dave and I am a web developer with an international perspective, able to communicate details and methodologies to stakeholders in more understandable terms. My ardor for learning, coupled with my aptitude for problem solving, make me an asset to any team or project.</p>
            <p className="indent">I am transitioning from being a system administrator with more than 8 years of experience working in a datacenter/NOC environment. In these years I have worked closely on projects with other teams, and have taken that work to train my team mates and supervisors. I also worked regularly with many people from a variety of countries.</p>
            <p className="indent">I recently completed a Web Development Immersive course at General Assembly. The course was 12 weeks long, 40 hours a week. The course required completion of four projects, that are linked in the projects page.</p>
            <p className="indent">I always wanted to do more development and now seemed like the right time to change careers. I hope you will check out my projects, and you can review the code on my <a href="https://github.com/DaveSchuetz" className="sentence-link" target="_blank" rel="noopener noreferrer">GitHub</a>. To find out more about me, please go to my <a href="https://www.linkedin.com/in/daveschuetz/" className="sentence-link" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        </div>
      );
    }
  }
  
  export default Bio;