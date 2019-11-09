import React from "react";

import { INavProps } from "../Nav/INavProps";
import { Nav } from "../Nav/Nav";
import { SearchForm } from "../SearchForm/SearchForm";
import { ISideBarProps } from "../SideBar/ISideBarProps";
import "./SideBar.css";


export function SideBar(props: ISideBarProps): JSX.Element {

    const navProps: INavProps = {

        isSearchPage: props.isSearchPage,
        isSavedPage: props.isSavedPage,
        navHref: props.navHref
    };

    return (

        <div id="sidebar">
            <span id="gbsTitleText">Google Books Search</span>
            <hr />
            <Nav {...navProps} />
            {props.isSearchPage && <hr />}
            {props.isSearchPage && <SearchForm {...props.searchFormProps} />}
        </div>
    );
}