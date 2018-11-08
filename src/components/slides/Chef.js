import React, { Component } from 'react';
import chef from "../../images/silhouette.png"
import "./Jot.css"

class Chef extends Component {
    render() {
      return (
        <div className="proj-vis">
            <img src={chef} alt="Chef Silhouette" className="project-img" />
            <h4>Community Kitchen</h4>
            <p className="proj-desc">Recipe sharing site built with MongoDB, Express, Handlebars, and Node</p>
        </div>
      );
    }
  }
  
  export default Chef;