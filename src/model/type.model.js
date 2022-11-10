const mongoose = require('mongoose');
module.exports = mongoose.model('type', new mongoose.Schema(
    {
        code: "string",
        displayName: "string",
        rate: "number"
          
    },
    {
        timestamps:
        {
            createdDate: 'created_at',
            updatedDate: 'updated_at'
        }
    }

));