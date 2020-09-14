import React, { useState } from 'react';
import '../styles/Game.css';

import Player from "./Player";
import AI from "./AI";

export default function Game(props) {
  const [currentMove1, setCurrentMove1] = useState("");
  const [currentMove2, setCurrentMove2] = useState("");


  // SAVING CURRENT MOVE
  function registerMove(event) {
    const playerID = event.target.parentNode.parentNode.id;
    const move = event.target.value;
    playerID == 1 ? setCurrentMove1(move) : setCurrentMove2(move);
  };

  // UI WINNER
  function displayWinner(winnerID) {
    const winner = document.getElementById(winnerID);
    winner.classList.toggle("winner");
    winner.firstChild.textContent = "WINNER!";
  };

  // UI READY FOR NEW ROUND
  function resetRound() {
    const winner = document.getElementById(props.gameStatus.winnerID);
    if (winner) {   // EXCLUDING TIE SCENARIO
      winner.classList.toggle("winner");
      // RESETTING PLAYER TITLE
      let title;
      if (props.gameStatus.winnerID == 1) {
        title = props.input.playerOne;
      } else if (props.gameStatus.winnerID == 2 && props.input.mode) {
        title = props.input.playerTwo;
      } else if (props.gameStatus.winnerID == 2 && !props.input.mode) {
        title = "AI";
      }
      winner.firstChild.textContent = title;
    }

    props.setGameStatus({
      ...props.gameStatus,
      winnerID: 0,
      currentRound: props.gameStatus.currentRound + 1
    });
  };

  function setWinnerOne() {
    props.setGameStatus({
      ...props.gameStatus,
      winnerID: 1,
      score1: props.gameStatus.score1 + 1
    });
    displayWinner(1);
  };

  function setWinnerTwo() {
    props.setGameStatus({
      ...props.gameStatus,
      winnerID: 2,
      score2: props.gameStatus.score2 + 1
    });
    displayWinner(2);
  };

  // WIN LOGIC, SETTING SCORES & RESETTING MOVES
  function checkWinner() {
    if (currentMove1 === currentMove2) {
      props.setGameStatus({
        ...props.gameStatus,
        winnerID: 999,
      });
    } else if (currentMove1 === "rock") {
      if (currentMove2 === "scissors") {
        setWinnerOne();
      } else if (currentMove2 === "paper") {
        setWinnerTwo();
      }
    } else if (currentMove1 === "paper") {
      if (currentMove2 === "scissors") {
        setWinnerTwo();
      } else if (currentMove2 === "rock") {
        setWinnerOne();
      }
    } else if (currentMove1 === "scissors") {
      if (currentMove2 === "rock") {
        setWinnerTwo();
      } else if (currentMove2 === "paper") {
        setWinnerOne();
      }
    };

    setCurrentMove1("");
    setCurrentMove2("");
  };

  function quitGame() {
    props.setSettingsStatus(false);
    props.setGameStatus({
      currentRound: 1,
      score1: 0,
      score2: 0,
      winnerID: 0
    });
  };

  return (
    <main>
      <button className="powerOffBtn" onClick={quitGame}></button>
      <Player number="1"
        playerName={props.input.playerOne}
        score={props.gameStatus.score1}
        move={currentMove1}
        winner={props.gameStatus.winnerID}
        handleClick={registerMove} />
      <button className="checkWinnerBtn gamePlayBtn"
        style={{ display: currentMove1 && currentMove2 ? "inline-block" : "none" }}
        onClick={checkWinner}>Go!</button>
      <button className="nextRoundBtn gamePlayBtn"
        style={{ display: props.gameStatus.winnerID ? "inline-block" : "none" }}
        onClick={resetRound}></button>
      {props.input.mode
        ?
        <Player number="2"
          playerName={props.input.playerTwo}
          score={props.gameStatus.score2}
          move={currentMove2}
          winner={props.gameStatus.winnerID}
          handleClick={registerMove} />
        :
        <AI number="2"
          score={props.gameStatus.score2}
          counterMove={currentMove1}
          move={currentMove2}
          setMove={setCurrentMove2}
          winner={props.gameStatus.winnerID}
          type="AI"
        />}
    </main>
  )
};
