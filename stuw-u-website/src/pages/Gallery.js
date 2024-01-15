import React from "react";
import kaiba from "../gallery/kaiba.mp4"
import evil from "../gallery/evil.mp4"
import pve from "../gallery/pve.mp4"
import creature from "../gallery/creaturepit.mp4"
import bug from "../gallery/bug.jpg"
import angel from "../gallery/angel.jpg"
import ai from "../gallery/ai.jpg"
import goobert from "../gallery/goobert.jpg"
import spike from "../gallery/spike.jpg"
import color from "../gallery/color.jpg"

export default function Gallery () {
    return (
        <>
            <p className="title">Gallery.</p>
            <p>Here are some of my art pieces I've made over the years. I do both physical and digital painting, 3D modeling and some pixel art.</p>

            <div className="gallery">
                <a href="https://www.instagram.com/reel/C1G1qBgO35c/"><div className="gallery-item">
                    <video autoPlay loop muted>
                        <source src={kaiba} type="video/mp4" />
                    </video>
                </div></a>
                <a href="https://www.instagram.com/p/C0IymFCM9jV/"><div className="gallery-item">
                    <img src={bug} />
                </div></a>
                <a href="https://www.instagram.com/p/Cy-TurWu2zT/"><div className="gallery-item">
                    <img src={angel} />
                </div></a>
                <a href="https://www.instagram.com/p/CxebArwsyl3/"><div className="gallery-item">
                    <img src={ai} />
                </div></a>
                <a href="https://www.instagram.com/p/CwgtdQOI7Id/"><div className="gallery-item">
                    <video autoPlay loop muted>
                        <source src={evil} type="video/mp4" />
                    </video>
                </div></a>
                <a href="https://www.instagram.com/p/CwdxGtbuuMO/?img_index=1"><div className="gallery-item">
                    <img src={goobert} />
                </div></a>
                <a href="https://www.instagram.com/p/CwI9kYUvenm/"><div className="gallery-item">
                    <img src={spike} />
                </div></a>
                <a href="https://www.instagram.com/p/CwGZiVrPIoH/"><div className="gallery-item">
                    <img src={color} />
                </div></a>
                <a href="https://www.instagram.com/p/CvxcMn7vFHc/"><div className="gallery-item">
                    <video autoPlay loop muted>
                        <source src={pve} type="video/mp4" />
                    </video>
                </div></a>
                <a href=""><div className="gallery-item">
                    <video autoPlay loop muted>
                        <source src={creature} type="video/mp4" />
                    </video>
                </div></a>
            </div>
        </>
    );
}