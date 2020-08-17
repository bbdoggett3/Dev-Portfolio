import React from 'react';
import { Link } from 'react-router-dom'; 

function Footer() {
    return(
        <div className="footer-container">
            <div className="footer-content">
                <p className="dev-copyright">&#169;2020 Benjamin Doggett Dev Portfolio</p>
                <ul className="footer-nav-list">
                    <li className="list-item-break">|</li>
                    <Link style={{ textDecoration: "none", color: "#faf9ed" }} to="/skillsMore"> 
                        <li className="footer-list-item">Skills</li>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "#faf9ed" }} to="/skillsMore">
                        <li className="footer-list-item">Projects</li>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "#faf9ed" }} to="/skillsMore">
                        <li className="footer-list-item">About</li>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "#faf9ed" }} to="/contactMore">
                        <li className="footer-list-item">Contact</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Footer;