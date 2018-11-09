import React, { Component } from 'react';
import chef from "../../images/silhouette.png"
import "./Jot.css"

class Chef extends Component {
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
            <img src={chef} alt="Chef Silhouette" className="project-img" />
            <h4>Community Kitchen</h4>
            <p className="proj-desc">Recipe sharing site built with MongoDB, Express, Handlebars, and Node</p><strong className={more} onClick={this.showText}>MORE</strong>
            <div className={visibility}>
              <p>Community Kitchen is a place where anyone can gather and share their favorite recipes. They can also keep track of their favorite recipes that someone else had shared with the community. Chefs can add, edit, and remove their recipes.</p>
              <p>I encountered some issues in regard to displaying ingredients as chefs were putting them in. Since I wanted to display the ingredients in their own line. To resolve this, I put in the input for a chef to enter a single ingredient per line. From there I was able to use a string split at the line break to split the ingredients into an array. -- View <a href="https://community-kitchen.herokuapp.com/" className="sentence-link" target="_blank" rel="noopener noreferrer">here</a>. See the code on <a href="https://github.com/DaveSchuetz/CommunityKitchen" className="sentence-link" target="_blank" rel="noopener noreferrer">GitHub</a>.</p><strong onClick={this.showText}>LESS</strong>
            </div>
        </div>
      );
    }
  }
  
  export default Chef;