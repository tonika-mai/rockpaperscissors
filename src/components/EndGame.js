import React from "react";
import "../styles/EndGame.css";

export default function EndGame(props) {
    function goToSettings() {
        props.setSettingsStatus(false);
        props.setGameStatus({
            currentRound: 1,
            score1: 0,
            score2: 0,
            winnerID: 0
        });
    };

    const gameWinner = function () {
        if (props.gameStatus.score1 === props.gameStatus.score2) {
            return "DRAW MATCH";
        } else if (props.gameStatus.score1 >= props.gameStatus.score2) {
            return props.input.playerOne;
        } else if (props.gameStatus.score2 >= props.gameStatus.score1 && props.input.mode) {
            return props.input.playerTwo;
        } else {
            return "AI";
        }
    };

    function finalScore(winner) {
        if (winner === "DRAW MATCH" || winner === props.input.playerOne) {
            return props.gameStatus.score1;
        } else {
            return props.gameStatus.score2;
        }
    };

    return (
        <main className="columnFlex statsContainer">
            <h1>STATISTICS</h1>
            <div>
                <h2>THE WINNER IS</h2>
                <p className="winnerStats">{gameWinner()}</p>
            </div>
            <div>
                <h2>SCORE</h2>
                <p>{finalScore(gameWinner())}</p>
            </div>
            <div>
                <h2>PLAYED ROUNDS</h2>
                <p>{props.input.rounds}</p>
            </div>
            <div>
                <h2>MODE</h2>
                <p>{props.input.mode ? "P1 vs. P2" : "P1 vs. AI"}</p>
            </div>
            <button className="initGame newGame" onClick={goToSettings}>NEW GAME</button>
        </main>

    )
};