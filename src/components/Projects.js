import React, { Component } from 'react';
import Slider from "react-slick"
import Jot from "./slides/Jot"
import Hanoi from "./slides/Hanoi"
import Chef from "./slides/Chef"
import Bookclub from "./slides/Bookclub"
import "./Projects.css"

class Projects extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          }
      return (
        <div className="info proj">
            <h3 className="project-title">Projects</h3>
            <p className="lead indent">The projects I have created along the way.</p>
            <div className="proj-slide">
                <Slider {...settings}>
                    <div>
                        <Jot />
                    </div>
                    <div>
                        <Hanoi />
                    </div>
                    <div>
                        <Chef />
                    </div>
                    <div>
                        <Bookclub />
                    </div>
                </Slider>
            </div>
        </div>
      );
    }
  }
  
  export default Projects;