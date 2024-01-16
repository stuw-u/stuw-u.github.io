import React, {useEffect} from 'react';
import about from '../assets/about.png';
import projects from '../assets/projects.png';
import articles from '../assets/articles.png';
import gallery from "../assets/gallery.png"
import contact from "../assets/contact.png"
import icon from "../assets/icon.png";
import menu from "../assets/menu.png";

export default function NavigationBar() {
    function turnMobileMenuOff () {
        var mobilePanel = document.getElementById('menu-mobile-panel');
        mobilePanel.style.display = "none";
    }
    function toggleMobileMenu () {
        var mobilePanel = document.getElementById('menu-mobile-panel');
        if(mobilePanel.style.display == "flex") {
            mobilePanel.style.display = "none";
        }
        else {
            mobilePanel.style.display = "flex";
        }
    }

    return (
        <>
        
            <div className="top-bar">
                <div className="logo">
                    <a href='/#/about' target='_self'><img src={icon} className="nav-btn" alt="Logo" draggable="false"/></a>
                </div>
                <div className="menu-desktop">
                    <a href='/#/about' target='_self'><img src={about} className="nav-btn" alt="About" draggable="false"/></a>
                    <a href='/#/projects' target='_self'><img src={projects} className="nav-btn" alt="Projects" draggable="false"/></a>
                    <a href='/#/articles' target='_self'><img src={articles} className="nav-btn" alt="Articles" draggable="false"/></a>
                    <a href='/#/gallery' target='_self'><img src={gallery} className="nav-btn" alt="Gallery" draggable="false"/></a>
                    <a href='/#/contact' target='_self'><img src={contact} className="nav-btn" alt="Contact" draggable="false"/></a>
                </div>
                <div className="menu-mobile">
                    <img src={menu} className="nav-btn" alt="About" draggable="false" onClick={toggleMobileMenu}/>
                </div>
            </div>

            <div id="menu-mobile-panel">
                <a href='/#/about' target='_self'><img src={about} className="nav-btn" alt="About" draggable="false" onClick={turnMobileMenuOff}/></a>
                <a href='/#/projects' target='_self'><img src={projects} className="nav-btn" alt="Projects" draggable="false" onClick={turnMobileMenuOff}/></a>
                <a href='/#/articles' target='_self'><img src={articles} className="nav-btn" alt="Articles" draggable="false" onClick={turnMobileMenuOff}/></a>
                <a href='/#/gallery' target='_self'><img src={gallery} className="nav-btn" alt="Gallery" draggable="false" onClick={turnMobileMenuOff}/></a>
                <a href='/#/contact' target='_self'><img src={contact} className="nav-btn" alt="Contact" draggable="false" onClick={turnMobileMenuOff}/></a>
            </div>

        </>
    );
}