import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

function Heart() {
    return(
        <div className="heart-container">
            <Nav/>
            <div className="heart-content-box">
                <div className="heart-landing">
                    <div className="heart-content">
                        <h1 className="heart-title">HeartTaken</h1>
                        <hr className="heart-line"/>
                        <p className="heart-basic-info">In today’s world there are so many dating applications that help you find that special someone, but what about an app to help strengthen that relationship once it has been established? I have decided to design an application called HeartTaken designed for those looking to strengthen their relationship, geared specifically towards married couples or those individuals dating. The application will give user simple ways to serve and love their significant other.</p>
                        <a href="https://github.com/bbdoggett3/HeartTaken" target="_blank" rel="noopener noreferrer">
                            <button className="heart-btn">View Site</button>
                        </a>
                        <a href="https://github.com/bbdoggett3/HeartTaken" target="_blank" rel="noopener noreferrer">
                            <button className="heart-btn">Github Repo</button>
                        </a>
                    </div>
                    <img
                            className="heart-project-img" 
                            src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2FProfile%20Couplely.png?v=1595274007785"
                            alt="hearttaken website" 
                        />
                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default Heart;