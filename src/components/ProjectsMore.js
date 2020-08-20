import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function ProjectsMore() {
    return(
        <div className="projects-more-container">
            <Nav/>
            <div className="projects-more-content">
                {/* <h2 className="projects-more-heading">Projects</h2> */}
                <p className="projects-more-para">Click on a project for more details. Hope you enjoy!</p>
                <div className="projects-more">
                    <div className="projects-more-info">
                    <Link to="/heart">
                        <img
                            className="project-more-img" 
                            src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2FProfile%20Couplely.png?v=1595274007785"
                            alt="hearttaken website" 
                        />
                    </Link>
                        <h2 className="project-more-title">HeartTaken</h2>
                    </div>
                    <div className="projects-more-info">
                    <Link to="/pound">
                        <img
                            className="project-more-img" 
                            src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2FLanding%20FINAL%20component.png?v=1595264619244"
                            alt="codepound website" 
                        />
                    </Link>
                        <h2 className="project-more-title">Codepound</h2>                        
                    </div>
                    <div className="projects-more-info">
                    <Link to="/family">
                        <img
                            className="project-more-img" 
                            src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2FSDD.png?v=1597081124404"
                            alt="Software design document" 
                        />
                    </Link>
                        <h2 className="project-more-title">SDD Family Finance</h2>                        
                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ProjectsMore;