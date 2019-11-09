import { AxiosResponse } from "axios";
import React from "react";

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

    books: IBook[];
}

export class SavedPage extends React.Component {

    public readonly state: IState = {

        books: []
    };

    public readonly componentDidMount = (): void => {

        api.getAllSavedBooks()

            .then((response: AxiosResponse<IBook[]>) => {

                const savedBooks: IBook[] = response.data;

                this.setState({ books: savedBooks });
            })
            .catch((err: string) => {

                console.log(err);
            });
    }

    public readonly deleteBook = (id: string): void => {

        for (const book of this.state.books) {

            if (book._id === id) {

                api.deleteBook(id)

                    .then(() => {

                        const filteredBooks: IBook[] = this.state.books.filter((savedBook: IBook) => savedBook._id !== id);

                        this.setState({ books: filteredBooks });
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

            isSearchPage: false,
            isSavedPage: true,
            navHref: htmlRoutes.searchPageRoute,
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
                    <div className="noBooks">No books saved yet...</div>
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
            deleteBook: this.deleteBook
        };

        return (

            <Book {...bookProps} />
        );
    }
}