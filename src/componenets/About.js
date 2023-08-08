import React from "react"
import headshot from "../images/rs-photo.jpg"
import "../styles/about.css"
import Particle from "./Particles"
import IntroType from "./TypeAnimation"
import github from "../images/github-logo2.png"
import linkedIn from "../images/linkedin-logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"



export default function About(){

    return(
        <div>
            
<div id="about"></div>

<div id="aboutContainer">
    <section className="mt-3">
        
     <div className="container" id="introContainer">
     
     
        <div id="aboutText1">     
            <h4 id="helloText">Hello World, I'm</h4>
            <h1 id="nameTag">Ryan Street</h1>
            <div id="introType">
                <IntroType></IntroType>
                
            </div>
        </div>
        
         <div id="imgContainer">
            <img id="headshot"  className="col-4 img-thumbnail mt-4" src={headshot}></img>
         </div>
         
     </div>

     <div id="aboutText2">
            <p id="aboutP">
            <i class="fa-brands fa-github"></i>
                Hi i'm Ryan. I love helping businesses thrive at the crossroads of technology and creativity. I blend my skills in full stack web
development, digital marketing management and creative writing to execute effective projects, establish unique
virtual experiences, and grow businesses online.

                    <br></br>
                    <br></br>
                    Interested in reaching out? Don't hesitate to
                    contact me. Thanks for visiting my site!</p>
            
    </div>

        

        </section>

        

        </div>

        </div>
    )
    
}