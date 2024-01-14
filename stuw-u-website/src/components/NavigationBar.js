import React from 'react';
import about from './assets/about.png';
import projects from './assets/projects.png';
import articles from './assets/articles.png';
import gallery from "./assets/gallery.png"
import contact from "./assets/contact.png"
import icon from "./assets/icon.png";

function NavigationBar() {
    return (
        <div className="top-bar">
            <div className="logo">
                <img src={icon} className="nav-btn" alt="Logo" draggable="false"/>
            </div>
            <div className="menu">
                <img src={about} className="nav-btn" alt="About" draggable="false"/>
                <img src={projects} className="nav-btn" alt="Projects" draggable="false"/>
                <img src={articles} className="nav-btn" alt="Articles" draggable="false"/>
                <img src={gallery} className="nav-btn" alt="Gallery" draggable="false"/>
                <img src={contact} className="nav-btn" alt="Contact" draggable="false"/>
            </div>
        </div>
    );
}

export default NavigationBar;