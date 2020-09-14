import React from "react";
import '../styles/Settings.css';

export default function Settings(props) {

    // UPDATING PROPS STATE
    function handleChange(event) {
        const target = event.target;

        props.setInput({
            ...props.input,
            [target.name]: target.type === "checkbox" ? target.checked : target.value
        });
    };

    function handleSubmit(event) {
        event.preventDefault();
        props.setSettingsStatus(true);
    };

    return (
        <main className="columnFlex">
            <h1 className="settingsTitle">SETTINGS</h1>
            <form onSubmit={handleSubmit}>
                <div className="switchContainer">
                    <p>P1 vs. P2</p>
                    <input className="switchInput"
                        id="switch"
                        type="checkbox"
                        name="mode"
                        checked={props.input.mode}
                        onChange={handleChange} />
                    <label className="switchLabel" htmlFor="switch"></label>
                    <p>P1 vs. AI</p>
                </div>
                <div className="settingsField">
                    <label> Player #1: </label>
                    <input type="text"
                        name="playerOne"
                        value={props.input.playerOne}
                        onChange={handleChange} />
                </div>
                <div className="settingsField" style={!props.input.mode ? { visibility: "hidden" } : null}>
                    <label> Player #2: </label>
                    <input type="text"
                        name="playerTwo"
                        value={props.input.playerTwo}
                        onChange={handleChange} />
                </div>
                <div className="settingsField numberSetting">
                    <label> Rounds: </label>
                    <input type="number"
                        name="rounds"
                        value={props.input.rounds}
                        onChange={handleChange} />
                </div>
                <button className="initGame">START</button>
            </form>
        </main>
    )
}
