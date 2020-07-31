import React from 'react';

function Welcome() {
    return(
        <div className="welcome-container">
            <div className="welcome-content">
                <img
                    className="welcome-profile-image" 
                    src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fme.jpg?v=1569425179160" 
                    alt="profile of Developer"
                />
                <h2 className="welcome-header">Hello World! My name is Benjamin Doggett</h2>
                <p className="welcome-text">I am a Full-Stack Web Developer / Software Engineer / UX-Designer</p>
                <div className="social-media-links">
                <img
                    className="welcome-icon-image" 
                    src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fgithub-153-675523.png?v=1596049618612" 
                    alt="github icon"
                />
                <img
                    className="welcome-icon-image-linkedin" 
                    src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Flinkedin-32-114604.png?v=1596049859369" 
                    alt="linkedIn icon"
                />
                <img
                    className="welcome-icon-image" 
                    src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Ffacebook%20black.png?v=1596050184365" 
                    alt="Facebook icon"
                />
                
                </div>
                <button className="welcome-btn">Contact</button>

            </div>

        </div>
    )
}

export default Welcome;