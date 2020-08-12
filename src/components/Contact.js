import React from 'react';

function Contact() {
    return(
        <div className="contact-container">
            <div className="contact-content">
                <h2 className="contact-heading">Contact</h2>
                <input
                    className="input-field"
                    type="text"
                    placeholder="Name"  
                />
                <input
                    className="input-field"
                    type="email"
                    placeholder="Email"  
                />
                <input
                    className="input-field"
                    type="email"
                    placeholder="Company"  
                />
                <textarea
                    className="text-box"
                    type="text"
                    placeholder="Addtional questions you might have for me..."
                />
                <button className="submit-btn">Submit</button>
            </div>
        </div>
    )
}

export default Contact;