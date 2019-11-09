"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const terminal_kit_1 = require("terminal-kit");
const apiRoutes_1 = require("../client/src/routes/api/apiRoutes");
const config_1 = require("../config/config");
const book_1 = require("../models/book/book");
class Controller {
    constructor() {
        this.router = express_1.default.Router();
        this.Books = book_1.Books;
        this.router.use(this.assignAPIRoutes());
        this.router.use(this.sendClientApp.bind(this));
    }
    async connectDatabase() {
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true // prevents deprecation warning
        };
        return mongoose_1.default.connect(config_1.config.MONGODB_URI, options);
    }
    assignAPIRoutes() {
        const apiRouter = express_1.default.Router();
        apiRouter.route(apiRoutes_1.apiRoutes.booksRoute)
            .get(this.getAllSavedBooks.bind(this))
            .post(this.saveBook.bind(this));
        apiRouter.route(`${apiRoutes_1.apiRoutes.booksRoute}/:id`)
            .delete(this.deleteBook.bind(this));
        apiRouter.route(apiRoutes_1.apiRoutes.searchRoute)
            .get(this.searchGoogleBooks.bind(this));
        return apiRouter;
    }
    sendClientApp(_request, response) {
        response.sendFile(config_1.config.htmlAssetPath);
    }
    async isBookInDatabase(book) {
        return new Promise((resolve, reject) => {
            this.Books.findOne({ googleId: book.googleId }).exec()
                .then((result) => {
                if (result !== null) {
                    resolve([true, result]); // is in database
                }
                else {
                    resolve([false, result]); // NOT in database
                }
            })
                .catch((err) => {
                reject(err);
            });
        });
    }
    getAllSavedBooks(_request, response) {
        this.Books.find().exec()
            .then((bookDocs) => {
            const books = this.convertToIBooks(bookDocs);
            response.json(books);
        })
            .catch((err) => {
            terminal_kit_1.terminal.red(err);
            response.status(422).json(err);
        });
    }
    saveBook(request, response) {
        const newBook = request.body;
        // remove these properties before saving to database
        delete newBook._id;
        delete newBook.isSaved;
        this.isBookInDatabase(newBook)
            .then(async (isInDatabase) => {
            if (!isInDatabase[0]) {
                return this.Books.create(newBook); // NOT in database (can continue with saving)
            }
            return Promise.reject("Book already saved."); // is in database (do not continue saving a duplicate)
        })
            .then((result) => {
            const savedBook = this.convertToIBook(result);
            response.json(savedBook);
        })
            .catch((err) => {
            terminal_kit_1.terminal.red(err);
            response.status(422).json(err);
        });
    }
    deleteBook(request, response) {
        const bookId = request.params.id;
        this.Books.findByIdAndDelete(bookId).exec()
            .then(async (result) => {
            if (result === null) {
                return Promise.reject("Unable to delete book.");
            }
            return Promise.resolve(result);
        })
            .then((deletedBookDoc) => {
            const deletedBook = this.convertToIBook(deletedBookDoc);
            deletedBook.isSaved = false;
            response.json(deletedBook);
        })
            .catch((err) => {
            terminal_kit_1.terminal.red(err);
            response.status(422).json(err);
        });
    }
    searchGoogleBooks(request, response) {
        const googleBooks = [];
        const promises = [];
        const axiosConfig = {
            params: request.query
        };
        axios_1.default.get(config_1.config.googleAPIURL, axiosConfig)
            .then(async (results) => {
            const { items } = results.data;
            for (const item of items) {
                const googleBook = {
                    _id: null,
                    googleId: item.id || null,
                    authors: item.volumeInfo.authors || [],
                    description: item.volumeInfo.description || null,
                    image: "No Image",
                    link: item.volumeInfo.infoLink || null,
                    title: item.volumeInfo.title || null,
                    isSaved: false
                };
                if (item.volumeInfo.imageLinks !== undefined) { // Google Books API sometimes does not the 'imageLinks' property
                    googleBook.image = item.volumeInfo.imageLinks.thumbnail || null;
                }
                if (googleBooks.every((book) => book.googleId !== googleBook.googleId)) { // prevents duplicate googleId search results
                    googleBooks.push(googleBook);
                }
            }
            for (const book of googleBooks) {
                const promise = this.isBookInDatabase(book);
                promises.push(promise);
            }
            return Promise.all(promises);
        })
            .then((areInDatabase) => {
            for (let i = 0; i < googleBooks.length; i++) {
                const isInDatabase = areInDatabase[i];
                if (isInDatabase[0]) {
                    googleBooks[i]._id = isInDatabase[1]._id;
                    googleBooks[i].isSaved = true;
                }
            }
            response.json(googleBooks);
        })
            .catch((err) => {
            terminal_kit_1.terminal.red(err);
            response.status(422).json(err);
        });
    }
    // prunes the extras that come with a mongoose document, leaving the data only
    convertToIBook(book) {
        const convertedBook = {
            _id: book._id,
            googleId: book.googleId,
            authors: book.authors,
            description: book.description,
            image: book.image,
            link: book.link,
            title: book.title,
            isSaved: true
        };
        return convertedBook;
    }
    convertToIBooks(books) {
        const convertedBooks = [];
        for (const book of books) {
            convertedBooks.push(this.convertToIBook(book));
        }
        return convertedBooks;
    }
}
exports.Controller = Controller;
