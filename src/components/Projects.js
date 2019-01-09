import React, { Component } from 'react'
import Slider from "react-slick"
import jot from "../images/jotpad.png"
import hanoi from "../images/Hanoi.png"
import chef from "../images/silhouette.png"
import bc from "../images/bookclub.png"
import portfolio from "../images/portfolio.png"
import "./Projects.css"

class Projects extends Component {
    constructor(){
        super()
        this.state = {
            visible: false,
            more: true,
            projects:[
                {
                    name: "Jotpad",
                    image: jot,
                    shortDesc: "Notepad application built using React and Google Firebase. Firebase was used as the database, deployment, and authentication.",
                    about: "Jotpad is a notepad application. Anyone can sign-up and start keeping notes, and access them anywhere on the web. A user will be able to get an e-mail in case they forgot their password. The site is responsive to mobile web viewing.",
                    final: "When someone signs in they will only be able to see the notes that they have created. This was the most straining part of the project. To start, I had to set it up so that when a note was created, it associated the user ID with it as the creator. Next it involved passing the authentication props through to the notes, and when querying the database, only searching based on the ID.",
                    app: "https://jot-pad-notes.firebaseapp.com/",
                    github: "https://github.com/DaveSchuetz/jotpad"
                },
                {
                    name: "Tower of Hanoi",
                    image: hanoi,
                    shortDesc: "Tower of Hanoi is a logic game where you must move a series of disks between three towers, built with JavaScript and some jQuery.",
                    about: "You are only allowed to move one disk at a time and a larger disk may not be placed on top of a smaller disk. The game ends when all the disks are on the third tower.",
                    final: "The game was built with mostly vanilla JavaScript. There was some jQuery used to make sure some of the aspects were written cleaner. While building some of the actions, I ran into an issue where the multiple event listeners were interfering with each other. I was able to remedy this by creating just one listener that was used by all the clicks for the towers. This is the part of the project that I feel really proved my mettle.",
                    app: "https://daveschuetz.github.io/Tower-of-Hanoi/",
                    github: "https://github.com/DaveSchuetz/Tower-of-Hanoi"
                },
                {
                    name: "Community Kitchen",
                    image: chef,
                    shortDesc: "Recipe sharing site built with MongoDB, Express, Handlebars, and Node",
                    about: "Community Kitchen is a place where anyone can gather and share their favorite recipes. Chefs can add, edit, and remove their recipes",
                    final: "I encountered some issues in regard to displaying ingredients as chefs were putting them in. Since I wanted to display the ingredients in their own line. To resolve this, I put in the input for a chef to enter a single ingredient per line. From there I was able to use a string split at the line break to split the ingredients into an array.",
                    app: "https://community-kitchen.herokuapp.com/",
                    github: "https://github.com/DaveSchuetz/CommunityKitchen"
                },
                {
                    name: "Bookclub",
                    image: bc,
                    shortDesc: "Bookclub was a group project built with MongoDB, Express, React, and Node.",
                    about: "Bookclub was built to be a place where you could come to find your next book to read. Someone could go to the page, search for a specific book, and leave comments. Or they could click the random button, and find the next book that they should read, either alone, or for their book-club.",
                    final: "This project tested our abilities to divide work and to work through GitHub conflicts. We did run into a few issues with merging into GitHub, but otherwise, our project went smoothly. That is, until it came time to deploy. One thing that we saw was an issue while deploying to Surge, where it was having issues redirecting. This turns out was due to an issue Surge has with React routing, the resolution was to add a 200.html page, that Surge would use as the go to if the routing was not perfect, from there it would use React routing as expected",
                    app: "http://mern-bookclub.surge.sh/",
                    github: "https://github.com/DaveSchuetz/BookClub-FrontEnd"
                },
                {
                    name: "Portfolio",
                    image: portfolio,
                    shortDesc: "My personal portfolio page built with React.",
                    about:"My portfolio page redone in React, and mobile responsive. Original was just a few linked HTML pages, so I felt it didn't show off what I had learned, and the kind of work I wanted to do.",
                    final: "I tried to put in quite a bit of variety with the build. Sections that are just text and a section that uses a Slider component, it also allows for clicking to expand the descriptions. The skill part is set up so that it will scroll to the right on mobile, without scrolling the other sections. The most frustrating part was trying to get it hosted on GitHub. This involved manipulating the scripts in package.json. The link below is going to take you to the old portfolio page.",
                    app: "https://daveschuetz.github.io/old_portfolio/",
                    github:"https://github.com/DaveSchuetz/DaveSchuetz.github.io"
                }
            ]
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
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        let visibility = this.state.visible ? "proj-visible" : "proj-hidden"
        let more = this.state.more ? "more-btn" : "less-btn"
      return (
        <div className="info proj">
            <h3 className="project-title">Projects</h3>
            <p className="indent">The projects I have created along the way.</p>
            <div className="proj-slide">
                <Slider {...settings} className="proj-complete">
                {this.state.projects.map((project, i) =>
                    <div key={i}>
                        <img src={project.image} alt={project.name} className="project-img" />
                        <h4>{project.name}</h4>
                        <p className="proj-desc">{project.shortDesc}</p><strong className={more} onClick={this.showText}>MORE</strong>
                        <div className={visibility}>
                            <p>{project.about}</p>
                            <p>{project.final}</p>
                            <p>View <a href={project.app} className="project-link" target="_blank" rel="noopener noreferrer">here</a>. See the code on <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">Github</a>.</p><strong className="more-btn" onClick={this.showText}>LESS</strong>
                        </div>
                    </div>
                    )}
                </Slider>
            </div>
        </div>
      );
    }
  }
  
  export default Projects;