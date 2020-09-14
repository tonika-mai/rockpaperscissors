import React, { useEffect } from "react";
import Hourglass from "../imgs/hourglass.png"

export default function Wait(props) {
    function AIMove() {
        const moves = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * 3);
        props.setMove(moves[randomIndex]);
    };

    // COMPONENT DID MOUNT
    useEffect(() => {
        setTimeout(AIMove, 1000)
    }, []);

    return (
        <img className="AIThinks playerStatus" src={Hourglass} alt="AI is choosing its move" />
    )
};