import mongoose from 'mongoose';
import BookRepository from "./book.repository.js";

export default class BookController {
    constructor() {
        this.bookRepository = new BookRepository();
    }

    //------change code in below functions only--------

    // creation of book
    createBook = async (req, res) => { 
        try {
            const bookData = req.body;
            console.log("bookData",bookData)
            const newBook = await this.bookRepository.createBook(bookData);
            res.status(201).send(newBook);
            
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal Server Error" });
        }
       
    }

    // filtering of book by id
    getOne = async (req, res) => { 
        try {
            const bookId = req.params.bookId; 
            const book = await this.bookRepository.getOne(bookId);

            if (!book) {
                return res.status(404).json({ message: "Book not found" });
            }
            console.log("return cont book", book);
            res.status(200).send(book);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

}
