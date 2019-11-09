import { AxiosResponse } from "axios";

import { IBook } from "../../../models/book/IBook";

export interface IApi {

    getAllSavedBooks(): Promise<AxiosResponse<IBook[]>>;
    saveBook(book: IBook): Promise<AxiosResponse<IBook>>;
    deleteBook(id: string): Promise<AxiosResponse<IBook>>;
    searchGoogleBooks(query: string): Promise<AxiosResponse<IBook[]>>;
}