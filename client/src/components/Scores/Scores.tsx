import React from "react";

import "./Scores.css";

interface IProps {

    score: number;
    topScore: number;
    hasWon: boolean;
    hasLost: boolean;
}

export function Scores(props: IProps): JSX.Element {

    return (

        <div id="scoresWrapper">
            <div className="scoreBox">
                <span className="scoreLabel">Score</span>
                <span className="score">{props.score}</span>
            </div>
            <div className="scoreBox">
                <span className="scoreLabel">Top Score</span>
                <span className="score">{props.topScore}</span>
            </div>
            {props.hasWon && <div className="resultWin">You Won!</div>}
            {props.hasLost && <div className="resultLoss">You Lose</div>}
        </div>
    );
}