import React from "react";
import outrPVEProject from "../assets/project-outerpve.png"
import outerblastProject from "../assets/project-outerblast.mp4"
import monkeyProject from "../assets/project-monkeyworms.mp4"
import haroldProject from "../assets/project-haroldvsplants.mp4"
import racingProject from "../assets/project-racinggame.mp4"
import neovniProject from "../assets/project-neovni.mp4"
import aquaticProject from "../assets/project-aquatic.mp4"
import scubaProject from "../assets/project-underpressure.png"
import salmonProject from "../assets/project-salmon.png"

export default function Projects () {
    return (
        <>
            <p className="title">My Projects.</p>
            <p>Here are a sample of the projects I've worked on over the years. Some of them have been abandonned or put on hold, but all of them have brought me unvaluable experience. </p>

            <div className="project-grid">
                <a href="/#/projects/pve" target='_self'><div className="project-grid-item">
                    <img src={outrPVEProject} alt="OUTR PVE Project" draggable="false" />
                    <span>PVE Project</span>
                </div></a>
                <a href="/#/projects/outerblast" target='_self'><div className="project-grid-item">
                    <video autoPlay loop muted>
                        <source src={outerblastProject} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <span>OUTERBLAST</span>
                </div></a>
                <a href="/#/projects/monkey" target='_self'><div className="project-grid-item">
                    <video autoPlay loop muted>
                        <source src={monkeyProject} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <span>Monkey Project</span>
                </div></a>
                <a href="/#/projects/harold" target='_self'><div className="project-grid-item">
                    <video autoPlay loop muted>
                        <source src={haroldProject} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <span>Harold vs Plants</span>
                </div></a>
                <a href="/#/projects/kart" target='_self'><div className="project-grid-item">
                    <video autoPlay loop muted>
                        <source src={racingProject} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <span>Kart Project</span>
                </div></a>
                <a href="/#/projects/neovni" target='_self'><div className="project-grid-item">
                    <video autoPlay loop muted>
                        <source src={neovniProject} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <span>NEOVNI</span>
                </div></a>
                <a href="/#/projects/aquatic" target='_self'><div className="project-grid-item">
                    <video autoPlay loop muted>
                        <source src={aquaticProject} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <span>Aquatic Project</span>
                </div></a>
                <a href="https://propelvr.ca/scuba-case-study"><div className="project-grid-item">
                    <img src={scubaProject} alt="Under Pressure" draggable="false" />
                    <span>Under Pressure</span>
                </div></a>
                <a href="/#/projects/shoalarcade" target='_self'><div className="project-grid-item">
                    <img src={salmonProject} alt="Salmon Run Fangame" draggable="false" />
                    <span>Shoal Arcade</span>
                </div></a>
            </div>
        </>
    );
}