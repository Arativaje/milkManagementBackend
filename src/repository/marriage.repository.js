const logger = require('../logger/logger');
const marriageModel = require('../model/marriage.model');

class marriageRepository{
    async getMarriage(){
        return await marriageModel.find({});
    }
    async addMarriage(data){
        return await marriageModel.create(data);
    }
    async updateMarriage(data,id){
        return await marriageModel.updateOne({_id:id},data);
    }
    async deleteMarriage(id){
        return await marriageModel.deleteOne({_id:id});
    }
}

module.exports = new marriageRepository();