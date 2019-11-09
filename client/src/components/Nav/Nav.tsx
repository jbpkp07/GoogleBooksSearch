import React from "react";

import { INavProps } from "./INavProps";
import "./Nav.css";


export function Nav(props: INavProps): JSX.Element {

    return (

        <div id="navWrapper">
            <a href={props.navHref}>
                <div className="btn">
                    {props.isSearchPage && "View saved books"}
                    {props.isSavedPage && "Search for books"}
                </div>
            </a>
        </div>
    );
}