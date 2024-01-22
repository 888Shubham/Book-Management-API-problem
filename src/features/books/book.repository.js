import mongoose from 'mongoose';
import { bookSchema } from './book.schema.js'
import { ObjectId } from 'mongodb';

// creating model from schema. 
const bookModel = mongoose.model('Book', bookSchema)

export default class BookRepository {


    // -----Change code in below functions only-----

    //book creation
    async createBook(bookData) {
        try {
            console.log("bookData in repo",bookData)
            const newBook = new bookModel(bookData);
            await newBook.save();
            return newBook;
        } catch (error) {
            console.log(error);
            return ("Somthing went Wrong");
            
        }
    }

    //filtering the book by id
    async getOne(id) {
        try {
            console.log("id", id)
            // console.log("_id", _id);
            const book = await bookModel.findById(id).exec();
            return book;
            
        } catch (error) {
            console.log(error);
            return ("Somthing went Wrong");
            
        }
    }
}