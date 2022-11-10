
const mongoose = require('mongoose');
module.exports = mongoose.model('marriage',new mongoose.Schema(
    {
        date:"date",
        time:"string",
        place:"string"

    },
    {
        timestamps:{
            createdDate:'created_at',
            updatedDate:'updated_at'
        }
    }
));
