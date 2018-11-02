import React, { Component } from 'react';

class Skills extends Component {
    constructor(){
        super()
        this.state = {
            skills: [
                {name: 'JavaScript ES6'},
                {name:'React'},
                {name:'HTML5'},
                {name:'CSS3'},
                {name:'Node.js'},
                {name:'Express.js'},
                {name:'Firebase'},
                {name:'MongoDB'},
                {name:'Python'},
                {name:'Django'},
                {name:'GitHub'},
                {name:'SQL'}
            ]
        }
    }
    render() {
      return (
        <div className="info">
            <h3 className="project-title">Skills</h3>
            <p className="lead indent">Some technologies I have encountered on the way:</p>
            <ul className="skills">
                {this.state.skills.map((skill, i)=>
                    <li key={i} id={'skill' + i}>{skill.name}</li>
                )}
            </ul>
        </div>
      );
    }
  }
  
  export default Skills;