import React, { Component } from 'react';
import "./Skills.css"

class Skills extends Component {
    constructor(){
        super()
        this.state = {
            skills: [
                {name: 'JavaScript ES6'},
                {name:'Express.js'},
                {name:'MongoDB'},
                {name:'React'},
                {name:'Node.js'},
                {name:'Python'},
                {name:'HTML5'},
                {name:'GitHub'},
                {name:'Django'},
                {name:'CSS3'},
                {name:'Firebase'},
                {name:'SQL'}
            ]
        }
    }
    render() {
      return (
        <div className="info group">
            <h3 className="project-title">Skills</h3>
            <p className="lead indent">Some technologies I have encountered on the way:</p>
            <div className="scroll">
                <ul className="skills">
                    {this.state.skills.map((skill, i)=>
                        <li key={i} id={'skill' + i}>{skill.name}</li>
                    )}
                </ul>
            </div>
        </div>
      );
    }
  }
  
  export default Skills;