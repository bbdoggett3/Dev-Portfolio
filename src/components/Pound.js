import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Pound() {
    return(
        <div className="heart-container">
            <Nav/>
            <div className="heart-content-box">
                <div className="heart-landing">
                    <div className="heart-content">
                        <h1 className="heart-title">CodePound</h1>
                        <hr className="heart-line"/>
                        <p className="heart-basic-info">A social media site geared toward developers and the ability for said developers to share the creative projects they have built throughout their careers. The CodePound is comparable to Instagram in sense of the post comment/ like of each project. However, not only does it allow developers to share projects, but receive feedback and or help on projects in order to better refine these projects for live hosting.</p>
                        <a href="http://www.thecodepound.com/" target="_blank" rel="noopener noreferrer">
                            <button className="heart-btn">View Site</button>
                        </a>
                        <a href="https://github.com/TheCodePound/TheCodePound" target="_blank" rel="noopener noreferrer">
                            <button className="heart-btn">Github Repo</button>
                        </a>
                        <Link style={{ textDecoration: "none", color: "blue" }} to="/projectsMore">
                            <img
                                className="back-arrow"
                                src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2FBack%20Arrow%20trans.png?v=1598462490345"
                                alt="cartoon back arrow"
                            />
                        </Link>
                    </div>
                    <img
                            className="heart-project-img" 
                            src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2FLanding%20FINAL%20component.png?v=1595264619244"
                            alt="hearttaken website" 
                        />
                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default Pound;