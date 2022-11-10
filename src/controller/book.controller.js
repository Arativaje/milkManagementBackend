const bookRepository = require('../repository/book.repository');

class BookController{
    getBook(req,res){
        bookRepository.getBook().then(output=>{
            res.send(output);
        });
    }
    addBook(req,res){
        let book = req.body;
        bookRepository.addBook(book).then(output=>{
            res.send(output);
        });
    }
    updateBook(req,res){
        let id = req.params.id;
        let body = req.body;
        bookRepository.updateBook(id,body).then(output=>{
            res.send(output);
        });
    }
    deleteBook(req,res){
        let id= req.params.id;
        bookRepository.deleteBook(id).then(output=>{
            res.send(output);
        });
    }

}

module.exports = new BookController();