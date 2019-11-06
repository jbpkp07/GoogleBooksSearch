import mongoose, { Model, Schema } from "mongoose";

import { IBookDoc } from "../interfaces/IBookDoc";

const BookSchema: Schema = new Schema({

    googleId: {
        type: String,
        required: true,
        unique: true     // validation check to add unique books by googleId
    },
    authors: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
});

export const Books: Model<IBookDoc> = mongoose.model("Book", BookSchema);