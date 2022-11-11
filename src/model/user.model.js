const mongoose = require('mongoose');
module.exports = mongoose.model('userr', new mongoose.Schema(
    {
        status: "string",
        firstName: "string",
        lastName: "string",
        mobileNumber: {
            type:String,
            required: true,
            unique:true
        },
        email: {
            type:String,
            required:true,
            unique:true
        },
        password: "string",
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
// dob
// gender
// mobile
// email
// password
// createdAt
// updatedAt