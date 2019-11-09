import { AxiosResponse } from "axios";
import React, { ChangeEvent } from "react";

import { IBook } from "../../../models/book/IBook";
import { api } from "../api/api";
import { Book } from "../components/Book/Book";
import { IBookProps } from "../components/Book/IBookProps";
import { BooksWrapper } from "../components/BooksWrapper/BooksWrapper";
import { ISideBarProps } from "../components/SideBar/ISideBarProps";
import { SideBar } from "../components/SideBar/SideBar";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { htmlRoutes } from "../routes/html/htmlRoutes";


interface IState {

    searchValue: string;
    searchMsg: string;
    books: IBook[];
}

export class SearchPage extends React.Component {

    public readonly state: IState = {

        searchValue: "",
        searchMsg: "Please search for books...",
        books: []
    };

    public readonly handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>): void => {

        const name: string = event.target.name;
        const value: string = event.target.value;

        const newState: object = {

            [name]: value
        };

        this.setState(newState);
    }

    public readonly handleSearchSubmit = (event: ChangeEvent<HTMLInputElement>): void => {

        if (this.state.searchValue.length !== 0) {

            event.preventDefault();

            this.setState({ searchMsg: "Searching now..." }, () => {

                api.searchGoogleBooks(this.state.searchValue)

                    .then((response: AxiosResponse<IBook[]>) => {

                        const newState: object = {

                            searchValue: "",
                            books: response.data
                        };

                        this.setState(newState);
                    })
                    .catch(() => {

                        console.clear();

                        const newState: object = {

                            searchValue: "",
                            searchMsg: "No results found !!!",
                            books: []
                        };

                        this.setState(newState);
                    });
            });
        }
    }

    public readonly saveBook = (googleId: string): void => {

        for (const book of this.state.books) {

            if (book.googleId === googleId) {

                api.saveBook(book)

                    .then((response: AxiosResponse<IBook>) => {

                        const savedBook: IBook = response.data;

                        book._id = savedBook._id;

                        book.isSaved = true;

                        this.setState({ books: this.state.books });
                    })
                    .catch((err: string) => {

                        console.log(err);
                    });

                break;
            }
        }
    }

    public readonly deleteBook = (id: string): void => {

        for (const book of this.state.books) {

            if (book._id === id) {

                api.deleteBook(id)

                    .then(() => {

                        book._id = null;

                        book.isSaved = false;

                        this.setState({ books: this.state.books });
                    })
                    .catch((err: string) => {

                        console.log(err);
                    });

                break;
            }
        }
    }

    public readonly render = (): JSX.Element => {

        const sideBarProps: ISideBarProps = {

            isSearchPage: true,
            isSavedPage: false,
            navHref: htmlRoutes.savedPageRoute,

            searchFormProps: {

                handleSearchInputChange: this.handleSearchInputChange,
                handleSearchSubmit: this.handleSearchSubmit,
                searchValue: this.state.searchValue
            }
        };

        return (

            <Wrapper>
                <SideBar {...sideBarProps} />
                {this.renderBooks()}
            </Wrapper>
        );
    }

    private readonly renderBooks = (): JSX.Element => {

        if (this.state.books.length === 0) {

            return (

                <BooksWrapper>
                    <div className="noBooks">{this.state.searchMsg}</div>
                </BooksWrapper>
            );
        }

        return (

            <BooksWrapper>
                {this.state.books.map((book: IBook) => this.renderBook(book))}
            </BooksWrapper>
        );
    }

    private readonly renderBook = (book: IBook): JSX.Element => {

        const bookProps: IBookProps = {

            key: book.googleId,
            book,
            saveBook: this.saveBook,
            deleteBook: this.deleteBook
        };

        return (

            <Book {...bookProps} />
        );
    }
}