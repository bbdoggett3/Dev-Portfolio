import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

function AboutMore() {
    return(
        <div className="about-more-container">
            <Nav/>
            <div className="about-more-content">
                <h2 className="about-more-heading">About</h2>
                <div className="about-more">
                    <img
                        className="about-more-img"
                        src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2FBen%20Squared.png?v=1597181570543"
                        alt="Smiling Developer"
                    
                    />

                    <p className="about-more-info">My name is Benjamin Doggett, I recently graduated from DevMountain as a certified Full stack web developer, and Brigham Young University- Idaho with a Bachelors's degree in Software Engineering. I have high hopes to further that degree/skills with industry experience along with self-taught applications of new technologies. I'm a Proven leader with more than 8 years’ experience in managerial roles, administration, training, and facilitating demands/ goals. A results-oriented, hardworking, resourceful leader with the ability to manage in a diverse environment. Experienced in balancing the needs of the individual and company demands. Skilled communicator and trainer. Proficient at flexing and bending with change. Excels in a team environment, as well as hiring and building team relationships to accomplish organizational programming objectives and goals.
                    </p>
                </div>
            </div>
        <Footer/>
        </div>
    )
}

export default AboutMore;