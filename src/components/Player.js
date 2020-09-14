import React from "react";
import '../styles/Player.css';
import Choice from "./Choice"
import Done from "../imgs/done.png";
import Trophy from "../imgs/trophy.png";
import Cry from "../imgs/cry.png";
import Tie from "../imgs/tie.png";

export default function Player(props) {
    let renderThis;

    if (props.winner == props.number) {
        renderThis = <img className="playerWins playerStatus" src={Trophy} alt="This player won" />;
    } else if (props.winner == 999) {
        renderThis =
            <div className="tieContainer">
                <h2>IT'S A TIE!</h2>
                <img className="tieRound playerStatus" src={Tie} alt="It's a tie" />
            </div>;
    } else if (props.winner != 0) {
        renderThis = <img className="playerLoses playerStatus" src={Cry} alt="This player lost" />;
    } else if (props.move) {
        renderThis = <img className="playerReady playerStatus" src={Done} alt="Player ready" />;
    } else {
        renderThis = <Choice handleClick={props.handleClick} />;
    };

    return (
        <div className="playerSection" id={props.number}>
            <h1 className="playerTitle">{props.playerName}</h1>
            {renderThis}
            <div className="scoreContainer">
                <h2>Your score: <br /> {props.score}</h2>
            </div>
        </div>
    )
};