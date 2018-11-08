import React, { Component } from 'react';
import bc from "../../images/bookclub.png"
import "./Jot.css"

class Bookclub extends Component {
    render() {
      return (
        <div className="proj-vis">
            <img src={bc} alt="Jotpad" className="project-img" />
            <h4>Bookclub</h4>
            <p className="proj-desc">Find and review books. Built with MongoDB, Express, React, and Node.</p>
        </div>
      );
    }
  }
  
  export default Bookclub;