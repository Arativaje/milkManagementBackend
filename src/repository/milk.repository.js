const logger = require('../logger/logger');

const milkModel = require('../model/milk.model');

class MilkRepository {


    async getMilk() {
        const milk = await milkModel.find({});
        return milk;
    }

    async addMilk(milk) {
        let data = {};
        try {
            data = await milkModel.create(milk);
        } catch (err) {
            logger.info('Error:::' + err);
            data = err;
        }
        return data;
    }

    async updateMilk(a) {
        let data = {};
        try {
            data = await milkModel.findOneAndUpdate({ _id: a._id }, a);
        } catch (err) {
            logger.info('Error:::' + err);
        }
        return data;
    }

    async removeMilk(deleteId) {
        let data = {};
        try {
            data = await milkModel.findByIdAndDelete(deleteId);
        } catch (err) {
            logger.info('Error:::' + err);
        }
        return data;
    }

    async removeMilkByType(type) {
        let data = await milkModel.deleteMany({ type: type });
        return data;
    }
    async getMilkDetailById(id) {
        return await milkModel.findById(id);

    }
    async updateMilkRate(newRate, oldRate) {

        let arr=[];
        // we fetch list based on old rate
        let list = await milkModel.find({rate:oldRate});
        
        list.forEach(milk =>{
            //we updated amount
            milk.amount = milk.qty * newRate;
            //we update new rate
            milk.rate = newRate;            
            
            // we store the document in arr 
            arr.push(milk);
        });

        // we saved all arr document in db
       await milkModel.bulkSave(arr);

       // again we fetch the list based on new rate and retun it.
       return await milkModel.find({rate:newRate});
    }
       
}

module.exports = new MilkRepository();