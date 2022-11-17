const mongoose = require('mongoose');
module.exports = mongoose.model('society', new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        number: {
            type: Number,
            required: true,
        },
        address: {
            type: String,
            required: true,
        }
    }
));