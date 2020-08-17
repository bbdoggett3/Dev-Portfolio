import React from 'react';
import { Link } from 'react-router-dom'; 

function Nav() {
    return(
        <div className="nav-container">
            <ul className="nav-list">
                <Link style={{ textDecoration: "none", color: "#faf9ed" }} to="/skillsMore">
                    <li className="list-item">Skills</li>
                </Link>
                <li className="list-item-break">|</li>
                <li className="list-item">Projects</li>
                <li className="list-item-break">|</li>
                <li className="list-item">About</li>
                <li className="list-item-break">|</li>
                <li className="list-item">Contact</li>
            </ul>

        </div>
    )
}

export default Nav;