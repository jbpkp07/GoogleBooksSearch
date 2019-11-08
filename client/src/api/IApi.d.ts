import { AxiosResponse } from "axios";

import { IBook } from "../../../interfaces/IBook";

export interface IApi {

    getAllSavedBooks(): Promise<AxiosResponse>;
    saveBook(book: IBook): Promise<AxiosResponse>;
    deleteBook(id: string): Promise<AxiosResponse>;
    searchGoogleBooks(query: string): Promise<AxiosResponse>;
}