import React from "react";

import "./TilesWrapper.css";

interface IProps {

    children: React.ReactNode;
}

export function TilesWrapper(props: IProps): JSX.Element {

    return (

        <div id="tilesWrapper">{ props.children }</div>
    );
}