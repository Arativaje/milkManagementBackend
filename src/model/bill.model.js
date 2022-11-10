const mongoose = require('mongoose');
module.exports = mongoose.model('bill',new mongoose.Schema(
    {
        name:"string",
        place:"string",
        mobile:"number",
        discription:"string",
        quantity:"number",
        amount:"number",
        createdDate:"date",
        updatedDate:"date"

    },
    {
        timestamps:
        {
            createdDate:"created_at",
            updatedDate:"updated_at"
        }
    }
)); 