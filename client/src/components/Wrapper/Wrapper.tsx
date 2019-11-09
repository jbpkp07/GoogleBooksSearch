import React from "react";

import { IWrapperProps } from "./IWrapperProps";
import "./Wrapper.css";

export function Wrapper(props: IWrapperProps): JSX.Element {

    return (

        <div id="screenWrapper">{props.children}</div>
    );
}