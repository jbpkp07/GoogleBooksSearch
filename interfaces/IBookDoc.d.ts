import { Document } from "mongoose";

import { IBook } from "./IBook";

export interface IBookDoc extends IBook, Document { }