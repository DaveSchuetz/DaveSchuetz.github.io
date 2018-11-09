import React, { Component } from 'react';
import hanoi from "../../images/Hanoi.png"
import "./Jot.css"

class Hanoi extends Component {
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
            <img src={hanoi} alt="Tower of Hanoi" className="project-img" />
            <h4>Tower of Hanoi</h4>
            <p className="proj-desc">Tower of Hanoi is a logic game where you must move a series of disks between three towers, built with JavaScript and some jQuery.</p><strong className={more} onClick={this.showText}>MORE</strong>
            <div className={visibility}>
              <p>You are only allowed to move one disk at a time and a larger disk may not be placed on top of a smaller disk. The game ends when all the disks are on the third tower.</p>
              <p>The game was built with mostly vanilla JavaScript. There was some jQuery used to make sure some of the aspects were written cleaner. While building some of the actions, I ran into an issue where the multiple event listeners were interfering with each other. I was able to remedy this by creating just one listener that was used by all the clicks for the towers. This is the part of the project that I feel really proved my mettle. -- Play <a href="https://daveschuetz.github.io/Tower-of-Hanoi/" className="sentence-link" target="_blank" rel="noopener noreferrer">here</a>. See the code on <a href="https://github.com/DaveSchuetz/Tower-of-Hanoi" className="sentence-link" target="_blank" rel="noopener noreferrer">GitHub</a>.</p><strong onClick={this.showText}>LESS</strong>
            </div>
        </div>
      );
    }
  }
  
  export default Hanoi;