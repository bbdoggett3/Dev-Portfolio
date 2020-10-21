import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

//This is the About page
function About() {
    return(
        <div className="about-container">
            <Nav/>
            <div className="about-content">
                
                <div className="about">
                    <img
                        className="about-img"
                        src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2FBen%20Squared.png?v=1597181570543"
                        alt="Smiling Developer"
                    
                    />
                    
                    <p className="about-info">Hi, my name is Benjamin Doggett. I am a Software Engineer who is passionate about creating fantastic, creative, and useful applications using my skills as an Engineer. The best part about coding is the opportunity to continually learn. I love coding.
When I’m not found coding, I enjoy spending a majority of my time with my family. My kids are my biggest accomplishment. I love consuming any type of media that has an engaging story this includes: Books, Movies, TV, Video Games, Podcasts, etc… I particularly love character development and the growth that the protagonists endure. It teaches me, real growth doesn’t come easily and thus we should embrace the conflicts of life to grow.
When I was a kid I wanted to be a cartoonist and still to this day enjoy drawing. I use my artistic itch with coding and designing. I feel so much satisfaction creating and developing works of art. 

                    </p>
                </div>
                <a href="https://drive.google.com/file/d/1NvtrHyQR2nSpaZx2KEq4cjQLPls5XtFB/view?usp=sharing"
                    target="_blank" rel="noopener noreferrer">
                <button className="learn-more-about-btn">View Resume</button>
                </a>
            </div>
        <Footer/>
        </div>
    )
}

export default About;

