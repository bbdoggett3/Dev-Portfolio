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
                                alt="Me profile"
                            />
                    <a href="https://drive.google.com/file/d/1NvtrHyQR2nSpaZx2KEq4cjQLPls5XtFB/view?usp=sharing"
                    target="_blank" rel="noopener noreferrer">
                        <button className="learn-more-about-more-btn">View Resume</button>
                    </a>
                    </div>
                    </div>
                </div>
                    <div className= {`${showProfessional ? "about-open" : "about-closed"}`}>
                         <div className="about-open-container">
                            <img
                                className="about-open-img"
                                src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2FBen%20Squared.png?v=1597181570543"
                                alt="family profile"
                                />
                            <p className="about-open-para">My name is Benjamin Doggett, I recently graduated from DevMountain as a certified Full stack web developer, & Brigham Young University- Idaho with a Bachelors's degree in Software Engineering. I have high hopes to further that degree/skills with industry experience along with self-taught applications of new technologies. I'm a Proven leader with more than 8 years’ experience in managerial roles, administration, training, and facilitating demands/ goals. A results-oriented, hardworking, resourceful leader with the ability to manage in a diverse environment. Experienced in balancing the needs of the individual and company demands. Skilled communicator and trainer. Proficient at flexing and bending with change. Excels in a team environment, as well as hiring and building team relationships to accomplish organizational programming objectives and goals.</p>
                         </div>
                    </div>
                    <div className= {`${showPersonal ? "about-open" : "about-closed"}`}>
                         <div className="about-open-container">
                            <img
                                // className="about-open-img"
                                src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2FBen%20and%20Liv%20family%202020.jpg?v=1598390437998"
                                alt="Resume Icon"
                                />
                            <p className="about-open-para">My name is Benjamin Doggett, I recently graduated from DevMountain as a certified Full stack web developer, & Brigham Young University- Idaho with a Bachelors's degree in Software Engineering. I have high hopes to further that degree/skills with industry experience along with self-taught applications of new technologies. I'm a Proven leader with more than 8 years’ experience in managerial roles, administration, training, and facilitating demands/ goals. A results-oriented, hardworking, resourceful leader with the ability to manage in a diverse environment. Experienced in balancing the needs of the individual and company demands. Skilled communicator and trainer. Proficient at flexing and bending with change. Excels in a team environment, as well as hiring and building team relationships to accomplish organizational programming objectives and goals.</p>
                         </div>
                    </div>
                            <img
                                className="about-img"
                                src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2FFlaming%20March%20Trans.png?v=1598465023795"
                                alt="marshmellow on fire"
                            />
            </div>
        <Footer/>
        {/* Icons made by <a href="https://icon54.com/" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>  */}
        </div>
    )
}

export default AboutMore;

