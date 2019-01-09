import React, { Component } from "react";
import "./More.css"

class More extends Component {
    render() {
      return (
        <div className="info extras">
            <h3 className="project-title">Other Things to See</h3>
            <p className="indent">I am not a designer, but I do know my way around Photoshop. I have created a few of the images for the projects here, as well as my LinkedIn banner. I have played around with Illustrator and Premiere as well.</p>
            <p className="indent">I have also been blogging. As of right now, I have a blog about my experience taking on the program at GA with a Windows computer, GA is a Mac environment. Read about it on <a href="https://medium.com/@dave.schuetz" className="extra-link" target="_blank" rel="noopener noreferrer">Medium</a>. I have also created the post on <a href="https://dev.to/daveschuetz" className="extra-link" target="_blank" rel="noopener noreferrer">dev.to</a>, as I know Medium has monthly read limits on free accounts.</p>
        </div>
      );
    }
  }
  
  export default More;