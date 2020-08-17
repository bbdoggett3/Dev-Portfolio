import React from 'react';
import Footer from './Footer';
import Nav from './Nav';

function ContactMore() {
    return(
        <div className="contact-more-container">
            <Nav/>
            <h2 className="contact-more-heading">Contact</h2>
            <div className="contact-more-page">
                <div className="contact-more-general-section">
                    <p className="contact-more-info">If you have any questions regarding my technical experience, projects, or would just like to get to know me better. Please reach out to me by filling in the form on your right. Can’t wait to meet you!</p>
                    <img
                        className="contact-more-img"
                        src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2FFlying-Mail-Black-Icon.png?v=1597683299097"
                        alt="flyinf paper airplane"
                    
                    />
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
                    <button className="more-submit-btn">Submit</button>
                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default ContactMore;