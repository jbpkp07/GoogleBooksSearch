import React from "react";

import "./BooksWrapper.css";
import { IBooksWrapperProps } from "./IBooksWrapperProps";


export function BooksWrapper(props: IBooksWrapperProps): JSX.Element {

    return (

        <div id="booksWrapper">{props.children}</div>
    );
}