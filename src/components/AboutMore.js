import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

function AboutMore() {
    return(
        <div className="about-more-container">
            <Nav/>
            <div className="about-more-content">
                <div className="about-more">
                    <div className="btn-column">

                        <div className="btn-content">
                            <img
                                className="about-more-img"
                                src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fpro%20person.png?v=1598151002045"
                                alt="business casual developer"
                                />
                            <button className="learn-more-about-more-btn">Professional Life</button>
                        </div>
                        <div className="btn-content">
                            <img
                                className="about-more-img"
                                src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fperson.png?v=1598150993930"
                                alt="Casual dressed developer"
                            />
                        <button className="learn-more-about-more-btn">Personal Life</button>
                        </div>
                        <div className="btn-content">
                        {/* Icons made by <a href="https://icon54.com/" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>  */}
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
            </div>
        <Footer/>
        </div>
    )
}

export default AboutMore;