import React from 'react';
import { Link } from 'react-router-dom'; 

function Projects() {
    return(
        <div className="projects-container">
            <div className="projects-content">
                <h2 className="projects-heading">Projects</h2>
                <div className="projects">
                    <div className="projects-info">
                        <img
                            className="project-img" 
                            src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2FProfile%20Couplely.png?v=1595274007785"
                            alt="hearttaken website" 
                        />
                        <h2 className="project-title">HeartTaken</h2>
                    </div>
                    <div className="projects-info">
                        <img
                            className="project-img" 
                            src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2FLanding%20FINAL%20component.png?v=1595264619244"
                            alt="codepound website" 
                        />
                        <h2 className="project-title">Codepound</h2>                        
                    </div>
                    <div className="projects-info">
                        <img
                            className="project-img" 
                            src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2FSDD.png?v=1597081124404"
                            alt="Software design document" 
                        />
                        <h2 className="project-title">SDD Family Finance</h2>                        
                    </div>

                </div>
                <Link style={{ textDecoration: "none", color: "#faf9ed" }} to="/projectsMore">
                    <button className="learn-btn">Learn More</button>
                </Link>
            </div>
        </div>
    )
}

export default Projects;