import "../styles/navbar.css"
import { Nav, Navbar, Container } from "react-bootstrap"
import logo from "../images/logo-black.png"
import github from "../images/github-logo2.png"
import linkedIn from "../images/linkedin-logo.png"



export default function Navigation (){
    return(
    <Navbar sticky="top" collapseOnSelect id="navTop" fixed="top" expand="sm" className="navbar bg-light ">
        <Navbar.Brand className="   ">    
            <img style={{width:70, height:70}}  src={logo}></img>
        </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <Nav.Link>About</Nav.Link>
                    <Nav.Link>Projects</Nav.Link>
                    <Nav.Link>Resume</Nav.Link>
                    <Nav.Link>Contact</Nav.Link>
                    <Nav.Link><img style={{height:"35px"}} id="github" src={github}></img></Nav.Link>
                    <Nav.Link><img style={{height:"30px", marginLeft:"15px"}} id="linkedIn" src={linkedIn}></img></Nav.Link>
                </Nav>
            </Navbar.Collapse>
    </Navbar>
    )
}

{/* <ul id="navList" className="navbar-nav me-auto mb-2 mb-lg-0">
<li className="nav-item">
    <a className="nav-link">About</a>
</li>
<li className="nav-item">
    <a className="nav-link">Projects</a>
</li>
<li className="nav-item">
    <a className="nav-link">Contact</a>
</li>
<li className="nav-item">
    <a className="nav-link">Resume</a>
</li>
</ul> */}