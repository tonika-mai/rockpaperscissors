import React from "react";
import '../styles/Player.css';

export default function Choice(props) {
    return (
        <div className={props.type === "AI" ? "choiceContainer choiceAI" : "choiceContainer"}>
            <h2>Choose:</h2>
            <button value="rock"
                onClick={props.handleClick}
                className="rockBtn"></button>
            <button value="paper"
                onClick={props.handleClick}
                className="paperBtn"></button>
            <button value="scissors"
                onClick={props.handleClick}
                className="scissorsBtn"></button>
        </div>
    )
};