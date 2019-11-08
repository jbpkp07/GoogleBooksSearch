import React from "react";

import "./Wrapper.css";

interface IProps {

    children: React.ReactNode;
}

export function Wrapper(props: IProps): JSX.Element {

    return (

        <div id="screenWrapper">{props.children}</div>
    );
}