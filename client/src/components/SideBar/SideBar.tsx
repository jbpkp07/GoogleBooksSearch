import React from "react";

import { Nav } from "../Nav/Nav";
import "./SideBar.css";


interface IProps {

    isSearchPage: boolean;
    isSavedPage: boolean;
    href: string;
}

export function SideBar(props: IProps): JSX.Element {

    return (

        <div id="sidebar">
            <span id="gbsTitleText">Google Books Search</span>
            <hr />
            <Nav {...props} />
        </div>
    );
}