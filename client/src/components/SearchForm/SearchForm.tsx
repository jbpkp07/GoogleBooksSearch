// tslint:disable: no-unbound-method
import React from "react";

import { ISearchFormProps } from "./ISearchFormProps";
import "./SearchForm.css";


export function SearchForm(props: ISearchFormProps): JSX.Element {

    return (

        <form className="searchForm">
            <input
                className="formInput"
                type="text"
                placeholder="Search Google books..."
                spellCheck={false}
                autoComplete="off"
                required={true}
                autoFocus={true}
                name="searchValue"
                value={props.searchValue}
                onChange={props.handleSearchInputChange}
            />
            <button
                id="submitBtn"
                className="btn"
                type="submit"
                onClick={props.handleSearchSubmit}
            >
                submit
            </button>
        </form>
    );
}