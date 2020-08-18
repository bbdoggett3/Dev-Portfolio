import React from 'react';
import { Link } from 'react-router-dom'; 

function Nav() {
    return(
        <div className="nav-container">
             <Link to="/">
                <img
                    className="nav-home-img" 
                    src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2FBob%20tran.png?v=1597085547572" 
                    alt="profile of Developer"
                />
             </Link>
            <ul className="nav-list">
                <Link style={{ textDecoration: "none", color: "#faf9ed" }} to="/skillsMore">
                    <li className="list-item">Skills</li>
                </Link>
                <li className="list-item-break">|</li>
                <li className="list-item">Projects</li>
                <li className="list-item-break">|</li>
                <li className="list-item">About</li>
                <li className="list-item-break">|</li>
                <Link style={{ textDecoration: "none", color: "#faf9ed" }} to="/contactMore">
                    <li className="list-item">Contact</li>
                </Link>
            </ul>

        </div>
    )
}

export default Nav;