const mongoose = require('mongoose');

module.exports = mongoose.model('milk', new mongoose.Schema(
    {
        rate: 'number',
        amount: 'number',
        milkType: 'string',
        date:'date',
        qty:'number',
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

