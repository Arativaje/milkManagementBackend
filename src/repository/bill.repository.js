const logger = require('../logger/logger');
const billModel = require('../model/bill.model');

class BillRepository{

    async getBill(){
        return await billModel.find({});
    }

    async addBill(newBill){
        return await billModel.create(newBill);
    }

    async updateBill(id,updatedBill) {
        return await billModel.updateOne({_id:id},updatedBill);
    }

    async deleteBill(id){
        return await billModel.deleteOne({_id:id});
    }
       
}

module.exports = new BillRepository();