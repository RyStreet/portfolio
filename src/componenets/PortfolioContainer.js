import Navigation from "./Navbar"
import About from "./About"
import Projects from "./Projects"
import Particle from "./Particles"
import Resume from "./Resume"


export default function PortfolioContainer(){
    return(
        <div>
            <Navigation/>
        
            
            <About/>
            <Projects/>
            <Resume/>
            
            
        </div>
    )
} 