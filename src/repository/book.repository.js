const logger = require('../logger/logger');

const bookModel = require('../model/book.model')

class BookRepository{
    async getBook(){
        return await bookModel.find({});
    }

    async addBook(newBook){
        return await bookModel.create(newBook);
    }
    
    async updateBook(id,updatedBook){
        return await bookModel.updateOne({_id:id},updatedBook);
    }

    async deleteBook(id){
        return await bookModel.deleteOne({_id:id});
    }
}


module.exports = new BookRepository();