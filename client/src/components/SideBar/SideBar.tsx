import React from "react";

import { Scores } from "../Scores/Scores";

import "./SideBar.css";

interface IProps {

    score: number;
    topScore: number;
    hasWon: boolean;
    hasLost: boolean;
}

export function SideBar(props: IProps): JSX.Element {

    return (

        <div id="sidebar">
            <span id="clickyTitleText">Clicky Game</span>
            <hr />
            <Scores
                score={ props.score }
                topScore={ props.topScore }
                hasWon={ props.hasWon }
                hasLost={ props.hasLost }
            />
        </div>
    );
}