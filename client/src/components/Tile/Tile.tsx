import React from "react";

import "./Tile.css";

interface IProps {

    id: number;
    alt: string;
    src: string;
    gameOver: boolean;
    clickTile(id: number): void;
}

export function Tile(props: IProps): JSX.Element {

    let className: string = "tile";

    if (props.gameOver) {

        className += " shake";
    }

    function clickTile(): void {

        props.clickTile(props.id);
    }

    return (

        <div className={ className }>
            <img
                src={ props.src }
                alt={ props.alt }
                onClick={ clickTile }
                draggable={ false }
            />
        </div>
    );
}