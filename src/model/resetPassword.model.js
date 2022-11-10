const mongoose = require('mongoose');
module.exports = mongoose.model('reset', new mongoose.Schema(
{
    userId:"string",
    otp:"string"
},
{
    timestamps:{
        createdDate:"created_at",
        updatedDate:"updated_at"
    }
}
));