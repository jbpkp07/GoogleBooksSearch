import React from "react";

import "./Nav.css";

interface IProps {

    isSearchPage: boolean;
    isSavedPage: boolean;
    href: string;
}

export function Nav(props: IProps): JSX.Element {

    return (

        <div id="navWrapper">
            <a href={props.href}>
                <div className="btn">
                    {props.isSearchPage && "View saved books"}
                    {props.isSavedPage && "Search for books"}
                </div>
            </a>
        </div>
    );
}