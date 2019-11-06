import { AxiosResponse } from "axios";

import { IBook } from "./IBook";

export interface IClientApi {

    getAllSavedBooks(): Promise<AxiosResponse>;
    saveBook(book: IBook): Promise<AxiosResponse>;
    deleteBook(id: string): Promise<AxiosResponse>;
    searchGoogleBooks(query: string): Promise<AxiosResponse>;
}