import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Family() {
    return(
        <div className="heart-container">
            <Nav/>
            <div className="heart-content-box">
                <div className="heart-landing">
                    <div className="heart-content">
                        <h1 className="heart-title">Family Finance</h1>
                        <hr className="heart-line"/>
                        <p className="heart-basic-info">In today’s world there are so many dating applications that help you find that special someone, but what about an app to help strengthen that relationship once it has been established? I have decided to design an application called HeartTaken designed for those looking to strengthen their relationship, geared specifically towards married couples or those individuals dating. The application will give user simple ways to serve and love their significant other.</p>
                        <a href="https://drive.google.com/file/d/1DS84ZJL4jH40gifNiyr4dZqoF7L6Kx_A/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <button className="heart-btn">View Document</button>
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
                            src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2FSDD.png?v=1597081124404"
                            alt="Family Finance SDD" 
                        />
                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default Family;