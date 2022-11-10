const app = require ('express')(); 
require('dotenv').config();
app.use(require('body-parser').json());
const cors = require('cors');
app.use(cors());
const db=require('./src/config/dbconfig');


const milkController = require('./src/controller/milk.controller');
const userController = require('./src/controller/user.controller');
const bookController = require('./src/controller/book.controller');
const billController = require('./src/controller/bill.controller');
const marriageController = require('./src/controller/marriage.controller');
const typeController = require('./src/controller/type.controller');

app.post('/milk',milkController.addMilk);
app.get('/milk',milkController.getMilk);
app.put('/milk',milkController.updateMilk);
app.delete('/milk/:id',milkController.removeMilk);
app.get('/milk/:id',milkController.getMilkDetailById);

app.put('/updateRate',milkController.updateMilkRate);

app.get('/type',typeController.getType);
app.get('/type/:id',typeController.getTypeById);
app.post('/type',typeController.addType);
app.put('/type/:id',typeController.updateType);
app.delete('/type/:id',typeController.deleteType);

// app.delete('/milk/type/:ty',milkController.removeMilkByType);

app.get('/book',bookController.getBook);
app.post('/book',bookController.addBook);
app.put('/book/:id',bookController.updateBook);
app.delete('/book/:id',bookController.deleteBook);

app.get('/bill',billController.getBill);
app.post('/bill',billController.addBill);
app.put('/bill/:id',billController.updateBill);
app.delete('/bill/:id',billController.deleteBill);

app.get('/marriage',marriageController.getMarriage);
app.post('/marriage',marriageController.addMarriage);
app.put('/marriage/:id',marriageController.updateMarriage);
app.delete('/marriage/:id',marriageController.deleteMarriage);

app.get('/user',userController.getUser);
app.get('/user/:id',userController.getUserById);
app.post('/user',userController.addUser);
app.put('/user/:id',userController.updateUser);
app.delete('/user/:id',userController.removeUser);
app.post('/login',userController.login);
app.post('/forgot',userController.forgot);
app.post('/sendEmail',userController.sendEmail);
app.post('/resetPwd',userController.resetPwd);

// (req,res)=>{
//     let id = req.params.id;
//     res.send("Data Deleted successfully");
// });

app.get('',(req,res)=>{
    res.send("Hello, world!");
})

app.listen(process.env.PORT || 5555,(err)=>{
    console.log('nodejs server started');
    db.connect();
})