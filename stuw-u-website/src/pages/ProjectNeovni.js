import React from "react";

export default function ProjectNeovni () {
    return (
        <>
            <p className="title">NEOVNI.</p>
            <p>This is a released iOS and Android app I made back in 2020. The project was published on the App Store with the help of a publisher (a friend from Korea). This was some kind of modern recreation of the Gamebuino game: UFO Racing, but with support for couch coop multiplayer. Each player gets one side of the screen. I can't update the app anymore but it was fun while it lasted.</p>

            <iframe style={{aspectRatio: "560/315", width: "100%"}}  src="https://www.youtube.com/embed/P3KK_wC4osE?si=WPSWy-pnH2MUHLyS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            <a href="https://apps.apple.com/us/app/neovni-duo-plus/id1506444176" style={{textDecoration : "underline"}}>App store link (Paid)</a>
            <p>Free version dissapeared, as well as the Google Play Store version.</p>
        </>
    );
}