import React, { useState } from "react";

import Settings from "./Settings";
import Game from "./Game";
import EndGame from "./EndGame";

export default function Router() {
    const [settingsStatus, setSettingsStatus] = useState(false);

    const [input, setInput] = useState({
        mode: true,
        playerOne: 1,
        playerTwo: 2,
        rounds: 5,
    });

    const [gameStatus, setGameStatus] = useState({
        currentRound: 1,
        score1: 0,
        score2: 0,
        winnerID: 0
    });

    return (
        settingsStatus
            ?
            gameStatus.currentRound <= input.rounds
                ?
                <Game input={input}
                    gameStatus={gameStatus}
                    setGameStatus={setGameStatus}
                    setSettingsStatus={setSettingsStatus}
                />
                :
                <EndGame input={input}
                    gameStatus={gameStatus}
                    setGameStatus={setGameStatus}
                    setSettingsStatus={setSettingsStatus} />
            :
            <Settings
                settingsStatus={settingsStatus}
                setSettingsStatus={setSettingsStatus}
                input={input}
                setInput={setInput} />
    )
};