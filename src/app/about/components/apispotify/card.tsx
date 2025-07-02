// "use client"
// import React, { useEffect, useState } from "react";
// // import PlayingAnimation from "./animation";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faSpotify } from "@fortawesome/free-brands-svg-icons";
// // import { CodepenIcon, WebhookIcon } from "./icons";
// // import Image from "next/image";
import getNowPlayingItem from "./fetch";

export default function Card() {
   (async () => {
     const song = await getNowPlayingItem();
     if (song) {
       console.log("Currently Playing:", song);
     } else {
       console.log("No song is currently playing.");
     }
   })();

    return (
      <div>

      </div>
    );
};

