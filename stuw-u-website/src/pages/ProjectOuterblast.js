import React from "react";

export default function ProjectOuterblast () {
    return (
        <>
            <p className="title">OUTRBLAST</p>
            <p>is a highly explosive multiplayer party game set on a destructible flying island. Blast others, and even yourself, to win. The goal: push your friends off the island!</p>
            <p>This is only a demo, and the netcode is still pretty janky due to the relay server I am using and the fact that this was my first multiplayer game. You can check it out on Itch.io or the Itch app. </p>
            
            <iframe style={{aspectRatio: "560/315", width: "100%"}}  src="https://www.youtube.com/embed/PqCJsiyogTg?si=iiErJJjWpji21j2c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            
            <a href="https://stuwustudio.itch.io/outerblast" style={{textDecoration : "underline"}}><br />Try it out with friends!</a>
        </>
    );
}