import { IBook } from "../../../../models/book/IBook";

export interface IBookProps {

    key: string;
    book: IBook;
    saveBook?(googleId: string): void;
    deleteBook(id: string): void;
}