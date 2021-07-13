import React from 'react';
import logo from '../../assets/logo.png'
import './Nav.css';

const Nav = () => {
    return (
        <div className = "nav-container">
            <div className = "nav-left">
                <img src={logo} alt="logo" className="flash-logo" />
                <p className="flash-logo-text">Typing Master</p>
            </div>
            {/* <div className="nav-right">
                <a
                    target = "_blank"
                    className = "nav-link-bio"
                    href = "https://youtube.com"
                    rel = "noreferrer"
                >
                    Rishi
                </a>
            </div> */}
        </div>
    )
}

export default Nav;