import React from 'react';
import Nav from './Nav';
import Skills from './Skills';
// import Projects from './Projects';
// import About from './About';
// import Contact from './Contact';
import Footer from './Footer';
import { Link } from 'react-router-dom'; 

function Welcome() {
    return(
        <div>
            <Nav/>
            <div className="welcome-container">
                <div className="welcome-content">
                    <h2 className="welcome-header">Hello World! My name is Benjamin Doggett</h2>
                    <p className="welcome-text">Web Developer / Software Engineer / UX-Designer</p>
                    <div className="social-media-links">
                        <a href="https://github.com/bbdoggett3" target="_blank" rel="noopener noreferrer">
                            <img
                                className="welcome-icon-image" 
                                src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fgithub-153-675523.png?v=1596049618612" 
                                alt="github icon"
                            />
                        </a>

                        <a href="https://www.linkedin.com/in/benjamin-doggett/" target="_blank" rel="noopener noreferrer">
                            <img
                                className="welcome-icon-image-linkedin" 
                                src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Flinkedin-32-114604.png?v=1596049859369" 
                                alt="linkedIn icon"
                            />
                        </a>

                        <a href="https://www.facebook.com/ben.doggett.12/" target="_blank" rel="noopener noreferrer">
                            <img
                                className="welcome-icon-image" 
                                src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Ffacebook%20black.png?v=1596050184365" 
                                alt="Facebook icon"
                            />
                        </a>
                    </div>
                    <Link to="/contactMore">
                            <button className="welcome-btn">Contact</button>
                    </Link>
                    <a href="./doc/Benjamin Doggett Technical Resume.docx" download>
                    <button className="learn-more-about-more-btn">Download Resume</button>
                </a>

                </div>
                    <img
                        className="welcome-profile-image" 
                        src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2FBob%20tran.png?v=1597085547572" 
                        alt="profile of Developer"
                    />
            </div>
            <Skills/>
            <Footer />
        </div>
    )
}

export default Welcome;