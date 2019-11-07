import Axios, { AxiosRequestConfig, AxiosResponse } from "axios";

import { IBook } from "../../interfaces/IBook";
import { IClientApi } from "../../interfaces/IClientApi";


export const Api: IClientApi = {

    async getAllSavedBooks(): Promise<AxiosResponse> {
        
        return Axios.get("/api/books");
    },
    async saveBook(book: IBook): Promise<AxiosResponse> {
        
        return Axios.post("/api/books", book);
    },
    async deleteBook(id: string): Promise<AxiosResponse> {
        
        return Axios.delete(`/api/books/${id}`);
    },
    async searchGoogleBooks(query: string): Promise<AxiosResponse> {
        
        const config: AxiosRequestConfig = {

            params: {
                q: query
            }
        };

        return Axios.get("/api/search", config);
    }
};