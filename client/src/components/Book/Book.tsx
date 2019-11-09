import React from "react";

import "./Book.css";
import { IBookProps } from "./IBookProps";

export function Book(props: IBookProps): JSX.Element {

    function saveBook(): void {

        if (props.saveBook !== undefined) {

            props.saveBook(props.book.googleId);
        }
    }

    function deleteBook(): void {

        props.deleteBook(props.book._id);
    }

    return (

        <div className="book">
            <img 
                className="bookImage" 
                src={props.book.image} 
                alt=""
            />
            <div>
                <span className="bookLabel">Title</span>
                <span className="titleText">{props.book.title}</span>
            </div>
            <div>
                <span className="bookLabel">Authors</span>
                <span className="authorsText">{props.book.authors.join(", ")}</span>
            </div>
            <div>
                <span className="bookLabel">Description</span>
                <span className="descriptionText">{props.book.description}</span>
            </div>
            <div className="btn-group">
                <a href={props.book.link} target="_blank" rel="noopener noreferrer">
                    <div id="bookBtn" className="btn">Link</div>
                </a>
                <div 
                    id="bookBtn" 
                    className="btn"
                    onClick={props.book.isSaved ? deleteBook : saveBook}
                >
                    {props.book.isSaved ? "Unsave" : "Save"}
                </div>
            </div>
        </div>
    );
}