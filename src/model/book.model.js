const mongoose = require('mongoose');
module.exports = mongoose.model('book',new mongoose.Schema(
    {
        name:"string",
        authore:"string",
        publishDate:"date",
        price:"number",
        pages:"number",
        createdDate: 'date',
        updatedDate: 'date'
    },
    {
        timestamps:
        {
            createdDate: 'created_at',
            updatedDate: 'updated_at'
        }
    }
));

// name
// author
// publishDate
// price
// pages
// createdAt
// updatedAt