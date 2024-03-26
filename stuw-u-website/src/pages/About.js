import React, { useEffect, useState } from "react";
import download from "../assets/download-icon.png";

const questionStyle = {
    fontSize: "15px",
    color: "darkgray"
};

const whiteTextStyle = {
    color: "white"
};

const whiteTextStyleUnderline = {
    color: "white",
    textDecoration: "underline"
};

const centerTextStyle = {
    textAlign: "center"
}

export default function About () {
    const downloadPDF = () => {
        // Replace 'assets/resume.pdf' with the correct path to your PDF file
        window.open("https://github.com/stuw-u/stuw-u.github.io/blob/development/Resume%20v4.pdf");
    }

    useEffect(() => {
        const gradient = document.getElementById('follow-cursor');
        var reveals = document.querySelectorAll(".tag");
        
        window.addEventListener("scroll", () => {
            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 0;
            
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                } else {
                    reveals[i].classList.remove("active");
                }
            }
        });

        document.addEventListener('mousemove', (event) => {
            const rect = gradient.getBoundingClientRect();
            const mouseX = (event.clientX - rect.left) / rect.width * 100;
            const mouseY = (event.clientY - rect.top) / rect.height * 100;
        
            gradient.style.background = 
            `radial-gradient(circle 200px at ${mouseX}% ${mouseY}%, #111F, #05050500)`;
        });
    });

    return (
        <>
            <p>My name is</p>
            <p className="title">Antonin<br />Francoeur</p>
            <p>Software Developer, Game Developer<br />& Technical Artist.</p>

            <div className="content-box-1">
                <p style={questionStyle}>When did you start?</p>
                <p>I started toying with computers around 2015 and I've been making projects & games ever since.</p>
            </div>

            <div className="content-box-2">
                <p style={questionStyle}>What are your strengths?</p>
                <p>I am a generalist, with a strength in anything that bridges my passion for art & code. I make the two meet to achieve both performance and full creative control.</p>
            </div>

            <div className="content-box-1">
                <p style={questionStyle}>What is your experience?</p>
                <p>I have 9 years of personal experience, with 2 years of professional experience working at <a style={whiteTextStyleUnderline} href="https://propelvr.ca/">PropelVR</a> for clients such as Lockheed-Martin, Praticare, and the University of Ottawa.</p>
            </div>

            <div className="content-tags">
                <p style={questionStyle}>Languages</p>
                <div className="tags">
                    <p className="tag">C#</p>
                    <p className="tag">C++</p>
                    <p className="tag">Java</p>
                    <p className="tag">Python</p>
                    <p className="tag">HLSL</p>
                    <p className="tag">GLSL</p>
                    <p className="tag">JS</p>
                    <p className="tag">PHP</p>
                    <p className="tag">Rust</p>
                    <p className="tag">Go</p>
                </div>
            </div>

            <div className="content-tags">
                <p style={questionStyle}>Technologies / Tools</p>
                <div className="tags">
                    <p className="tag">Unity</p>
                    <p className="tag">Unreal</p>
                    <p className="tag">Renderdoc</p>
                    <p className="tag">DirectX</p>
                    <p className="tag">VR</p>
                    <p className="tag">Quest 2</p>
                    <p className="tag">Xcode</p>
                    <p className="tag">Godot</p>
                    <p className="tag">React</p>
                    <p className="tag">Blender</p>
                    <p className="tag">Substance painter</p>
                </div>
            </div>

            <div className="content-tags">
                <p style={questionStyle}>Strengths</p>
                <div className="tags">
                    <p className="tag">Gameplay programming</p>
                    <p className="tag">Technical art</p>
                    <p className="tag">Procedural geometry</p>
                    <p className="tag">Terrain systems</p>
                    <p className="tag">Shaders</p>
                    <p className="tag">Compute shaders</p>
                    <p className="tag">Rendering systems</p>
                    <p className="tag">Engine-adjacent systems</p>
                    <p className="tag">Path-finding</p>
                    <p className="tag">Physics</p>
                    <p className="tag">Net-code</p>
                    <p className="tag">Networking</p>
                    <p className="tag">Optimising hot systems</p>
                    <p className="tag">Multithreading</p>
                    <p className="tag">ECS</p>
                    <p className="tag">Jobs Systems</p>
                </div>
            </div>

            <div className="content-resume" id="follow-cursor" onClick={downloadPDF}>
                <h2 style={centerTextStyle}>Grab a copy of my resume.</h2>
                <img src={download} className="download-btn" alt="About" draggable="false"/>
            </div>
        </>
    );
}
