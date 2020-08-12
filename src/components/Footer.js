import React from 'react';

function Footer() {
    return(
        <div className="footer-container">
            <div className="footer-content">
                <p className="dev-copyright">&#169;2020 Benjamin Doggett Dev</p>
                <ul className="nav-list">
                    <li className="list-item">Skills</li>
                    <li className="list-item-break">|</li>
                    <li className="list-item">Projects</li>
                    <li className="list-item-break">|</li>
                    <li className="list-item">About</li>
                    <li className="list-item-break">|</li>
                    <li className="list-item">Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;