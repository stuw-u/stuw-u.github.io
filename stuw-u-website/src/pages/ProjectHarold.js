import React from "react";

export default function ProjectHarold () {
    return (
        <>
            <p className="title">Harold vs Plants.</p>
            <p>This was made for the uOttawa June Jam 2023: Nature Strikes Back!</p>
            <p>I am actually pretty proud of this. The project was inspired by Super Crate Box. It is some kind of 3D adaptation in some way. I tried to focus on polish and depth more than breadth. The game's very challenging, but very fun!</p>

            <iframe style={{aspectRatio: "560/315", width: "100%"}} src="https://www.youtube.com/embed/Yjj6nMXXrmo?si=KGkEP5LHEWHXk-ou" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            <a href="https://stuwustudio.itch.io/plants-vs-a-guy" style={{textDecoration : "underline"}}><br />Try it out now!</a>
        </>
    );
}