import React from "react";
import linkedinIcon from '../assets/linkedin-icon.png';
import githubIcon from '../assets/github-icon.png';
import instagramIcon from '../assets/instagram-icon.png';
import mailIcon from '../assets/mail-icon.png';


export default function Footer () {
    return (
        <footer>
            <div className="footer-icons">
                <a href="https://www.linkedin.com/in/antonin-francoeur-462775220/"><img src={linkedinIcon} alt="LinkedIn"/></a>
                <a href="https://github.com/stuw-u/"><img src={githubIcon} alt="Github"/></a>
                <a href="https://www.instagram.com/anto.francoeur/"><img src={instagramIcon} alt="Instagram"/></a>
                <a href="mailto:antoninfrancoeur@gmail.com"><img src={mailIcon} alt="Mail"/></a>
            </div>
            
            <p>Antonin Francoeur © 2024</p>
        </footer>
    );
}