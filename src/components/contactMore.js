import React, { useState } from 'react';
import Footer from './Footer';
import Nav from './Nav';
import Recaptcha from 'react-recaptcha';

function ContactMore() {
    
    const [isVerified, setIsVerified] = useState(false) 

    function handleSubmit() {
        if (isVerified) {
          alert("You have successfully submitted!")
        } else {
          alert("Please verify that you are a human!")
        }
      }
    
    function recaptchaLoaded() {
        console.log("capcha successfully loaded")
      }
    
    function verifyCallback(response) {
        if(response) {
          setIsVerified(true)
        }
      }

    return(
        <div className="contact-more-container">
            <Nav/>
            <h2 className="contact-more-heading">Contact</h2>
            <div className="contact-more-page">
                <div className="contact-more-general-section">
                    <p className="contact-more-info">If you have any questions regarding my technical experience, projects, or would just like to get to know me better. Please reach out to me by filling in the form on your right, or clicking the social media links below. Can’t wait to meet you!</p>
                    <img
                        className="contact-more-img"
                        src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2FFlying-Mail-Black-Icon.png?v=1597683299097"
                        alt="flyinf paper airplane"
                    
                    />
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
                </div>

                <div className="contact-more-content">
                    <p className="contact-more-please">*Please fill out the information below, thank you!</p>
                    <input
                        className="more-input-field"
                        type="text"
                        placeholder="Name"  
                    />
                    <input
                        className="more-input-field"
                        type="email"
                        placeholder="Email"  
                    />
                    <input
                        className="more-input-field"
                        type="email"
                        placeholder="Company"  
                    />
                    <textarea
                        className="more-text-box"
                        type="text"
                        placeholder="Addtional questions you might have for me..."
                    />
                    <Recaptcha
                        sitekey="6LcjHcAZAAAAAHry99oxKYIi_RDGnmbEK7MhSjCK"
                        render="explicit"
                        onloadCallback={recaptchaLoaded}
                        verifyCallback={verifyCallback}
                        // theme="dark"
                     />
                    <button className="more-submit-btn" onClick={handleSubmit}>Submit</button>
                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default ContactMore;