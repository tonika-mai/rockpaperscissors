import React from "react";
import '../styles/AI.css';
import Choice from "./Choice"
import Wait from "./Wait";
import Done from "../imgs/done.png";
import Trophy from "../imgs/trophy.png";
import Robot from "../imgs/robot.png";
import Tie from "../imgs/tie.png";

export default function AI(props) {
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
        renderThis = <img className="playerLoses playerStatus" src={Robot} alt="This player lost" />;
    } else if (props.move) {
        renderThis = <img className="playerReady playerStatus" src={Done} alt="Player ready" />;
    } else if (props.counterMove) {
        renderThis = <Wait setMove={props.setMove} />;
    } else {
        renderThis = <Choice type={props.type} />;
    };

    return (
        <div className="playerSection" id={props.number}>
            <h1 className="playerTitle">AI</h1>
            {renderThis}
            <div className="scoreContainer">
                <h2>Your score: <br /> {props.score}</h2>
            </div>
        </div>
    )
};