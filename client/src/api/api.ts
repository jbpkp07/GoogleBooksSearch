import Axios, { AxiosRequestConfig, AxiosResponse } from "axios";

import { IBook } from "../../../models/book/IBook";
import { apiRoutes } from "../routes/api/apiRoutes";
import { IApi } from "./IApi";


export const api: IApi = {

    async getAllSavedBooks(): Promise<AxiosResponse<IBook[]>> {
        
        return Axios.get(apiRoutes.booksRoute);
    },
    async saveBook(book: IBook): Promise<AxiosResponse<IBook>> {
        
        return Axios.post(apiRoutes.booksRoute, book);
    },
    async deleteBook(id: string): Promise<AxiosResponse<IBook>> {
        
        return Axios.delete(`${apiRoutes.booksRoute}/${id}`);
    },
    async searchGoogleBooks(query: string): Promise<AxiosResponse<IBook[]>> {
        
        const config: AxiosRequestConfig = {

            params: {
                q: query
            }
        };

        return Axios.get(apiRoutes.searchRoute, config);
    }
};