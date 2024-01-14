import React, { useEffect, useState } from 'react';
import bgImage from '../assets/background.png';

const contentStyle = {
    background: `url(${bgImage})`,
    backgroundSize: "contain",
    backgroundRepeat: "repeat-y"
};

export default function Content ( props ) {
    useEffect(() => {
        const contentWrap = document.getElementById('content-wrap');
        const content = document.getElementsByClassName('content')[0];

        window.addEventListener("scroll", function() {
            const distance = window.scrollY * 0.65;
            content.style.backgroundPositionY = `${distance}px`;
        });

        document.addEventListener('mousemove', (event) => {
            const rect = contentWrap.getBoundingClientRect();
            const mouseX = (event.clientX - rect.left) / rect.width * 100;
            const mouseY = (event.clientY - rect.top) / rect.height * 100;
            contentWrap.style.background = 
            `radial-gradient(circle 800px at ${mouseX}% ${mouseY}%, #0008, #000F)`;
        });
    });


    return (
        <div className="content" style={contentStyle}>
            <div id="content-wrap">
                {props.children}
            </div>
        </div>
    );
}