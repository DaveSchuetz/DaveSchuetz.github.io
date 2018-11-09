import React, { Component } from 'react';
import bc from "../../images/bookclub.png"
import "./Jot.css"

class Bookclub extends Component {
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
            <img src={bc} alt="Jotpad" className="project-img" />
            <h4>Bookclub</h4>
            <p className="proj-desc">Bookclub was a group project built with MongoDB, Express, React, and Node.</p><strong className={more} onClick={this.showText}>MORE</strong>
            <div className={visibility}>
              <p>Bookclub was built to be a place where you could come to find your next book to read. Someone could go to the page, search for a specific book, and leave comments. Or they could click the random button, and find the next book that they should read, either alone, or for their book-club.</p>
              <p>This project tested our abilities to divide work and to work through GitHub conflicts. We did run into a few issues with merging into GitHub, but otherwise, our project went pretty smoothly. That is, until it came time to deploy. One thing that we saw was an issue while deploying to Surge, where it was having issues redirecting. This turns out was due to an issue Surge has with React routing, the resolution was to add a 200.html page, that Surge would use as the go to if the routing was not perfect, from there it would use React routing as expected. -- View <a href="http://mern-bookclub.surge.sh/" className="sentence-link" target="_blank" rel="noopener noreferrer">here</a>. See the code for the <a href="https://github.com/DaveSchuetz/BookClub-FrontEnd" className="sentence-link" target="_blank" rel="noopener noreferrer">front-end</a>, and the <a href="https://github.com/DaveSchuetz/BookClub-BackEnd" className="sentence-link" target="_blank" rel="noopener noreferrer">back-end</a>.</p><strong onClick={this.showText}>LESS</strong>
            </div>
        </div>
      );
    }
  }
  
  export default Bookclub;