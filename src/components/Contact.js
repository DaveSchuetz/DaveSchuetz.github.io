import React, { Component } from "react";
import "./Contact.css"
import ga from "../images/GA.png"
import github from "../images/github.png"
import gmail from "../images/gmail.png"
import linked from "../images/linkedin.png"

class Contact extends Component {
    render() {
      return (
        <div className="info contact">
            <h3 className="project-title">Contact Me</h3>
            <p className="indent">
                Looking for some help on a project? Have a job opening? Any other inquiries, please reach out to me so that we can talk more.
            </p>
            <div className="con-setup">
                <p className="contact-flex"><a href="mailto:schuetz.david.w@gmail.com"><img src={gmail} title="schuetz.david.w@gmail.com" alt="E-Mail" className="contact-img"/></a><a href="mailto:schuetz.david.w@gmail.com" className="contact-link">E-mail me</a></p>
                <p className="contact-flex"><a href="https://www.linkedin.com/in/daveschuetz/" target="_blank" rel="noopener noreferrer"><img src={linked} alt="LinkedIn" title="LinkedIn" className="contact-img"/></a><a href="https://www.linkedin.com/in/daveschuetz/" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a></p>
                <p className="contact-flex"><a href="https://github.com/DaveSchuetz" target="_blank" rel="noopener noreferrer"><img src={github} alt="GitHub" title="GitHub" className="contact-img"/></a><a href="https://github.com/DaveSchuetz" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a></p>
                <p className="contact-flex"><a href="https://profiles.generalassemb.ly/profiles/david-schuetz" target="_blank" rel="noopener noreferrer"><img src={ga} alt="GA pages" title="GA Pages" className="contact-img"/></a><a href="https://profiles.generalassemb.ly/profiles/david-schuetz" target="_blank" rel="noopener noreferrer" className="contact-link">General Assembly Page</a></p>
            </div>
        </div>
      );
    }
  }
  
  export default Contact;