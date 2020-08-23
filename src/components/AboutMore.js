import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

function AboutMore() {
    return(
        <div className="about-more-container">
            <Nav/>
            <div className="about-more-content">
                <div className="about-more">
                    <img
                        className="about-more-img"
                        src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2FBen%20Squared.png?v=1597181570543"
                        alt="Smiling Developer"
                    
                    />
                    <div className="btn-column">
                        <div className="btn-content">
                            <button className="learn-more-about-more-btn">Professional Life</button>
                        </div>
                        <div className="btn-content">
                        <button className="learn-more-about-more-btn">Personal Life</button>
                        </div>
                    <a href="./doc/Benjamin Doggett Technical Resume.docx" download>
                        <button className="learn-more-about-more-btn">Download Resume</button>
                    </a>
                    </div>
                </div>
            </div>
        <Footer/>
        </div>
    )
}

export default AboutMore;