const mongoose = require('mongoose');
module.exports = mongoose.model('flat', new mongoose.Schema(
    {
        flatNumber: {
            type:Number,
            required: true
        },
        wing:{
            type:String,
            required:true
        },
        owner:{
            type:String,
            required:true
        },
        number: {
            type:Number,
            required:true
        },
        societyId: {
            type:String,
            required:true
        },
        altNumber: Number
    }
));