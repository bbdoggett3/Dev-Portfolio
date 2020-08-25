import React, { useState } from 'react';
import Nav from './Nav';
import Footer from './Footer';

function AboutMore() {
    const [showProfessional, setShowProfessional] = useState(false);
    const [showPersonal, setShowPersonal] = useState(false);
    
    function toggleShowProfessional() {
         setShowProfessional(!showProfessional);
    }

    function toggleShowPersonal() {
         setShowPersonal(!showPersonal);
    }

    return(
        <div className="about-more-container">
            <Nav/>
            <div className="about-more-content">
                <div className="about-more">
                    <div className="btn-column">
                        {/* Professional */}
                        <div className="btn-content">
                            <img
                                className="about-more-img"
                                src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fpro%20person.png?v=1598151002045"
                                alt="business casual developer"
                                />
                            <button
                            onClick={() => toggleShowProfessional()}
                            className="learn-more-about-more-btn">Professional Life</button>
                        </div>

                        {/* Personal */}
                        <div className="btn-content">
                            <img
                                className="about-more-img"
                                src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fperson.png?v=1598150993930"
                                alt="Casual dressed developer"
                            />
                        <button 
                        onClick={() => toggleShowPersonal()}
                        className="learn-more-about-more-btn">Personal Life</button>
                        </div>
                        <div className="btn-content">
                            <img
                                className="about-more-img"
                                src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Ffile%20Icon.png?v=1598151288760"
                                alt="Resume Icon"
                            />
                    <a href="./doc/Benjamin Doggett Technical Resume.docx" download>
                        <button className="learn-more-about-more-btn">Download Resume</button>
                    </a>
                    </div>
                    </div>
                </div>
                    <div className= {`${showProfessional ? "about-open" : "about-closed"}`}>
                         <div className="about-open-container">
                            <img
                                className="about-open-img"
                                src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2FBen%20Squared.png?v=1597181570543"
                                alt="Resume Icon"
                                />
                            <p>This is Professional open</p>
                         </div>
                    </div>
                    <div className= {`${showPersonal ? "about-open" : "about-closed"}`}>
                         <div className="about-open-container">
                            <img
                                className="about-open-img"
                                src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2FBen%20and%20Liv%20family%202020.jpg?v=1598390437998"
                                alt="Resume Icon"
                                />
                            <p>This is Personal open</p>
                         </div>
                    </div>
            </div>
        <Footer/>
        {/* Icons made by <a href="https://icon54.com/" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>  */}
        </div>
    )
}

export default AboutMore;

