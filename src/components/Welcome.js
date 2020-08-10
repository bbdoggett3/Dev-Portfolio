import React from 'react';

function Welcome() {
    return(
        <div className="welcome-container">
            <div className="welcome-content">
                <h2 className="welcome-header">Hello World! My name is Benjamin Doggett</h2>
                <p className="welcome-text">Web Developer / Software Engineer / UX-Designer</p>
                <div className="social-media-links">
                    <a href="https://github.com/bbdoggett3">
                        <img
                            className="welcome-icon-image" 
                            src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fgithub-153-675523.png?v=1596049618612" 
                            alt="github icon"
                        />
                    </a>

                    <a href="https://www.linkedin.com/in/benjamin-doggett/">
                        <img
                            className="welcome-icon-image-linkedin" 
                            src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Flinkedin-32-114604.png?v=1596049859369" 
                            alt="linkedIn icon"
                        />
                    </a>

                    <a href="https://www.facebook.com/ben.doggett.12/">
                        <img
                            className="welcome-icon-image" 
                            src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Ffacebook%20black.png?v=1596050184365" 
                            alt="Facebook icon"
                        />
                    </a>
                </div>
                <button className="welcome-btn">Contact</button>

            </div>
                <img
                    className="welcome-profile-image" 
                    src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2FBob%20tran.png?v=1597085547572" 
                    alt="profile of Developer"
                />
        </div>
    )
}

export default Welcome;