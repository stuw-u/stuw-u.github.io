import React from 'react';
import about from '../assets/about.png';
import projects from '../assets/projects.png';
import articles from '../assets/articles.png';
import gallery from "../assets/gallery.png"
import contact from "../assets/contact.png"
import icon from "../assets/icon.png";

export default function NavigationBar() {
    return (
        <div className="top-bar">
            <div className="logo">
                <img src={icon} className="nav-btn" alt="Logo" draggable="false"/>
            </div>
            <div className="menu">
                <a href='/#/about' target='_self'><img src={about} className="nav-btn" alt="About" draggable="false"/></a>
                <a href='/#/projects' target='_self'><img src={projects} className="nav-btn" alt="Projects" draggable="false"/></a>
                <a href='/#/articles' target='_self'><img src={articles} className="nav-btn" alt="Articles" draggable="false"/></a>
                <a href='/#/gallery' target='_self'><img src={gallery} className="nav-btn" alt="Gallery" draggable="false"/></a>
                <a href='/#/contact' target='_self'><img src={contact} className="nav-btn" alt="Contact" draggable="false"/></a>
            </div>
        </div>
    );
}