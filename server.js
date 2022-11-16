const app = require ('express')(); 
require('dotenv').config();
app.use(require('body-parser').json());
const cors = require('cors');
app.use(cors());
const db=require('./src/config/dbconfig');

const bookController = require('./src/controller/book.controller');
const billController = require('./src/controller/bill.controller');
const marriageController = require('./src/controller/marriage.controller');

const userRouter = require('./src/routes/user.routes');
const milkRouter = require('./src/routes/milk.routes');
const typeRouter = require('./src/routes/type.routes');
const flatRouter = require('./src/routes/flat.routes');

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

app.use(userRouter);
app.use(milkRouter);
app.use(typeRouter);
app.use(flatRouter);


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